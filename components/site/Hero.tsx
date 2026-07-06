import VideoPlayer from "./VideoPlayer";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white to-paper">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-8 md:py-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="eyebrow">Regenerative Cellular Therapy</p>
          <h1 className="mt-2 text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] text-ink">
            Your body has a natural repair system.{" "}
            <em className="font-serif italic text-teal-deep">Help it do its job.</em>
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            Researchers have spent over 16 years studying how your cells communicate —
            and exosome therapy is one of the most promising new options for people
            facing conditions that haven&apos;t responded to anything else. Your story
            isn&apos;t over. Book a free consultation to find out if this is your next
            step.
          </p>

          <div className="mt-5 max-w-lg rounded-2xl border border-line bg-white/80 p-4 shadow-[0_8px_30px_rgba(10,27,51,0.06)] backdrop-blur">
            <LeadForm compact />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[520px]">
          <VideoPlayer
            src="/videos/hero2.mp4"
            poster="/images/testimonials/hero2.jpg"
            title="Watch: is regenerative therapy right for you?"
            aspect="aspect-video"
            ringClassName="shadow-[0_20px_60px_rgba(10,27,51,0.25)] ring-1 ring-ink/10"
          />
          <p className="mt-2 text-center text-sm text-muted">
            See the science and real patient stories.
          </p>
        </div>
      </div>
    </section>
  );
}
