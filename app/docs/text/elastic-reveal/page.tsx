'use client';

import { ElasticReveal, FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function ElasticRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Elastic Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Playful, springy text reveal. Characters &quot;snap&quot; into place
            with an elastic overshoot, perfect for creative and kid-friendly
            interfaces.
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
              ElasticReveal uses highly tuned spring physics to create a bubbly,
              energetic text entry. Unlike standard fades, it gives each
              character a sense of mass and elasticity. It&apos;s an ideal choice for
              gamified experiences, celebratory messages, or any UI that
              wants to break away from sterile, corporate motion.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>High Overshoot:</strong> Characters briefly exceed their final size
                </li>
                <li>
                  <strong>Bouncy Settling:</strong> Smooth oscillation before coming to rest
                </li>
                <li>
                  <strong>Spring Physics:</strong> Uses stiffness and damping for realism
                </li>
                <li>
                  <strong>Staggered Entry:</strong> Wave-like motion across the text
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
            <ElasticReveal
              text="BOUNCE!"
              className="text-6xl font-black text-blue-500"
              staggerDelay={0.1}
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between characters (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.8</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Settling time (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">delay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Initial start delay (s)</td>
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
              code={`import { ElasticReveal } from '@/components/animations';

export default function FunTitle() {
  return (
    <ElasticReveal
      text="Bouncy Headline"
      className="text-4xl font-bold"
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
