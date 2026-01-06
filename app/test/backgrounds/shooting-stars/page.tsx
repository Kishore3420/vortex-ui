'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// --- COMPONENT IMPLEMENTATION ---

interface ShootingStarData {
  id: number;
  x: string; // e.g. "10%"
  y: string; // e.g. "20%"
  delay: number;
  repeatDelay: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  className?: string;
  starColor?: string;
  trailColor?: string;
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starWidth?: number; // width of trail
  starHeight?: number; // thickness
}

const Star = ({
  data,
  starColor = '#ffffff',
  trailColor = '#ffffff',
  starWidth = 150,
  starHeight = 2
}: {
  data: ShootingStarData;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
}) => {
  return (
    <motion.div
        initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
        animate={{
             x: data.distance,
             y: data.distance,
             opacity: [0, 1, 0],
             scale: [0.5, data.scale, 0.5]
        }}
        transition={{
            duration: data.speed,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: data.repeatDelay,
            delay: data.delay
        }}
        className="absolute origin-left rounded-full will-change-transform"
        style={{
            top: data.y,
            left: data.x,
            width: `${starWidth}px`,
            height: `${starHeight}px`,
            rotate: '45deg',
            background: `linear-gradient(90deg, ${starColor}, transparent)`,
             boxShadow: `0 0 10px ${trailColor}`
        }}
    />
  );
}

const ShootingStars = ({
  className,
  starColor = '#ffffff',
  trailColor = '#4f46e5', // Indigo faint trail
  minSpeed = 0.5,
  maxSpeed = 1.2,
  minDelay = 1,
  maxDelay = 4,
  starWidth = 150,
  starHeight = 2,
}: ShootingStarsProps) => {
  const [stars, setStars] = useState<ShootingStarData[]>([]);

  useEffect(() => {
    // Generate stars client-side to avoid hydration mismatch
    const count = 12; // Good density
    const newStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 60}%`, // Top 60% of screen
      delay: Math.random() * (maxDelay - minDelay) + minDelay,
      repeatDelay: Math.random() * 5 + (maxDelay - minDelay) + minDelay,
      scale: 0.5 + Math.random() * 0.5,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 200 + Math.random() * 300,
    }));
    // Use timeout to avoid "setState in effect" warning, although this is just initializing client-only data
    const t = setTimeout(() => setStars(newStars), 0);
    return () => clearTimeout(t);
  }, [maxDelay, minDelay, maxSpeed, minSpeed]);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-900 ${className}`}>
      {stars.map((star) => (
        <Star
          key={star.id}
          data={star}
          starColor={starColor}
          trailColor={trailColor}
          starWidth={starWidth}
          starHeight={starHeight}
        />
      ))}

       {/* Optional: Add a few static twinkling stars using valid Tailwind classes */}
       <div className="absolute top-10 left-10 w-0.5 h-0.5 bg-white rounded-full opacity-40 animate-pulse" />
       <div className="absolute top-1/4 right-1/4 w-px h-px bg-white rounded-full opacity-60 animate-pulse delay-75" />
       <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-pulse delay-150" />
    </div>
  );
};

// --- TEST PAGE ---

export default function ShootingStarsExperiment() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      {/* Header */}
      <div className="p-8 border-b bg-muted/10 z-10">
        <h1 className="text-3xl font-bold mb-2">Shooting Stars Experiment</h1>
        <p className="text-muted-foreground">
          Whimsical streaks of light simulating a meteor shower. Now fully customizable.
        </p>
      </div>

      {/* Grid of Examples */}
      <div className="flex-1 p-8 grid grid-cols-1 gap-8">

        {/* Example: Classic Night Sky */}
        <div className="relative h-125 border rounded-xl overflow-hidden flex items-center justify-center bg-slate-950">
            <div className="absolute inset-0 z-0 opacity-80">
                <ShootingStars
                    starColor="#ffffff"
                    trailColor="#6366f1"
                    minSpeed={0.8}
                    maxSpeed={1.5}
                />
            </div>

            <div className="relative z-10 text-center text-white p-8">
                <h2 className="text-5xl font-bold mb-4 tracking-tighter drop-shadow-lg">Make a Wish</h2>
                <p className="text-xl text-blue-200 max-w-lg mx-auto leading-relaxed">
                   Standard white stars with a subtle indigo glow suitable for dark hero sections.
                </p>
            </div>
        </div>

         {/* Example: Fast & Bright (Hyperdrive) */}
         <div className="relative h-75 border rounded-xl overflow-hidden flex items-center justify-center bg-black">
             <div className="absolute inset-0 z-0">
                <ShootingStars
                    starColor="#fbbf24" // Amber
                    trailColor="#f59e0b"
                    minSpeed={0.2} // Very fast
                    maxSpeed={0.5}
                    starWidth={200} // Long trails
                    starHeight={3} // Thick streaks
                    minDelay={0}
                    maxDelay={1} // Frequent spawning
                />
            </div>
            <div className="relative z-10">
                <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95">
                    Hyperdrive Active ⚡
                </button>
            </div>
         </div>

         {/* Example: Slow & Magical */}
         <div className="relative h-75 border rounded-xl overflow-hidden flex items-center justify-center bg-fuchsia-950">
             <div className="absolute inset-0 z-0 opacity-60">
                <ShootingStars
                    starColor="#e879f9" // Pink
                    trailColor="#c026d3"
                    minSpeed={1.5} // Slow
                    maxSpeed={3}
                    starWidth={100}
                    starHeight={1} // Thin
                />
            </div>
            <div className="relative z-10 font-serif text-3xl text-fuchsia-100 italic">
                A magical evening...
            </div>
         </div>

      </div>
    </div>
  );
}
