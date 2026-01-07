'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

const buttons = [
  { href: '/docs/buttons/shimmer-button', name: 'Shimmer Button', desc: 'Glossy shimmer effect for premium CTAs' },
  { href: '/docs/buttons/border-beam', name: 'Border Beam Button', desc: 'Animated border beam effect' },
  { href: '/docs/buttons/ripple-button', name: 'Ripple Button', desc: 'Material-inspired ripple effect' },
  { href: '/docs/buttons/magnetic-button', name: 'Magnetic Button', desc: 'Magnetic cursor attraction' },
  { href: '/docs/buttons/glow-button', name: 'Glow Button', desc: 'Glowing hover effect' },
  { href: '/docs/buttons/interactive-3d', name: 'Interactive 3D Button', desc: '3D perspective tilt on hover' },
];

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Button Components</h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Six interactive button components designed for high-conversion CTAs and premium user journeys.
            Each component features carefully tuned physics-based animations, 3D perspective shifts,
            or dynamic light effects to make your primary actions unmissable.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Available Components</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {buttons.map((button) => (
              <Link
                key={button.href}
                href={button.href}
                className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {button.name}
                </h3>
                <p className="text-sm text-muted-foreground">{button.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Usage Example</h2>
          <div className="rounded-lg border border-border bg-card p-6">
            <pre className="text-sm">
              <code>{`import { ShimmerButton } from '@/components/ui';

<ShimmerButton>Get Started</ShimmerButton>`}</code>
            </pre>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Live showcase available at <Link href="/test/buttons" className="text-primary hover:underline">/test/buttons</Link>
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
