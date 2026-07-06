import VideoPlayer from "./VideoPlayer";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-paper">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-10 md:py-12 lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-12 lg:gap-y-6">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="eyebrow">Regenerative Cellular Therapy</p>
          <h1 className="mt-3 text-[clamp(34px,4.6vw,54px)] font-medium leading-[1.1] text-ink">
            Your body has a natural repair system.{" "}
            <em className="font-serif italic text-teal-deep">Help it do its job.</em>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Researchers have spent over 16 years studying how your cells communicate —
            and exosome therapy is one of the most promising new options for people
            facing conditions that haven&apos;t responded to anything else. Your story
            isn&apos;t over. Book a free consultation to find out if this is your next
            step.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[600px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center">
          <VideoPlayer
            src="/videos/hero2.mp4"
            poster="/images/testimonials/hero2.jpg"
            title="Watch: is regenerative therapy right for you?"
            aspect="aspect-video"
            ringClassName="shadow-[0_20px_60px_rgba(10,27,51,0.25)] ring-1 ring-ink/10"
          />
          <p className="mt-3 text-center text-base text-muted">
            See the science and real patient stories.
          </p>
        </div>

        <div
          id="apply"
          className="rounded-2xl border border-line bg-white/80 p-6 shadow-[0_8px_30px_rgba(10,27,51,0.06)] backdrop-blur lg:col-start-1 lg:row-start-2"
        >
          <LeadForm compact />
        </div>
      </div>
    </section>
  );
}
