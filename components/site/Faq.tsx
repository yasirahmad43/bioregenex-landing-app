"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What are exosomes?",
    a: "Exosomes are nanoscale signaling vesicles (30–150 nm) that cells use to communicate with one another. BioRegenEx supplies cell-free, non-replicating MSC-derived exosomes studied for their role in the body's own repair and communication processes.",
  },
  {
    q: "Is exosome therapy FDA-approved?",
    a: "No. MSC-derived exosomes are investigational and not FDA-approved to diagnose, treat, cure, or prevent any disease. Our products are provided for research and educational purposes through licensed providers, who make all treatment decisions.",
  },
  {
    q: "What happens on the free consultation?",
    a: "A licensed provider reviews your history and goals and explains your options in plain terms. There's no cost, no obligation, and no sales pressure — the goal is simply to help you understand whether this is a fit for you.",
  },
  {
    q: "How much does treatment cost?",
    a: "That depends entirely on your situation, and it's only discussed if a provider determines regenerative care is appropriate for you. The consultation itself is always free.",
  },
  {
    q: "Is it safe? How is it made?",
    a: "BioRegenEx exosomes are derived from screened Wharton's Jelly and cGMP-manufactured in an FDA-registered U.S. facility — not an unregulated import. Any procedure carries considerations a licensed provider will review with you directly.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[820px] px-5 py-16 md:py-20">
      <div className="mb-10 text-center">
        <p className="eyebrow">Questions</p>
        <h2 className="mt-3 text-[clamp(28px,3.4vw,42px)] font-medium text-ink">
          Frequently asked questions
        </h2>
      </div>

      <div className="divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-ink"
                aria-expanded={isOpen}
              >
                {f.q}
                <Plus
                  className={`h-5 w-5 shrink-0 text-teal-deep transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
