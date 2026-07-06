import FAQAccordion from "./FAQAccordion";
import EduFinalCta from "./EduFinalCta";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h2 className="text-[clamp(26px,3.2vw,36px)] font-medium text-ink">
            Frequently Asked Questions
          </h2>
          <div className="mt-6">
            <FAQAccordion />
          </div>
          <a
            href="#apply"
            className="mt-6 inline-block text-base font-semibold text-teal-deep underline underline-offset-4"
          >
            Still have questions? Ask a provider
          </a>
        </div>

        <EduFinalCta />
      </div>
    </section>
  );
}
