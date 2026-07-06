import { ClipboardList, Stethoscope, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Request Your Consultation",
    body: "Share a few details and tell us what you're interested in learning about.",
  },
  {
    icon: Stethoscope,
    title: "Speak with a Licensed Provider",
    body: "Discuss your health history and learn if provider-guided research options may be right for you.",
  },
  {
    icon: Users,
    title: "Get Personalized Guidance",
    body: "Receive education about available options. Any next steps are determined by your licensed provider.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="border-y border-line bg-paper px-5 py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[clamp(28px,3.4vw,40px)] font-medium text-ink">
          Your Path to Provider-Guided Education
        </h2>
        <p className="mt-3 text-lg text-muted">Simple, private, and built around you.</p>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1100px] flex-col items-stretch gap-6 md:flex-row md:items-center">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-1 items-center gap-6">
            <div className="flex-1 rounded-2xl border border-line bg-white p-7 text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-deep text-base font-semibold text-white">
                {i + 1}
              </span>
              <s.icon className="mx-auto mt-4 h-8 w-8 text-teal-deep" />
              <h3 className="mt-3 text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden h-6 w-6 shrink-0 text-line md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
