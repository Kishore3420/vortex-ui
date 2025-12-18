'use client';

import Lenis from 'lenis';
import { ReactNode, useEffect, useRef } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
  duration?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  smoothWheel?: boolean;
  disabled?: boolean;
}

export const SmoothScroll = ({
  children,
  duration = 1.2,
  wheelMultiplier = 1,
  touchMultiplier = 2,
  smoothWheel = true,
  disabled = false,
}: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (disabled || prefersReducedMotion) {
      return;
    }

    try {
      const lenis = new Lenis({
        duration,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel,
        wheelMultiplier,
        touchMultiplier,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          rafIdRef.current = requestAnimationFrame(raf);
        }
      }

      rafIdRef.current = requestAnimationFrame(raf);

      return () => {
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      };
    } catch (error) {
      console.warn('Failed to initialize smooth scroll:', error);
    }
  }, [duration, wheelMultiplier, touchMultiplier, smoothWheel, disabled]);

  return <>{children}</>;
};
