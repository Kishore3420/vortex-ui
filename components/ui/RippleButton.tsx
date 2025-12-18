'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ButtonHTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface RippleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: React.ReactNode;
  rippleColor?: string;
  rippleDuration?: number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
  size: number;
}

export const RippleButton = ({
  children,
  className = '',
  rippleColor = 'rgba(255, 255, 255, 0.5)',
  rippleDuration = 0.6,
  disabled,
  onClick,
  ...buttonProps
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;

      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate ripple size based on button dimensions
      const size = Math.max(rect.width, rect.height) * 2;

      const newRipple: Ripple = {
        x,
        y,
        id: Date.now() + Math.random(),
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation with proper cleanup
      const timeout = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        timeoutRefs.current.delete(timeout);
      }, rippleDuration * 1000);

      timeoutRefs.current.add(timeout);

      onClick?.(e);
    },
    [disabled, onClick, rippleDuration]
  );

  // Cleanup timeouts on unmount
  useEffect(() => {
    const timeouts = timeoutRefs.current;
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      timeouts.clear();
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden inline-flex items-center justify-center transition-opacity ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      {...buttonProps}
    >
      {children}

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              backgroundColor: rippleColor,
            }}
            initial={{
              width: 0,
              height: 0,
              x: '-50%',
              y: '-50%',
              opacity: 0.6,
            }}
            animate={{
              width: ripple.size,
              height: ripple.size,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: rippleDuration, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};
