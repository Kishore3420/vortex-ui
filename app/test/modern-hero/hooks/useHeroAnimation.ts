// ============================================
// File: hooks/useHeroAnimation.ts
// ============================================
'use client';

import { useEffect, useState } from 'react';
import { HERO_CONFIG } from '../constants';
import { HeroAnimationState } from '../types';

export const useHeroAnimation = () => {
  const [animationState, setAnimationState] = useState<HeroAnimationState>({
    showTypewriter: false,
    typewriterComplete: false,
    showElements: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, showTypewriter: true }));
    }, HERO_CONFIG.backgroundFadeDelay);

    return () => clearTimeout(timer);
  }, []);

  const handleTypewriterComplete = () => {
    setAnimationState((prev) => ({ ...prev, typewriterComplete: true }));
    setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, showElements: true }));
    }, HERO_CONFIG.elementsFadeDelay);
  };

  return { animationState, handleTypewriterComplete };
};
