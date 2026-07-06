import { Microscope, Dna, ClipboardCheck } from "lucide-react";

const points = [
  {
    icon: Microscope,
    title: "16+ years of research",
    body: "The science behind cellular communication has been studied for over a decade and a half — this isn't a fad, it's an evolving field of regenerative medicine.",
  },
  {
    icon: Dna,
    title: "Exosomes: the body's messengers",
    body: "Exosomes are nanoscale signaling vesicles (30–150 nm) derived from screened Wharton's Jelly. They are cell-free and non-replicating — the body's own communication system, isolated and concentrated.",
  },
  {
    icon: ClipboardCheck,
    title: "Made to a quality standard",
    body: "BioRegenEx supplies physician-grade, cGMP-manufactured material produced in an FDA-registered U.S. facility — not an unregulated import.",
  },
];

export default function Science() {
  return (
    <section className="border-y border-line bg-ink py-20 text-white md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-teal">The science</p>
          <h2 className="mt-3 text-[clamp(30px,3.6vw,44px)] font-medium">
            Medical science hasn&apos;t stopped evolving. Neither should your options.
          </h2>
          <p className="mt-4 text-lg text-[#bcd0e6]">
            Scientists are actively investigating new possibilities for some of the
            most challenging conditions people face. Hope is found in refusing to
            believe a medical story has already concluded.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p.icon className="h-8 w-8 text-teal" />
              <h3 className="mt-4 text-xl font-medium text-white">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-[#bcd0e6]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
