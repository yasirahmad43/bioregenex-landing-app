import { Check, X } from "lucide-react";

const forList = [
  "Exploring non-surgical regenerative options",
  "Dealing with pain or a condition that hasn't responded to other care",
  "Wanting to understand exosome therapy from a licensed provider",
  "Looking for honest answers without sales pressure",
];

const notForList = [
  "Emergency or urgent medical situations",
  "Anyone expecting a guaranteed cure or outcome",
  "A replacement for your primary care physician",
  "Anyone seeking an FDA-approved drug or therapy",
];

export default function WhoFor() {
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-16 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="eyebrow">Is this right for you?</p>
        <h2 className="mt-3 text-[clamp(28px,3.4vw,42px)] font-medium text-ink">
          A straight answer, either way
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-teal/30 bg-teal/5 p-7">
          <h3 className="text-xl font-medium text-ink">This consultation is for you if…</h3>
          <ul className="mt-5 space-y-3.5">
            {forList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-ink-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white p-7">
          <h3 className="text-xl font-medium text-ink">It&apos;s probably not for you if…</h3>
          <ul className="mt-5 space-y-3.5">
            {notForList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-muted">
                <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
