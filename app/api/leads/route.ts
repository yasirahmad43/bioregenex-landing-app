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
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, state, concern, source } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim() || typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
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
