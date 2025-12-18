'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { RippleButton } from '@/components/ui/RippleButton';

export default function RippleButtonPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Ripple Button</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Material Design-inspired button with ripple effect. Creates a
            circular ripple that expands from the click point, providing clear
            visual feedback for user interactions.
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
              RippleButton creates a Material Design-inspired ripple effect when
              clicked. The ripple expands from the exact click position,
              creating a satisfying visual feedback. Supports multiple
              simultaneous ripples and dynamically calculates size based on
              button dimensions.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Click-positioned:</strong> Ripple starts at exact
                  click point
                </li>
                <li>
                  <strong>Dynamic sizing:</strong> Ripple size based on button
                  dimensions
                </li>
                <li>
                  <strong>Multiple ripples:</strong> Supports rapid clicks
                </li>
                <li>
                  <strong>Proper cleanup:</strong> Prevents memory leaks
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
            <RippleButton
              rippleColor="rgba(255, 255, 255, 0.6)"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold"
            >
              Click Me
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
                    <code className="text-sm">rippleColor</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;rgba(255, 255, 255, 0.5)&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Ripple color
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">rippleDuration</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.6</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Ripple animation duration (seconds)
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
            code={`import { RippleButton } from '@/components/ui';

export default function CTA() {
  return (
    <RippleButton
      rippleColor="rgba(255, 255, 255, 0.6)"
      onClick={() => console.log('Clicked!')}
      className="bg-primary text-white px-8 py-4 rounded-lg"
    >
      Get Started
    </RippleButton>
  );
}`}
          />
        </FadeIn>
      </section>
    </div>
  );
}
