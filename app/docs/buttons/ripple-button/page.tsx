'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock, RippleButton } from '@/components/ui';

export default function RippleButtonPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Ripple Button</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Classic Material-inspired button with a dynamic, centered ripple.
            Provides immediate, liquid visual feedback on click.
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
              RippleButton modernizes the traditional ripple effect by using
              GPU-accelerated transforms and smooth opacity fades. When
              clicked, a &quot;wave&quot; of color expands from the center (or
              contact point), giving the user clear, tactile confirmation
              that their interaction was successful.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Dynamic Feedback:</strong> Instant reaction to mouse or touch contact
                </li>
                <li>
                  <strong>Smooth Motion:</strong> Physics-based expansion and fade
                </li>
                <li>
                  <strong>Universal Design:</strong> Familiar interaction pattern for all users
                </li>
                <li>
                  <strong>Customizable Style:</strong> Adjust the ripple color and expand speed
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
            <RippleButton className="bg-primary text-primary-foreground px-10 py-4 rounded-xl font-bold shadow-lg">
              Click Me
            </RippleButton>
            <RippleButton rippleColor="rgba(59, 130, 246, 0.5)" className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-full text-sm font-semibold">
              Subtle Wave
            </RippleButton>
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
                  <td className="border border-border p-3"><code className="text-sm">rippleColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;rgba(255, 255, 255, 0.3)&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the expanding ripple</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>0.6</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Ripple expansion time (s)</td>
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
              The <code>RippleButton</code> works by dynamically injecting a &quot;ripple&quot;
              div into the button container on every click event. The initial size of
              this div is nearly zero, and its position is set to the center of the
              button (or the specific click coordinate).
            </p>
            <p>
              An animation then scales the ripple up to cover the entire button area while
              simultaneously fading its opacity. Once the animation completes, the
              component automatically cleans up the ripple element to prevent memory
              leaks and maintain a clean DOM.
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
              <h3 className="font-semibold text-lg text-foreground">Visual Feedback</h3>
              <p className="text-sm text-muted-foreground">
                Set the <code>rippleColor</code> to contrast with your button background.
                For dark buttons, a semi-transparent white works best, while for light
                buttons, a subtle dark or primary color ripple feels more natural.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Feedback Speed</h3>
              <p className="text-sm text-muted-foreground">
                The <code>duration</code> prop allows you to match the ripple pace to your
                brand. Values around 0.4s-0.5s are snappy and modern, while 0.8s+
                creates a more intentional, &quot;heavy&quot; feedback feel.
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
                  <h4 className="font-semibold">Cleanup Cycle</h4>
                  <p className="text-sm text-muted-foreground">Uses a timeout-based cleanup mechanism that removes ripple elements exactly when their animation ends, ensuring DOM stability.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Inclusive Interaction</h4>
                  <p className="text-sm text-muted-foreground">The ripple is purely visual and does not block the <code>onClick</code> handler, guaranteeing that assistive technologies can still trigger the button action without delay.</p>
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
              <h4 className="font-bold mb-2">Overflow Handling</h4>
              <p className="text-sm text-muted-foreground">The RippleButton container is set to <code>overflow-hidden</code> by default. Ensure your custom button styles don&apos;t override this, or the ripple will bleed outside the button shape.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Color Opacity</h4>
              <p className="text-sm text-muted-foreground">Always use RGBA or HEX with transparency for the ripple. A solid color ripple can look jarring and obscure the button text during the animation.</p>
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
              code={`import { RippleButton } from '@/components/ui';

export default function App() {
  return (
    <RippleButton className="rounded-full bg-slate-900 text-white p-4">
      Submit Form
    </RippleButton>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
