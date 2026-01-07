'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

const CategoryCard = ({
  href,
  title,
  description,
  icon,
  gradient,
  itemCount,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  itemCount: string;
}) => (
  <Link href={href}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

      {/* Icon */}
      <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        {icon}
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {itemCount}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Hover Arrow */}
      <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
        Explore
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  </Link>
);

export default function TestIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.05)_0%,transparent_50%)] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-16">
        {/* Header */}
        <header className="space-y-8 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase"
          >
            vortex-ui / testing suite
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Animation <span className="text-primary">Showcase</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Explore our comprehensive collection of premium animations, effects, and components.
            Each showcase demonstrates real-world usage and customization options.
          </motion.p>
        </header>

        {/* Category Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            href="/test/basics"
            title="Basic Animations"
            description="Core animation building blocks including FadeIn, ScaleIn, RotateIn, and Stagger effects with comprehensive easing options."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            gradient="from-blue-500 to-cyan-500"
            itemCount="6 animations"
          />

          <CategoryCard
            href="/test/text"
            title="Text Effects"
            description="15+ premium text animations from smooth reveals to interactive glitches, organized by complexity and use case."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            }
            gradient="from-purple-500 to-pink-500"
            itemCount="15 variants"
          />

          <CategoryCard
            href="/test/buttons"
            title="Interactive Buttons"
            description="Button components with ripple, magnetic, glow, shimmer, and 3D effects for modern interfaces."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            }
            gradient="from-orange-500 to-red-500"
            itemCount="6 buttons"
          />

          <CategoryCard
            href="/test/backgrounds/aurora"
            title="Background Effects"
            description="Immersive background animations including Aurora, Grid Beams, Shooting Stars, Mesh Gradient, and Spotlight."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            }
            gradient="from-green-500 to-emerald-500"
            itemCount="5 backgrounds"
          />

          <CategoryCard
            href="/test/hero"
            title="Hero Sections"
            description="Complete hero section variants combining text animations, backgrounds, and interactive elements."
            icon={
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            gradient="from-indigo-500 to-purple-500"
            itemCount="3 variants"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-dashed border-border/50 bg-card/30 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-muted-foreground">More Coming Soon</h3>
              <p className="text-sm text-muted-foreground/70 mt-2">
                New animation categories in development
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border text-center">
          <p className="text-sm text-muted-foreground italic">
            Built with Framer Motion, GSAP, and Three.js for Next.js 16 & React 19
          </p>
        </footer>
      </main>
    </div>
  );
}
