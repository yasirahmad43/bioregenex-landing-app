import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import EduHero from "@/components/learn-more/EduHero";
import EduTrustBar from "@/components/learn-more/EduTrustBar";
import MediaFeature from "@/components/learn-more/MediaFeature";
import ProcessSteps from "@/components/learn-more/ProcessSteps";
import ScienceStats from "@/components/learn-more/ScienceStats";
import PatientStories from "@/components/learn-more/PatientStories";
import WhoForNotFor from "@/components/learn-more/WhoForNotFor";
import FaqSection from "@/components/learn-more/FaqSection";

export const metadata: Metadata = {
  title: "Learn More — Provider-Guided Regenerative Research | BioRegenEx",
  description:
    "Explore physician-guided regenerative research options. Free educational consultation with a licensed provider — no obligation.",
};

export default function LearnMorePage() {
  return (
    <div className="edu-theme flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <EduHero />
        <EduTrustBar />
        <MediaFeature />
        <ProcessSteps />
        <ScienceStats />
        <PatientStories />
        <WhoForNotFor />
        <FaqSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
