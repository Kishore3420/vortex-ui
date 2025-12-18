'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

export default function TestIndexPage() {
  const testPages = [
    {
      href: '/test/basics',
      title: 'Basics',
      description:
        'Comprehensive testing page for all animation components including easing functions, FadeIn, ScaleIn, RotateIn, and Stagger animations.',
      color: 'from-primary to-primary/60',
    },
    {
      href: '/test/hero',
      title: 'Hero Variants',
      description:
        'Test different hero section variants including standard, mesh gradient, and spotlight effects.',
      color: 'from-primary to-primary/80',
    },
    {
      href: '/test/text',
      title: 'Text Animations',
      description:
        'Test different text animations including TextReveal, CharacterReveal, and Typewriter.',
      color: 'from-secondary to-secondary/60',
    },
    {
      href: '/test/buttons',
      title: 'Buttons',
      description:
        'Test different button animations including GlowButton, MagneticButton, and RippleButton.',
      color: 'from-accent to-accent/60',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn direction="up">
          <header className="space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tight">
              Test & Practice Pages
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Interactive testing environment for practicing and experimenting
              with animation components and effects. Use these pages to learn,
              test, and refine your animation skills.
            </p>
          </header>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {testPages.map((page, index) => (
            <FadeIn key={page.href} direction="up" delay={index * 0.1}>
              <Link
                href={page.href}
                className="block rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-linear-to-br ${page.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">🧪</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {page.description}
                </p>
                <span className="text-sm text-primary font-medium">
                  Open Test Page →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.3}>
          <section className="mt-16 p-6 rounded-lg border border-border bg-card">
            <h2 className="text-xl font-semibold mb-4">About Test Pages</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong className="text-foreground">Practice:</strong> Test
                different animation configurations and see results in real-time
              </li>
              <li>
                • <strong className="text-foreground">Learn:</strong> Understand
                how different props affect animation behavior
              </li>
              <li>
                • <strong className="text-foreground">Experiment:</strong> Try
                combinations and variations to find what works best
              </li>
              <li>
                • <strong className="text-foreground">Reference:</strong> Use
                these pages as examples when building your own animations
              </li>
            </ul>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
