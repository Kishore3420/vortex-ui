'use client';

import { CharacterReveal, FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function CharacterRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Character Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            High-energy typography animation that reveals text character by
            character. Creates an &quot;erupting&quot; or &quot;pop-up&quot; effect with spring
            physics for a playful, bouncy feel.
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
              CharacterReveal is designed for short, impactful headings or brand
              names. Each character is treated as an individual animated unit,
              staggered sequentially to create a wave-like appearance. It uses
              spring physics (stiffness and damping) to ensure the motion feels
              organic and responsive rather than robotic.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Spring Physics:</strong> Natural bounce and deceleration
                </li>
                <li>
                  <strong>Dense Staggering:</strong> Rapid, granular animation for high energy
                </li>
                <li>
                  <strong>Fine Control:</strong> Adjust the stagger delay for speed or flow
                </li>
                <li>
                  <strong>In-View Activation:</strong> Only triggers when the user scrolls it into view
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
            <CharacterReveal
              text="BOUNCY REVEAL"
              className="text-5xl font-black italic tracking-tight text-primary"
              staggerDelay={0.04}
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
                  <td className="border border-border p-3 text-sm"><code>0.03</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Delay between characters (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">viewportMargin</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;-100px&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Threshold for in-view trigger</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">once</code></td>
                  <td className="border border-border p-3 text-sm"><code>boolean</code></td>
                  <td className="border border-border p-3 text-sm"><code>true</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animate only once</td>
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
              code={`import { CharacterReveal } from '@/components/animations';

export default function Title() {
  return (
    <CharacterReveal
      text="Dynamic Header"
      staggerDelay={0.05}
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
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-muted-foreground">
              <p>
                CharacterReveal uses a high-frequency sequencing technique for maximum energy:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong>Character Atomization:</strong> The text is split into individual characters (including spaces), which allows for total control over the reveal timing of every letter.</li>
                <li><strong>Rapid Staggering:</strong> Unlike word-based reveals, character reveals usually use much smaller delays (0.01s to 0.05s), creating a &quot;domino effect&quot; across the sentence.</li>
                <li><strong>Spring Animation:</strong> Each character is a <code>motion.span</code> that animates from a hidden state (usually offset or scaled) to its final position using spring physics for that signature &quot;bounce&quot;.</li>
                <li><strong>Whitespace Handling:</strong> Spaces are preserved and rendered as spans to maintain correct sentence flow and layout.</li>
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
              <h3 className="font-semibold text-lg">Intensity Control</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <code>staggerDelay</code> for character reveals is critical.
                Values around <code>0.02s</code> create a fluid wave, while <code>0.08s</code> makes each letter feel like a deliberate &quot;pop&quot;.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">In-View Timing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adjust <code>viewportMargin</code> to <code>&quot;-20%&quot;</code> if you want the reveal to wait until the heading is well-centered in the user&apos;s view.
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
                    Character reveals create more DOM nodes than word reveals.
                    For short titles, this is negligible. However, for large blocks of text, consider using <code>TextReveal</code> (word-based) to stay within the recommended node count for high-performance mobile devices.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm">
                    Despite being split into spans, the component remains fully accessible.
                    Screen readers treat the sequence of characters as a single word/sentence, and the layout remains stable during the animation.
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
                <li>Use for brand names or very short catchphrases (3-5 words).</li>
                <li>Apply bold, high-contrast colors to make the animation &quot;pop&quot;.</li>
                <li>Use relatively fast stagger delays to keep the user moving.</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use for whole paragraphs (creates hundreds of DOM nodes).</li>
                <li>Avoid very slow character reveals as users will lose patience.</li>
                <li>Don&apos;t use on interactive elements like links where shifting text might cause mis-clicks.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
