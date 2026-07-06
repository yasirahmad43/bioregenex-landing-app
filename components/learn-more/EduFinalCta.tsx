import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function EduFinalCta() {
  return (
    <div className="grid overflow-hidden rounded-2xl bg-ink sm:grid-cols-[1.2fr_1fr]">
      <div className="p-8 text-white sm:p-10">
        <h2 className="text-[clamp(24px,3vw,32px)] font-medium">Ready to Learn More?</h2>
        <p className="mt-3 max-w-sm text-[#bcd0e6]">
          Take the first step toward understanding if provider-guided
          regenerative research options are right for you.
        </p>
        <a
          href={site.phoneHref}
          className="mt-6 flex w-fit items-center gap-2 text-lg font-semibold text-white transition hover:text-teal"
        >
          <Phone className="h-5 w-5" />
          {site.phoneDisplay}
        </a>
        <a
          href="#apply"
          className="mt-5 inline-block rounded-xl bg-cta px-6 py-3.5 text-base font-semibold text-white transition hover:bg-cta-deep"
        >
          Request Your Free Consultation
        </a>
        <p className="mt-4 text-xs text-[#8ba3bf]">
          No obligation. Educational consultation only.
        </p>
      </div>
      <div className="relative hidden min-h-[280px] sm:block">
        <Image
          src="/images/learn-more/final-cta-portrait.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
