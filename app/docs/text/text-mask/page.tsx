'use client';

import { FadeIn, TextMask } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function TextMaskPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Text Mask</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Stunning visual effect where images or videos are clipped to the
            text shape. Combines high-contrast typography with rich media
            foundations.
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
              TextMask (often referred to as background-clip text) allows you to
              use any visual asset—static images, gradients, or even videos—as
              the actual &quot;fill&quot; for your characters. It turns your typography
              into a window into another world. Our implementation includes
              an animated ambient glow that matches the background image for
              added depth.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Rich Media Clipping:</strong> Display images/videos inside text
                </li>
                <li>
                  <strong>Ambient Glow:</strong> Coordinated blurred background for depth
                </li>
                <li>
                  <strong>Animated Position:</strong> Slowly drifting background for organic feel
                </li>
                <li>
                  <strong>High Impact:</strong> Ideal for luxury, fashion, and edgy branding
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
            <TextMask
              text="Cosmos"
              className="text-8xl md:text-9xl leading-none"
              backgroundImage="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2000"
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to mask</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">backgroundImage</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;Space Image URL&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">URL of the image or video</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">maskSize</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;cover&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">CSS background-size property</td>
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
              code={`import { TextMask } from '@/components/animations';

export default function Featured() {
  return (
    <TextMask
      text="OCEAN"
      backgroundImage="/videos/waves.mp4"
      className="text-8xl font-black"
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
