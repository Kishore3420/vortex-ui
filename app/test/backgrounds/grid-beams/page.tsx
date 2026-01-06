'use client';

import { motion } from 'framer-motion';

// --- COMPONENT IMPLEMENTATION ---

interface GridBeamsProps {
  className?: string;
  cellSize?: number;
  gridColor?: string;
  beamColor?: string;
  beamWidth?: number;
  beamDuration?: number;
  numBeams?: number;
  mask?: boolean;
}

const GridBeams = ({
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

// --- TEST PAGE ---

export default function GridBeamsExperiment() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="p-8 border-b bg-muted/10 z-10">
        <h1 className="text-3xl font-bold mb-2">Grid Beams Experiment</h1>
        <p className="text-muted-foreground">
          Structural SVG grid with animated light beams traveling along the lines.
        </p>
      </div>

      {/* Grid of Examples */}
      <div className="flex-1 p-8 grid grid-cols-1 gap-8">

        {/* Example: High Tech Grid */}
        <div className="relative h-150 border rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <GridBeams
                    cellSize={40}
                    numBeams={6}
                    gridColor="text-neutral-500/20"
                />
            </div>

            <div className="relative z-30 p-10 max-w-2xl text-center bg-background/50 backdrop-blur-sm border rounded-xl shadow-lg">
                <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-primary/10 text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h2 className="text-4xl font-bold mb-4 tracking-tight">Constructing the Future</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    The grid represents structure and reliability. The moving beams suggest active data transmission and energy.
                </p>
            </div>
        </div>

        {/* Example: Neon / Cyberpunk */}
        <div className="relative h-150 border rounded-xl overflow-hidden flex items-center justify-center bg-slate-950">
             <div className="absolute inset-0 z-0">
                <GridBeams
                    cellSize={50}
                    beamColor="via-pink-500"
                    gridColor="text-pink-500/30"
                    beamWidth={2}
                    beamDuration={3}
                    numBeams={4}
                />
            </div>
            <div className="relative z-10 text-white font-mono text-xl bg-black/50 p-4 border border-pink-500/50 rounded pointer-events-none">
                SYSTEM.ACTIVATED()
            </div>
        </div>
    </div>
    </div>
  );
}
