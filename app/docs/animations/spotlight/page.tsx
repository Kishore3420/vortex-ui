'use client';

import { FadeIn } from '@/components/animations';

export default function SpotlightPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Spotlight Effects</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. This page will explain how to create spotlight
            and glow effects.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

