'use client';
import {
  FadeIn,
  RotateIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function FramerMotionPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Framer Motion Components</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Declarative, React-friendly animations perfect for most use cases.
            Learn how each component works and when to use them.
          </p>
        </div>
      </FadeIn>

      {/* FadeIn Component */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">FadeIn</h2>
            <p className="text-muted-foreground">
              Elements fade into view with optional slide motion. Perfect for
              content reveals and scroll-triggered animations.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>Initial State:</strong> Element starts with opacity 0 and
              optionally offset from its final position
            </p>
            <p>
              <strong>Animation:</strong> When element enters viewport, it fades
              in (opacity 0 → 1) and slides to final position
            </p>
            <p>
              <strong>Trigger:</strong> Uses Framer Motion&apos;s{' '}
              <code className="bg-background px-1 rounded">whileInView</code> to
              trigger on scroll
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Usage</h3>
          <CodeBlock
            code={`import { FadeIn } from '@/components/animations';

<FadeIn direction="up">
  <div>Your content here</div>
</FadeIn>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Examples</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <FadeIn direction="up">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Fade Up (Default)</h4>
                <p className="text-sm text-muted-foreground">
                  Slides up 40px while fading in
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="down">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Fade Down</h4>
                <p className="text-sm text-muted-foreground">
                  Slides down while fading
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Fade Left</h4>
                <p className="text-sm text-muted-foreground">
                  Slides from right to left
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Fade Right</h4>
                <p className="text-sm text-muted-foreground">
                  Slides from left to right
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-2 text-left">Prop</th>
                  <th className="border border-border p-2 text-left">Type</th>
                  <th className="border border-border p-2 text-left">
                    Default
                  </th>
                  <th className="border border-border p-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">
                    <code>direction</code>
                  </td>
                  <td className="border border-border p-2">
                    &apos;up&apos; | &apos;down&apos; | &apos;left&apos; |
                    &apos;right&apos; | &apos;none&apos;
                  </td>
                  <td className="border border-border p-2">&apos;up&apos;</td>
                  <td className="border border-border p-2">Slide direction</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <code>delay</code>
                  </td>
                  <td className="border border-border p-2">number</td>
                  <td className="border border-border p-2">0</td>
                  <td className="border border-border p-2">
                    Animation delay in seconds
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <code>duration</code>
                  </td>
                  <td className="border border-border p-2">number</td>
                  <td className="border border-border p-2">0.6</td>
                  <td className="border border-border p-2">
                    Animation duration in seconds
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <code>easing</code>
                  </td>
                  <td className="border border-border p-2">string</td>
                  <td className="border border-border p-2">
                    &apos;smooth&apos;
                  </td>
                  <td className="border border-border p-2">
                    Easing function (easeIn, easeOut, bounce, etc.)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <code>offset</code>
                  </td>
                  <td className="border border-border p-2">number</td>
                  <td className="border border-border p-2">40</td>
                  <td className="border border-border p-2">
                    Slide distance in pixels
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2">
                    <code>withSlide</code>
                  </td>
                  <td className="border border-border p-2">boolean</td>
                  <td className="border border-border p-2">true</td>
                  <td className="border border-border p-2">
                    Enable slide motion
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ScaleIn Component */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">ScaleIn</h2>
            <p className="text-muted-foreground">
              Elements scale from small to full size. Great for buttons, cards,
              and attention-grabbing elements.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>Initial State:</strong> Element starts scaled down (e.g.,
              0.8) and optionally faded
            </p>
            <p>
              <strong>Animation:</strong> Scales to 1.0 (full size) and fades in
            </p>
            <p>
              <strong>Transform Origin:</strong> Can be customized (center,
              top-left, etc.)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Usage</h3>
          <CodeBlock
            code={`import { ScaleIn } from '@/components/animations';

<ScaleIn scale={0.8}>
  <button>Click me</button>
</ScaleIn>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Examples</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <ScaleIn scale={0.5}>
              <div className="border border-border rounded-lg p-8 bg-card aspect-square flex items-center justify-center">
                <span className="font-semibold">Scale 0.5</span>
              </div>
            </ScaleIn>

            <ScaleIn scale={0.8} easing="bounce">
              <div className="border border-border rounded-lg p-8 bg-card aspect-square flex items-center justify-center">
                <span className="font-semibold">Bounce Easing</span>
              </div>
            </ScaleIn>

            <ScaleIn scale={0.7} withFade={false}>
              <div className="border border-border rounded-lg p-8 bg-card aspect-square flex items-center justify-center">
                <span className="font-semibold">No Fade</span>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* RotateIn Component */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">RotateIn</h2>
            <p className="text-muted-foreground">
              Elements rotate into view from different angles. Perfect for
              playful, dynamic animations.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>Initial State:</strong> Element starts rotated (e.g., 180°
              clockwise) and optionally scaled/faded
            </p>
            <p>
              <strong>Animation:</strong> Rotates to 0° (normal position) while
              fading/scaling in
            </p>
            <p>
              <strong>Direction:</strong> Clockwise, counterclockwise, or both
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Examples</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <RotateIn direction="clockwise" angle={180}>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Clockwise 180°</h4>
                <p className="text-sm text-muted-foreground">
                  Rotates clockwise into view
                </p>
              </div>
            </RotateIn>

            <RotateIn direction="counterclockwise" angle={90}>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Counter-Clockwise 90°</h4>
                <p className="text-sm text-muted-foreground">
                  Rotates counter-clockwise
                </p>
              </div>
            </RotateIn>

            <RotateIn angle={360} easing="bounce" withScale={true}>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">Full Spin + Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Complete rotation with scale
                </p>
              </div>
            </RotateIn>
          </div>
        </div>
      </section>

      {/* Stagger Components */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Stagger Animations</h2>
            <p className="text-muted-foreground">
              Sequential animations where items appear one after another. Use
              StaggerContainer and StaggerItem together.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>StaggerContainer:</strong> Wraps multiple items and
              controls the stagger delay
            </p>
            <p>
              <strong>StaggerItem:</strong> Each child item animates with a
              delay based on its position
            </p>
            <p>
              <strong>Timing:</strong> First item animates immediately, each
              subsequent item waits for the stagger delay
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Basic Usage</h3>
          <CodeBlock
            code={`import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Example</h3>
          <StaggerContainer staggerDelay={0.15}>
            {[1, 2, 3, 4].map((num) => (
              <StaggerItem key={num}>
                <div className="border border-border rounded-lg p-6 bg-card mb-4">
                  <h4 className="font-semibold mb-2">Item {num}</h4>
                  <p className="text-sm text-muted-foreground">
                    This item animates with a {num * 0.15}s delay
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Key Concepts</h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn direction="up" delay={0.2}>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Viewport Triggers</h3>
              <p className="text-sm text-muted-foreground">
                All animations use <code>whileInView</code> to trigger when
                elements enter the viewport. This creates scroll-triggered
                animations automatically.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Easing Functions</h3>
              <p className="text-sm text-muted-foreground">
                Easing controls the acceleration and deceleration of animations.
                Different easings create different motion feels (smooth, bouncy,
                sharp, etc.).
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                All animations use GPU-accelerated properties (opacity,
                transform) for 60fps performance. No layout shifts or repaints.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                Animations respect <code>prefers-reduced-motion</code>. Users
                who prefer less motion will see instant transitions instead.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
