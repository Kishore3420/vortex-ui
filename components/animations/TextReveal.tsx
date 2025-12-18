'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export const TextReveal = ({
  text,
  delay = 0,
  className = '',
  staggerDelay = 0.12,
  viewportMargin = '-100px',
  once = true,
}: TextRevealProps) => {
  const words = useMemo(() => text.split(' '), [text]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: viewportMargin,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={`${word}-${index}`}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
