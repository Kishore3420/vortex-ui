'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WavyTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  amplitude?: number; // How far it moves (default: 8)
}

export const WavyText = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
  duration = 2,
  amplitude = 8,
}: WavyTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const letters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0 },
    show: {
      y: [0, -amplitude, 0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block whitespace-pre"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
