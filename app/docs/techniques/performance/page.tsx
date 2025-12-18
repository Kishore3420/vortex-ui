'use client';

import { FadeIn } from '@/components/animations';

export default function PerformancePage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Performance Tips</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn best practices for optimizing animations
            for smooth 60fps performance.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

