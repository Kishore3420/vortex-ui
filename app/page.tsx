import { CTASection } from '@/components/sections/CTASection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
