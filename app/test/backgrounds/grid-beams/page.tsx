'use client';


import { GridBeams } from '@/components/backgrounds';

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
