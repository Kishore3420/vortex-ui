'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { GlowButton } from '@/components/ui/GlowButton';

export default function GlowButtonPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Glow Button</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Button with hover glow animation. Creates a glowing halo effect
            behind the button on hover, perfect for highlighting important
            actions and creating visual depth.
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
              GlowButton creates a premium hover effect with a glowing halo
              behind the button. The glow fades in smoothly on hover and uses
              CSS blur filters for a soft, professional appearance. Supports
              theme-aware colors and customizable intensity.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Hover glow:</strong> Smooth fade-in on hover
                </li>
                <li>
                  <strong>Theme-aware:</strong> Uses CSS variables for colors
                </li>
                <li>
                  <strong>Configurable intensity:</strong> Control glow
                  brightness
                </li>
                <li>
                  <strong>Optional scale:</strong> Can scale button on hover
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
            <GlowButton
              variant="primary"
              glowIntensity={1.2}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold"
            >
              Hover for Glow
            </GlowButton>
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
                    <code className="text-sm">variant</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>
                      &apos;primary&apos; | &apos;secondary&apos; |
                      &apos;accent&apos; | &apos;default&apos;
                    </code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;default&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Theme variant for glow color
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">glowColor</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>undefined</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Custom glow color (overrides variant)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">glowIntensity</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>1</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Glow intensity multiplier
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">scaleOnHover</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Scale button on hover
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
            code={`import { GlowButton } from '@/components/ui';

export default function CTA() {
  return (
    <GlowButton
      variant="primary"
      glowIntensity={1.2}
      onClick={() => console.log('Clicked!')}
      className="bg-primary text-white px-8 py-4 rounded-lg"
    >
      Get Started
    </GlowButton>
  );
}`}
          />
        </FadeIn>
      </section>
    </div>
  );
}
