'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface WordPullUpProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
}

export const WordPullUp = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
}: WordPullUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(' ');

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
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration,
            ease: "easeOut" as const
        }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`flex flex-wrap gap-x-[0.25em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
