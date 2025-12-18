'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

export default function ComponentsOverviewPage() {
  const framerMotionComponents = [
    { href: '/docs/animations/fade-in', label: 'Fade In' },
    { href: '/docs/animations/scale-in', label: 'Scale In' },
    { href: '/docs/animations/rotate-in', label: 'Rotate In' },
    { href: '/docs/animations/blur-in', label: 'Blur In' },
    { href: '/docs/animations/flip-in', label: 'Flip In' },
    { href: '/docs/animations/stagger', label: 'Stagger Container' },
    { href: '/docs/animations/stagger-item', label: 'Stagger Item' },
  ];

  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Component Library
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Browse all available animation components. Each component includes
            detailed documentation, examples, and usage guides.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Framer Motion Components</h2>
          <p className="text-muted-foreground">
            Declarative, React-friendly animations perfect for most use cases.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {framerMotionComponents.map((component, index) => (
              <FadeIn
                key={component.href}
                direction="up"
                delay={0.1 + index * 0.05}
              >
                <Link
                  href={component.href}
                  className="block rounded-lg border border-border bg-card p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <h3 className="font-semibold mb-2">{component.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    View detailed documentation, examples, and usage guides.
                  </p>
                  <span className="text-sm text-primary font-medium">
                    View Component →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 opacity-60">
              <h3 className="text-xl font-semibold mb-2">GSAP</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Powerful timeline-based animations for complex sequences.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Coming in Phase 3...
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 opacity-60">
              <h3 className="text-xl font-semibold mb-2">Three.js</h3>
              <p className="text-sm text-muted-foreground mb-4">
                3D animations and WebGL effects.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Coming in Phase 4...
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

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
