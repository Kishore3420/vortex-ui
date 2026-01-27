'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ChairmanTitleProps {
  show: boolean;
  imageUrl?: string;
}

export const ChairmanTitle = ({ show, imageUrl }: ChairmanTitleProps) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="w-full"
    >
      {imageUrl ? (
        <Image src={imageUrl} alt="Chairman" className="w-full" />
      ) : (
        <h1 className="text-[clamp(3rem,10vw,14rem)] md:text-[clamp(4rem,12vw,14rem)] font-black text-red-600 tracking-tight leading-none text-center md:text-center">
          CHAIRMAN
        </h1>
      )}
    </motion.div>
  );
};
