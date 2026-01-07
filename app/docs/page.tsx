'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

export default function DocsHomePage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Vortex UI
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A premium animation component library for modern React and Next.js applications.
            Built with performance and developer experience in mind.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Available Components</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/docs/animations/fade-in" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Basic Animations</h3>
              <p className="text-sm text-muted-foreground">
                6 core entrance animations - FadeIn, ScaleIn, RotateIn, BlurIn, FlipIn, SlideUpText
              </p>
            </Link>

            <Link href="/docs/text" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Text Animations</h3>
              <p className="text-sm text-muted-foreground">
                19 text effects from basic reveals to advanced glitch and mask effects
              </p>
            </Link>

            <Link href="/docs/backgrounds" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Background Effects</h3>
              <p className="text-sm text-muted-foreground">
                5 immersive full-screen effects - Aurora, GridBeams, MeshGradient, ShootingStars, Spotlight
              </p>
            </Link>

            <Link href="/docs/buttons" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Button Components</h3>
              <p className="text-sm text-muted-foreground">
                6 interactive button variants with premium hover and click effects
              </p>
            </Link>

            <Link href="/docs/animations/stagger" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Stagger & Sequencing</h3>
              <p className="text-sm text-muted-foreground">
                Create sequential animations with customizable timing and effects
              </p>
            </Link>

            <Link href="/docs/techniques/easing" className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all">
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Techniques & Best Practices</h3>
              <p className="text-sm text-muted-foreground">
                Learn easing functions, performance optimization, and viewport control
              </p>
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.15}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Premium Sidebar Interface</h2>
          <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-4 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                  New Feature
                </div>
                <h3 className="text-xl font-bold">Optimized for Productivity</h3>
                <p className="text-muted-foreground">
                  Our documentation workspace features a highly-interactive sidebar designed for speed.
                  Use <b>Cmd + K</b> to search instantly, or collapse the sidebar for more screen space
                  while maintaining full navigation via icon-hover popovers.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Interactive Popovers
                  </div>
                  <div className="flex items-center gap-2 text-sm text-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Lightning Fast Search
                  </div>
                  <div className="flex items-center gap-2 text-sm text-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Persistent State
                  </div>
                </div>
              </div>
              <div className="bg-muted aspect-video md:aspect-auto border-l border-border flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]" />
                <div className="relative w-full max-w-sm space-y-4 animate-in fade-in slide-in-from-right-8 duration-700">
                  <div className="h-40 w-full rounded-lg bg-card border border-border flex items-center justify-center -rotate-2 shadow-2xl">
                    <div className="text-xs font-mono text-muted-foreground">Interactive Preview</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Framework</h3>
              <p className="text-sm text-muted-foreground">
                Next.js 16, React 19, TypeScript 5
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Animation</h3>
              <p className="text-sm text-muted-foreground">
                Framer Motion, GSAP, Three.js
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Styling</h3>
              <p className="text-sm text-muted-foreground">
                Tailwind CSS v4
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <p className="text-muted-foreground">
            Ready to dive in? Start with these guides:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/docs/getting-started"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Getting Started
            </Link>
            <Link
              href="/docs/quick-start"
              className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Quick Start
            </Link>
            <Link
              href="/docs/text"
              className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Explore Components
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
