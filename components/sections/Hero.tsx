'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg,
            hsl(var(--primary)) 0%,
            hsl(var(--primary) / 0.8) 25%,
            hsl(var(--secondary)) 50%,
            hsl(var(--primary) / 0.9) 75%,
            hsl(var(--primary)) 100%)`,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Animated Orbs/Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'hsl(var(--primary) / 0.3)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'hsl(var(--secondary) / 0.3)' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <h1 className="text-7xl font-bold text-foreground mb-6">
          Welcome to the Future
        </h1>
        <p className="text-xl text-muted-foreground">
          Experience next-generation web design
        </p>
      </div>
    </section>
  );
};
