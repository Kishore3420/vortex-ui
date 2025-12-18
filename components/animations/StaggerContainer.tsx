'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className = '',
  viewportMargin = '-100px',
  once = true,
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: viewportMargin,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
