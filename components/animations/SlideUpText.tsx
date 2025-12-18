'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideUpTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const SlideUpText = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  viewportMargin = '-100px',
  once = true,
}: SlideUpTextProps) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{
          once,
          margin: viewportMargin,
        }}
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
