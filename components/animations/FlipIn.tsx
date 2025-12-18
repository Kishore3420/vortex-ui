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

interface FlipInProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical' | 'both';
  angle?: number;
  delay?: number;
  duration?: number;
  className?: string;
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean;
  perspective?: number;
  viewportMargin?: string;
  once?: boolean;
}

export const FlipIn = ({
  children,
  direction = 'horizontal',
  angle = 90,
  delay = 0,
  duration = 0.6,
  className = '',
  easing = 'easeOut',
  withFade = true,
  perspective = 1000,
  viewportMargin = '-100px',
  once = true,
}: FlipInProps) => {
  const getInitialRotation = () => {
    switch (direction) {
      case 'horizontal':
        return { rotateX: angle, rotateY: 0 };
      case 'vertical':
        return { rotateX: 0, rotateY: angle };
      case 'both':
        return { rotateX: angle, rotateY: angle };
      default:
        return { rotateX: angle, rotateY: 0 };
    }
  };

  const initialRotation = getInitialRotation();

  const initial: Record<string, number> = {
    ...initialRotation,
  };

  if (withFade) {
    initial.opacity = 0;
  }

  const animate: Record<string, number> = {
    rotateX: 0,
    rotateY: 0,
  };

  if (withFade) {
    animate.opacity = 1;
  }

  const resolvedEasing: Easing | [number, number, number, number] = (() => {
    if (typeof easing === 'string' && easing in easingPresets) {
      return easingPresets[easing as EasingPreset];
    }
    return easing as Easing | [number, number, number, number];
  })();

  return (
    <div
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
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
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

