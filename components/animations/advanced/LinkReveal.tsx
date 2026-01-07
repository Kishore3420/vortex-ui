'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LinkRevealProps {
  children: ReactNode;
  className?: string;
  href?: string;
  underlineColor?: string;
}

export const LinkReveal = ({
  children,
  className = '',
  href = '#',
  underlineColor = 'var(--color-primary)',
}: LinkRevealProps) => {
  return (
    <a
      href={href}
      className={`relative inline-block group no-underline text-foreground hover:text-foreground transition-colors ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
        style={{ backgroundColor: underlineColor }}
      />
      <motion.span
        className="absolute inset-0 bg-primary/5 rounded-sm scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10"
      />
    </a>
  );
};
