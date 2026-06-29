import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Prices from "@/components/Prices";
import WhyMenuMind from "@/components/WhyMenuMind";
import ResultsSection from "@/components/Results";
import About from "@/components/About";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Prices />
        <WhyMenuMind />
        <ResultsSection />
        <About />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
