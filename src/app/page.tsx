import { AnimatedHero } from '@/components/AnimatedHero';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedHero />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}
