import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white pb-24 pt-12 text-base text-muted md:pb-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center">
        <Image
          src="/brand/logo.png"
          alt="BioRegenEx"
          width={400}
          height={112}
          className="h-11 w-auto"
        />
        <div className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-muted/80">
          <p>
            <strong className="text-muted">Important Information.</strong> These
            statements have not been evaluated by the U.S. Food and Drug
            Administration. BioRegenEx products are not intended to diagnose, treat,
            cure, or prevent any disease and are provided for research use only.
            MSC-derived exosomes are not FDA-approved for medical treatment. Exosome
            therapy is an emerging, investigational regenerative approach; outcomes
            vary and individual results cannot be guaranteed.
          </p>
          <p>
            References to regulatory standards — including Section 351(a) of the
            Public Health Service Act — describe the company&apos;s stated quality and
            compliance approach and should not be interpreted as FDA approval or
            endorsement of any product. Facility registration and a cGMP process
            describe a quality approach, not FDA approval.
          </p>
          <p>
            This page is for educational and informational purposes only and does not
            constitute medical advice. Treatment decisions are made solely in
            consultation with a qualified, licensed healthcare provider.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted/60">
          © {new Date().getFullYear().toString()} BioRegenEx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
