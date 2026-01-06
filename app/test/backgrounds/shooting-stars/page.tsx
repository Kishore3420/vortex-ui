'use client';


import { ShootingStars } from '@/components/backgrounds';

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
