import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-line bg-white p-3 shadow-[0_-8px_20px_rgba(10,27,51,0.08)] md:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line py-3 text-sm font-semibold text-ink"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
      <a
        href="#apply"
        className="flex flex-[2] items-center justify-center rounded-xl bg-cta py-3 text-sm font-semibold text-white"
      >
        Request My Free Consultation
      </a>
    </div>
  );
}
