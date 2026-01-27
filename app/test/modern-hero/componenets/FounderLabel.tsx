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
    >
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-zinc-300 tracking-widest">
        {text}
      </p>
    </motion.div>
  );
};
