'use client';

import { FadeIn } from '@/components/animations';
import { MeshGradient } from '@/components/backgrounds';
import { CodeBlock } from '@/components/ui';

export default function MeshGradientPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Mesh Gradient</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Smooth, multi-color mesh gradients. Creates a premium,
            abstract background with slow, organic movement.
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
              MeshGradient uses SVG filters and CSS animations to create a
              &quot;liquid&quot; glass-morphic background. Unlike linear or radial
              gradients, mesh gradients allow for complex, organic color
              interactions that feel high-end and modern.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Organic Motion:</strong> Points move independently for a fluid feel
                </li>
                <li>
                  <strong>Rich Color:</strong> Supports multiple blended color points
                </li>
                <li>
                  <strong>Glassmorphism:</strong> Works perfectly behind blurred overlays
                </li>
                <li>
                  <strong>Lightweight:</strong> Pure CSS/SVG implementation
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
          <div className="border border-border rounded-lg h-100 relative overflow-hidden bg-white">
            <MeshGradient
               speed={15}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 z-10">
                <h2 className="text-2xl font-bold text-white">Glass Card</h2>
              </div>
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
                  <td className="border border-border p-3"><code className="text-sm">speed</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>8</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Animation duration in seconds (lower is faster)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">opacityRange</code></td>
                  <td className="border border-border p-3 text-sm"><code>[number, number]</code></td>
                  <td className="border border-border p-3 text-sm"><code>[0.6, 0.8]</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Min and max opacity levels</td>
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
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The <code>MeshGradient</code> component works by creating an SVG filter that
              distorts a set of colored circles. These circles are animated using CSS
              keyframes to move in a randomized, organic pattern.
            </p>
            <p>
              By applying a high blur value and a turbulence filter to the SVG container,
              the distinct edges of the circles are blended together, creating the final
              &quot;liquid&quot; mesh effect. This approach is highly efficient as it leverages
              the browser&apos;s native rendering engine for gradients and filters.
            </p>
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
              <h3 className="font-semibold text-lg text-foreground">Color Profiles</h3>
              <p className="text-sm text-muted-foreground">
                While the component comes with a curated primary palette, you can easily
                override the background and point colors using CSS variables or the
                <code>className</code> prop to match your brand.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Animation Feel</h3>
              <p className="text-sm text-muted-foreground">
                The <code>speed</code> prop controls the overall energy. Use higher values
                (20s+) for a calm, ambient feel, or lower values (5s-10s) for more
                dynamic, interactive sections.
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
          <div className="space-y-4">
            <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Optimized Core</h4>
                  <p className="text-sm text-muted-foreground">Uses SVG and CSS transforms which are GPU-accelerated in most modern browsers, keeping main-thread usage minimal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Reduced Motion</h4>
                  <p className="text-sm text-muted-foreground">Automatically honors the <code>prefers-reduced-motion</code> media query by slowing down or pausing animations.</p>
                </div>
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
          <ul className="grid gap-4 md:grid-cols-2 list-none p-0">
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Contrast Awareness</h4>
              <p className="text-sm text-muted-foreground">Always ensure text overlays have sufficient contrast against the animated gradient. Dark mode variants are recommended for mesh effects.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Layering</h4>
              <p className="text-sm text-muted-foreground">Apply a subtle noise texture overlay on top of the MeshGradient to reduce color banding on some displays and add a premium film-grain feel.</p>
            </li>
          </ul>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Basic Usage</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { MeshGradient } from '@/components/backgrounds';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <MeshGradient speed={10} />
      <div className="relative z-10">Hero Content</div>
    </div>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
