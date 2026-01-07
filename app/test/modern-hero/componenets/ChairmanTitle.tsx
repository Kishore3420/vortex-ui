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
      className="absolute top-8 md:top-12 left-1/2 transform -translate-x-1/2 z-10 text-center"
    >
      {imageUrl ? (
        <Image src={imageUrl} alt="Chairman" className="w-full max-w-5xl" />
      ) : (
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-red-600 tracking-tight leading-none">
          CHAIRMAN
        </h1>
      )}
    </motion.div>
  );
};
