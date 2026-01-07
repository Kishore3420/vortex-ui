'use client';

import { FadeIn, WavyText } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function WavyTextPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Wavy Text</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Fluid, oscillating text animation. Individual characters move
            vertically in a coordinated sine wave, creating a gentle
            swimming or floating sensation.
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
              WavyText is a playful decorative animation that adds rhythmic
              movement to headlines or status indicators. By applying a staggered
              sine-wave offset to each character, it simulates natural
              fluidity. It&apos;s particularly effective for maritime themes,
              meditation apps, or casual brand voices that want to feel
              relaxed and approachable.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Sine Frequency:</strong> Smooth, rhythmic vertical oscillation
                </li>
                <li>
                  <strong>Configurable Amplitude:</strong> Control how &quot;high&quot; the waves go
                </li>
                <li>
               <strong>Continuous Loop:</strong> Stays in motion to maintain visual interest
                </li>
                <li>
                  <strong>Approachability:</strong> Softens the tone of the interface
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
            <WavyText
              text="FLOATING ALONG"
              className="text-5xl font-black text-blue-500"
              amplitude={12}
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to animate</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">amplitude</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>8</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Vertical travel distance (px)</td>
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
                  <td className="border border-border p-3 text-sm"><code>2</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Speed of the wave cycle (s)</td>
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
              code={`import { WavyText } from '@/components/animations';

export default function Status() {
  return (
    <WavyText
      text="Connecting..."
      className="text-lg font-medium text-zinc-500"
      duration={1.5}
      amplitude={5}
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
