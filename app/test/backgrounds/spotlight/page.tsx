'use client';

import { motion } from 'framer-motion';

// --- COMPONENT IMPLEMENTATION (From Tutorial) ---

interface SpotlightProps {
  className?: string;
  size?: number; // percentage (default: 70)
  speed?: number; // duration in seconds (default: 10)
  color?: string; // override color string (e.g. "hsl(270, 100%, 60%)")
}

const Spotlight = ({
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

// --- TEST PAGE ---

export default function SpotlightExperiment() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="p-8 border-b bg-muted/10 z-10">
        <h1 className="text-3xl font-bold mb-2">Spotlight Experiment</h1>
        <p className="text-muted-foreground">
          Single breathing radial gradient for focused ambient lighting.
        </p>
      </div>

      {/* Grid of Examples */}
      <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Example 1: Standard Primary Color */}
        <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Spotlight />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold">Primary Glow</h2>
            <p className="opacity-70">Default settings (Size 70%, Speed 10s)</p>
          </div>
        </div>

        {/* Example 2: Custom Color Override (Purple) */}
        <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Spotlight
              color="hsl(270, 100%, 60%)"
              speed={4}
              size={50}
            />
          </div>
           <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold">Small & Fast Purple</h2>
            <p className="opacity-70">Size 50%, Speed 4s</p>
          </div>
        </div>

         {/* Example 3: Custom Color Override (Cyan) */}
         <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center md:col-span-2">
          <div className="absolute inset-0 z-0">
            <Spotlight
              color="hsl(190, 100%, 50%)"
              size={90}
              speed={15}
            />
          </div>
           <div className="relative z-10 text-center max-w-md">
            <h2 className="text-4xl font-bold mb-4">Wide Cyan Spotlight</h2>
            <p className="text-lg opacity-80">
              Huge spread (90%) with a slow, relaxing 15s breathing cycle.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
