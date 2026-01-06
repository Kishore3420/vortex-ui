'use client';

import { motion } from 'framer-motion';

// --- COMPONENT IMPLEMENTATION (From Tutorial) ---

const gradientBackground = `
  radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
  radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
  radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)
`;

interface MeshGradientProps {
  className?: string;
  speed?: number; // Duration in seconds (default: 8)
  opacityRange?: [number, number]; // [min, max] opacity (default: [0.6, 0.8])
}

const MeshGradient = ({
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

// --- TEST PAGE ---

export default function MeshGradientExperiment() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="p-8 border-b bg-muted/20 z-10">
        <h1 className="text-3xl font-bold mb-2">Mesh Gradient Experiment</h1>
        <p className="text-muted-foreground">
          Now with customizable speed and opacity intensity.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

        {/* Variant 1: Default */}
        <div className="relative h-100 rounded-xl overflow-hidden border border-border shadow-sm flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <MeshGradient />
          </div>
          <div className="relative z-10 bg-white/20 backdrop-blur-md p-6 rounded-lg text-center border border-white/10">
             <h3 className="text-xl font-bold mb-1">Standard</h3>
             <p className="text-sm opacity-80">Speed: 8s, Opacity: 0.6-0.8</p>
          </div>
        </div>

        {/* Variant 2: Fast & Intense */}
        <div className="relative h-100 rounded-xl overflow-hidden border border-border shadow-sm flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <MeshGradient speed={3} opacityRange={[0.4, 1]} />
          </div>
          <div className="relative z-10 bg-white/20 backdrop-blur-md p-6 rounded-lg text-center border border-white/10">
             <h3 className="text-xl font-bold mb-1">High Energy</h3>
             <p className="text-sm opacity-80">Speed: 3s, Opacity: 0.4-1.0</p>
          </div>
        </div>

        {/* Variant 3: Slow & Subtle */}
        <div className="relative h-100 rounded-xl overflow-hidden border border-border shadow-sm flex items-center justify-center md:col-span-2">
          <div className="absolute inset-0 z-0">
            <MeshGradient speed={15} opacityRange={[0.2, 0.4]} />
          </div>
          <div className="relative z-10 bg-white/20 backdrop-blur-md p-6 rounded-lg text-center border border-white/10">
             <h3 className="text-xl font-bold mb-1">Ambient / Chill</h3>
             <p className="text-sm opacity-80">Speed: 15s, Opacity: 0.2-0.4</p>
          </div>
        </div>

      </div>
    </div>
  );
}
