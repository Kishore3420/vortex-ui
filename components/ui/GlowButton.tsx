'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowIntensity?: number;
  scaleOnHover?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'default';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-disabled'?: boolean;
}

export const GlowButton = ({
  children,
  className = '',
  glowColor,
  glowIntensity = 1,
  scaleOnHover = true,
  disabled,
  variant = 'default',
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  'aria-disabled': ariaDisabled,
}: GlowButtonProps) => {
  // Determine glow color based on variant if not provided
  const getGlowColor = () => {
    if (glowColor) return glowColor;

    // Use CSS variables - opacity will be controlled by the motion.div
    if (variant === 'primary') {
      return 'var(--color-primary)';
    } else if (variant === 'secondary') {
      return 'var(--color-secondary)';
    } else if (variant === 'accent') {
      return 'var(--color-accent)';
    }
    return 'var(--color-primary)';
  };

  const defaultGlowColor = getGlowColor();

  return (
    <motion.button
      className={`relative inline-flex items-center justify-center transition-opacity ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      whileHover={disabled || !scaleOnHover ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled ?? disabled}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-xl -z-10"
        style={{
          backgroundColor: defaultGlowColor,
          borderRadius: 'inherit',
          opacity: 0.5, // Base opacity, will be animated
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={
          disabled ? {} : { opacity: 0.5 * glowIntensity, scale: 1.2 }
        }
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />

      {/* Button content */}
      <span className="relative z-10 inline-flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};
