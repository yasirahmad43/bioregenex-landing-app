import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 pt-10 text-sm text-muted md:pb-10">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Image src="/brand/logo.png" alt="BioRegenEx" width={400} height={200} className="h-7 w-auto" />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={site.links.home} className="hover:text-ink">
              Home
            </a>
            <a href={site.links.exosomeTherapy} className="hover:text-ink">
              Exosome Therapy
            </a>
            <a href={site.links.research} className="hover:text-ink">
              Research
            </a>
            <a href="#" className="hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ink">
              Terms of Service
            </a>
          </nav>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted/80">
          BioRegenEx does not provide medical advice. This site is for informational
          purposes and connects visitors with licensed providers for a consultation.
          Regenerative therapy is not a guaranteed cure and individual results vary.
          These statements have not been evaluated by the FDA and are not intended to
          diagnose, treat, cure, or prevent any disease.
        </p>
        <p className="mt-4 text-xs text-muted/60">
          © {new Date().getFullYear().toString()} BioRegenEx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
