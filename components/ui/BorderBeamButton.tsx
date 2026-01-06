'use client';

import React from 'react';

interface BorderBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  beamColor?: string; // Not fully used in this CSS-trick version but kept for consistency
  duration?: number;
}

export const BorderBeamButton = ({
  children,
  className = "",
  duration = 3,
  ...props
}: BorderBeamButtonProps) => {
  return (
    <button
      className={`relative rounded-xl p-0.5 overflow-hidden group transition-transform active:scale-95 ${className}`}
      {...props}
    >
      {/* Moving Beam Layer */}
      <div
        className="absolute -inset-full animate-[spin_3s_linear_infinite]"
        style={{
             animationDuration: `${duration}s`,
             background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, #6366f1 100%)`
        }}
      />

      {/* Inner Content Layer (Masks the center) */}
      <div className="relative h-full w-full rounded-[10px] bg-slate-950 px-8 py-4 backdrop-blur-xl flex items-center justify-center gap-2 text-white font-semibold">
        {children}
      </div>
    </button>
  );
};
