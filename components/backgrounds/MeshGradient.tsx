'use client';

import { motion } from 'framer-motion';

const gradientBackground = `
  radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)
`;

export interface MeshGradientProps {
  className?: string;
  speed?: number; // Duration in seconds (default: 8)
  opacityRange?: [number, number]; // [min, max] opacity (default: [0.6, 0.8])
}

export const MeshGradient = ({
  className,
  speed = 8,
  opacityRange = [0.6, 0.8],
}: MeshGradientProps) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
    >
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: gradientBackground,
        }}
        animate={{
          opacity: [opacityRange[0], opacityRange[1], opacityRange[0]],
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
