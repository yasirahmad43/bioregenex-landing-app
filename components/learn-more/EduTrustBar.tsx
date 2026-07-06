import { Building2, ShieldCheck, Microscope, UserCheck, FileText } from "lucide-react";

const items = [
  { icon: Building2, title: "cGMP Manufactured", body: "In a FDA-registered U.S. facility" },
  { icon: ShieldCheck, title: "Third-Party Tested", body: "Certificate of Analysis on every batch" },
  { icon: Microscope, title: "Screened Donor Tissue", body: "Wharton's Jelly sourced" },
  { icon: UserCheck, title: "Physician-Administered", body: "Access through licensed providers" },
  { icon: FileText, title: "Research Use Only", body: "For research and educational purposes" },
];

export default function EduTrustBar() {
  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <Icon className="h-8 w-8 text-teal-deep" />
            <p className="mt-3 text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-xs text-muted">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
