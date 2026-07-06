import VideoPlayer from "@/components/site/VideoPlayer";
import { testimonialVideos } from "@/lib/site";

export default function PatientStories() {
  const featured = testimonialVideos.slice(0, 3);

  return (
    <section className="border-y border-line bg-paper px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <h2 className="text-[clamp(26px,3.2vw,36px)] font-medium text-ink">
            Patient Education Stories
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Hear from individuals who explored provider-guided regenerative
            options as part of their wellness journey. Results vary. These are
            personal experiences, not medical claims.
          </p>
          <a
            href="/#testimonials"
            className="mt-6 inline-block rounded-xl border border-line px-6 py-3 text-base font-semibold text-ink transition hover:border-teal hover:text-teal-deep"
          >
            Watch More Stories
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((t) => (
            <VideoPlayer
              key={t.slug}
              src={t.video}
              poster={t.poster}
              title={t.title}
              ringClassName="ring-1 ring-line"
            />
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
        Individual results vary. BioRegenEx products are not FDA-approved to
        diagnose, treat, cure, or prevent any disease.
      </p>
    </section>
  );
}
