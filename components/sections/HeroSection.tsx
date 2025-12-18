import { FadeIn } from '@/components/animations/FadeIn';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
            AI Studio Portfolio
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of web design with cutting-edge animations
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
            Explore Work
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
