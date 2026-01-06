'use client';

import { motion } from 'framer-motion';

export interface AuroraProps {
  className?: string;
  speed?: number;
  colors?: string[];
  blur?: number;
  opacity?: number;
}

export const Aurora = ({
  className,
  speed = 20,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  blur = 60,
  opacity = 0.6,
}: AuroraProps) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
            filter: `blur(${blur}px)`,
            opacity: opacity
        }}
      >
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-70"
          style={{ backgroundColor: colors[0] }}
          animate={{
            x: ['0%', '20%', '0%'],
            y: ['0%', '10%', '0%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] rounded-full opacity-70"
          style={{ backgroundColor: colors[1] }}
          animate={{
            x: ['0%', '-20%', '0%'],
            y: ['0%', '15%', '0%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: speed * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full opacity-70"
          style={{ backgroundColor: colors[2] }}
          animate={{
            x: ['0%', '10%', '0%'],
            y: ['0%', '-20%', '0%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: speed * 0.8, // Slightly desync
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};
