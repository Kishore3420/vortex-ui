'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock, ShimmerButton } from '@/components/ui';

export default function ShimmerButtonPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Shimmer Button</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            High-contrast button with a sweeping shimmer highlight.
            Perfect for primary actions that need to stand out with a
            premium metallic feel.
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
              ShimmerButton uses a CSS-gradient sweep to create a &quot;light glint&quot;
              effect. It&apos;s often used in modern SaaS marketing for the
              primary &quot;Get Started&quot; button. The shimmer is subtle enough not
              to be a distraction but eye-catching enough to significantly
              increase conversion rates.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Radiant Glow:</strong> Includes a soft outer glow for depth
                </li>
                <li>
                  <strong>Smooth Loop:</strong> Continuous shimmer animation
                </li>
                <li>
                  <strong>Wait-State Friendly:</strong> Can be used with loading indicators
                </li>
                <li>
                  <strong>Pure CSS:</strong> Uses optimized keyframe animations
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
          <div className="border border-border rounded-lg p-16 bg-card flex flex-col items-center justify-center gap-8">
            <ShimmerButton className="px-8 py-3 text-lg font-bold">
              Upgrade Now
            </ShimmerButton>
            <ShimmerButton shimmerColor="#FBBF24" className="px-6 py-2 rounded-full text-sm">
              Limited Offer
            </ShimmerButton>
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
                  <td className="border border-border p-3"><code className="text-sm">children</code></td>
                  <td className="border border-border p-3 text-sm"><code>ReactNode</code></td>
                  <td className="border border-border p-3 text-sm"><span className="text-muted-foreground">Required</span></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Button content</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">shimmerColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;#ffffff&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the shimmer glint</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">shimmerSize</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;0.05em&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Width of the shimmer beam</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">shimmerDuration</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;3s&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Sweep duration</td>
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
              The <code>ShimmerButton</code> utilizes a clever combination of CSS masking
              and an animated linear gradient. The shimmer glint is actually a narrow,
              high-intensity gradient that moves across the button&apos;s surface.
            </p>
            <p>
              By setting the <code>mask-image</code> to follow the button&apos;s border-radius,
              we ensure the shimmer stays contained within the button. The continuous
              loop is maintained via a simple <code>infinite</code> CSS animation,
              leveraging GPU acceleration for a buttery-smooth 60fps experience.
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
              <h3 className="font-semibold text-lg text-foreground">Shimmer Intensity</h3>
              <p className="text-sm text-muted-foreground">
                Use the <code>shimmerColor</code> prop to control how &quot;hot&quot; the glint is.
                A pure white (<code>#ffffff</code>) provides the most metallic look,
                while a light version of your brand color creates a subtle, themed glint.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Timing Patterns</h3>
              <p className="text-sm text-muted-foreground">
                The <code>shimmerDuration</code> prop can change the button&apos;s personality.
                Fast sweeps (1s-2s) feel high-energy and urgent, while slower sweeps (4s-6s)
                feel high-end and ambient.
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
                  <h4 className="font-semibold">GPU-Accelerated</h4>
                  <p className="text-sm text-muted-foreground">The sweep effect uses <code>transform: translateX</code> and <code>opacity</code>, which are optimized by the browser to run on the GPU.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Semantic Buttons</h4>
                  <p className="text-sm text-muted-foreground">Despite the complex internal styling, the component renders as a standard <code>&lt;button&gt;</code> element, maintaining full keyboard accessibility.</p>
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
              <h4 className="font-bold mb-2">Primary CTA Only</h4>
              <p className="text-sm text-muted-foreground">Because of its high visual weight, avoid using multiple ShimmerButtons on the same screen. Reserve it for your most important call-to-action.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Dark Mode Sizing</h4>
              <p className="text-sm text-muted-foreground">In dark mode, a slightly thicker <code>shimmerSize</code> can help the glint cut through the dark background more effectively.</p>
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
              code={`import { ShimmerButton } from '@/components/ui';

export default function Hero() {
  return (
    <ShimmerButton onClick={() => alert('Clicked!')}>
      Join the Waitlist
    </ShimmerButton>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
