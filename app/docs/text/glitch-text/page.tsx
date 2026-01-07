'use client';

import { FadeIn, GlitchText } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function GlitchTextPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Glitch Text</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Cyberpunk-style digital distortion effect. Text shifts,
            vibrates, and experiences color-split artifacts, perfect
            for high-tech and gaming themes.
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
              GlitchText simulates electronic interference using rapid CSS
              transforms and color-separation layers (RGB split). It&apos;s an
              intentional visual anomaly that adds grit and character to
              interfaces. Whether active continuously or only on hover, it
              effectively communicates a sense of &quot;raw&quot; technology or
              digital edge.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>RGB Split:</strong> Randomized red and blue ghosting layers
                </li>
                <li>
                  <strong>Jitter Motion:</strong> High-frequency positional shifts
                </li>
                <li>
                  <strong>Hue Intersections:</strong> Intentional color distortions
                </li>
                <li>
                  <strong>Interactive Mode:</strong> Optional hover-only activation
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
          <div className="border border-border rounded-lg p-16 bg-zinc-950 flex flex-col items-center justify-center">
            <GlitchText
              text="SYSTEM CRITICAL"
              className="text-5xl font-black text-white italic"
              glitchSpeed={100}
            />
            <p className="mt-8 text-zinc-500 text-sm">Hover the text below:</p>
            <GlitchText
              text="REBOOT REQUIRED"
              className="text-2xl font-bold text-red-500 mt-2"
              enableHover={true}
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to glitch</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">glitchSpeed</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>200</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Duration of one glitch cycle (ms)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">enableHover</code></td>
                  <td className="border border-border p-3 text-sm"><code>boolean</code></td>
                  <td className="border border-border p-3 text-sm"><code>false</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Only glitch when mouse is over</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">className</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Additional CSS classes</td>
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
              code={`import { GlitchText } from '@/components/animations';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center">
      <GlitchText
        text="404 - NOT FOUND"
        className="text-7xl font-bold text-white bg-black p-4"
      />
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
