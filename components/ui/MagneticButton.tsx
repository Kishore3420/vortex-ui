'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useCallback, useRef } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-disabled'?: boolean;
}

export const MagneticButton = ({
  children,
  className = '',
  strength = 0.3,
  springConfig = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  },
  disabled,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-disabled': ariaDisabled,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current || disabled) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = (clientX - centerX) * strength;
      const distanceY = (clientY - centerY) * strength;

      x.set(distanceX);
      y.set(distanceY);
    },
    [strength, disabled, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled ?? disabled}
      className={`relative inline-flex items-center justify-center transition-opacity ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};
