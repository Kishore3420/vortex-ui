'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { MagneticButton } from '@/components/ui/MagneticButton';

export default function MagneticButtonPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Magnetic Button</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Interactive button that attracts to the mouse cursor using spring
            physics. Creates an engaging, playful interaction perfect for
            call-to-action buttons and interactive elements.
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
              MagneticButton creates a magnetic attraction effect where the
              button smoothly follows the mouse cursor. Uses spring physics for
              natural, bouncy motion and GPU-accelerated animations for smooth
              60fps performance.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Spring physics:</strong> Natural, bouncy motion using
                  useSpring
                </li>
                <li>
                  <strong>GPU-accelerated:</strong> Uses motion values for 60fps
                  performance
                </li>
                <li>
                  <strong>Configurable strength:</strong> Control attraction
                  amount
                </li>
                <li>
                  <strong>Accessible:</strong> Proper ARIA attributes and
                  disabled state
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
          <div className="border border-border rounded-lg p-8 bg-card flex items-center justify-center">
            <MagneticButton
              strength={0.4}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold"
            >
              Hover Near Me
            </MagneticButton>
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
                    <code className="text-sm">children</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>ReactNode</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <span className="text-muted-foreground">Required</span>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Button content
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">strength</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.3</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Attraction strength (0.1-0.6 recommended)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">springConfig</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>object</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>{`{ stiffness: 150, damping: 15, mass: 0.1 }`}</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Spring physics configuration
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">onClick</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>function</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>undefined</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Click handler
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">disabled</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>false</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Disable button
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
            code={`import { MagneticButton } from '@/components/ui';

export default function CTA() {
  return (
    <MagneticButton
      strength={0.3}
      onClick={() => console.log('Clicked!')}
      className="bg-primary text-white px-8 py-4 rounded-lg"
    >
      Get Started
    </MagneticButton>
  );
}`}
          />
        </FadeIn>
      </section>
    </div>
  );
}
