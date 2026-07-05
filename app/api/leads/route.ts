import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, phone, email, concern, source } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim() || typeof phone !== "string" || !phone.trim()) {
    return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      phone: phone.trim(),
      email: typeof email === "string" ? email.trim() || null : null,
      concern: typeof concern === "string" ? concern.trim() || null : null,
      source: typeof source === "string" ? source.trim() || null : "landing_page",
    });

    if (error) {
      console.error("Supabase insert error", error);
      return NextResponse.json({ error: "Could not save lead" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed", err);
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }
}
