import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import OurTeam from "@/components/OurTeam";
import PeptideCatalog from "@/components/PeptideCatalog";
import WhyRevitalize from "@/components/WhyRevitalize";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <OurTeam />
        <PeptideCatalog />
        <WhyRevitalize />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
