'use client';

import { FadeIn, LetterPullUp } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function LetterPullUpPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Letter Pull Up</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Staggered upward reveal of individual letters. Creates a
            rhythmic, wave-like entrance that adds vertical energy to
            short text snippets.
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
              LetterPullUp animates each character from a slightly lower position
              and zero opacity to its final resting place. By using a tight
              stagger delay, it creates a visual &quot;sweep&quot; effect that feels
              faster and more dynamic than a standard word-based fade.
              It&apos;s perfect for primary headlines where you want to emphasize
              the &quot;building&quot; of the message character by character.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Granular Animation:</strong> Every character is an independent unit
                </li>
                <li>
                  <strong>Wave-Like Flow:</strong> Creates a visual rhythm across the text
                </li>
                <li>
                  <strong>Upward Momentum:</strong> Suggests rising or emerging content
                </li>
                <li>
                  <strong>Hover Compatible:</strong> Works well when combined with mouse interaction
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
            <LetterPullUp
              text="RISING ENERGY"
              className="text-5xl font-black text-primary tracking-tighter"
              staggerDelay={0.05}
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to animate</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.05</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between letters (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animation duration per char (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">delay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Global start delay (s)</td>
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
              code={`import { LetterPullUp } from '@/components/animations';

export default function Headline() {
  return (
    <LetterPullUp
      text="Emerging Concept"
      className="text-4xl font-bold"
      staggerDelay={0.08}
    />
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
