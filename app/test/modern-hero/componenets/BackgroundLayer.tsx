'use client';

import { motion } from 'framer-motion';

interface BackgroundLayerProps {
  imageUrl?: string;
}

export const BackgroundLayer = ({ imageUrl }: BackgroundLayerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900"
      style={{
        backgroundImage: imageUrl
          ? `url('${imageUrl}')`
          : `url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};
