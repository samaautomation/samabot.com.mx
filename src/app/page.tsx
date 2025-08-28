import FuturisticHero from '@/components/FuturisticHero';
import TechnicalOverview from '@/components/TechnicalOverview';
import UseCasesGrid from '@/components/UseCasesGrid';
import IndustrialContact from '@/components/IndustrialContact';
import IndustrialFooter from '@/components/IndustrialFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Futuristic Hero Section */}
      <FuturisticHero />
      
      {/* Technical Overview Section */}
      <TechnicalOverview />
      
      {/* Use Cases Grid Section */}
      <UseCasesGrid />
      
      {/* Contact Section */}
      <IndustrialContact />
      
      {/* Footer */}
      <IndustrialFooter />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
