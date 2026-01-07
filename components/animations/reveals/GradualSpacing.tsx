'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface GradualSpacingProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  initialSpacing?: string; // e.g. "-0.5em" or "1em"
}

export const GradualSpacing = ({
  text,
  className = '',
  duration = 0.5,
  delay = 0,
  staggerDelay = 0.03,
  initialSpacing = '-0.1em',
}: GradualSpacingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={`flex justify-center ${className}`}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.h1
            key={i}
            ref={ref}
            initial={{ opacity: 0, x: -10, letterSpacing: initialSpacing }}
            animate={isInView ? { opacity: 1, x: 0, letterSpacing: '0em' } : {}}
            exit={{ opacity: 0 }}
            transition={{
                duration: duration,
                delay: delay + (i * staggerDelay),
                ease: "easeOut"
            }}
            className="whitespace-pre"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};
