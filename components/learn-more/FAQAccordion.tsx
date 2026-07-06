"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What are exosomes?",
    a: "Exosomes are nanoscale extracellular vesicles released by cells that carry proteins, lipids, and genetic material used in cell-to-cell communication. Researchers are studying their role in regenerative processes.",
  },
  {
    q: "Are BioRegenEx exosomes FDA-approved?",
    a: "No. MSC-derived exosomes are investigational and not approved by the FDA to diagnose, treat, cure, or prevent any disease. BioRegenEx products are supplied for research and educational purposes through licensed providers.",
  },
  {
    q: "Who can access BioRegenEx products?",
    a: "Access is provided exclusively through licensed healthcare providers who evaluate whether a research-use consultation is appropriate for a given individual.",
  },
  {
    q: "How do I know if this is right for me?",
    a: "The free consultation exists to answer exactly that question. A licensed provider will review your background and goals and explain what provider-guided research options may be relevant to you.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
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
  );
}
