'use client';

import { FadeIn } from '@/components/animations';
import { Aurora } from '@/components/backgrounds';
import { CodeBlock } from '@/components/ui';

export default function AuroraPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Aurora</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Fluid, northern-lights inspired background effect. Creates a
            dreamy, ethereal atmosphere with shifting gradients and
            soft motion.
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
              Aurora is a high-performance background component that uses
              layered gradient animations to simulate the natural flow of the
              aurora borealis. It&apos;s designed to be used as a backdrop for
              hero sections, logins, or dashboard landing pages where a
              calm but dynamic energy is desired.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Smooth Transitions:</strong> Infinite, fluid gradient loops
                </li>
                <li>
                  <strong>Custom Color Palettes:</strong> Configure the primary, secondary, and accent colors
                </li>
                <li>
                  <strong>Layered Depth:</strong> Uses multiple blurry elements for a soft, 3D feel
                </li>
                <li>
                  <strong>GPU Accelerated:</strong> Uses transform-based animations for 60fps performance
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
          <div className="border border-border rounded-lg h-100 relative overflow-hidden bg-zinc-950">
            <Aurora className="opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-4xl font-bold z-10">Ethereal Beauty</h2>
            </div>
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
                  <td className="border border-border p-3"><code className="text-sm">className</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Additional CSS classes</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">showRadialGradient</code></td>
                  <td className="border border-border p-3 text-sm"><code>boolean</code></td>
                  <td className="border border-border p-3 text-sm"><code>true</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Adds an overlay radial gradient</td>
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
              code={`import { Aurora } from '@/components/backgrounds';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Aurora className="opacity-30" />
      <main className="relative z-10">
        {children}
      </main>
    </div>
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
                Aurora achieves its dreamy aesthetic through a combination of CSS techniques:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong>Glow Layers:</strong> Uses three distinct <code>div</code> layers with massive blur radii (typically 50px+) to create soft, bleeding edges between colors.</li>
                <li><strong>Keyframe Loops:</strong> Each layer follows a unique, infinite <code>@keyframes</code> path that moves the element in a non-linear fashion, preventing the pattern from feeling repetitive.</li>
                <li><strong>Radial Masking:</strong> An optional radial gradient overlay (<code>showRadialGradient</code>) helps &quot;anchor&quot; the center of the viewport, making text content more readable while keeping the edges dynamic.</li>
                <li><strong>GPU Composition:</strong> By animating <code>transform</code> (translate/rotate) instead of properties like <code>background-position</code>, the browser handles the animation on the GPU, maintaining a solid 60fps.</li>
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
              <h3 className="font-semibold text-lg">Contrast Control</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your Aurora effect is too bright for light text, wrap it in a container with <code>bg-black</code> and set the component to <code>opacity-50</code>. This deepens the colors while preserving the motion.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Positioning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By default, Aurora fills its relative container. Use <code>-z-10</code> on the component and <code>relative</code> on your content to ensure proper layering.
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
                    High blur filters can be computationally expensive on older mobile hardware.
                    Monitor your frame rates on mid-range devices; if you notice drops, reducing the component&apos;s opacity or size can help alleviate pixel-fill pressure.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm">
                    Aurora does not contain flashing lights or rapid color shifts, making it safe for users with vestibular disorders.
                    However, ensure your foreground text maintains a 4.5:1 contrast ratio against the shifting background colors.
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
                <li>Use for full-viewport hero sections and landing pages.</li>
                <li>Pick high-contrast colors (e.g., Violet and Emerald) for a true &quot;borealis&quot; look.</li>
                <li>Stick to dark backgrounds (<code>bg-black</code> or <code>bg-zinc-950</code>) for a premium feel.</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use at 100% opacity (it will overpower your UI).</li>
                <li>Avoid using with too many other overlapping animations (e.g., heavy particles).</li>
                <li>Don&apos;t use as a background for complex data tables or small text areas.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
