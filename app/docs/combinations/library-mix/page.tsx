'use client';

import { FadeIn } from '@/components/animations';

export default function LibraryMixPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Library Combinations</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn how to combine Framer Motion, GSAP, and
            other animation libraries for powerful effects.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

