import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import ResultsSection from '@/components/ResultsSection';
import TrustSection from '@/components/TrustSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <HeroSection />
      <ToolsSection />
      <ResultsSection />
      <TrustSection />
    </main>
  );
}
