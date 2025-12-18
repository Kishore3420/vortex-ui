import { Hero } from '@/components/sections/Hero';
import {
  MeshGradientHero,
  SpotlightHero,
} from '@/components/sections/HeroVariants';

export default function TestHeroPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-0">
        <section className="border-b border-border">
          <div className="py-8 px-4 bg-muted/30">
            <h2 className="text-2xl font-bold mb-2">Standard Hero</h2>
            <p className="text-sm text-muted-foreground">
              Basic hero section with gradient background
            </p>
          </div>
          <Hero />
        </section>

        <section className="border-b border-border">
          <div className="py-8 px-4 bg-muted/30">
            <h2 className="text-2xl font-bold mb-2">Mesh Gradient Hero</h2>
            <p className="text-sm text-muted-foreground">
              Hero with animated mesh gradient background effect
            </p>
          </div>
          <MeshGradientHero />
        </section>

        <section>
          <div className="py-8 px-4 bg-muted/30">
            <h2 className="text-2xl font-bold mb-2">Spotlight Hero</h2>
            <p className="text-sm text-muted-foreground">
              Hero with dynamic spotlight effect following cursor
            </p>
          </div>
          <SpotlightHero />
        </section>
      </div>
    </div>
  );
}

