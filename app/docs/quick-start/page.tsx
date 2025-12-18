'use client';

import {
  FadeIn,
  RotateIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function QuickStartPage() {
  const features = [
    { id: 1, title: 'Feature 1' },
    { id: 2, title: 'Feature 2' },
    { id: 3, title: 'Feature 3' },
  ];

  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Quick Start</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Get up and running with your first animation in 5 minutes! Copy,
            paste, and tweak these snippets to understand how the components
            work.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Your First Animation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Step 1: Import</h3>
              <CodeBlock
                code={`import { FadeIn } from '@/components/animations';`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Step 2: Wrap Your Content
              </h3>
              <CodeBlock
                code={`export default function Home() {
  return (
    <main>
      <FadeIn>
        <h1>Hello, World!</h1>
      </FadeIn>
    </main>
  );
}`}
              />
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                That&apos;s it! Your content will fade in when it enters the
                viewport.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Common Patterns</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Fade In from Different Directions
              </h3>
              <CodeBlock
                code={`<FadeIn direction="up">    {/* From bottom */}
<FadeIn direction="down">  {/* From top */}
<FadeIn direction="left">   {/* From right */}
<FadeIn direction="right"> {/* From left */}`}
              />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <FadeIn direction="up">
                  <div className="border border-border rounded-lg p-4 bg-card text-sm">
                    Fade Up
                  </div>
                </FadeIn>
                <FadeIn direction="down">
                  <div className="border border-border rounded-lg p-4 bg-card text-sm">
                    Fade Down
                  </div>
                </FadeIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Scale Animation</h3>
              <CodeBlock
                code={`import { ScaleIn } from '@/components/animations';

<ScaleIn>
  <button>Click me</button>
</ScaleIn>`}
              />
              <div className="mt-4">
                <ScaleIn>
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
                    Click me
                  </button>
                </ScaleIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                3. Rotate Animation
              </h3>
              <CodeBlock
                code={`import { RotateIn } from '@/components/animations';

<RotateIn angle={360}>
  <div>Spins in</div>
</RotateIn>`}
              />
              <div className="mt-4">
                <RotateIn angle={180}>
                  <div className="border border-border rounded-lg p-4 bg-card text-sm">
                    Rotates in
                  </div>
                </RotateIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4. Staggered List</h3>
              <CodeBlock
                code={`import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.name}</div>
    </StaggerItem>
  ))}
</StaggerContainer>`}
              />
              <div className="mt-4">
                <StaggerContainer staggerDelay={0.15}>
                  {features.map((feature) => (
                    <StaggerItem key={feature.id}>
                      <div className="border border-border rounded-lg p-4 bg-card mb-4">
                        {feature.title}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Complete Example</h2>
          <CodeBlock
            code={`'use client';

import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animations';

const features = [
  { id: 1, title: 'Feature 1' },
  { id: 2, title: 'Feature 2' },
  { id: 3, title: 'Feature 3' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <FadeIn direction="up" delay={0.2}>
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Site
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <p className="text-lg mb-8">
          This is a quick start example
        </p>
      </FadeIn>

      <ScaleIn delay={0.6}>
        <button className="px-6 py-3 bg-primary text-white rounded-lg">
          Get Started
        </button>
      </ScaleIn>

      <StaggerContainer staggerDelay={0.15} className="mt-16">
        {features.map((feature) => (
          <StaggerItem key={feature.id}>
            <div className="p-4 border rounded-lg mb-4">
              {feature.title}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </main>
  );
}`}
          />
        </section>
      </FadeIn>
    </div>
  );
}
