'use client';

import { motion } from 'framer-motion';

export interface SpotlightProps {
  className?: string;
  size?: number; // percentage (default: 70)
  speed?: number; // duration in seconds (default: 10)
  color?: string; // override color string (e.g. "hsl(270, 100%, 60%)")
}

export const Spotlight = ({
  className,
  size = 70,
  speed = 10,
  color,
}: SpotlightProps) => {
  const containerStyle = color
    ? ({ '--color-primary': color } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
      style={containerStyle}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent ${size}%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], // Opacity manages the "glow" intensity
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
