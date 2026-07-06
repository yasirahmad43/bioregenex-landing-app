import Image from "next/image";
import { Atom, Sparkles, XCircle, Award } from "lucide-react";

const stats = [
  { icon: Atom, title: "Nano sized", body: "30–150 nm" },
  { icon: Sparkles, title: "100B+ Exosomes", body: "Per dose" },
  { icon: XCircle, title: "Cell-Free", body: "Non-replicating" },
  { icon: Award, title: "Purity & Potency", body: "Tested" },
];

export default function ScienceStats() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink lg:aspect-square">
          <Image
            src="/images/learn-more/exosome-science.jpg"
            alt="Visualization of MSC-derived exosomes"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">The science</p>
          <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] font-medium text-ink">
            The Science Behind MSC-Derived Exosomes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Exosomes are nanoscale extracellular vesicles, typically 30–150 nm
            in size, studied for their role in cell-to-cell communication and
            signaling.
          </p>
          <p className="mt-3 text-lg leading-relaxed text-muted">
            BioRegenEx provides cell-free, non-replicating MSC-derived exosomes
            manufactured under cGMP-aligned quality systems.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.title} className="flex items-center gap-3">
                <s.icon className="h-6 w-6 shrink-0 text-teal-deep" />
                <div>
                  <p className="text-sm font-semibold text-ink">{s.title}</p>
                  <p className="text-xs text-muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
