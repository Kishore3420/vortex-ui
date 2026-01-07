'use client';

import { FadeIn } from '@/components/animations';
import { Spotlight } from '@/components/backgrounds';
import { CodeBlock } from '@/components/ui';

export default function SpotlightPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Spotlight</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Dynamic light beam that tracks the mouse. Elegant illumination
            effect for focused content areas and modern hero sections.
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
              Spotlight creates a visual focal point that follows the cursor.
              It uses a radial mask and blur effects to create a soft,
              atmospheric glow. This is particularly effective for dark mode
              interfaces where it can reveal subtle details as the user
              interacts with the page.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Interactive Focus:</strong> Directs user attention via mouse tracking
                </li>
                <li>
                  <strong>Atmospheric Glow:</strong> Soft edges and realistic light falloff
                </li>
                <li>
                  <strong>Configurable Intensity:</strong> Control how bright and large the beam is
                </li>
                <li>
                  <strong>Performance Optimized:</strong> Efficient calculation of mouse coordinates
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
            <Spotlight
              color="rgba(255, 255, 255, 0.1)"
              className="-top-20 left-0 md:left-60 md:-top-20"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <div className="max-w-md text-center">
                <h3 className="text-white text-3xl font-bold mb-4">Focus on what matters</h3>
                <p className="text-zinc-400">Move your mouse to illuminate the dark corners of the interface.</p>
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
                  <td className="border border-border p-3"><code className="text-sm">color</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>undefined</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the spotlight beam (e.g. hsl, rgba)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">size</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>70</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Radius size in percentage</td>
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
              The <code>Spotlight</code> effect is powered by an SVG with a radial gradient
              mask. As the user moves their mouse, the gradient&apos;s center point is
              dynamically updated to match the cursor coordinates.
            </p>
            <p>
              We uses a combination of <code>feGaussianBlur</code> and <code>feColorMatrix</code>
              within the SVG filter to create the high-quality, atmospheric light falloff.
              The animation is handled via CSS transitions for the x/y offsets to ensure
              smooth, jitter-free movement even on lower-end devices.
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
              <h3 className="font-semibold text-lg text-foreground">Light Color</h3>
              <p className="text-sm text-muted-foreground">
                The <code>color</code> prop allows you to set the beam&apos;s hue. Using a
                soft white or a primary brand color with low opacity (0.1 - 0.2)
                usually yields the most premium results.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Beam Size</h3>
              <p className="text-sm text-muted-foreground">
                Adjust the <code>size</code> prop to control the coverage. Large sizes (80+)
                create a subtle, room-filling ambient glow, while smaller sizes (40-60)
                feel like a direct flashlight or searchlight.
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
                  <h4 className="font-semibold">Event Throttling</h4>
                  <p className="text-sm text-muted-foreground">Mouse move events are internally throttled to ensure that coordinate updates don&apos;t trigger unnecessary re-renders or performance drops.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Interactive Elements</h4>
                  <p className="text-sm text-muted-foreground">The spotlight overlay uses <code>pointer-events: none</code> by default, ensuring that it never interferes with clicks on underlying buttons or links.</p>
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
              <h4 className="font-bold mb-2">Dark Backgrounds</h4>
              <p className="text-sm text-muted-foreground">The Spotlight effect is most dramatic on <code>bg-black</code> or <code>bg-zinc-950</code>. On light backgrounds, the glow becomes much harder to see.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Subtle Intensity</h4>
              <p className="text-sm text-muted-foreground">Avoid 100% opacity colors. Aim for <code>rgba(255,255,255,0.05)</code> to keep the effect elegant and prevent it from washing out your content.</p>
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
              code={`import { Spotlight } from '@/components/backgrounds';

export default function FeaturedSection() {
  return (
    <div className="h-125 w-full bg-black relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" color="white" />
      <div className="relative z-10 pt-20">
        <h1 className="text-center text-white">Spotlight Effect</h1>
      </div>
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
