import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

type Lead = {
  name: string;
  phone: string;
  email: string | null;
  state: string | null;
  concern: string | null;
  source: string;
};

/* -------------------------------------------------------------------------- */
/* Spam / abuse guardrails                                                    */
/*                                                                            */
/* Context: an SMS-pumping bot POSTed directly to this endpoint, bypassing    */
/* the form, to trigger outbound SMS (toll fraud). Everything below runs      */
/* BEFORE any storage or fan-out, so a spam hit never reaches Supabase, the   */
/* CRM webhook, or a notification. Two response styles:                       */
/*   - user-fixable problems (bad phone)      -> 400 with a clear message     */
/*   - definite-bot signals (honeypot, block, -> silent { ok: true }, store   */
/*     rate limit)                                and forward NOTHING, so the  */
/*                                                bot can't tell it's filtered */
/* -------------------------------------------------------------------------- */

// Hidden form field. Real browsers leave it empty; bots that fill every input
// give themselves away. Keep in sync with the honeypot input in LeadForm.tsx.
const HONEYPOT_FIELD = "company";

// Extend these as new bot fingerprints show up. Matching entries are
// silent-dropped (logged, but the caller still sees { ok: true }).
const BLOCKED_EMAIL_DOMAINS: string[] = [
  // "example-spam.com",
];
const BLOCKED_IPS: string[] = [
  // "203.0.113.7",
];
const BLOCKED_REFERRER_SUBSTRINGS: string[] = [
  // "spam-referrer.example",
];

// In-memory sliding-window rate limits. Per instance only (fine on serverless —
// instances recycle and there's no shared store), so this is a volume damper,
// not a hard guarantee. Blocklist + honeypot + phone rules are the real gates.
const IP_MAX = 5;
const IP_WINDOW_MS = 10 * 60 * 1000; // 5 per 10 minutes
const EMAIL_MAX = 3;
const EMAIL_WINDOW_MS = 60 * 60 * 1000; // 3 per hour
const MAX_TRACKED_KEYS = 5000; // guard against unbounded growth

const ipHits = new Map<string, number[]>();
const emailHits = new Map<string, number[]>();

// Records a hit and returns true if the key is now OVER its limit within the
// window. Pushing on every call keeps a persistent flood continuously blocked.
function isOverLimit(
  map: Map<string, number[]>,
  key: string,
  windowMs: number,
  max: number,
): boolean {
  const now = Date.now();
  const recent = (map.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  map.set(key, recent);

  // Opportunistic prune so unique IPs/emails don't grow the map forever.
  if (map.size > MAX_TRACKED_KEYS) {
    for (const [k, times] of map) {
      const live = times.filter((t) => now - t < windowMs);
      if (live.length === 0) map.delete(k);
      else map.set(k, live);
    }
  }

  return recent.length > max;
}

function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function emailDomain(email: string): string {
  return email.split("@")[1]?.toLowerCase() ?? "";
}

function drop(reason: string, meta: Record<string, unknown>) {
  // Log every drop so a real bot campaign is visible in the runtime logs.
  console.warn("[lead-guard] silent drop:", reason, JSON.stringify(meta));
  // Pretend success — never signal to the bot that it was filtered.
  return NextResponse.json({ ok: true });
}

// Forwards the lead to the CRM (LeadConnector/GHL) inbound webhook.
// Never throws — Supabase is the source of truth, so a webhook outage
// must not cost us the lead or show the visitor an error.
async function forwardToCrm(lead: Lead) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return;

  const [firstName, ...rest] = lead.name.split(" ");

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        first_name: firstName,
        last_name: rest.join(" "),
        submitted_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("CRM webhook returned", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("CRM webhook failed", err);
  }
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const referer = req.headers.get("referer") ?? "";

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const { name, phone, email, state, concern, source } = record;

  // 1) Honeypot — hidden field should always be empty for real users.
  const honeypot = record[HONEYPOT_FIELD];
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return drop("honeypot filled", { ip, field: HONEYPOT_FIELD });
  }

  // 2) Blocklist — IP, referrer, email domain (silent).
  if (BLOCKED_IPS.includes(ip)) {
    return drop("blocked ip", { ip });
  }
  if (BLOCKED_REFERRER_SUBSTRINGS.some((s) => referer.includes(s))) {
    return drop("blocked referrer", { ip, referer });
  }
  if (
    typeof email === "string" &&
    email.includes("@") &&
    BLOCKED_EMAIL_DOMAINS.includes(emailDomain(email))
  ) {
    return drop("blocked email domain", { ip, domain: emailDomain(email) });
  }

  // 3) Required fields — user-fixable -> 400.
  if (typeof name !== "string" || !name.trim() || typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  // 4) US-phone-only validation — user-fixable -> 400.
  // Accept a normal 10-digit US number, or 11 digits when the user added +1.
  const digits = phone.replace(/\D/g, "");
  const isUsPhone =
    digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  if (!isUsPhone) {
    return NextResponse.json(
      { error: "Please enter a valid US phone number" },
      { status: 400 },
    );
  }

  // 5) Rate limits — definite-bot volume -> silent drop, store/forward nothing.
  if (isOverLimit(ipHits, ip, IP_WINDOW_MS, IP_MAX)) {
    return drop("ip rate limit", { ip, max: IP_MAX, windowMs: IP_WINDOW_MS });
  }
  const emailKey =
    typeof email === "string" && email.includes("@") ? email.trim().toLowerCase() : "";
  if (emailKey && isOverLimit(emailHits, emailKey, EMAIL_WINDOW_MS, EMAIL_MAX)) {
    return drop("email rate limit", { ip, email: emailKey, max: EMAIL_MAX });
  }

  const lead: Lead = {
    name: name.trim(),
    phone: phone.trim(),
    email: typeof email === "string" ? email.trim() || null : null,
    state: typeof state === "string" ? state.trim() || null : null,
    concern: typeof concern === "string" ? concern.trim() || null : null,
    source: typeof source === "string" ? source.trim() || "landing_page" : "landing_page",
  };

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert(lead);

    if (error) {
      console.error("Supabase insert error", error);
      return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
    }

    await forwardToCrm(lead);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed", err);
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }
}
