'use client';

import { FadeIn, ScrambleReveal } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function ScrambleRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Scramble Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Matrix-style &quot;deciphering&quot; effect. Random characters flip
            rapidly before settling into the final text, creating a high-tech
            security or hacking aesthetic.
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
              ScrambleReveal is a cinematic text entry effect that uses random
              character substitution. Each letter of the target string is
              initially disguised as a random symbol, which then &quot;unlocks&quot;
              or decodes sequentially. This is a classic visual for developer
              tools, cybersecurity platforms, and science-fiction themes.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Decipher Animation:</strong> Controlled decoding from left to right
                </li>
                <li>
                  <strong>Custom Glyphs:</strong> Control the characters used during scrambling
                </li>
                <li>
                  <strong>Speed Control:</strong> Adjust how fast characters iterate
                </li>
                <li>
                  <strong>Mono Compatibility:</strong> Works best with monospaced fonts for stability
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
          <div className="border border-border rounded-lg p-16 bg-zinc-950 flex flex-col items-center justify-center gap-8">
            <ScrambleReveal
              text="AUTHENTICATION SUCCESSFUL"
              className="text-2xl font-mono text-green-500"
              scrambleSpeed={30}
              duration={2}
            />
            <ScrambleReveal
              text="DECRYPTING DATA..."
              className="text-xl font-mono text-zinc-400"
              characters="01"
              delay={0.5}
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The final text result</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">characters</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;A-Z, a-z, 0-9...&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Characters used to scramble</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>1.5</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Total reveal time (s)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">scrambleSpeed</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>40</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Frequency of character swaps (ms)</td>
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
              code={`import { ScrambleReveal } from '@/components/animations';

export default function Terminal() {
  return (
    <ScrambleReveal
      text="ACCESS GRANTED"
      className="font-mono text-xl"
      scrambleSpeed={50}
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
