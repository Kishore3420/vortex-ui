'use client';

import { FadeIn, TextReveal } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

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
                  <strong>Performance optimized:</strong> Uses memoized text
                  splitting for efficiency
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
                  <td className="border border-border p-3"><code className="text-sm">delay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Initial delay before animation (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">staggerDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.12</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between each word (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">className</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot; &quot;</code></td>
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
              code={`import { TextReveal } from '@/components/animations';

export default function MyComponent() {
  return (
    <TextReveal
      text="Premium animation for your headlines"
      className="text-4xl font-bold"
    />
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
              <h3 className="font-semibold mb-2 text-lg">Hero Headlines</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Perfect for large headlines that need to capture attention as the page loads.
              </p>
              <CodeBlock
                code={`<TextReveal
  text="Future of Design"
  staggerDelay={0.2}
/>`}
              />
            </div>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2 text-lg">Marketing Slogans</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Make your marketing copy more engaging with sequential reveals.
              </p>
              <CodeBlock
                code={`<TextReveal
  text="Simple. Fast. Elegant."
  delay={0.5}
/>`}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-muted-foreground">
              <p>
                TextReveal uses a sophisticated sequencing technique to animate words independently:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong>Word Splitting:</strong> The input string is split into an array of words using whitespace as a delimiter.</li>
                <li><strong>Memoization:</strong> This splitting process is wrapped in <code>useMemo</code> to ensure it only happens when the text changes, preserving performance.</li>
                <li><strong>Staggered Transitions:</strong> The parent container sets up a <code>staggerChildren</code> transition, which automatically applies the specified delay to each subsequent word element.</li>
                <li><strong>Spring Physics:</strong> Every word is a separate <code>motion.span</code> that slides up from a Y-offset using spring dynamics (<code>stiffness: 100</code>, <code>damping: 12</code>) for a natural, tactile feel.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Customization Guide</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Adjusting Rhythm</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <code>staggerDelay</code> prop is your primary tool for controlling the &quot;tempo&quot; of the reveal.
                A lower value (0.05s) feels fast and energetic, while a higher value (0.2s+) feels deliberate and cinematic.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Viewport Control</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use <code>viewportMargin</code> to trigger the animation exactly when you want.
                A negative margin like <code>-100px</code> ensures the text doesn&apos;t start animating until it&apos;s well inside the viewable area.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Performance & Accessibility</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="border border-border rounded-lg p-6 bg-card space-y-4 text-muted-foreground">
             <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Performance</h3>
                  <p className="text-sm">
                    Because words are rendered as inline-block spans, they benefit from GPU acceleration for transforms and opacity.
                    The use of <code>once: true</code> by default ensures the heavy lifting of the initial reveal only happens once per page session.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm">
                    The component maintains the full string integrity within the DOM, ensuring screen readers can easily parse the content.
                    It also honors <code>prefers-reduced-motion</code> settings via the underlying Framer Motion engine.
                  </p>
                </div>
             </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <h3 className="font-semibold">✅ Do</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Use for critical hero messaging to slow down the user&apos;s focus.</li>
                <li>Combine with a strong weight font for maximum impact.</li>
                <li>Ensure the container has enough height to avoid layout shifts.</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use for long paragraphs (it becomes tiring to read).</li>
                <li>Avoid extremely high stagger delays that make the content feel broken.</li>
                <li>Don&apos;t overlay too many competing motion components in one fold.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
