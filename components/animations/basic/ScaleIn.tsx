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

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean;
  transformOrigin?: string;
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.8,
  className = '',
  easing = 'bounce',
  withFade = true,
  transformOrigin = 'center',
}: ScaleInProps) => {
  const initial: Record<string, number> = {
    scale,
  };

  if (withFade) {
    initial.opacity = 0;
  }

  const animate: Record<string, number> = {
    scale: 1,
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
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration,
        delay,
        ease: resolvedEasing,
      }}
      className={className}
      style={{
        transformOrigin,
      }}
    >
      {children}
    </motion.div>
  );
};
