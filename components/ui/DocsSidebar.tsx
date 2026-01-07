'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const sections = [
  {
    label: 'Getting Started',
    items: [
      { href: '/docs', label: 'Introduction' },
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/quick-start', label: 'Quick Start' },
    ],
  },
  {
    label: 'Basic Animations',
    items: [
      { href: '/docs/animations/fade-in', label: 'Fade In' },
      { href: '/docs/animations/scale-in', label: 'Scale In' },
      { href: '/docs/animations/rotate-in', label: 'Rotate In' },
      { href: '/docs/animations/blur-in', label: 'Blur In' },
      { href: '/docs/animations/flip-in', label: 'Flip In' },
      { href: '/docs/animations/slide-up-text', label: 'Slide Up Text' },
    ],
  },
  {
    label: 'Stagger & Sequencing',
    items: [
      { href: '/docs/animations/stagger', label: 'Stagger Container' },
      { href: '/docs/animations/stagger-item', label: 'Stagger Item' },
    ],
  },
  {
    label: 'Text Animations',
    items: [
      { href: '/docs/text', label: 'Overview' },
      { href: '/docs/text/text-reveal', label: 'Text Reveal' },
      { href: '/docs/text/character-reveal', label: 'Character Reveal' },
      { href: '/docs/text/typewriter', label: 'Typewriter' },
      { href: '/docs/text/blur-reveal', label: 'Blur Reveal' },
      { href: '/docs/text/scramble-reveal', label: 'Scramble Reveal' },
      { href: '/docs/text/box-reveal', label: 'Box Reveal' },
      { href: '/docs/text/gradual-spacing', label: 'Gradual Spacing' },
      { href: '/docs/text/word-pull-up', label: 'Word Pull Up' },
      { href: '/docs/text/letter-pull-up', label: 'Letter Pull Up' },
      { href: '/docs/text/wavy-text', label: 'Wavy Text' },
      { href: '/docs/text/rotating-text', label: 'Rotating Text' },
      { href: '/docs/text/shimmer-text', label: 'Shimmer Text' },
      { href: '/docs/text/rolling-text', label: 'Rolling Text' },
      { href: '/docs/text/elastic-reveal', label: 'Elastic Reveal' },
      { href: '/docs/text/sparkle-reveal', label: 'Sparkle Reveal' },
      { href: '/docs/text/glitch-text', label: 'Glitch Text' },
      { href: '/docs/text/link-reveal', label: 'Link Reveal' },
      { href: '/docs/text/text-mask', label: 'Text Mask' },
    ],
  },
  {
    label: 'Background Effects',
    items: [
      { href: '/docs/backgrounds', label: 'Overview' },
      { href: '/docs/backgrounds/aurora', label: 'Aurora' },
      { href: '/docs/backgrounds/grid-beams', label: 'Grid Beams' },
      { href: '/docs/backgrounds/mesh-gradient', label: 'Mesh Gradient' },
      { href: '/docs/backgrounds/shooting-stars', label: 'Shooting Stars' },
      { href: '/docs/backgrounds/spotlight', label: 'Spotlight' },
    ],
  },
  {
    label: 'Button Components',
    items: [
      { href: '/docs/buttons', label: 'Overview' },
      { href: '/docs/buttons/shimmer-button', label: 'Shimmer Button' },
      { href: '/docs/buttons/border-beam', label: 'Border Beam Button' },
      { href: '/docs/buttons/ripple-button', label: 'Ripple Button' },
      { href: '/docs/buttons/magnetic-button', label: 'Magnetic Button' },
      { href: '/docs/buttons/glow-button', label: 'Glow Button' },
      { href: '/docs/buttons/interactive-3d', label: 'Interactive 3D Button' },
    ],
  },
  {
    label: 'Techniques',
    items: [
      { href: '/docs/techniques/viewport-margins', label: 'Viewport Control' },
      { href: '/docs/techniques/easing', label: 'Easing Functions' },
      { href: '/docs/techniques/performance', label: 'Performance Tips' },
    ],
  },
  {
    label: 'Reference',
    items: [
      { href: '/docs/roadmap', label: 'Roadmap' },
      { href: '/docs/examples', label: 'Examples' },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    sections.forEach((section) => {
      const hasActiveItem = section.items.some(
        (item) => item.href === pathname
      );
      if (hasActiveItem) {
        initial.add(section.label);
      }
    });
    if (initial.size === 0) {
      initial.add('Getting Started');
    }
    return initial;
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <aside className="hidden md:flex md:flex-col fixed left-0 top-0 h-screen w-64 border-r border-border bg-card/60 backdrop-blur-sm z-40">
      <div className="px-4 py-6 border-b border-border shrink-0">
        <Link href="/docs" className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            VortexUI
          </span>
          <p className="text-lg font-semibold">Documentation</p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {sections.map((section) => {
          const isOpen = openSections.has(section.label);
          const hasActiveItem = section.items.some(
            (item) => item.href === pathname
          );

          return (
            <div key={section.label} className="space-y-1">
              <button
                onClick={() => toggleSection(section.label)}
                className={[
                  'w-full flex items-center justify-between px-2 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wide rounded-md transition-colors',
                  hasActiveItem
                    ? 'text-primary bg-primary/5'
                    : 'hover:text-foreground hover:bg-accent/50',
                ].join(' ')}
              >
                <span>{section.label}</span>
                <svg
                  className={[
                    'w-4 h-4 transition-transform duration-200',
                    isOpen ? 'rotate-180' : '',
                  ].join(' ')}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <ul className="space-y-1 pl-2">
                  {section.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={[
                            'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors',
                            active
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:text-foreground hover:bg-accent',
                          ].join(' ')}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
