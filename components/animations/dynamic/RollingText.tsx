'use client';

import { motion } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
}

export const RollingText = ({
  text,
  className = '',
  duration = 0.5,
  delay = 0,
  staggerDelay = 0.05,
}: RollingTextProps) => {
  const characters = text.split('');

  return (
    <div className={`flex overflow-hidden leading-none ${className}`}>
      {characters.map((char, i) => (
        <div key={i} className="relative h-[1em]">
          <motion.div
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{
              duration,
              delay: delay + i * staggerDelay,
              ease: [0.45, 0.05, 0.55, 0.95],
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 2,
            }}
          >
            <span className="block">{char}</span>
            <span className="block">{char}</span>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
