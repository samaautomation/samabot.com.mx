import Header from '@/components/Header';
import RecoveryHero from '@/components/RecoveryHero';
import TimeLossSection from '@/components/TimeLossSection';
import TechnicalOverview from '@/components/TechnicalOverview';
import UseCasesGrid from '@/components/UseCasesGrid';
import IndustrialContact from '@/components/IndustrialContact';
import IndustrialFooter from '@/components/IndustrialFooter';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Recovery Hero Section */}
      <RecoveryHero />
      
      {/* Time Loss Section */}
      <TimeLossSection />
      
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
