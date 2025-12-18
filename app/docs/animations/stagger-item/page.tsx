'use client';

import { FadeIn } from '@/components/animations';

export default function StaggerItemPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Stagger Item</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. This page will contain detailed documentation
            for the StaggerItem component.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

