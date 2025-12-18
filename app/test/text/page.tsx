'use client';

import {
  CharacterReveal,
  FadeIn,
  SlideUpText,
  TextReveal,
  Typewriter,
} from '@/components/animations';

export default function TextTestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
        <FadeIn direction="up">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Text Animation Test Suite</h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive testing environment for all text animation
              components. Scroll down to explore different text animations
              including TextReveal, CharacterReveal, SlideUpText, and
              Typewriter.
            </p>
          </header>
        </FadeIn>

        {/* TextReveal Section */}
        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">TextReveal</h2>
              <p className="text-muted-foreground mb-8">
                Animates text one word at a time with a fade and slide-up effect.
                Each word appears sequentially with spring physics.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Default TextReveal
                </h3>
                <div className="text-2xl font-bold">
                  <TextReveal text="Welcome to the future of web animations" />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Fast Stagger (0.08s)
                </h3>
                <div className="text-2xl font-bold">
                  <TextReveal
                    text="Quick reveal with fast stagger timing"
                    staggerDelay={0.08}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Slow Stagger (0.2s)
                </h3>
                <div className="text-2xl font-bold">
                  <TextReveal
                    text="Dramatic slow reveal with deliberate timing"
                    staggerDelay={0.2}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  With Initial Delay
                </h3>
                <div className="text-2xl font-bold">
                  <TextReveal
                    text="This text waits 0.5 seconds before starting"
                    delay={0.5}
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Styled Text</h3>
                <div>
                  <TextReveal
                    text="Beautiful animated text with custom styling"
                    className="text-4xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CharacterReveal Section */}
        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">CharacterReveal</h2>
              <p className="text-muted-foreground mb-8">
                Animates text one character at a time with 3D rotation effect.
                Each character flips into view.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Default CharacterReveal
                </h3>
                <div className="text-3xl font-bold">
                  <CharacterReveal text="Character by Character" />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Fast Character Reveal
                </h3>
                <div className="text-2xl font-bold">
                  <CharacterReveal
                    text="Quick character animation"
                    staggerDelay={0.02}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SlideUpText Section */}
        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">SlideUpText</h2>
              <p className="text-muted-foreground mb-8">
                Slides entire text block up from below. Clean and simple
                reveal.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Default SlideUpText
                </h3>
                <div className="text-3xl font-bold">
                  <SlideUpText>Slides up smoothly</SlideUpText>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Multiple Lines with Delay
                </h3>
                <div className="space-y-4">
                  <SlideUpText delay={0}>
                    <div className="text-2xl font-bold">First line</div>
                  </SlideUpText>
                  <SlideUpText delay={0.2}>
                    <div className="text-2xl font-bold">Second line</div>
                  </SlideUpText>
                  <SlideUpText delay={0.4}>
                    <div className="text-2xl font-bold">Third line</div>
                  </SlideUpText>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Typewriter Section */}
        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">Typewriter</h2>
              <p className="text-muted-foreground mb-8">
                Classic typing effect with blinking cursor. Characters appear
                one by one as if being typed.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Default Typewriter
                </h3>
                <div className="text-2xl font-mono">
                  <Typewriter text="Typing effect with cursor..." />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Fast Typing</h3>
                <div className="text-xl font-mono">
                  <Typewriter text="Fast typing speed" speed={30} />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Slow Typing</h3>
                <div className="text-xl font-mono">
                  <Typewriter text="Slow, deliberate typing" speed={100} />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Combined Example */}
        <section className="space-y-8">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold mb-4">Combined Example</h2>
              <p className="text-muted-foreground mb-8">
                Combining multiple text animations for a complete hero section
                effect.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-linear-to-br from-purple-600 to-pink-600 rounded-lg p-12 text-center space-y-6">
              <div className="text-5xl font-bold text-white">
                <TextReveal text="Welcome to VortexUI" delay={0.2} />
              </div>
              <div className="text-xl text-white/90">
                <TextReveal
                  text="The most comprehensive animation library for React"
                  delay={0.8}
                  staggerDelay={0.1}
                />
              </div>
              <div className="text-lg text-white/80 font-mono pt-4">
                <Typewriter
                  text="Start building amazing animations today"
                  delay={1.5}
                  speed={50}
                />
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
