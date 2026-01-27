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

      {/* Content Wrapper - Max width 1440px with responsive padding */}
      <div className="absolute inset-0 z-10">
        <div className="relative h-full mx-auto max-w-360 px-4 sm:px-8 lg:px-20 xl:px-28">
          {animationState.showTypewriter && (
            <TypewriterName
              name={HERO_CONFIG.name}
              speed={HERO_CONFIG.typewriterSpeed}
              onComplete={handleTypewriterComplete}
            />
          )}

          {/* Main Content Container - Different layouts for mobile vs desktop */}
          <div className="absolute inset-0 flex flex-col">
            {/* Chairman Title at top */}
            <div className="pt-8 md:pt-12">
              <ChairmanTitle
                show={animationState.showElements}
                imageUrl={chairmanImageUrl}
              />
            </div>

            {/* Businessman Image - centered, responsive sizing */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:bottom-0">
              <BusinessmanImage
                show={animationState.showElements}
                imageUrl={businessmanImageUrl}
              />
            </div>

            {/* Desktop: Rotating Content (right side) - Hidden on mobile */}
            {animationState.showElements && (
              <div className="hidden md:block absolute top-56 lg:top-64 right-0 max-w-xs lg:max-w-md">
                <RotatingContent
                  content={ROTATING_CONTENT}
                  duration={3.5}
                  transitionDuration={0.6}
                  className="w-full"
                />
              </div>
            )}

            {/* Founder Label - Just above Company Info */}
            <div className="absolute bottom-72 md:bottom-88 lg:bottom-104 left-0">
              <FounderLabel
                show={animationState.showElements}
                text={HERO_CONFIG.role}
              />
            </div>

            {/* Company Info - Bottom left */}
            <div className="absolute bottom-32 md:bottom-56 lg:bottom-64 left-0">
              <CompanyInfo
                show={animationState.showElements}
                name={HERO_CONFIG.company}
                tagline={HERO_CONFIG.companyTagline}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
