'use client';

import { FadeIn } from '@/components/animations';

export default function RoadmapPage() {
  const phases = [
    {
      title: 'Phase 1: Foundation',
      status: 'completed',
      description: 'Core setup, theme system, and basic animation components',
      items: [
        'Project structure and setup',
        'Theme system (light/dark mode)',
        'Smooth scroll integration',
        'Basic animations (FadeIn, ScaleIn, RotateIn)',
        'Staggered animations',
        'Documentation structure',
      ],
    },
    {
      title: 'Phase 2: Framer Motion Expansion',
      status: 'in-progress',
      description: 'Expand Framer Motion component library with advanced animations',
      items: [
        'Parallax scrolling effects',
        'Hover animations and interactions',
        'Magnetic button effects',
        'Text reveal animations',
        'Page transition effects',
        'Advanced stagger patterns',
      ],
    },
    {
      title: 'Phase 3: GSAP Integration',
      status: 'planned',
      description: 'Add GSAP for powerful timeline-based animations',
      items: [
        'ScrollTrigger components',
        'Timeline sequences',
        'Text splitting animations',
        'SVG path animations',
        'Morphing animations',
        'Complex animation sequences',
      ],
    },
    {
      title: 'Phase 4: Three.js & 3D',
      status: 'planned',
      description: 'Integrate 3D animations and WebGL effects',
      items: [
        '3D scene setup',
        'Particle systems',
        'Interactive 3D elements',
        'Custom shader effects',
        '3D model animations',
        'WebGL optimizations',
      ],
    },
    {
      title: 'Phase 5: Combinations & Patterns',
      status: 'planned',
      description: 'Create advanced patterns combining multiple libraries',
      items: [
        'Framer Motion + GSAP patterns',
        'GSAP + Three.js integrations',
        'Multi-library animation sequences',
        'Performance optimization guides',
        'Best practice patterns',
        'Real-world case studies',
      ],
    },
    {
      title: 'Phase 6: Landing Pages Showcase',
      status: 'planned',
      description: 'Build 5 complete, production-ready landing pages',
      items: [
        'SaaS Product Landing Page',
        'Creative Portfolio Showcase',
        'E-commerce Product Page',
        'Tech Startup Landing',
        'Agency/Studio Homepage',
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'planned':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⟳';
      case 'planned':
        return '○';
      default:
        return '○';
    }
  };

  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Project Roadmap</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A comprehensive plan for building the complete animation library.
            Track our progress and see what&apos;s coming next.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <FadeIn key={phase.title} direction="up" delay={0.1 + index * 0.05}>
              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold">{phase.title}</h2>
                      <span
                        className={[
                          'px-3 py-1 rounded-full text-xs font-medium border',
                          getStatusColor(phase.status),
                        ].join(' ')}
                      >
                        <span className="mr-1">{getStatusIcon(phase.status)}</span>
                        {phase.status === 'in-progress'
                          ? 'In Progress'
                          : phase.status === 'completed'
                            ? 'Completed'
                            : 'Planned'}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                    Features & Components
                  </h3>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <section className="rounded-lg border border-border bg-card p-6 space-y-4">
          <h2 className="text-xl font-bold">Current Focus</h2>
          <p className="text-muted-foreground">
            We&apos;re currently working on <strong>Phase 2: Framer Motion Expansion</strong>.
            This includes documenting all existing animations and adding advanced
            interaction patterns. Stay tuned for updates!
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
