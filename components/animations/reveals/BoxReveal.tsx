'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface BoxRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  boxColor?: string; // Color of the reveal box (default: var(--color-primary))
  duration?: number; // Duration for each part of the animation (default: 0.5)
  delay?: number; // Initial block delay (default: 0)
}

export const BoxReveal = ({
  children,
  width = 'fit-content',
  boxColor = 'var(--color-primary)',
  duration = 0.5,
  delay = 0,
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay + 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration, ease: 'easeIn', delay: delay }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: boxColor,
          zIndex: 20,
        }}
      />
    </div>
  );
};
