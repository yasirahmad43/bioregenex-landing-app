import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import StatsBand from "@/components/site/StatsBand";
import HowItWorks from "@/components/site/HowItWorks";
import Science from "@/components/site/Science";
import Testimonials from "@/components/site/Testimonials";
import WhoFor from "@/components/site/WhoFor";
import Faq from "@/components/site/Faq";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <StatsBand />
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Science />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <WhoFor />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
