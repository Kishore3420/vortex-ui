'use client';

import { FadeIn, Typewriter } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function TypewriterPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Typewriter</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Classic sequential text entry effect. Simulates the act of
            typing in real-time, complete with a blinking cursor and
            adjustable rhythm.
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
              Typewriter is one of the most recognizable and engaging text
              animations. It suggests a process of creation, discovery, or
              communication. It&apos;s highly effective for storytelling, terminal
              simulations, or AI-chat interfaces where you want to pace the
              delivery of information to the user.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Sequential Reveal:</strong> Predictable, character-by-character flow
                </li>
                <li>
                  <strong>Interactive Cursor:</strong> Bypasses static feel with a &quot;living&quot; cursor
                </li>
                <li>
                  <strong>Configurable Speed:</strong> Match the speed to your brand&apos;s &quot;typing&quot; personality
                </li>
                <li>
                  <strong>Accessibility:</strong> Can be configured to show all text for screen readers
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
            <Typewriter
              text="Hello, I am Vortex AI. How can I help you today?"
              className="text-2xl font-mono text-white"
              speed={40}
              cursorChar="_"
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">Text to be typed</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">speed</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>50</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Typing interval (ms)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">cursorChar</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;|&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Symbol for the blinking cursor</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">showCursor</code></td>
                  <td className="border border-border p-3 text-sm"><code>boolean</code></td>
                  <td className="border border-border p-3 text-sm"><code>true</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Whether to show the cursor</td>
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
              code={`import { Typewriter } from '@/components/animations';

export default function Intro() {
  return (
    <Typewriter
      text="Crafting the future which is fast."
      speed={60}
      className="text-3xl font-bold"
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
                Typewriter simulates a real-world typing experience through incremental state updates:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong>Incremental Slicing:</strong> The component maintains an internal index (counter). It uses <code>text.substring(0, index)</code> to render only a portion of the string at any given time.</li>
                <li><strong>Timed Intervals:</strong> A <code>useEffect</code> hook manages a timer (via <code>setTimeout</code> or <code>setInterval</code>) that increments the index based on the <code>speed</code> prop.</li>
                <li><strong>Cursor Simulation:</strong> The cursor is a separate element (or pseudo-element) that blinks using CSS animations and is appended to the visible string.</li>
                <li><strong>Reset Capability:</strong> The animation can be re-triggered by changing the <code>text</code> prop or by unmounting/remounting the component.</li>
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
              <h3 className="font-semibold text-lg">Pacing and Speed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <code>speed</code> prop is in milliseconds. <code>30ms</code> feels like a fast, proficient typer, while <code>100ms</code> feels slow and deliberate.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Visual Identity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use <code>cursorChar</code> to match your brand style. An underscore (<code>_</code>) fits terminal themes, while a pipe (<code>|</code>) fits modern text editors.
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
                    Re-rendering on every character is fine for single sentences. However, for large multi-paragraph documents, consider using a faster speed or an alternative reveal to avoid excessive layout calculations.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm">
                    A major concern with typewriters is that screen readers may read out the text on every update. VortexUI handles this by ensuring the full text is available in the DOM in a way that remains compatible with assistive technology.
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
                <li>Use for hero headings that need to tell a story or build suspense.</li>
                <li>Pair with a <code>font-mono</code> font for a classic &quot;computer&quot; aesthetic.</li>
                <li>Ensure there is enough vertical space for the text to wrap without moving other elements.</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use for information that needs to be read instantly.</li>
                <li>Avoid using with extremely long sentences that take more than 5 seconds to complete.</li>
                <li>Don&apos;t forget to set a fixed height on the container if the text wraps frequently.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
