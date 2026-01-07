'use client';

import {
    BlurIn,
    FadeIn,
    FlipIn,
    RotateIn,
    ScaleIn,
    StaggerContainer,
    StaggerItem
} from '@/components/animations';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const ShowcaseCard = ({
  title,
  description,
  children,
  className = ""
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) => (
  <div className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-xs transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 ${className}`}>
    <div className="absolute top-4 left-4">
       <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors">
         {title}
       </span>
    </div>
    <div className="flex-1 flex items-center justify-center w-full min-h-32 py-12">
      {children}
    </div>
    <div className="w-full text-center">
      <p className="text-xs text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        {description}
      </p>
    </div>
  </div>
);

export default function BasicsShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--color-primary-rgb),0.05)_0%,transparent_50%)] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-20">
        {/* Header */}
        <header className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase"
          >
            vortex-ui / basics
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Core <span className="text-primary">Animations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Fundamental building blocks for creating smooth, professional animations.
            Customizable easing, timing, and viewport controls.
          </motion.p>
        </header>

        {/* FadeIn Animations */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Fade & Slide</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ShowcaseCard title="Fade Up" description="Classic upward fade with smooth easing">
              <FadeIn direction="up">
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Fade Up ↑
                </div>
              </FadeIn>
            </ShowcaseCard>

            <ShowcaseCard title="Fade Down" description="Downward motion from top">
              <FadeIn direction="down">
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Fade Down ↓
                </div>
              </FadeIn>
            </ShowcaseCard>

            <ShowcaseCard title="Fade Left" description="Horizontal motion from right">
              <FadeIn direction="left">
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Fade Left ←
                </div>
              </FadeIn>
            </ShowcaseCard>

            <ShowcaseCard title="Fade Right" description="Horizontal motion from left">
              <FadeIn direction="right">
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Fade Right →
                </div>
              </FadeIn>
            </ShowcaseCard>

            <ShowcaseCard title="F ade Only" description="Pure opacity transition, no movement">
              <FadeIn direction="none" withSlide={false}>
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Pure Fade
                </div>
              </FadeIn>
            </ShowcaseCard>

            <ShowcaseCard title="Bounce Easing" description="Playful bounce effect on entry">
              <FadeIn direction="up" easing="bounce">
                <div className="px-8 py-4 rounded-lg bg-primary/10 text-primary font-semibold">
                  Bouncy! 🎾
                </div>
              </FadeIn>
            </ShowcaseCard>
          </div>
        </section>

        {/* ScaleIn Animations */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Scale & Grow</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ShowcaseCard title="Scale In" description="Smooth scale from small to normal">
              <ScaleIn scale={0.5}>
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold">
                  0.5
                </div>
              </ScaleIn>
            </ShowcaseCard>

            <ShowcaseCard title="Scale + Bounce" description="Elastic bouncy scale effect">
              <ScaleIn scale={0.3} easing="bounce">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  🎈
                </div>
              </ScaleIn>
            </ShowcaseCard>

            <ShowcaseCard title="Scale Only" description="No fade, pure scaling motion">
              <ScaleIn scale={0.6} withFade={false} easing="sharp">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
                  ▲
                </div>
              </ScaleIn>
            </ShowcaseCard>
          </div>
        </section>

        {/* RotateIn Animations */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Rotate & Spin</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ShowcaseCard title="Rotate Clockwise" description="180° clockwise rotation">
              <RotateIn direction="clockwise" angle={180}>
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-3xl font-bold">
                  ⟳
                </div>
              </RotateIn>
            </ShowcaseCard>

            <ShowcaseCard title="Counter-Clockwise" description="180° counter-clockwise spin">
              <RotateIn direction="counterclockwise" angle={180}>
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl font-bold">
                  ⟲
                </div>
              </RotateIn>
            </ShowcaseCard>

            <ShowcaseCard title="Full 360°" description="Complete rotation with bounce">
              <RotateIn direction="clockwise" angle={360} easing="bounce">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-bold">
                  🌀
                </div>
              </RotateIn>
            </ShowcaseCard>
          </div>
        </section>

        {/* Blur & Flip */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Blur & Flip</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ShowcaseCard title="Blur In" description="Smooth unblur from 10px to clear">
              <BlurIn blur={10} duration={1.2}>
                <div className="px-12 py-6 rounded-xl bg-primary/10 text-primary text-2xl font-bold">
                  Coming Into Focus
                </div>
              </BlurIn>
            </ShowcaseCard>

            <ShowcaseCard title="Flip In" description="3D flip effect with perspective">
              <FlipIn>
                <div className="px-12 py-6 rounded-xl bg-linear-to-br from-pink-500 to-rose-500 text-white text-2xl font-bold">
                  Flip! 🎴
                </div>
              </FlipIn>
            </ShowcaseCard>
          </div>
        </section>

        {/* Stagger Animations */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Stagger & Sequence</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-2xl border border-border bg-card/50">
              <h3 className="text-lg font-bold mb-6 text-center">Sequential List</h3>
              <StaggerContainer staggerDelay={0.15}>
                {['First Item', 'Second Item', 'Third Item', 'Fourth Item'].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="mb-4 p-4 rounded-lg bg-primary/10 text-primary font-semibold">
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card/50">
              <h3 className="text-lg font-bold mb-6 text-center">Grid Stagger</h3>
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <StaggerItem key={num} withScale scale={0.7} easing="spring" animationType="tween">
                    <div className="aspect-square rounded-xl bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold">
                      {num}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-border text-center">
          <p className="text-muted-foreground text-sm italic">
            All animations support customizable easing, duration, and viewport triggers
          </p>
        </footer>
      </main>
    </div>
  );
}
