'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

const backgrounds = [
  { href: '/docs/backgrounds/aurora', name: 'Aurora', desc: 'Ethereal Northern Lights gradient effect' },
  { href: '/docs/backgrounds/grid-beams', name: 'Grid Beams', desc: 'High-tech structural grid with animated light beams' },
  { href: '/docs/backgrounds/mesh-gradient', name: 'Mesh Gradient', desc: 'Dynamic blob-based gradient animation' },
  { href: '/docs/backgrounds/shooting-stars', name: 'Shooting Stars', desc: 'Whimsical meteor shower effect' },
  { href: '/docs/backgrounds/spotlight', name: 'Spotlight', desc: 'Interactive cursor spotlight effect' },
];

export default function BackgroundsPage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Background Effects</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            5 immersive full-screen background animations that add depth and motion to your interfaces.
            Perfect for hero sections, landing pages, and creating stunning visual experiences.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Available Effects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {backgrounds.map((bg) => (
              <Link
                key={bg.href}
                href={bg.href}
                className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {bg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{bg.desc}</p>
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
              <code>{`import { Aurora } from '@/components/backgrounds';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <Aurora className="absolute inset-0" />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Live showcase available at <Link href="/test/backgrounds" className="text-primary hover:underline">/test/backgrounds</Link>
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
