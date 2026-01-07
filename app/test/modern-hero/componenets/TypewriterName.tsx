'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypewriterNameProps {
  name: string;
  speed?: number;
  onComplete: () => void;
}

export const TypewriterName = ({
  name,
  speed = 100,
  onComplete,
}: TypewriterNameProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + name[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else if (currentIndex === name.length && !isComplete) {
      // Use setTimeout to move setState outside of the effect execution
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, name, speed, onComplete, isComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          ...(isComplete
            ? {
                left: '3rem',
                top: 'auto',
                bottom: '8rem',
                x: 0,
                y: 0,
              }
            : {}),
        }}
        transition={{
          opacity: { duration: 0.3 },
          left: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          top: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          bottom: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          x: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          y: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
        }}
        className="absolute z-20"
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-red-600 whitespace-nowrap">
          {displayedText}
        </h2>
      </motion.div>
    </AnimatePresence>
  );
};
