'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: number;
  borderRadius?: string;
}

export const ShimmerButton = ({
  children,
  className = "",
  shimmerColor = "rgba(255, 255, 255, 0.2)",
  shimmerDuration = 3,
  borderRadius = "8px",
  ...props
}: ShimmerButtonProps) => {
  return (
    <button
      className={`relative overflow-hidden px-8 py-4 bg-slate-900 text-white font-bold transition-transform active:scale-95 ${className}`}
      style={{ borderRadius }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: shimmerDuration,
          ease: 'linear',
          repeatDelay: 0.5,
        }}
        style={{
           background: `linear-gradient(
              110deg,
              transparent 35%,
              ${shimmerColor} 50%,
              transparent 65%
           )`,
           width: '200%',
           left: '-50%'
        }}
      />
    </button>
  );
};
