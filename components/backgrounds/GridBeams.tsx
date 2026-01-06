'use client';

import { motion } from 'framer-motion';

export interface GridBeamsProps {
  className?: string;
  cellSize?: number;
  gridColor?: string;
  beamColor?: string;
  beamWidth?: number;
  beamDuration?: number;
  numBeams?: number;
  mask?: boolean;
}

export const GridBeams = ({
  className,
  cellSize = 50,
  gridColor = 'text-neutral-500/20',
  beamColor = 'via-blue-500',
  beamWidth = 1,
  beamDuration = 4,
  numBeams = 3,
  mask = true,
}: GridBeamsProps) => {
  const beams = Array.from({ length: numBeams }).map((_, i) => ({
    id: i,
    offset: i * 2 + 1,
    delay: i * 1.2,
    duration: beamDuration + (i % 2),
    horizontal: i % 3 === 0,
  }));

  const gradientClass = beamColor.startsWith('bg-')
    ? beamColor.replace('bg-', 'via-')
    : beamColor;

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className={gridColor} // Apply text class here
        >
           <defs>
            <pattern
              id={`grid-pattern-${cellSize}`}
              width={cellSize}
              height={cellSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
                fill="none"
                strokeWidth="1"
                stroke="currentColor" // Inherit color from the parent SVG (which has the text class)
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#grid-pattern-${cellSize})`}
          />
        </svg>
      </div>

      {/* 2. Moving Beams */}
      {beams.map((beam) => (
        <motion.div
           key={beam.id}
           className={`absolute z-10 bg-gradient-to-${beam.horizontal ? 'r' : 'b'} from-transparent ${gradientClass} to-transparent opacity-40`}
           style={{
             width: beam.horizontal ? '100%' : `${beamWidth}px`,
             height: beam.horizontal ? `${beamWidth}px` : '100%',
             left: beam.horizontal ? 0 : `${beam.offset * cellSize}px`,
             top: beam.horizontal ? `${beam.offset * cellSize}px` : 0,
           }}
           initial={
             beam.horizontal
             ? { translateX: '-100%' }
             : { translateY: '-100%' }
           }
           animate={
             beam.horizontal
             ? { translateX: '100%' }
             : { translateY: '100%' }
           }
           transition={{
             duration: beam.duration,
             repeat: Infinity,
             ease: 'linear',
             delay: beam.delay,
           }}
        />
      ))}

       {/* Radial Gradient Mask for "Fade Out" effect */}
       {mask && (
         <div className="absolute inset-0 z-20 pointer-events-none" style={{
           background: 'radial-gradient(circle at center, transparent 0%, var(--color-background) 100%)'
         }} />
       )}

    </div>
  );
};
