'use client';

import { FadeIn } from '@/components/animations';

export default function GradientsPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Animated Gradients</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. This page will explain how to create animated
            gradient backgrounds.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

