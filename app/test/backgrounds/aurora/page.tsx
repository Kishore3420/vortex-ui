'use client';

import { motion } from 'framer-motion';

// --- COMPONENT IMPLEMENTATION ---

interface AuroraProps {
  className?: string;
  speed?: number;
  colors?: string[];
  blur?: number;
  opacity?: number;
}

const Aurora = ({
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

// --- TEST PAGE ---

export default function AuroraExperiment() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="p-8 border-b bg-muted/10 z-10">
        <h1 className="text-3xl font-bold mb-2">Aurora Experiment</h1>
        <p className="text-muted-foreground">
          Ethereal, flowing blobs creating a &quot;Northern Lights&quot; effect.
        </p>
      </div>

      {/* Grid of Examples */}
      <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Example 1: Standard */}
        <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
             <Aurora />
          </div>
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center shadow-xl">
            <h2 className="text-2xl font-bold">Standard Aurora</h2>
            <p className="opacity-80">Default settings (Blur 60px, Opacity 0.6).</p>
          </div>
        </div>

        {/* Example 2: Sharp & Vivid */}
        <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Aurora
              colors={['#f59e0b', '#ef4444', '#7c3aed']}
              speed={15}
              blur={10} // Sharp edges
              opacity={0.8} // High transparency for vivid colors
            />
          </div>
           <div className="relative z-10 bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center shadow-xl">
            <h2 className="text-2xl font-bold text-white">Lava Lamp Mode</h2>
            <p className="text-white/80">Low blur (10px) creates distinct, moving shapes.</p>
          </div>
        </div>

         {/* Example 3: Cool/Mint */}
         <div className="relative h-100 border rounded-xl overflow-hidden flex items-center justify-center md:col-span-2">
          <div className="absolute inset-0 z-0">
            <Aurora
              colors={['#10b981', '#3b82f6', '#06b6d4']}
              speed={30}
              blur={90} // Extreme blur
              opacity={0.4}
            />
          </div>
           <div className="relative z-10 max-w-lg text-center p-8">
            <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Deep Ocean</h2>
            <p className="text-lg opacity-90 drop-shadow-sm">
              Using Emerald, Blue, and Cyan with a slow 25s duration to create a relaxing underwater vibe.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
