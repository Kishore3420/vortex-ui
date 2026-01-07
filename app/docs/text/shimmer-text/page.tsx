'use client';

import { FadeIn, ShimmerText } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function ShimmerTextPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Shimmer Text</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Animated gradient text effect. A shimmering light highlight
            sweeps across the text, creating a premium metallic or glossy
            appearance.
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
              ShimmerText uses background-masking and CSS keyframe animations to
              create a continuous &quot;glint&quot; effect. It&apos;s an excellent way to make
              important text and calls-to-action stand out without using
              distracting motion. It feels refined, subtle, and high-end.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Subtle Highlight:</strong> Controlled sweep of a gradient shimmer
                </li>
                <li>
                  <strong>Customizable Colors:</strong> Control the base and shimmer highlight colors
                </li>
                <li>
                  <strong>Smooth Loop:</strong> Seamlessly repeats for ambient visual interest
                </li>
                <li>
                  <strong>Performance Optimized:</strong> Uses GPU-accelerated background transitions
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
            <ShimmerText
              text="UPGRADE YOUR INTERFACE"
              className="text-4xl font-black italic tracking-tighter"
              shimmerColor="#ffffff"
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The text to shimmer</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">shimmerColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;rgba(255, 255, 255, 0.4)&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the shimmer highlight</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>2</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Duration of one shimmer sweep (s)</td>
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
              code={`import { ShimmerText } from '@/components/animations';

export default function PremiumBadge() {
  return (
    <ShimmerText
      text="PREMIUM PLAN"
      shimmerColor="#FBBF24"
      className="text-lg font-bold"
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
