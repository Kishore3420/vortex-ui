'use client';

import { FadeIn, RotatingText } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function RotatingTextPage() {
  const words = ['Fast', 'Fluid', 'Simple', 'Modern'];

  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Rotating Text</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Clean, professional word switcher. Cycles through a list of
            strings with smooth directional transitions, ideal for
            concise hero headlines and value propositions.
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
              RotatingText (often called a word rotator) is a staple of modern
              SaaS landing pages. It allows you to display multiple secondary
              benefits or descriptors in a single space, maintaining the
              user&apos;s focus on a single line of text while conveying
              broader information. Our version supports vertical and
              horizontal transitions with customizable timing.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Multiple Orientations:</strong> Slide up, down, left, or right
                </li>
                <li>
                  <strong>Automatic Cycling:</strong> Hands-free updates with configurable timing
                </li>
                <li>
                  <strong>Wait Protocol:</strong> Cleans up current text before showing the next
                </li>
                <li>
                  <strong>Dynamic Sizing:</strong> Grows or shrinks based on word length
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
          <div className="border border-border rounded-lg p-16 bg-card flex items-center justify-center gap-3">
            <span className="text-4xl font-bold">Build it</span>
            <RotatingText
              texts={words}
              className="text-4xl font-bold text-primary"
              duration={2}
              direction="up"
            />
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
                  <td className="border border-border p-3"><code className="text-sm">texts</code></td>
                  <td className="border border-border p-3 text-sm"><code>string[]</code></td>
                  <td className="border border-border p-3 text-sm"><span className="text-muted-foreground">Required</span></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Array of words to cycle through</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>2.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Time each text stays visible (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">direction</code></td>
                  <td className="border border-border p-3 text-sm"><code>&apos;up&apos; | &apos;down&apos; | &apos;left&apos; | &apos;right&apos;</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;up&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Exit/Entry direction</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">transitionDuration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animation speed (s)</td>
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
              code={`import { RotatingText } from '@/components/animations';

export default function Headline() {
  return (
    <h1 className="text-4xl flex gap-2">
      Everything is
      <RotatingText
        texts={['Simple', 'Fast', 'Safe']}
        className="font-bold text-blue-600"
      />
    </h1>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
