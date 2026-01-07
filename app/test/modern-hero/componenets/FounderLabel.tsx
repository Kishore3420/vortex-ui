'use client';

import { motion } from 'framer-motion';

interface FounderLabelProps {
  show: boolean;
  text: string;
}

export const FounderLabel = ({ show, text }: FounderLabelProps) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.9 }}
      className="absolute top-56 md:top-64 left-8 md:left-12 z-10"
    >
      <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 tracking-widest">
        {text}
      </p>
    </motion.div>
  );
};
