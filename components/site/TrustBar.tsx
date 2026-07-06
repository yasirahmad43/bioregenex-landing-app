import { ShieldCheck, FlaskConical, Building2, UserCheck } from "lucide-react";

const items = [
  { icon: FlaskConical, label: "cGMP-manufactured" },
  { icon: Building2, label: "FDA-registered facility" },
  { icon: ShieldCheck, label: "Screened donor tissue" },
  { icon: UserCheck, label: "Licensed provider consultation" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-5 px-5 py-8 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-base text-ink-2">
            <Icon className="h-6 w-6 shrink-0 text-teal-deep" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
