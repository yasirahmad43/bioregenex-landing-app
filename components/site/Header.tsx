import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header>
      <div className="bg-ink py-2.5 text-center text-sm text-[#cfe0f0]">
        <span className="font-semibold text-white">Free consultation</span> — no
        obligation, no sales pressure, ever.
      </div>
      <div className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-5">
          <Image
            src="/brand/logo.png"
            alt="BioRegenEx"
            width={400}
            height={112}
            priority
            className="h-16 w-auto"
          />
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-base font-semibold text-ink transition hover:border-teal hover:text-teal-deep"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
