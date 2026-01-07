'use client';

import { FadeIn, RollingText } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function RollingTextPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Rolling Text</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Character-by-character vertical &quot;slot machine&quot; animation.
            Each letter rolls up like a physical counter, creating an
            engaging ticker-style effect.
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
              RollingText (or Character Flip) is a high-motion typography
              component that simulates the old-school physical split-flap
              displays. By masking characters and animating them vertically,
              it creates a sense of count-up or transition that feels
              precise and industrial. It&apos;s excellent for pricing displays,
              clocks, or energetic call-to-actions.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Slot Motion:</strong> Vertical loop transition for every character
                </li>
                <li>
                  <strong>Masked Overflow:</strong> Content only visible within its character cell
                </li>
                <li>
                  <strong>Cascading Delays:</strong> Creates a visual wave of rolling action
                </li>
                <li>
                  <strong>Pure CSS/Motion:</strong> High-performance character masking
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
          <div className="border border-border rounded-lg p-16 bg-card flex flex-col items-center justify-center">
            <RollingText
              text="NEW ERA"
              className="text-6xl font-black text-primary italic"
              staggerDelay={0.08}
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
                  <td className="border border-border p-3"><code className="text-sm">text</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><span className="text-muted-foreground">Required</span></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to roll</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.05</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between characters (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Transition speed (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">delay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Initial start delay (s)</td>
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
              code={`import { RollingText } from '@/components/animations';

export default function Pricing() {
  return (
    <div className="text-3xl flex">
      <span>$</span>
      <RollingText text="199" className="font-bold" />
      <span>/mo</span>
    </div>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
