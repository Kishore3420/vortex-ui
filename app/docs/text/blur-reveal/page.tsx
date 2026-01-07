'use client';

import { BlurReveal, FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function BlurRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Blur Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Modern unblurring text animation. Words transition from a blurry,
            transparent state to sharp focus with smooth sliding motion.
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
              BlurReveal uses CSS filter effects combined with opacity and transform
              animations to create a premium &quot;dream-to-reality&quot; reveal effect.
              It&apos;s widely used in modern SaaS and portfolio sites to draw eyes
              to key value propositions and hero text.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Haze Effect:</strong> Starts with an adjustable blur radius
                </li>
                <li>
                  <strong>Sequential Words:</strong> Each word reveals with a staggered delay
                </li>
                <li>
                  <strong>Cinematic Motion:</strong> Includes a subtle upward slide
                </li>
                <li>
                  <strong>Performance Optimized:</strong> Efficient filter transitions
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
          <div className="border border-border rounded-lg p-10 bg-card flex flex-col gap-6">
            <BlurReveal
              text="Premium Focus Reveal"
              className="text-4xl font-black text-center"
              blur={12}
              duration={1}
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
                  <td className="border border-border p-3"><code className="text-sm">blur</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>10</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Initial blur radius (px)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.8</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animation duration per word (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.05</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between words (s)</td>
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
              code={`import { BlurReveal } from '@/components/animations';

export default function HeroSection() {
  return (
    <BlurReveal
      text="Clarity in Motion"
      blur={15}
      duration={1.2}
      className="text-6xl font-bold"
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
