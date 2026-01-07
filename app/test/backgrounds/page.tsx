'use client';

import { Aurora, GridBeams, MeshGradient, ShootingStars, Spotlight } from '@/components/backgrounds';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

const BackgroundShowcase = ({
  title,
  description,
  children,
  href,
}: {
  title: string;
  description: string;
  children: ReactNode;
  href: string;
}) => (
  <div className="group relative h-96 overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
    {/* Background Animation */}
    <div className="absolute inset-0">{children}</div>

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:bg-primary/20 hover:border-primary/40"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default function BackgroundsShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(var(--color-primary-rgb),0.03)_0%,transparent_50%)] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-16">
        {/* Header */}
        <header className="space-y-6 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase"
          >
            vortex-ui / backgrounds
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Background <span className="text-primary">Animations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Immersive background effects that bring depth and motion to your interfaces.
            Each animation is fully customizable and optimized for performance.
          </motion.p>
        </header>

        {/* Background Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BackgroundShowcase
            title="Aurora"
            description="Ethereal Northern Lights effect with flowing gradients and smooth color transitions. Perfect for hero sections and landing pages."
            href="/test/backgrounds/aurora"
          >
            <Aurora blur={50} opacity={0.5} />
          </BackgroundShowcase>

          <BackgroundShowcase
            title="Grid Beams"
            description="High-tech structural grid with animated light beams. Ideal for SaaS and tech-focused interfaces."
            href="/test/backgrounds/grid-beams"
          >
            <GridBeams className="text-primary" />
          </BackgroundShowcase>

          <BackgroundShowcase
            title="Shooting Stars"
            description="Whimsical meteor shower effect with twinkling stars. Adds magic to creative and playful designs."
            href="/test/backgrounds/shooting-stars"
          >
            <ShootingStars starColor="rgba(var(--color-primary-rgb), 0.8)" trailColor="rgba(var(--color-primary-rgb), 0.3)" />
          </BackgroundShowcase>

          <BackgroundShowcase
            title="Mesh Gradient"
            description="Dynamic blob-based gradient animation. Modern and sophisticated for premium brands."
            href="/test/backgrounds/mesh-gradient"
          >
            <MeshGradient speed={0.5} opacityRange={[0.3, 0.7]} />
          </BackgroundShowcase>

          <div className="md:col-span-2">
            <BackgroundShowcase
              title="Spotlight"
              description="Interactive spotlight effect that follows cursor movement. Creates depth and engagement in hero sections."
              href="/test/backgrounds/spotlight"
            >
              <Spotlight size={300} speed={0.5} color="rgba(var(--color-primary-rgb), 0.3)" />
            </BackgroundShowcase>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pt-8 border-t border-border">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/test/basics"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to All Animations
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/test/text"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Text Effects →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 text-center">
          <p className="text-xs text-muted-foreground italic">
            All animations built with Framer Motion for optimal performance
          </p>
        </footer>
      </main>
    </div>
  );
}
