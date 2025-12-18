'use client';

import { FadeIn } from '@/components/animations';

export default function CombinationsExamplesPage() {
  return (
    <div className="space-y-8">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Real-World Examples</h1>
          <p className="text-muted-foreground text-lg">
            Content coming soon. See complete, production-ready examples of
            combined animation techniques.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

