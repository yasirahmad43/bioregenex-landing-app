export const site = {
  name: "BioRegenEx",
  domain: "bioregenex.com",
  phoneDisplay: "(346) 313-8437",
  phoneHref: "tel:+13463138437",
  calendlyUrl: "https://calendly.com/shahabshayeste1/30min",
  calendlyEmbedUrl:
    "https://calendly.com/shahabshayeste1/30min?hide_event_type_details=1&hide_gdpr_banner=1",
  links: {
    home: "https://bioregenex.com/",
    exosomeTherapy: "https://bioregenex.com/exosome-therapy/",
    research: "https://bioregenex.com/research/",
  },
} as const;

export type TestimonialVideo = {
  slug: string;
  title: string;
  video: string;
  poster: string;
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    slug: "pain-relief",
    title: "After years of pain and stiffness, she found real relief",
    video: "/videos/testimonial-pain-relief.mp4",
    poster: "/images/testimonials/testimonial-pain-relief.jpg",
  },
  {
    slug: "stroke",
    title: "Regaining hand movement after a stroke",
    video: "/videos/testimonial-stroke.mp4",
    poster: "/images/testimonials/testimonial-stroke.jpg",
  },
  {
    slug: "autoimmune-scoliosis",
    title: "Living with autoimmune disease and scoliosis",
    video: "/videos/testimonial-autoimmune-scoliosis.mp4",
    poster: "/images/testimonials/testimonial-autoimmune-scoliosis.jpg",
  },
  {
    slug: "ms-neuropathy",
    title: "Multiple sclerosis and neuropathy — her story",
    video: "/videos/testimonial-ms-neuropathy.mp4",
    poster: "/images/testimonials/testimonial-ms-neuropathy.jpg",
  },
  {
    slug: "march17",
    title: "A patient's regenerative therapy journey",
    video: "/videos/testimonial-march17.mp4",
    poster: "/images/testimonials/testimonial-march17.jpg",
  },
  {
    slug: "april22",
    title: "Why she decided to explore regenerative options",
    video: "/videos/testimonial-april22.mp4",
    poster: "/images/testimonials/testimonial-april22.jpg",
  },
];
