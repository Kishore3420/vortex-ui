'use client';

import { FadeIn } from '@/components/animations';

export default function MultipleEntrancePage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Multiple Entrance Animations</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn how to combine FadeIn, ScaleIn, and
            RotateIn for richer animations.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
