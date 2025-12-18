'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

export default function DocsHomePage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to AI Studio Animation Library
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A comprehensive, production-ready animation library for modern React
            and Next.js applications. Built with the latest web technologies, it
            provides developers with everything needed to create stunning,
            performant animations.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What This Library Provides</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Modern Stack</strong> - React 19, Next.js 16, TypeScript
                5
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Multiple Libraries</strong> - Framer Motion, GSAP,
                Three.js
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Production Ready</strong> - Optimized, accessible,
                performant
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Comprehensive Docs</strong> - Detailed explanations,
                examples, best practices
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Real Examples</strong> - Complete landing pages and use
                cases
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary">✅</span>
              <span className="text-sm">
                <strong>Professional Design</strong> - Pantone-based color
                system
              </span>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Multi-Library Support</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Framer Motion:</strong> Declarative animations,
                React-friendly API
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>GSAP:</strong> Powerful timeline control, ScrollTrigger
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Three.js:</strong> 3D animations, particle systems
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Production Ready</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Performance:</strong> 60fps target, GPU-accelerated
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Accessible:</strong> Respects prefers-reduced-motion
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>TypeScript:</strong> Full type safety
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Learning Resource</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Animation basics and fundamentals
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Library comparisons and best practices
              </p>
              <p className="text-sm text-muted-foreground">
                Real-world examples and patterns
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">What You&apos;ll Learn</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Animation Fundamentals</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Easing functions and timing</li>
                <li>• Viewport-triggered animations</li>
                <li>• Staggered animations</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Best Practices</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Accessibility considerations</li>
                <li>• Performance optimization</li>
                <li>• Code organization</li>
                <li>• Animation patterns</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <p className="text-muted-foreground">
            Ready to dive in? Check out these guides:
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
              href="/docs/animations/fade-in"
              className="px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              View Animations
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
