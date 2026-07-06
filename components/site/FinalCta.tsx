"use client";

import Script from "next/script";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="schedule" className="bg-paper py-20 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a
              href={`#apply`}
              className="rounded-xl bg-cta px-7 py-4 text-center text-lg font-semibold text-white transition hover:bg-cta-deep"
            >
              Request a Call Instead
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-line px-7 py-4 text-lg font-semibold text-ink transition hover:border-teal hover:text-teal-deep"
            >
              <Phone className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_8px_30px_rgba(10,27,51,0.06)]">
          <div
            className="calendly-inline-widget"
            data-url={site.calendlyEmbedUrl}
            style={{ minWidth: 280, height: 680 }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>
      </div>
    </section>
  );
}
