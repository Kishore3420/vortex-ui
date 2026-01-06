'use client';

import React from 'react';

interface Interactive3DButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string; // Main color class (e.g. "bg-blue-500")
  shadowColor?: string; // Shadow/Side color class (e.g. "bg-blue-700")
}

export const Interactive3DButton = ({
  children,
  className = "",
  color = "bg-blue-500",
  shadowColor = "bg-blue-700",
  ...props
}: Interactive3DButtonProps) => {
  return (
    <button
      className={`group relative transition-transform active:scale-95 focus:outline-none ${className}`}
      {...props}
    >
      {/* Shadow / Side Layer */}
      <span className={`absolute inset-0 translate-y-2 rounded-lg ${shadowColor} transition-transform group-active:translate-y-1`} />

      {/* Top Layer */}
      <span className={`relative block rounded-lg border-2 border-black/10 ${color} px-8 py-4 font-bold text-white transition-transform -translate-y-1 group-active:translate-y-1`}>
        {children}
      </span>
    </button>
  );
};
