'use client';

import { FadeIn, Typewriter } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function TypewriterPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Typewriter</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Classic typewriter effect with blinking cursor. Text appears
            character-by-character as if being typed, perfect for hero sections
            and attention-grabbing headlines.
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
              Typewriter creates a classic typing effect where characters appear
              one at a time, simulating someone typing. Includes a blinking
              cursor that pulses continuously. Perfect for creating engaging,
              dynamic text displays.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Character-by-character:</strong> Types out text
                  sequentially
                </li>
                <li>
                  <strong>Blinking cursor:</strong> Animated cursor that pulses
                </li>
                <li>
                  <strong>Configurable speed:</strong> Control typing speed
                </li>
                <li>
                  <strong>Customizable cursor:</strong> Change cursor character
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
            <Typewriter
              text="Watch me type out this text character by character..."
              speed={50}
              className="text-xl font-mono"
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
                    The text to type out
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
                    Delay before typing starts (seconds)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">speed</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>50</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Milliseconds between each character
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">showCursor</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Show blinking cursor
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">cursorChar</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;|&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Cursor character
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
          <CodeBlock
            code={`import { Typewriter } from '@/components/animations';

export default function Hero() {
  return (
    <Typewriter
      text="Welcome to our amazing product"
      speed={50}
      className="text-3xl font-bold"
    />
  );
}`}
          />
        </FadeIn>
      </section>
    </div>
  );
}
