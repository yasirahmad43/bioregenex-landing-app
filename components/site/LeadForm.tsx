"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { site } from "@/lib/site";
import { US_STATES } from "@/lib/states";
import { trackLead } from "@/lib/analytics";

const CONCERNS = [
  "Joint / back pain",
  "Autoimmune condition",
  "Neurological / MS",
  "Post-stroke recovery",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = { name?: string; phone?: string };

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const len = digits.length;
  if (len === 0) return "";
  if (len < 4) return `(${digits}`;
  if (len < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const inputBase =
  "w-full rounded-xl border bg-white px-5 py-3.5 text-base text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-teal/20";

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const phoneDigits = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (!name) next.name = "Please enter your name.";
    if (phoneDigits.length !== 10) next.phone = "Enter a valid 10-digit phone number.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          state: data.get("state"),
          concern: data.get("concern"),
          source: "landing_page",
        }),
      });

      if (!res.ok) throw new Error("submit failed");
      trackLead({ concern: data.get("concern") || undefined });
      setStatus("success");
      form.reset();
      setPhone("");
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
          A member of our team will call you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <div>
          <input
            required
            name="name"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            onChange={() => errors.name && setErrors((p) => ({ ...p, name: undefined }))}
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-line focus:border-teal"}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <input
            required
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone number"
            value={phone}
            aria-invalid={!!errors.phone}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            className={`${inputBase} ${errors.phone ? "border-red-400" : "border-line focus:border-teal"}`}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>
      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email (optional)"
          className={`${inputBase} border-line focus:border-teal`}
        />
        <input
          name="state"
          list="state-options"
          autoComplete="off"
          placeholder="State (e.g. TX or Texas)"
          className={`${inputBase} border-line focus:border-teal`}
        />
        <datalist id="state-options">
          {US_STATES.map((s) => (
            <option key={s.abbr} value={s.name} />
          ))}
          {US_STATES.map((s) => (
            <option key={s.abbr} value={s.abbr} />
          ))}
        </datalist>
      </div>

      <select
        name="concern"
        defaultValue=""
        className={`${inputBase} border-line focus:border-teal`}
      >
        <option value="" disabled>
          What brings you here?
        </option>
        {CONCERNS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-7 py-4 text-lg font-semibold text-white transition hover:bg-cta-deep disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit
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
