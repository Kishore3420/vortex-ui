'use client';

import { BoxReveal, FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function BoxRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Box Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Sleek content reveal using an animated block overlay.
            A background box slides across the content area to unveil
            the text or component underneath.
          </p>
        </div>
      </FadeIn>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Overview</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              BoxReveal (also known as Block Reveal) is a minimalist yet
              powerful animation technique. It uses an opaque box that
              sweeps over the target area, &quot;wiping&quot; the content onto the
              screen. It&apos;s highly effective for headers, sub-headlines,
              and emphasizing specific UI sections in a professional way.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Clean Wipe:</strong> Sharp, rectangular reveal motion
                </li>
                <li>
                  <strong>Flexible Content:</strong> Can reveal text, images, or entire components
                </li>
                <li>
                  <strong>Color Matching:</strong> Custom box color to match brand or accent
                </li>
                <li>
                  <strong>Stagger Support:</strong> Chain multiple BoxReveals for sequential storytelling
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Interactive Example</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="border border-border rounded-lg p-16 bg-card flex flex-col gap-6">
            <BoxReveal boxColor="#3b82f6" duration={0.5}>
              <h2 className="text-4xl font-bold">The Future is Here.</h2>
            </BoxReveal>
            <BoxReveal boxColor="#10b981" duration={0.5} delay={0.5}>
              <p className="text-muted-foreground">High-performance React components.</p>
            </BoxReveal>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Props Reference</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Prop</th>
                  <th className="border border-border p-3 text-left font-semibold">Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Default</th>
                  <th className="border border-border p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">children</code></td>
                  <td className="border border-border p-3 text-sm"><code>ReactNode</code></td>
                  <td className="border border-border p-3 text-sm"><span className="text-muted-foreground">Required</span></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Content to reveal</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">boxColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;var(--color-primary)&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Background of the reveal box</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Reveal speed (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">width</code></td>
                  <td className="border border-border p-3 text-sm"><code>&apos;fit-content&apos; | &apos;100%&apos;</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;fit-content&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Container width strategy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Basic Usage</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { BoxReveal } from '@/components/animations';

export default function Layout() {
  return (
    <BoxReveal boxColor="#6366f1">
      <h1>Hello World</h1>
    </BoxReveal>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
