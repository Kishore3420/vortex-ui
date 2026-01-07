'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ElasticRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export const ElasticReveal = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
  duration = 0.8,
}: ElasticRevealProps) => {
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
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 10,
        mass: 0.5,
        duration,
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
