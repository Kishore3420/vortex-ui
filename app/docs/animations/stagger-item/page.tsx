'use client';

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function StaggerItemPage() {
  const items = [1, 2, 3, 4];

  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Stagger Item</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Individual animated items within a StaggerContainer. Defines how each
            child element animates, supporting fade, slide, scale, and various
            animation types for maximum flexibility.
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
              StaggerItem is the individual performer in a staggered animation
              sequence. While StaggerContainer orchestrates the timing,
              StaggerItem defines what each element actually does - whether it
              fades, slides, scales, or combines multiple effects. It uses
              Framer Motion&apos;s variant system to work seamlessly with
              StaggerContainer.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Variant-based:</strong> Uses &quot;hidden&quot; and &quot;visible&quot;
                  variants to sync with StaggerContainer
                </li>
                <li>
                  <strong>Flexible effects:</strong> Supports fade, slide, scale,
                  or combinations
                </li>
                <li>
                  <strong>Animation types:</strong> Spring physics or tween
                  animations
                </li>
                <li>
                  <strong>Directional:</strong> Can slide from any direction
                  (up, down, left, right)
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Variant System</h3>
                <p className="text-sm text-muted-foreground">
                  StaggerItem uses two variants that must match StaggerContainer:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <code className="bg-background px-1 rounded">hidden</code>:
                    Initial state (opacity: 0, offset position, optional scale)
                  </li>
                  <li>
                    <code className="bg-background px-1 rounded">visible</code>:
                    Final state (opacity: 1, final position, scale: 1)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Types</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Two animation systems available:
                </p>
                <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <strong>Spring:</strong> Physics-based, natural motion
                    (default)
                  </li>
                  <li>
                    <strong>Tween:</strong> Time-based, precise control with
                    easing
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Effect Combinations</h3>
                <p className="text-sm text-muted-foreground">
                  You can combine multiple effects:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Fade only (withFade=true, direction=&quot;none&quot;)</li>
                  <li>Slide only (withFade=false, direction set)</li>
                  <li>Fade + Slide (default combination)</li>
                  <li>Fade + Scale (withScale=true)</li>
                  <li>All three (fade + slide + scale)</li>
                </ul>
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
                <tr className="bg-muted/50">
                  <th className="border border-border p-3 text-left">Prop</th>
                  <th className="border border-border p-3 text-left">Type</th>
                  <th className="border border-border p-3 text-left">Default</th>
                  <th className="border border-border p-3 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">animationType</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;spring&apos; | &apos;tween&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;spring&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Animation system: spring (physics-based) or tween
                    (time-based)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">direction</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;up&apos; | &apos;down&apos; | &apos;left&apos; | &apos;right&apos; | &apos;none&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;up&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Slide direction. &apos;none&apos; = no slide, fade only
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">offset</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>20</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Distance to slide from (pixels)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">withFade</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Enable fade effect (opacity transition)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">withScale</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>false</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Enable scale effect (grow from small to full size)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">scale</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.8</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Initial scale value (0-1). Lower = starts smaller
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">easing</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>EasingPreset | string | [number, number, number, number]</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;easeOut&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Easing function (only for tween type). Presets: easeIn,
                    easeOut, easeInOut, linear, bounce, spring, smooth, sharp
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">springDamping</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>12</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Spring damping (only for spring type). Lower = bouncier
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">springStiffness</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>100</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Spring stiffness (only for spring type). Higher = faster
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">duration</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.5</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Animation duration in seconds (only for tween type)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Interactive Examples</h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Default (Spring + Fade + Slide)
              </h3>
              <StaggerContainer staggerDelay={0.15}>
                {items.map((item) => (
                  <StaggerItem key={item}>
                    <div className="bg-linear-to-r from-purple-600 to-pink-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {item}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        Spring animation with fade and slide up
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Tween with Smooth Easing
              </h3>
              <StaggerContainer staggerDelay={0.1}>
                {items.map((item) => (
                  <StaggerItem
                    key={item}
                    animationType="tween"
                    easing="smooth"
                    direction="left"
                  >
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {item}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        Tween animation sliding from right
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">With Scale Effect</h3>
              <StaggerContainer staggerDelay={0.12}>
                {items.map((item) => (
                  <StaggerItem
                    key={item}
                    withScale={true}
                    scale={0.5}
                    easing="bounce"
                    animationType="tween"
                  >
                    <div className="bg-linear-to-r from-green-600 to-emerald-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {item}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        Scales from 50% with bounce easing
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fade Only (No Slide)</h3>
              <StaggerContainer staggerDelay={0.08}>
                {items.map((item) => (
                  <StaggerItem key={item} direction="none" withFade={true}>
                    <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {item}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        Pure fade effect, no sliding motion
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Custom Spring Physics
              </h3>
              <StaggerContainer staggerDelay={0.15}>
                {items.map((item) => (
                  <StaggerItem
                    key={item}
                    animationType="spring"
                    springDamping={8}
                    springStiffness={150}
                  >
                    <div className="bg-linear-to-r from-violet-600 to-purple-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">Item {item}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        Bouncier spring (damping: 8, stiffness: 150)
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">When to Use Spring vs Tween</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Spring:</strong> Natural, organic feel. Great for UI
                  elements, cards, buttons
                </li>
                <li>
                  <strong>Tween:</strong> Precise, controlled. Great for data
                  visualizations, precise timing needs
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Effect Combinations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ✅ <strong>Fade + Slide:</strong> Most common, professional
                  look
                </li>
                <li>
                  ✅ <strong>Fade + Scale:</strong> Attention-grabbing, playful
                </li>
                <li>
                  ⚠️ <strong>All three:</strong> Can be overwhelming, use
                  sparingly
                </li>
                <li>
                  ✅ <strong>Fade only:</strong> Subtle, elegant for minimal
                  designs
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
