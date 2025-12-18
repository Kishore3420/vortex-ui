'use client';

import { FadeIn } from '@/components/animations';

export default function BackgroundContentPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Background + Content</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. Learn how to layer animated backgrounds with
            animated content for stunning hero sections.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

