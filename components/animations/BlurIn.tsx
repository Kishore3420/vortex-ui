'use client';

import {
  Easing,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
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

interface BlurInProps {
  children: ReactNode;
  blur?: number;
  delay?: number;
  duration?: number;
  className?: string;
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean;
  viewportMargin?: string;
  once?: boolean;
}

export const BlurIn = ({
  children,
  blur = 10,
  delay = 0,
  duration = 0.6,
  className = '',
  easing = 'smooth',
  withFade = true,
  viewportMargin = '-100px',
  once = true,
}: BlurInProps) => {
  const blurValue = useMotionValue(blur);
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);

  const initial: Record<string, number> = {};

  if (withFade) {
    initial.opacity = 0;
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
      whileInView={{
        opacity: withFade ? 1 : undefined,
      }}
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
      style={{
        willChange: 'filter, opacity',
        filter: blurFilter,
      }}
      onViewportEnter={() => {
        animate(blurValue, 0, {
          duration,
          delay,
          ease: resolvedEasing,
        });
      }}
    >
      {children}
    </motion.div>
  );
};
