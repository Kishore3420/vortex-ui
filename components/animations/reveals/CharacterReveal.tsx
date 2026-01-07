'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CharacterRevealProps {
  text: string;
  delay?: number;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
  once?: boolean;
}

export const CharacterReveal = ({
  text,
  delay = 0,
  className = '',
  staggerDelay = 0.03,
  viewportMargin = '-100px',
  once = true,
}: CharacterRevealProps) => {
  const characters = useMemo(() => text.split(''), [text]);

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
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 200,
      },
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
      style={{ display: 'inline-block' }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
