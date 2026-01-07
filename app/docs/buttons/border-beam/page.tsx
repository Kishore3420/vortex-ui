'use client';

import { FadeIn } from '@/components/animations';
import { BorderBeamButton, CodeBlock } from '@/components/ui';

export default function BorderBeamPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Border Beam</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A futuristic button with a laser-like beam that travels around its border.
            Combines sleek typography with high-energy perimeter motion.
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
              BorderBeamButton is a sophisticated UI element that uses a
              moving gradient to simulate a &quot;light ray&quot; orbiting the
              button&apos;s perimeter. It&apos;s an excellent choice for AI tools,
              developer services, or any brand that wanting to project a
              vibe of high speed and cutting-edge technology.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Laser Precision:</strong> Sharp, high-contrast beam motion
                </li>
                <li>
                  <strong>Customizable Flow:</strong> Control the speed and colors of the beam
                </li>
                <li>
                  <strong>Perfect Corners:</strong> The beam follows the border radius perfectly
                </li>
                <li>
                  <strong>Hover Responsive:</strong> Can be configured to react to interaction
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
            <BorderBeamButton className="px-10 py-4 text-white">
              Initialize System
            </BorderBeamButton>
            <BorderBeamButton
              duration={2}
              className="px-8 py-3 rounded-full text-sm"
            >
              Cyber Action
            </BorderBeamButton>
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
                  <td className="border border-border p-3"><code className="text-sm">duration</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>3</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Seconds for one full rotation</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">beamColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>undefined</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the beam</td>
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
              The <code>BorderBeamButton</code> uses a sophisticated CSS-only approach
              leveraging <code>conic-gradients</code> and <code>border-image</code> properties.
              The beam is essentially a high-contract gradient that orbits the button.
            </p>
            <p>
              By applying a moving mask to the border layer, we can simulate the appearance
              of a light ray that specifically illuminates the perimeter. The rotation
              is achieved through a <code>@keyframes</code> animation that rotates the
              gradient container, ensuring perfect synchronization across all four sides.
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
              <h3 className="font-semibold text-lg text-foreground">Beam Dynamics</h3>
              <p className="text-sm text-muted-foreground">
                The <code>duration</code> prop controls the velocity of the lightray.
                Short durations (1s-2s) create an aggressive, high-energy look, while
                longer durations (4s-6s) feel more stable and professional.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Spectrum Control</h3>
              <p className="text-sm text-muted-foreground">
                Use the <code>beamColor</code> prop to define the light source. You can
                provide a single color or a custom gradient string to create
                multi-colored &quot;rainbow&quot; laser effects.
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
                  <h4 className="font-semibold">Pure CSS Path</h4>
                  <p className="text-sm text-muted-foreground">The animation logic resides entirely in CSS keyframes, meaning the JavaScript main thread is completely free during the animation loop.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Focus Rings</h4>
                  <p className="text-sm text-muted-foreground">Internal styling ensures that the animated border does not obscure the browser&apos;s native focus ring, preserving keyboard usability.</p>
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
              <h4 className="font-bold mb-2">Border Radius Matching</h4>
              <p className="text-sm text-muted-foreground">Ensure the component&apos;s container has an identical border-radius to the inner beam to prevent light leaks at the corners.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Contextual Energy</h4>
              <p className="text-sm text-muted-foreground">Use BorderBeam for active states like &quot;Processing...&quot; or &quot;Connecting...&quot; to provide immediate visual feedback of background tasks.</p>
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
              code={`import { BorderBeamButton } from '@/components/ui';

export default function Action() {
  return (
    <BorderBeamButton duration={5}>
      Confirm Details
    </BorderBeamButton>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
