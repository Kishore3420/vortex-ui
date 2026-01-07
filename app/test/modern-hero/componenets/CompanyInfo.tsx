
'use client';

import { motion } from 'framer-motion';

interface CompanyInfoProps {
  show: boolean;
  name: string;
  tagline: string;
}

export const CompanyInfo = ({ show, name, tagline }: CompanyInfoProps) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-56 md:bottom-64 left-8 md:left-12 z-10"
    >
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
        {name}
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-zinc-400">
        {tagline}
      </p>
    </motion.div>
  );
};
