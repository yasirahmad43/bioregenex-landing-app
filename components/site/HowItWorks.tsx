const steps = [
  {
    n: "01",
    title: "Request your consult",
    body: "Tell us where it hurts. It takes under a minute and there's no cost to find out if you're a fit.",
  },
  {
    n: "02",
    title: "Talk to a provider",
    body: "A licensed clinician reviews your history and goals and explains your non-surgical options in plain terms.",
  },
  {
    n: "03",
    title: "Get a personalized plan",
    body: "If regenerative care is appropriate for you, your provider walks you through what to expect and the cost.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">The process</p>
        <h2 className="mt-3 text-[clamp(30px,3.6vw,44px)] font-medium text-ink">
          Three steps. No obligation.
        </h2>
        <p className="mt-4 text-lg text-muted">
          The consultation is free and the treatment decision is always made with a
          licensed provider — not a sales call.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-7">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-line bg-white p-8">
            <span className="font-serif text-5xl font-medium text-teal/25">{s.n}</span>
            <h3 className="mt-4 text-2xl font-medium text-ink">{s.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
