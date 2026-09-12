import SiteHeader from "@/components/site/SiteHeader";
import Hero from "@/components/site/Hero";
import ProofBand from "@/components/site/ProofBand";
import RetrofitSection from "@/components/site/RetrofitSection";
import HowItWorks from "@/components/site/HowItWorks";
import PricingModel from "@/components/site/PricingModel";
import FieldCases from "@/components/site/FieldCases";
import ContactSection from "@/components/site/ContactSection";
import SiteFooter from "@/components/site/SiteFooter";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProofBand />
        <RetrofitSection />
        <HowItWorks />
        <PricingModel />
        <FieldCases />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </>
  );
}
