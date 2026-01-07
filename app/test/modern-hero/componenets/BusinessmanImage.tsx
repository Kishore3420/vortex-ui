'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BusinessmanImageProps {
  show: boolean;
  imageUrl?: string;
}

export const BusinessmanImage = ({ show, imageUrl }: BusinessmanImageProps) => {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 md:w-96 h-125 md:h-150 z-15"
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Businessman"
          className="w-full h-full object-contain object-bottom"
        />
      ) : (
        <>
          <div className="w-full h-full bg-linear-to-b from-transparent via-zinc-700 to-zinc-800 rounded-t-full opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-zinc-600 text-sm">
              [Replace with Businessman Image]
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};
