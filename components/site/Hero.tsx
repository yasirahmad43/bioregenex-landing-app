import VideoPlayer from "./VideoPlayer";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-paper">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-5 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div>
          <p className="eyebrow">Regenerative Cellular Therapy</p>
          <h1 className="mt-3 text-[clamp(32px,4.6vw,52px)] font-medium leading-[1.1] text-ink">
            Your body has a natural repair system.{" "}
            <em className="font-serif italic text-teal-deep">Help it do its job.</em>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Researchers have spent over 16 years studying how your cells communicate —
            and exosome therapy is one of the most promising new options for people
            facing conditions that haven&apos;t responded to anything else. Your story
            isn&apos;t over. Book a free consultation to find out if this is your next
            step.
          </p>

          <div className="mt-8 max-w-lg rounded-2xl border border-line bg-white/80 p-5 shadow-[0_8px_30px_rgba(10,27,51,0.06)] backdrop-blur">
            <LeadForm />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[320px] lg:max-w-[360px]">
          <VideoPlayer
            src="/videos/hero.mp4"
            poster="/images/testimonials/hero.jpg"
            title="Watch: is regenerative therapy right for you?"
            ringClassName="shadow-[0_20px_60px_rgba(10,27,51,0.25)] ring-1 ring-ink/10"
          />
          <p className="mt-3 text-center text-sm text-muted">
            60 seconds — hear the question we get asked most.
          </p>
        </div>
      </div>
    </section>
  );
}
