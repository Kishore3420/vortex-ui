'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

export default function ComponentsOverviewPage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Component Library
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Browse all available animation components organized by library. Each
            component includes detailed documentation, examples, and usage
            guides.
          </p>
        </header>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-3">
        <FadeIn direction="up" delay={0.1}>
          <Link
            href="/docs/components/framer-motion"
            className="block rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">Framer Motion</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Declarative, React-friendly animations perfect for most use cases.
            </p>
            <div className="space-y-1">
              <div className="text-sm font-medium">Available Components:</div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• FadeIn</li>
                <li>• ScaleIn</li>
                <li>• RotateIn</li>
                <li>• StaggerContainer</li>
                <li>• StaggerItem</li>
              </ul>
            </div>
            <div className="mt-4 text-sm text-primary font-medium">
              View Components →
            </div>
          </Link>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="rounded-lg border border-border bg-card p-6 opacity-60">
            <h2 className="text-xl font-semibold mb-2">GSAP</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Powerful timeline-based animations for complex sequences.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Coming in Phase 3...
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="rounded-lg border border-border bg-card p-6 opacity-60">
            <h2 className="text-xl font-semibold mb-2">Three.js</h2>
            <p className="text-sm text-muted-foreground mb-4">
              3D animations and WebGL effects.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Coming in Phase 4...
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.4}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Component Structure</h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Each component follows a consistent structure:
            </p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Purpose:</strong> Clear
                description of what the component does
              </li>
              <li>
                <strong className="text-foreground">Props:</strong> TypeScript
                types with default values
              </li>
              <li>
                <strong className="text-foreground">Examples:</strong> Live,
                interactive demonstrations
              </li>
              <li>
                <strong className="text-foreground">How It Works:</strong>{' '}
                Explanation of the animation mechanics
              </li>
              <li>
                <strong className="text-foreground">Best Practices:</strong>{' '}
                When and how to use each component
              </li>
            </ul>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
