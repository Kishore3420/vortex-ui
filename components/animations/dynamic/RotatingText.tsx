'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
  texts: string[];
  className?: string;
  duration?: number; // How long each text stays (seconds, default: 2.5)
  transitionDuration?: number; // Animation duration (seconds, default: 0.5)
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const RotatingText = ({
  texts,
  className = '',
  duration = 2.5,
  transitionDuration = 0.5,
  direction = 'up',
}: RotatingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [texts, duration]);

  const variants = {
    up: {
        initial: { y: '100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '-100%', opacity: 0 },
    },
    down: {
        initial: { y: '-100%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: '100%', opacity: 0 },
    },
    left: {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
    },
    right: {
        initial: { x: '-100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    },
  };

  const selectedVariants = variants[direction];

  return (
    <div className={`relative inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={selectedVariants.initial}
          animate={selectedVariants.animate}
          exit={selectedVariants.exit}
          transition={{ duration: transitionDuration, ease: 'easeInOut' }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
