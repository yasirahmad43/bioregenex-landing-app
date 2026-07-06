import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="schedule" className="bg-paper py-20 md:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Last step</p>
          <h2 className="mt-3 text-[clamp(30px,3.6vw,44px)] font-medium text-ink">
            Find out if you&apos;re a candidate — free
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            Your body already has a natural cell-communication system that drives
            healing — it just needs the right support. This conversation is about
            whether that&apos;s a fit for you. No surgery pressure, no obligation.
          </p>

          <a
            href={site.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-ink transition hover:text-teal-deep"
          >
            <Phone className="h-5 w-5" />
            Or call {site.phoneDisplay}
          </a>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_30px_rgba(10,27,51,0.06)]">
          <LeadForm compact />
        </div>
      </div>
    </section>
  );
}
