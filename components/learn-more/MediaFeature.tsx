import { Play } from "lucide-react";

export default function MediaFeature() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(47,111,237,0.35),transparent_60%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30">
              <Play className="ml-1 h-6 w-6" fill="currentColor" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              All Access with Andy Garcia
            </p>
            <p className="mt-1 text-lg font-medium text-white">
              BioRegenEx: The Future of Regenerative Medicine
            </p>
          </div>
        </div>

        <div>
          <p className="eyebrow">As seen on national television</p>
          <h2 className="mt-3 text-[clamp(28px,3.4vw,40px)] font-medium text-ink">
            All Access with Andy Garcia
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            BioRegenEx was featured on the national show All Access with Andy
            Garcia, highlighting the future of regenerative medicine and the
            potential of exosome research.
          </p>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="#apply"
              className="rounded-xl border border-line px-6 py-3 text-base font-semibold text-ink transition hover:border-teal hover:text-teal-deep"
            >
              Watch Feature
            </a>
            <span className="text-lg font-bold tracking-tight text-ink">PBS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
