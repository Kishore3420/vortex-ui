import { FadeIn } from '@/components/animations/FadeIn';

export function CTASection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <FadeIn direction="up" delay={0.2}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s create experiences that captivate and convert
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <button className="bg-linear-to-r from-primary to-[#3282B8] hover:from-primary/90 hover:to-[#3282B8]/90 text-primary-foreground px-10 sm:px-12 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/25">
            Start Your Project
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
