'use client';

import { FadeIn } from '@/components/animations';

export default function StaggerPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Stagger Container</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. This page will contain detailed documentation
            for the StaggerContainer component.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

