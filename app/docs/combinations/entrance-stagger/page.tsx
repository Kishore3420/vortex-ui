'use client';

import { FadeIn } from '@/components/animations';

export default function EntranceStaggerPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Entrance + Stagger</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn how to combine entrance animations with
            stagger effects for dynamic lists and grids.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

