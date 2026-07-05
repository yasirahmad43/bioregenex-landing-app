import VideoPlayer from "./VideoPlayer";
import { testimonialVideos } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1140px] px-5 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">In their words</p>
        <h2 className="mt-3 text-[clamp(26px,3.2vw,38px)] font-medium text-ink">
          Real patients, in their own words
        </h2>
        <p className="mt-3 text-muted">
          Unscripted stories from people who started with the same free consultation.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonialVideos.map((t) => (
          <VideoPlayer
            key={t.slug}
            src={t.video}
            poster={t.poster}
            title={t.title}
            ringClassName="ring-1 ring-line"
          />
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted">
        Testimonials reflect individual patient experiences shared with consent.
        Individual results vary and are not guaranteed. These statements have not
        been evaluated by the FDA and are not intended to diagnose, treat, cure, or
        prevent any disease.
      </p>
    </section>
  );
}
