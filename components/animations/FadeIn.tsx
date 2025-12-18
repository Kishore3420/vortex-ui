'use client';

import { Easing, motion } from 'framer-motion';
import { ReactNode } from 'react';

export type EasingPreset =
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'linear'
  | 'bounce'
  | 'spring'
  | 'smooth'
  | 'sharp'
  | 'custom';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withSlide?: boolean;
  offset?: number;
  viewportMargin?: string;
  once?: boolean;
}

const easingPresets: Record<
  EasingPreset,
  Easing | [number, number, number, number]
> = {
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  linear: 'linear',
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.4, 0.25, 1],
  sharp: [0.4, 0, 0.2, 1],
  custom: [0.25, 0.4, 0.25, 1],
};

export const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  easing = 'smooth',
  withSlide = true,
  offset = 40,
  viewportMargin = '-100px',
  once = true,
}: FadeInProps) => {
  const directionOffset = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
    none: { x: 0, y: 0 },
  };

  const slideOffset = directionOffset[direction];

  const initial: Record<string, number> = {
    opacity: 0,
  };

  if (withSlide && direction !== 'none') {
    initial.x = slideOffset.x;
    initial.y = slideOffset.y;
  }

  const animate: Record<string, number> = {
    opacity: 1,
  };

  if (withSlide && direction !== 'none') {
    animate.x = 0;
    animate.y = 0;
  }

  const resolvedEasing: Easing | [number, number, number, number] = (() => {
    if (typeof easing === 'string' && easing in easingPresets) {
      return easingPresets[easing as EasingPreset];
    }
    return easing as Easing | [number, number, number, number];
  })();

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once,
        margin: viewportMargin,
      }}
      transition={{
        duration,
        delay,
        ease: resolvedEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
