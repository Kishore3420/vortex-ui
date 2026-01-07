'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RotatingContent as RotatingContentType } from '../types';

interface RotatingContentProps {
  content: RotatingContentType[];
  duration?: number;
  transitionDuration?: number;
  className?: string;
}

export const RotatingContent = ({
  content,
  duration = 3.5,
  transitionDuration = 0.6,
  className = '',
}: RotatingContentProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (content.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [content, duration]);

  const variants = {
    initial: {
      rotateX: 90,
      opacity: 0,
      transformOrigin: 'center',
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      transformOrigin: 'center',
    },
    exit: {
      rotateX: -90,
      opacity: 0,
      transformOrigin: 'center',
    },
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: transitionDuration,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
          className="space-y-2"
        >
          <h3 className="text-lg md:text-xl lg:text-2xl text-zinc-100 font-medium text-left">
            {content[index].heading}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-zinc-400 whitespace-pre-line text-left">
            {content[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
