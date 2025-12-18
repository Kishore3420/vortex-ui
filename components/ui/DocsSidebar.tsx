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
    ],
  },
  {
    label: 'Staggered Animations',
    items: [
      { href: '/docs/animations/stagger', label: 'Stagger Container' },
      { href: '/docs/animations/stagger-item', label: 'Stagger Item' },
      { href: '/docs/animations/diagonal-stagger', label: 'Diagonal Stagger' },
    ],
  },
  {
    label: 'Background Effects',
    items: [
      { href: '/docs/animations/gradients', label: 'Animated Gradients' },
      { href: '/docs/animations/mesh-gradient', label: 'Mesh Gradients' },
      { href: '/docs/animations/spotlight', label: 'Spotlight Effects' },
      { href: '/docs/animations/floating-orbs', label: 'Floating Orbs' },
    ],
  },
  {
    label: 'Combinations',
    items: [
      {
        href: '/docs/combinations/multiple-entrance',
        label: 'Multiple Entrance',
      },
      {
        href: '/docs/combinations/entrance-stagger',
        label: 'Entrance + Stagger',
      },
      {
        href: '/docs/combinations/background-content',
        label: 'Background + Content',
      },
      { href: '/docs/combinations/library-mix', label: 'Library Combinations' },
      { href: '/docs/combinations/examples', label: 'Real-World Examples' },
    ],
  },
  {
    label: 'Techniques & Concepts',
    items: [
      { href: '/docs/techniques/viewport-margins', label: 'Viewport Margins' },
      { href: '/docs/techniques/easing', label: 'Easing Functions' },
      { href: '/docs/techniques/performance', label: 'Performance Tips' },
    ],
  },
  {
    label: 'Learning Resources',
    items: [
      { href: '/docs/experiments', label: 'Experiments' },
      { href: '/docs/examples', label: 'Examples' },
      { href: '/docs/landing-pages', label: 'Landing Pages' },
    ],
  },
  {
    label: 'Reference',
    items: [{ href: '/docs/roadmap', label: 'Roadmap' }],
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
            AI Studio
          </span>
          <p className="text-lg font-semibold">Animation Docs</p>
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
