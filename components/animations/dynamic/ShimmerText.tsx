'use client';

import { motion } from 'framer-motion';

interface ShimmerTextProps {
  text: string;
  className?: string;
  shimmerColor?: string; // Color of the shimmer (default: white/alpha)
  duration?: number; // Speed of the shimmer (default: 2)
}

export const ShimmerText = ({
  text,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.4)',
  duration = 2,
}: ShimmerTextProps) => {
  return (
    <div
      className={`relative inline-block bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/50 to-foreground ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
      }}
    >
      <motion.span
        animate={{
          backgroundPosition: ['100% 0%', '-100% 0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block bg-clip-text"
        style={{
             backgroundImage: `linear-gradient(90deg, currentColor 40%, ${shimmerColor} 50%, currentColor 60%)`,
             backgroundSize: '200% 100%',
             WebkitBackgroundClip: 'text',
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};
