'use client';

import { FadeIn } from '@/components/animations';

export default function ViewportMarginsPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Viewport Margins</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn how to control when animations trigger
            using viewport margins.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

