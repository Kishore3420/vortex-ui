'use client';

import { FadeIn, GradualSpacing } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function GradualSpacingPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Gradual Spacing</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Elegant text reveal where characters drift into their final
            positions. Perfect for cinematic titles and premium branding
            where negative space is a key design element.
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
              GradualSpacing animates the `letter-spacing` and individual
              character positions to create a &quot;coming together&quot; effect.
              By starting with pinched or expanded spacing and gradually
              normalizing it, you create a sophisticated entrance that feels
              intentional and high-end. It&apos;s often used as an alternative
              to standard fades for a more modern, Swiss-inspired look.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Negative Space Control:</strong> Adjust start/end kerning
                </li>
                <li>
                  <strong>Character Drift:</strong> Horizontal movement as letters settle
                </li>
                <li>
                  <strong>Smooth Normalization:</strong> Ease-out motion for a soft landing
                </li>
                <li>
                  <strong>Typography Focused:</strong> Highlights the shape and form of the font
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
            <GradualSpacing
              text="REFINED DESIGN"
              className="text-5xl font-black tracking-widest text-primary"
              initialSpacing="-0.2em"
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
                  <td className="border border-border p-3"><code className="text-sm">initialSpacing</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;-0.1em&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Starting letter-spacing</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.03</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between characters (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animation duration per char (s)</td>
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
              code={`import { GradualSpacing } from '@/components/animations';

export default function Hero() {
  return (
    <GradualSpacing
      text="Crafting Perfection"
      className="text-4xl font-bold"
      initialSpacing="-0.05em"
      duration={0.8}
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
