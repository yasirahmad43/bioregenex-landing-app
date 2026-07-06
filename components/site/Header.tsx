import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink py-2 text-center text-[13px] text-[#cfe0f0]">
        <span className="font-semibold text-white">Free consultation</span> — no
        obligation, no sales pressure, ever.
      </div>
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-5 py-4">
          <Image
            src="/brand/logo.png"
            alt="BioRegenEx"
            width={400}
            height={200}
            priority
            className="h-9 w-auto"
          />
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal-deep"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}
