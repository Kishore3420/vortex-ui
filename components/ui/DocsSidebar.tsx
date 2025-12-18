'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    label: 'Overview',
    items: [
      { href: '/docs', label: 'Docs Home' },
      { href: '/docs/introduction', label: 'Introduction' },
      { href: '/docs/getting-started', label: 'Getting Started' },
      { href: '/docs/quick-start', label: 'Quick Start' },
      { href: '/docs/experiments', label: 'Experiments' },
    ],
  },
  {
    label: 'Library',
    items: [
      { href: '/docs/roadmap', label: 'Roadmap' },
      { href: '/docs/structure', label: 'Structure' },
      { href: '/docs/components', label: 'Components' },
      { href: '/docs/components/framer-motion', label: '→ Framer Motion' },
      { href: '/docs/examples', label: 'Examples' },
      { href: '/docs/landing-pages', label: 'Landing Pages' },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col w-64 border-r border-border bg-card/60 backdrop-blur-sm">
      <div className="px-4 py-6 border-b border-border">
        <Link href="/docs" className="block">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            AI Studio
          </span>
          <p className="text-lg font-semibold">Animation Docs</p>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-2 text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">
              {section.label}
            </p>
            <ul className="space-y-1">
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
          </div>
        ))}
      </nav>
    </aside>
  );
}
