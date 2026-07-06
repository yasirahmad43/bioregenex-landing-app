"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

const DEFAULT_CONCERNS = [
  "Joint / back pain",
  "Autoimmune condition",
  "Neurological / MS",
  "Post-stroke recovery",
  "Something else",
];

const PREFERRED_TIMES = [
  "Morning",
  "Afternoon",
  "Evening",
  "No preference",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm({
  compact = false,
  concernLabel = "What brings you here?",
  concernOptions = DEFAULT_CONCERNS,
  showPreferredTime = false,
  ctaLabel = "See If You're a Candidate — Free",
  source = "landing_page",
}: {
  compact?: boolean;
  concernLabel?: string;
  concernOptions?: string[];
  showPreferredTime?: boolean;
  ctaLabel?: string;
  source?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          concern: data.get("concern"),
          preferredTime: data.get("preferredTime"),
          source,
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-9 w-9 text-teal-deep" />
        <p className="font-semibold text-ink">You&apos;re all set.</p>
        <p className="mt-1 text-sm text-muted">
          A member of our team will call you shortly. Prefer to pick your own time?{" "}
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener"
            className="font-semibold text-teal-deep underline underline-offset-2"
          >
            Schedule it yourself
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <input
          required
          name="name"
          placeholder="Full name"
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
        <input
          required
          name="phone"
          type="tel"
          placeholder="Phone number"
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
      </div>
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        />
        <select
          name="concern"
          defaultValue=""
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        >
          <option value="" disabled>
            {concernLabel}
          </option>
          {concernOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {showPreferredTime && (
        <select
          name="preferredTime"
          defaultValue=""
          className="w-full rounded-xl border border-line bg-white px-5 py-3.5 text-base text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
        >
          <option value="" disabled>
            Preferred time to speak
          </option>
          {PREFERRED_TIMES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-7 py-4 text-lg font-semibold text-white transition hover:bg-cta-deep disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {ctaLabel}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-red-600">
          Something went wrong. Please call us instead at{" "}
          <a href={site.phoneHref} className="font-semibold underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      )}

      <p className="text-center text-sm text-muted">
        No obligation. A licensed provider reviews your information — never a sales call.
      </p>
    </form>
  );
}
