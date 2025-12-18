'use client';

import { FadeIn, TextReveal } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function TextRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Text Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Word-by-word text reveal animation with spring physics. Each word
            smoothly fades in and slides up sequentially, creating an elegant
            reading experience.
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
              TextReveal animates text by revealing words one at a time. Each
              word fades in and slides up from below using spring physics for
              natural, bouncy motion. Perfect for headlines, hero sections, and
              any text that needs to make an impact.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Word-by-word:</strong> Splits text into words and
                  animates each sequentially
                </li>
                <li>
                  <strong>Spring physics:</strong> Natural, bouncy motion using
                  Framer Motion springs
                </li>
                <li>
                  <strong>Viewport-triggered:</strong> Animates when text enters
                  the viewport
                </li>
                <li>
                  <strong>Performance optimized:</strong> Uses useMemo for text
                  splitting
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
          <div className="border border-border rounded-lg p-8 bg-card">
            <TextReveal
              text="Watch each word reveal smoothly with spring physics animation"
              className="text-2xl font-semibold"
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
                  <th className="border border-border p-3 text-left font-semibold">
                    Prop
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Type
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Default
                  </th>
                  <th className="border border-border p-3 text-left font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">text</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <span className="text-muted-foreground">Required</span>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    The text to animate
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">delay</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Initial delay before animation starts (seconds)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">staggerDelay</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.12</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Delay between each word (seconds)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">viewportMargin</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;-100px&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Viewport margin for trigger
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">once</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Animate only once
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">className</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Additional CSS classes
                  </td>
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
              code={`import { TextReveal } from '@/components/animations';

export default function Hero() {
  return (
    <TextReveal text="Welcome to our amazing product" />
  );
}`}
            />
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Use Cases</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Hero Headlines</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create impactful hero sections with animated headlines
              </p>
              <CodeBlock
                code={`<TextReveal
  text="Build Amazing Products"
  className="text-5xl font-bold"
/>`}
              />
            </div>

            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Feature Descriptions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Animate feature descriptions as users scroll
              </p>
              <CodeBlock
                code={`<TextReveal
  text="Powerful features for modern web apps"
  staggerDelay={0.15}
/>`}
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
