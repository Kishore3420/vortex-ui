'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SparkleRevealProps {
  text: string;
  className?: string;
  sparkleColor?: string; // default: yellow/white
  delay?: number;
  staggerDelay?: number;
}

export const SparkleReveal = ({
  text,
  className = '',
  sparkleColor = '#FFD700',
  delay = 0,
  staggerDelay = 0.05,
}: SparkleRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const letters = text.split('');

  // Use deterministic pseudo-random values based on index to satisfy purity rules
  const getRandom = (i: number, seed: number) => {
    const val = Math.sin(i + seed) * 10000;
    return val - Math.floor(val);
  };



  return (
    <motion.div
      ref={ref}
      className={`inline-flex flex-wrap justify-center relative ${className}`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? {
            opacity: 1,
            scale: 1,
          } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * staggerDelay,
          }}
          className="relative inline-block whitespace-pre"
        >
          {char}
          {isInView && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                x: [0, (getRandom(i, 1) - 0.5) * 40],
                y: [0, (getRandom(i, 2) - 0.5) * 40],
              }}
              transition={{
                duration: 0.8,
                delay: delay + i * staggerDelay + getRandom(i, 3) * 0.2,
                ease: 'easeOut' as const,
              }}
              className="absolute top-0 left-0 w-1 h-1 rounded-full pointer-events-none"
              style={{ backgroundColor: sparkleColor, boxShadow: `0 0 5px ${sparkleColor}` }}
            />
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};

