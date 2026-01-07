'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchSpeed?: number; // frequency (ms, default: 200)
  enableHover?: boolean; // glitch only on hover (default: false)
}

export const GlitchText = ({
  text,
  className = '',
  glitchSpeed = 200,
  enableHover = false,
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(!enableHover);

  const glitchVariants = {
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 2, -2, 0],
      filter: [
        'none',
        'hue-rotate(90deg) border-red-500',
        'hue-rotate(-90deg) border-blue-500',
        'none',
      ],
      transition: {
        duration: glitchSpeed / 1000,
        repeat: Infinity,
        repeatType: 'mirror' as const,
      },
    },
    idle: { x: 0, y: 0, filter: 'none' },
  };

  return (
    <div
      className={`relative inline-block cursor-default ${className}`}
      onMouseEnter={() => enableHover && setIsGlitching(true)}
      onMouseLeave={() => enableHover && setIsGlitching(false)}
    >
      <motion.span
        animate={isGlitching ? 'glitch' : 'idle'}
        variants={glitchVariants}
        className="relative z-10 block"
      >
        {text}
      </motion.span>

      {isGlitching && (
        <>
          <motion.span
             animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
             transition={{ duration: 0.1, repeat: Infinity }}
             className="absolute top-0 left-0 -z-10 text-red-500/50 mix-blend-screen"
          >
            {text}
          </motion.span>
          <motion.span
             animate={{ x: [2, -2, 2], opacity: [0.5, 0.8, 0.5] }}
             transition={{ duration: 0.15, repeat: Infinity }}
             className="absolute top-0 left-0 -z-10 text-blue-500/50 mix-blend-screen"
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
};
