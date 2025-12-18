'use client';

import {
  CharacterReveal,
  SlideUpText,
  TextReveal,
  Typewriter,
} from '@/components/animations';

export default function TestTextPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-32">
        {/* TextReveal - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <TextReveal
              text="This text reveals word by word"
              className="text-6xl font-bold"
              delay={0.5}
            />
          </div>
        </section>

        {/* TextReveal - Fast Stagger */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <TextReveal
              text="Fast stagger reveals words quickly"
              className="text-5xl font-bold text-primary"
              delay={0.3}
              staggerDelay={0.08}
            />
          </div>
        </section>

        {/* TextReveal - Slow Stagger */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <TextReveal
              text="Slow dramatic reveal with deliberate timing"
              className="text-5xl font-bold text-secondary"
              delay={0.4}
              staggerDelay={0.2}
            />
          </div>
        </section>

        {/* TextReveal - Long Text */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <TextReveal
              text="This is a longer sentence that demonstrates how TextReveal handles multiple words in a paragraph format"
              className="text-3xl font-semibold text-muted-foreground"
              delay={0.2}
              staggerDelay={0.1}
            />
          </div>
        </section>

        {/* TextReveal - Gradient Text */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <TextReveal
              text="Beautiful gradient text animation"
              className="text-7xl font-bold bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              delay={0.3}
            />
          </div>
        </section>

        {/* TextReveal - Small Text */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <TextReveal
              text="Small subtle animation"
              className="text-2xl font-normal text-muted-foreground"
              delay={0.1}
              staggerDelay={0.15}
            />
          </div>
        </section>

        {/* CharacterReveal - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="Character Animation"
              className="text-7xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              delay={0.5}
            />
          </div>
        </section>

        {/* CharacterReveal - Fast */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="Fast Character Reveal"
              className="text-6xl font-bold text-primary"
              delay={0.3}
              staggerDelay={0.02}
            />
          </div>
        </section>

        {/* CharacterReveal - Slow */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="Slow Character Reveal"
              className="text-6xl font-bold text-accent"
              delay={0.4}
              staggerDelay={0.05}
            />
          </div>
        </section>

        {/* CharacterReveal - Short Phrase */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="Hello"
              className="text-8xl font-bold text-primary"
              delay={0.2}
            />
          </div>
        </section>

        {/* CharacterReveal - Brand Name */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="VortexUI"
              className="text-9xl font-black bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              delay={0.3}
              staggerDelay={0.03}
            />
          </div>
        </section>

        {/* CharacterReveal - With Numbers */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <CharacterReveal
              text="2025"
              className="text-8xl font-bold text-primary"
              delay={0.2}
            />
          </div>
        </section>

        {/* SlideUpText - Single Line */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <SlideUpText delay={0.2} className="text-6xl font-bold">
              Slide Up Animation
            </SlideUpText>
          </div>
        </section>

        {/* SlideUpText - Multiple Lines */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <SlideUpText delay={0.2} className="text-6xl font-bold">
              Slide Up
            </SlideUpText>
            <SlideUpText delay={0.4} className="text-6xl font-bold">
              Line by Line
            </SlideUpText>
            <SlideUpText delay={0.6} className="text-6xl font-bold">
              Animation
            </SlideUpText>
          </div>
        </section>

        {/* SlideUpText - Fast Duration */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <SlideUpText
              delay={0.1}
              duration={0.5}
              className="text-5xl font-bold text-primary"
            >
              Fast Slide Up
            </SlideUpText>
          </div>
        </section>

        {/* SlideUpText - Slow Duration */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <SlideUpText
              delay={0.2}
              duration={1.2}
              className="text-5xl font-bold text-primary"
            >
              Slow Dramatic Slide
            </SlideUpText>
          </div>
        </section>

        {/* SlideUpText - Hero Style */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <SlideUpText delay={0} className="text-8xl font-black">
              Welcome
            </SlideUpText>
            <SlideUpText
              delay={0.3}
              className="text-4xl font-light text-muted-foreground"
            >
              To the Future
            </SlideUpText>
            <SlideUpText delay={0.6} className="text-xl text-gray-500">
              Experience next-generation animations
            </SlideUpText>
          </div>
        </section>

        {/* SlideUpText - Gradient */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <SlideUpText
              delay={0.2}
              className="text-7xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              Gradient Slide
            </SlideUpText>
          </div>
        </section>

        {/* Typewriter - Basic */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="Classic typewriter effect with cursor..."
              delay={0.5}
              speed={80}
              className="text-5xl font-mono"
            />
          </div>
        </section>

        {/* Typewriter - Fast */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="Fast typing speed"
              delay={0.3}
              speed={30}
              className="text-4xl font-mono text-primary"
            />
          </div>
        </section>

        {/* Typewriter - Slow */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="Slow deliberate typing"
              delay={0.4}
              speed={120}
              className="text-4xl font-mono text-accent"
            />
          </div>
        </section>

        {/* Typewriter - Code Style */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="const hello = 'world';"
              delay={0.2}
              speed={60}
              className="text-3xl font-mono text-primary"
            />
          </div>
        </section>

        {/* Typewriter - Terminal Style */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="$ npm install vortex-ui"
              delay={0.3}
              speed={70}
              className="text-4xl font-mono text-primary"
            />
          </div>
        </section>

        {/* Typewriter - Without Cursor */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="No cursor animation"
              delay={0.2}
              speed={50}
              showCursor={false}
              className="text-4xl font-mono text-primary"
            />
          </div>
        </section>

        {/* Typewriter - Custom Cursor */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Typewriter
              text="Custom cursor character"
              delay={0.3}
              speed={60}
              cursorChar="_"
              className="text-4xl font-mono text-primary"
            />
          </div>
        </section>

        {/* Typewriter - Long Text */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <Typewriter
              text="This is a longer typewriter text that demonstrates how the component handles extended content with multiple words and sentences."
              delay={0.4}
              speed={40}
              className="text-2xl font-mono text-muted-foreground"
            />
          </div>
        </section>

        {/* Combined - Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <TextReveal
              text="Welcome to VortexUI"
              className="text-7xl font-black bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
              delay={0.2}
              staggerDelay={0.15}
            />
            <SlideUpText
              delay={0.8}
              className="text-2xl font-light text-muted-foreground"
            >
              The most comprehensive animation library
            </SlideUpText>
            <Typewriter
              text="Start building amazing animations today"
              delay={1.2}
              speed={50}
              className="text-xl font-mono text-muted-foreground"
            />
          </div>
        </section>

        {/* Combined - Feature Showcase */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <CharacterReveal
              text="Features"
              className="text-6xl font-bold text-primary"
              delay={0.2}
            />
            <div className="space-y-4 mt-8">
              <TextReveal
                text="Word by word reveals"
                className="text-3xl font-semibold"
                delay={0.6}
              />
              <TextReveal
                text="Character animations"
                className="text-3xl font-semibold"
                delay={0.8}
              />
              <TextReveal
                text="Slide up effects"
                className="text-3xl font-semibold"
                delay={1.0}
              />
              <TextReveal
                text="Typewriter effects"
                className="text-3xl font-semibold"
                delay={1.2}
              />
            </div>
          </div>
        </section>

        {/* Combined - Staggered Different Types */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <SlideUpText delay={0} className="text-5xl font-bold">
              Multiple
            </SlideUpText>
            <CharacterReveal
              text="Animation"
              className="text-5xl font-bold text-primary"
              delay={0.4}
            />
            <TextReveal
              text="Types Together"
              className="text-5xl font-bold text-primary"
              delay={0.8}
            />
            <Typewriter
              text="Creating amazing experiences"
              delay={1.2}
              speed={60}
              className="text-2xl font-mono text-muted-foreground"
            />
          </div>
        </section>

        {/* TextReveal - Different Sizes */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <TextReveal
              text="Extra Large"
              className="text-9xl font-black"
              delay={0}
            />
            <TextReveal
              text="Large Heading"
              className="text-6xl font-bold"
              delay={0.3}
            />
            <TextReveal
              text="Medium Text"
              className="text-4xl font-semibold"
              delay={0.6}
            />
            <TextReveal
              text="Small Text"
              className="text-2xl font-normal"
              delay={0.9}
            />
          </div>
        </section>

        {/* CharacterReveal - Different Styles */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-8">
            <CharacterReveal
              text="BOLD"
              className="text-8xl font-black text-primary"
              delay={0.2}
            />
            <CharacterReveal
              text="Regular"
              className="text-6xl font-normal text-primary"
              delay={0.5}
            />
            <CharacterReveal
              text="Light"
              className="text-5xl font-light text-primary"
              delay={0.8}
            />
          </div>
        </section>

        {/* Typewriter - Different Speeds Comparison */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <Typewriter
              text="Very Fast (30ms)"
              delay={0}
              speed={30}
              className="text-3xl font-mono text-primary"
            />
            <Typewriter
              text="Fast (50ms)"
              delay={1.5}
              speed={50}
              className="text-3xl font-mono text-primary"
            />
            <Typewriter
              text="Medium (80ms)"
              delay={3}
              speed={80}
              className="text-3xl font-mono text-primary"
            />
            <Typewriter
              text="Slow (120ms)"
              delay={4.5}
              speed={120}
              className="text-3xl font-mono text-accent"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
