'use client';

import { Easing, motion, Transition } from 'framer-motion';
import { ReactNode } from 'react';
import type { EasingPreset } from './FadeIn';

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

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  animationType?: 'spring' | 'tween';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  offset?: number;
  withFade?: boolean;
  withScale?: boolean;
  scale?: number;
  easing?: EasingPreset | string | [number, number, number, number];
  springDamping?: number;
  springStiffness?: number;
  duration?: number;
}

export const StaggerItem = ({
  children,
  className = '',
  animationType = 'spring',
  direction = 'up',
  offset = 20,
  withFade = true,
  withScale = false,
  scale = 0.8,
  easing = 'easeOut',
  springDamping = 12,
  springStiffness = 100,
  duration = 0.5,
}: StaggerItemProps) => {
  const directionOffset = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
    none: { x: 0, y: 0 },
  };

  const slideOffset = directionOffset[direction];

  const hidden: Record<string, number> = {};

  if (withFade) {
    hidden.opacity = 0;
  }

  if (direction !== 'none') {
    hidden.x = slideOffset.x;
    hidden.y = slideOffset.y;
  }

  if (withScale) {
    hidden.scale = scale;
  }

  const visible: Record<string, number> = {};

  if (withFade) {
    visible.opacity = 1;
  }

  if (direction !== 'none') {
    visible.x = 0;
    visible.y = 0;
  }

  if (withScale) {
    visible.scale = 1;
  }

  const buildTransition = (): Transition => {
    if (animationType === 'spring') {
      return {
        type: 'spring',
        damping: springDamping,
        stiffness: springStiffness,
      };
    } else {
      const resolvedEasing =
        typeof easing === 'string' && easing in easingPresets
          ? easingPresets[easing as EasingPreset]
          : easing;

      return {
        type: 'tween',
        duration,
        ease: resolvedEasing as Easing | [number, number, number, number],
      };
    }
  };

  const itemVariants = {
    hidden,
    visible: {
      ...visible,
      transition: buildTransition(),
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
