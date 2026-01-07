'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlurRevealProps {
  text: string;
  className?: string;
  blur?: number;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  animateBy?: 'word' | 'character' | 'text';
  once?: boolean;
}

export const BlurReveal = ({
  text,
  className = '',
  blur = 10,
  duration = 0.8,
  delay = 0,
  staggerDelay = 0.05,
  animateBy = 'word',
  once = true,
}: BlurRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-20%' });

  const elements = animateBy === 'word' ? text.split(' ') : text.split('');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      filter: `blur(${blur}px)`,
      opacity: 0,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        duration,
        ease: 'easeOut' as const,
      },
    },
  };

  if (animateBy === 'text') {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={itemVariants}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={`inline-block ${className}`}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block whitespace-pre"
        >
          {el}
          {animateBy === 'word' && i < elements.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.div>
  );
};
