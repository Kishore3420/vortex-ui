'use client';

import { Easing, motion } from 'framer-motion';
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

interface RotateInProps {
  children: ReactNode;
  direction?: 'clockwise' | 'counterclockwise' | 'both';
  angle?: number;
  delay?: number;
  duration?: number;
  className?: string;
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean;
  withScale?: boolean;
  scale?: number;
}

export const RotateIn = ({
  children,
  direction = 'clockwise',
  angle = 180,
  delay = 0,
  duration = 0.6,
  className = '',
  easing = 'easeOut',
  withFade = true,
  withScale = false,
  scale = 0.8,
}: RotateInProps) => {
  const getInitialRotation = () => {
    const baseAngle = angle;
    switch (direction) {
      case 'clockwise':
        return baseAngle;
      case 'counterclockwise':
        return -baseAngle;
      case 'both':
        return baseAngle;
      default:
        return baseAngle;
    }
  };

  const initialRotation = getInitialRotation();

  const initial: Record<string, number | string> = {
    rotate: initialRotation,
  };

  if (withFade) {
    initial.opacity = 0;
  }

  if (withScale) {
    initial.scale = scale;
  }

  const animate: Record<string, number> = {
    rotate: 0,
  };

  if (withFade) {
    animate.opacity = 1;
  }

  if (withScale) {
    animate.scale = 1;
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
        once: true,
        margin: '-100px',
      }}
      transition={{
        duration,
        delay,
        ease: resolvedEasing,
      }}
      className={className}
      style={{
        transformOrigin: 'center',
      }}
    >
      {children}
    </motion.div>
  );
};
