'use client';

import { FadeIn, SparkleReveal } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function SparkleRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Sparkle Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Magical text entrance with drifting particles. Each character
            appears accompanied by a small burst of &quot;stardust&quot; or light,
            giving a whimsical and premium feel.
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
              SparkleReveal is a decorative text animation that uses secondary
              motion to enhance character reveals. As letters scale into view,
              coordinated particle animations &quot;sparkle&quot; around them. This is
              perfect for luxury brands, creative portfolios, or &quot;coming soon&quot;
              teasers where you want to emphasize the importance of the text.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Micro-Particles:</strong> Subtle, drifting light bursts
                </li>
                <li>
                  <strong>Magical Tone:</strong> Soft scaling and glow effects
                </li>
                <li>
                  <strong>Customizable Glow:</strong> Control the particle color and intensity
                </li>
                <li>
                  <strong>High Polish:</strong> Feels customized and high-end
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
            <SparkleReveal
              text="MAGIC MOMENTS"
              className="text-5xl font-black text-white"
              sparkleColor="#FBBF24"
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
                  <td className="border border-border p-3"><code className="text-sm">sparkleColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;#FFD700&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the particles</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.05</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between characters (s)</td>
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
              code={`import { SparkleReveal } from '@/components/animations';

export default function Intro() {
  return (
    <SparkleReveal
      text="Once Upon a Time"
      sparkleColor="violet"
      className="text-5xl font-serif italic"
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
