'use client';

import { GlowButton, MagneticButton, RippleButton } from '@/components/ui';

export default function TestButtonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* Magnetic Button - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Magnetic Button</h2>
            <MagneticButton
              strength={0.4}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold transition-colors shadow-lg shadow-primary/25 border border-primary/20"
            >
              Hover Near Me
            </MagneticButton>
          </div>
        </section>

        {/* Magnetic Button - Different Strengths */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">
              Magnetic Strength Variations
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <MagneticButton
                strength={0.2}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
              >
                Subtle (0.2)
              </MagneticButton>
              <MagneticButton
                strength={0.4}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold border border-secondary/20 shadow-md"
              >
                Medium (0.4)
              </MagneticButton>
              <MagneticButton
                strength={0.6}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold border border-accent/20 shadow-md"
              >
                Strong (0.6)
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Ripple Button - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Ripple Effect</h2>
            <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold shadow-lg shadow-primary/25 border border-primary/20">
              Click Me
            </RippleButton>
          </div>
        </section>

        {/* Ripple Button - Different Colors */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Ripple Color Variations</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <RippleButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
                rippleColor="rgba(255, 255, 255, 0.6)"
              >
                White Ripple
              </RippleButton>
              <RippleButton
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold border border-secondary/20 shadow-md"
                rippleColor="rgba(255, 255, 255, 0.6)"
              >
                Secondary Ripple
              </RippleButton>
              <RippleButton
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold border border-accent/20 shadow-md"
                rippleColor="rgba(255, 255, 255, 0.6)"
              >
                Accent Ripple
              </RippleButton>
            </div>
          </div>
        </section>

        {/* Ripple Button - Different Shapes */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">
              Ripple on Different Shapes
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md">
                Rounded
              </RippleButton>
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold border border-primary/20 shadow-md">
                Pill
              </RippleButton>
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-none font-semibold border border-primary/20 shadow-md">
                Square
              </RippleButton>
            </div>
          </div>
        </section>

        {/* Glow Button - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Glow Button</h2>
            <GlowButton
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold shadow-lg border border-primary/20"
              variant="primary"
            >
              Hover for Glow
            </GlowButton>
          </div>
        </section>

        {/* Glow Button - Different Glow Colors */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Glow Color Variations</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <GlowButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
                variant="primary"
              >
                Primary Glow
              </GlowButton>
              <GlowButton
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold border border-secondary/20 shadow-md"
                variant="secondary"
              >
                Secondary Glow
              </GlowButton>
              <GlowButton
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold border border-accent/20 shadow-md"
                variant="accent"
              >
                Accent Glow
              </GlowButton>
            </div>
          </div>
        </section>

        {/* Glow Button - Intensity Variations */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Glow Intensity</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <GlowButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
                variant="primary"
                glowIntensity={0.5}
              >
                Subtle Glow
              </GlowButton>
              <GlowButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
                variant="primary"
                glowIntensity={1}
              >
                Normal Glow
              </GlowButton>
              <GlowButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold border border-primary/20 shadow-md"
                variant="primary"
                glowIntensity={1.5}
              >
                Intense Glow
              </GlowButton>
            </div>
          </div>
        </section>

        {/* Combined Effects */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">
              Combined: Magnetic + Glow
            </h2>
            <MagneticButton strength={0.3}>
              <GlowButton
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold shadow-lg border border-primary/20"
                variant="primary"
              >
                Ultimate Button
              </GlowButton>
            </MagneticButton>
          </div>
        </section>

        {/* Combined: All Three */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">All Effects Combined</h2>
            <MagneticButton strength={0.3}>
              <GlowButton
                variant="primary"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold shadow-lg border border-primary/20"
              >
                <RippleButton
                  rippleColor="rgba(255, 255, 255, 0.6)"
                  className="w-full h-full"
                >
                  Triple Effect
                </RippleButton>
              </GlowButton>
            </MagneticButton>
          </div>
        </section>

        {/* Disabled States */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Disabled States</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <MagneticButton
                disabled
                className="bg-muted text-muted-foreground px-8 py-4 rounded-lg font-semibold border border-border cursor-not-allowed"
              >
                Disabled Magnetic
              </MagneticButton>
              <RippleButton
                disabled
                className="bg-muted text-muted-foreground px-8 py-4 rounded-lg font-semibold border border-border cursor-not-allowed"
              >
                Disabled Ripple
              </RippleButton>
              <GlowButton
                disabled
                className="bg-muted text-muted-foreground px-8 py-4 rounded-lg font-semibold border border-border cursor-not-allowed"
                glowColor="var(--color-muted)"
              >
                Disabled Glow
              </GlowButton>
            </div>
          </div>
        </section>

        {/* Different Sizes */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Button Sizes</h2>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-semibold border border-primary/20 shadow-md">
                Small
              </RippleButton>
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold border border-primary/20 shadow-md">
                Medium
              </RippleButton>
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold border border-primary/20 shadow-md">
                Large
              </RippleButton>
              <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold border border-primary/20 shadow-md">
                Extra Large
              </RippleButton>
            </div>
          </div>
        </section>

        {/* Tailwind-Style Variants */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold mb-8">Theme-Aware Variants</h2>
            <div className="space-y-6">
              {/* Primary */}
              <div className="flex flex-wrap gap-4 justify-center">
                <RippleButton className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md border border-primary/20">
                  Primary
                </RippleButton>
                <RippleButton className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold shadow-md border border-secondary/20">
                  Secondary
                </RippleButton>
                <RippleButton className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold bg-transparent">
                  Outline
                </RippleButton>
                <RippleButton className="bg-transparent hover:bg-accent text-foreground hover:text-accent-foreground px-6 py-3 rounded-lg font-semibold border border-border">
                  Ghost
                </RippleButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
