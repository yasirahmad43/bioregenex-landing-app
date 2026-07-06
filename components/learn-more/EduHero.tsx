import Image from "next/image";
import { ShieldAlert, Tv } from "lucide-react";
import LeadForm from "@/components/site/LeadForm";

const CONCERNS = [
  "Exosome therapy education",
  "Provider referral",
  "General questions about regenerative medicine",
  "Something else",
];

export default function EduHero() {
  return (
    <section className="relative z-0 overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_30%,rgba(47,111,237,0.25),transparent_60%)]" />
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div className="relative z-0">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-1/2 -z-10 hidden h-[360px] w-[360px] -translate-y-1/2 opacity-50 lg:block"
          >
            <Image
              src="/images/learn-more/hero-exosome.jpg"
              alt=""
              fill
              className="object-contain mix-blend-screen"
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#bcd0e6]">
            <Tv className="h-4 w-4 text-teal" />
            As seen on national television — All Access with Andy Garcia
          </div>

          <h1 className="mt-5 text-[clamp(32px,4.2vw,50px)] font-medium leading-[1.12]">
            Explore Physician-Guided{" "}
            <span className="font-serif italic text-teal">
              Regenerative Research Options
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#bcd0e6]">
            BioRegenEx connects qualified individuals with licensed providers to
            learn about MSC-derived exosomes — an investigational regenerative
            field supported by physician-grade quality standards.
          </p>

          <div className="mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-[#bcd0e6]">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
            <p>
              MSC-derived exosomes are investigational and not FDA-approved to
              diagnose, treat, cure, or prevent any disease. BioRegenEx products
              are supplied for research and educational purposes through
              licensed providers.
            </p>
          </div>

          <a
            href="#apply"
            className="mt-7 inline-block rounded-xl bg-cta px-7 py-4 text-lg font-semibold text-white transition hover:bg-cta-deep"
          >
            Request a Free Provider Consultation
          </a>
          <p className="mt-3 text-sm text-[#8ba3bf]">
            No obligation. Educational consultation only. Treatment decisions
            are made by licensed providers.
          </p>
        </div>

        <div id="apply" className="scroll-mt-24 rounded-2xl bg-white p-6 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-7">
          <h2 className="text-center font-serif text-2xl font-medium text-ink">
            Request Your Free Consultation
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            Speak with a licensed provider and explore your options.
          </p>
          <div className="mt-6">
            <LeadForm
              compact
              concernLabel="What are you interested in learning about?"
              concernOptions={CONCERNS}
              showPreferredTime
              ctaLabel="Request My Consultation"
              source="learn_more_page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
