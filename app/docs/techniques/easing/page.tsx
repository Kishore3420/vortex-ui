'use client';

import { FadeIn } from '@/components/animations';

export default function EasingPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Easing Functions</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Understand how easing functions control the
            feel and timing of your animations.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

