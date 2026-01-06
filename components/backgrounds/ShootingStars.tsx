'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// --- COMPONENT IMPLEMENTATION ---

interface ShootingStarData {
  id: number;
  x: string;
  y: string;
  delay: number;
  repeatDelay: number;
  scale: number;
  speed: number;
  distance: number;
}

export interface ShootingStarsProps {
  className?: string;
  starColor?: string;
  trailColor?: string;
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starWidth?: number;
  starHeight?: number;
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

export const ShootingStars = ({
  className,
  starColor = '#ffffff',
  trailColor = '#4f46e5',
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
