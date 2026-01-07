'use client';

import {
  // BlurReveal,
  BoxReveal,
  ElasticReveal,
  GlitchText,
  GradualSpacing,
  LetterPullUp,
  LinkReveal,
  RollingText,
  RotatingText,
  ScrambleReveal,
  ShimmerText,
  SparkleReveal,
  TextMask,
  WavyText,
  WordPullUp,
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

export default function TextShowcase() {
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
            vortex-ui / typography
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
             Text <span className="text-primary">Animations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A collection of 15+ premium text effects for modern web interfaces.
            From smooth reveals to interactive glitches.
          </motion.p>
        </header>

        {/* Batch 1: Modern Reveals */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Modern Reveals</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <ShowcaseCard title="Blur Reveal" description="Smoothly transition from blurred characters to clear.">
               <BlurReveal text="Blurry vision becomes clear" className="text-3xl font-bold" animateBy="character" />
            </ShowcaseCard> */}
            <ShowcaseCard title="Scramble Reveal" description="Digital character jitter that settles into text.">
               <ScrambleReveal text="DECODING REALITY" className="text-3xl font-mono uppercase" />
            </ShowcaseCard>
            <ShowcaseCard title="Box Reveal" description="Minimalist entrance sliding out from a block.">
               <BoxReveal boxColor="var(--color-primary)">
                 <h3 className="text-3xl font-bold italic">Unveiling the Hidden</h3>
               </BoxReveal>
            </ShowcaseCard>
            <ShowcaseCard title="Gradual Spacing" description="Expanding letter spacing reveal effect.">
               <GradualSpacing text="EXPANSION" className="text-4xl font-black uppercase text-primary" initialSpacing="1em" />
            </ShowcaseCard>
          </div>
        </section>

        {/* Batch 2: Physics & Flow */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Physics & Flow</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <ShowcaseCard title="Word Pull Up" description="Words slide up from the bottom with a natural ease.">
               <WordPullUp text="Smooth word by word entrance" className="text-3xl font-bold" />
            </ShowcaseCard>
            <ShowcaseCard title="Letter Pull Up" description="Characters pull up sequentially for a playful feel.">
               <LetterPullUp text="Playful Letters" className="text-4xl font-extrabold text-accent" />
            </ShowcaseCard>
            <ShowcaseCard title="Wavy Text" description="Continuous wave motion across text.">
               <WavyText text="Ripples in space and time" className="text-3xl font-bold text-primary" amplitude={12} />
            </ShowcaseCard>
            <ShowcaseCard title="Elastic Reveal" description="Spring-based bouncy entrance for characters.">
               <ElasticReveal text="BOUNCY REVEAL" className="text-4xl font-black uppercase" />
            </ShowcaseCard>
          </div>
        </section>

        {/* Batch 3: Ambient Effects */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Ambient Effects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ShowcaseCard title="Rotating Text" description="Cycle through headlines with smooth transitions.">
                <div className="text-3xl font-bold">
                  Design for{' '}
                  <RotatingText
                    texts={['Modernity', 'Performance', 'Delight']}
                    className="text-primary italic"
                    direction="up"
                  />
                </div>
             </ShowcaseCard>
             <ShowcaseCard title="Shimmer Text" description="Add a glossy moving sheen to your text.">
                <ShimmerText text="Premium Shimmer Effect" className="text-4xl font-black" />
             </ShowcaseCard>
             <ShowcaseCard title="Rolling Text" description="Looping slot machine / counter style animation.">
                <RollingText text="2025" className="text-5xl font-mono font-bold text-primary" />
             </ShowcaseCard>
             <ShowcaseCard title="Sparkle Reveal" description="Characters appear with subtle glowing particles.">
                <SparkleReveal text="Magical Reveal" className="text-4xl font-bold" />
             </ShowcaseCard>
          </div>
        </section>

        {/* Batch 4: Creative & Advanced */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">Creative & Advanced</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <ShowcaseCard title="Glitch Text" description="Digital distortion on load or hover.">
                <GlitchText text="SYSTEM OVERRIDE" className="text-3xl font-black font-mono italic" />
             </ShowcaseCard>
             <ShowcaseCard title="Link Reveal" description="Premium hover experience for navigation.">
                <LinkReveal className="text-3xl font-bold">
                   Explore Collection
                </LinkReveal>
             </ShowcaseCard>
             <ShowcaseCard title="Text Mask" description="Image or video clipped background in text.">
                <TextMask text="COSMOS" className="text-7xl font-black" />
             </ShowcaseCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-border text-center">
          <p className="text-muted-foreground text-sm italic">
            Part of the Vortex UI Advanced Typography Suite.
          </p>
        </footer>
      </main>
    </div>
  );
}
