'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ScrambleRevealProps {
  text: string;
  className?: string;
  characters?: string; // Characters to use for the scramble effect
  duration?: number; // Total duration of the effect (default: 1.5)
  delay?: number; // Delay before starting (default: 0)
  scrambleSpeed?: number; // How often characters change (ms, default: 40)
  once?: boolean;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const ScrambleReveal = ({
  text,
  className = '',
  characters = DEFAULT_CHARS,
  duration = 1.5,
  delay = 0,
  scrambleSpeed = 40,
  once = true,
}: ScrambleRevealProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10%' });
  const iterationRef = useRef(0);

  useEffect(() => {
    if (isInView && !isScrambling) {
      const wait = setTimeout(() => {
          setIsScrambling(true);
          const interval = setInterval(() => {
            setDisplayText(() => {
              const currentIteration = iterationRef.current;
              const nextText = text
                .split('')
                .map((char, index) => {
                   if (char === ' ') return ' ';
                   if (index < currentIteration) return text[index];
                   return characters[Math.floor(Math.random() * characters.length)];
                })
                .join('');

              if (currentIteration >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
                return text;
              }

              iterationRef.current += 1 / (duration * 1000 / scrambleSpeed / text.length);
              return nextText;
            });
          }, scrambleSpeed);
      }, delay * 1000);

      return () => {
         clearTimeout(wait);
      };
    }
  }, [isInView, text, characters, duration, delay, scrambleSpeed, isScrambling]);

  return (
    <div ref={ref} className={`font-mono ${className}`}>
        {displayText || (isInView ? '' : ' ')}
    </div>
  );
};
