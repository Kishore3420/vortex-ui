'use client';

import { motion } from 'framer-motion';

interface TextMaskProps {
  text: string;
  backgroundImage?: string; // URL to image or video
  className?: string;
  maskSize?: string; // CSS background-size (default: cover)
}

export const TextMask = ({
  text,
  backgroundImage = 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2000',
  className = '',
  maskSize = 'cover',
}: TextMaskProps) => {
  return (
    <div
      className={`relative inline-block font-black uppercase tracking-tighter ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: maskSize,
        backgroundPosition: 'center',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      <motion.div
        animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
        }}
        className="absolute inset-0 -z-10"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '200% 200%',
            filter: 'blur(40px)',
            opacity: 0.3
        }}
      />
      {text}
    </div>
  );
};
