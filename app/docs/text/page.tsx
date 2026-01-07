'use client';

import { FadeIn } from '@/components/animations';
import Link from 'next/link';

const textAnimations = [
  {
    category: 'Basic Reveals',
    items: [
      { href: '/docs/text/text-reveal', name: 'Text Reveal', desc: 'Word-by-word reveal animation' },
      { href: '/docs/text/character-reveal', name: 'Character Reveal', desc: 'Character-by-character reveal' },
      { href: '/docs/text/typewriter', name: 'Typewriter', desc: 'Classic typewriter effect' },
      { href: '/docs/animations/slide-up-text', name: 'Slide Up Text', desc: 'Smooth upward slide' },
    ],
  },
  {
    category: 'Advanced Reveals',
    items: [
      { href: '/docs/text/blur-reveal', name: 'Blur Reveal', desc: 'Smooth unblurring effect' },
      { href: '/docs/text/scramble-reveal', name: 'Scramble Reveal', desc: 'Cyberpunk decryption' },
      { href: '/docs/text/box-reveal', name: 'Box Reveal', desc: 'Minimalist block reveal' },
      { href: '/docs/text/gradual-spacing', name: 'Gradual Spacing', desc: 'Letter-spacing animation' },
      { href: '/docs/text/elastic-reveal', name: 'Elastic Reveal', desc: 'Bouncy spring entrance' },
      { href: '/docs/text/sparkle-reveal', name: 'Sparkle Reveal', desc: 'Magical particle reveal' },
    ],
  },
  {
    category: 'Physics & Motion',
    items: [
      { href: '/docs/text/word-pull-up', name: 'Word Pull Up', desc: 'Sequential word slide' },
      { href: '/docs/text/letter-pull-up', name: 'Letter Pull Up', desc: 'Character pull-up' },
      { href: '/docs/text/wavy-text', name: 'Wavy Text', desc: 'Continuous wave motion' },
    ],
  },
  {
    category: 'Dynamic Effects',
    items: [
      { href: '/docs/text/rotating-text', name: 'Rotating Text', desc: 'Word carousel' },
      { href: '/docs/text/shimmer-text', name: 'Shimmer Text', desc: 'Glossy shimmer effect' },
      { href: '/docs/text/rolling-text', name: 'Rolling Text', desc: 'Slot machine/counter' },
    ],
  },
  {
    category: 'Interactive & Advanced',
    items: [
      { href: '/docs/text/glitch-text', name: 'Glitch Text', desc: 'Digital distortion' },
      { href: '/docs/text/link-reveal', name: 'Link Reveal', desc: 'Premium link hover' },
      { href: '/docs/text/text-mask', name: 'Text Mask', desc: 'Image-clipped text' },
    ],
  },
];

export default function TextAnimationsPage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Text Animations</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            19 premium text animation components designed for modern web applications.
            From simple reveals to interactive effects, each component is fully customizable and production-ready.
          </p>
        </header>
      </FadeIn>

      {textAnimations.map((section, idx) => (
        <FadeIn key={section.category} direction="up" delay={0.1 * (idx + 1)}>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">{section.category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-border bg-card p-5 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn direction="up" delay={0.6}>
        <section className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Live showcase available at <Link href="/test/text" className="text-primary hover:underline">/test/text</Link>
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
