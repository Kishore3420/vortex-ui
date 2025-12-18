'use client';

import { motion } from 'framer-motion';

// Variant 1: Mesh Gradient
export const MeshGradientHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Mesh Gradient Effect */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 text-center px-8">
        <h1 className="text-7xl font-bold text-foreground">Mesh Gradient</h1>
      </div>
    </section>
  );
};

// Variant 2: Spotlight Effect
export const SpotlightHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 text-center px-8">
        <h1 className="text-7xl font-bold text-foreground">Spotlight Effect</h1>
      </div>
    </section>
  );
};
