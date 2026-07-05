import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import HowItWorks from "@/components/site/HowItWorks";
import Science from "@/components/site/Science";
import Testimonials from "@/components/site/Testimonials";
import FinalCta from "@/components/site/FinalCta";
import Footer from "@/components/site/Footer";
import MobileStickyBar from "@/components/site/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Science />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
