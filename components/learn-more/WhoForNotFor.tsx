import { Check, X } from "lucide-react";

const forList = [
  "Exploring regenerative wellness options",
  "Looking for provider-guided education",
  "Interested in non-surgical conversations",
  "Seeking information from a licensed professional",
];

const notForList = [
  "Emergency medical situations",
  "A guaranteed treatment or outcome",
  "A replacement for your primary doctor",
  "FDA-approved therapy claims",
];

export default function WhoForNotFor() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-20 md:py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-7">
          <h3 className="border-b border-line pb-3 text-xl font-medium text-ink underline decoration-teal/40 underline-offset-8">
            Who This Consultation Is For
          </h3>
          <ul className="mt-5 space-y-3">
            {forList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-ink-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white p-7">
          <h3 className="border-b border-line pb-3 text-xl font-medium text-ink underline decoration-red-300 underline-offset-8">
            Who This Consultation Is NOT For
          </h3>
          <ul className="mt-5 space-y-3">
            {notForList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-ink-2">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
