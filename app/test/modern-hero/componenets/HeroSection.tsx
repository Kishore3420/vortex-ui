'use client';

import { HERO_CONFIG, ROTATING_CONTENT } from '../constants';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { BackgroundLayer } from './BackgroundLayer';
import { BusinessmanImage } from './BusinessmanImage';
import { ChairmanTitle } from './ChairmanTitle';
import { CompanyInfo } from './CompanyInfo';
import { FounderLabel } from './FounderLabel';
import { RotatingContent } from './RotatingContent';
import { TypewriterName } from './TypewriterName';

interface HeroSectionProps {
  backgroundImageUrl?: string;
  chairmanImageUrl?: string;
  businessmanImageUrl?: string;
}

export default function HeroSection({
  backgroundImageUrl,
  chairmanImageUrl,
  businessmanImageUrl,
}: HeroSectionProps) {
  const { animationState, handleTypewriterComplete } = useHeroAnimation();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-900">
      <BackgroundLayer imageUrl={backgroundImageUrl} />

      {animationState.showTypewriter && (
        <TypewriterName
          name={HERO_CONFIG.name}
          speed={HERO_CONFIG.typewriterSpeed}
          onComplete={handleTypewriterComplete}
        />
      )}

      <ChairmanTitle
        show={animationState.showElements}
        imageUrl={chairmanImageUrl}
      />

      <BusinessmanImage
        show={animationState.showElements}
        imageUrl={businessmanImageUrl}
      />

      <FounderLabel
        show={animationState.showElements}
        text={HERO_CONFIG.role}
      />

      {animationState.showElements && (
        <div className="absolute top-56 md:top-64 right-8 md:right-12 max-w-xs md:max-w-md z-10">
          <RotatingContent
            content={ROTATING_CONTENT}
            duration={3.5}
            transitionDuration={0.6}
            className="w-full"
          />
        </div>
      )}

      <CompanyInfo
        show={animationState.showElements}
        name={HERO_CONFIG.company}
        tagline={HERO_CONFIG.companyTagline}
      />
    </div>
  );
}
