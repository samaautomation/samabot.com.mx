import IndustrialHero from '@/components/IndustrialHero';
import IndustrialProblems from '@/components/IndustrialProblems';
import SamabotSolution from '@/components/SamabotSolution';
import IndustrialUseCases from '@/components/IndustrialUseCases';
import IndustrialContact from '@/components/IndustrialContact';
import IndustrialFooter from '@/components/IndustrialFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <IndustrialHero />
      
      {/* Problems Section */}
      <IndustrialProblems />
      
      {/* Solution Section */}
      <SamabotSolution />
      
      {/* Use Cases Section */}
      <IndustrialUseCases />
      
      {/* Contact Section */}
      <IndustrialContact />
      
      {/* Footer */}
      <IndustrialFooter />
    </main>
  );
}
