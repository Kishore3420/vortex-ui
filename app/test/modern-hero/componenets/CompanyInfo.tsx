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
    >
      <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 md:mb-2">
        {name}
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-zinc-400">{tagline}</p>
    </motion.div>
  );
};
