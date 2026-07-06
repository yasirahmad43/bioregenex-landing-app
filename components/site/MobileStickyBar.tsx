import { Phone } from "lucide-react";
import CallLink from "./CallLink";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-line bg-white p-4 shadow-[0_-8px_20px_rgba(10,27,51,0.08)] md:hidden">
      <CallLink
        location="mobile_sticky_bar"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-3.5 text-base font-semibold text-ink"
      >
        <Phone className="h-5 w-5" />
        Call
      </CallLink>
      <a
        href="#apply"
        className="flex flex-[2] items-center justify-center rounded-xl bg-cta px-2 py-3.5 text-center text-base font-semibold text-white"
      >
        Request My Free Consultation
      </a>
    </div>
  );
}
