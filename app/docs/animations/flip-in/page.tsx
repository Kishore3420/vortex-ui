'use client';

import { FadeIn, FlipIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function FlipInPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Flip In</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            3D flip animation that rotates elements into view using perspective
            transforms. Perfect for cards, modals, and interactive elements that
            need a dynamic 3D entrance effect.
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
              FlipIn creates a 3D card-flip effect by rotating elements around
              the X or Y axis (or both) as they enter the viewport. Unlike
              RotateIn which rotates on the Z-axis (2D), FlipIn uses 3D
              perspective transforms to create depth and dimension. This is
              perfect for cards, modals, and any element that should feel like
              it&apos;s flipping into view.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>3D transforms:</strong> Uses rotateX and rotateY for
                  true 3D rotation
                </li>
                <li>
                  <strong>Perspective:</strong> Requires perspective container
                  for 3D effect
                </li>
                <li>
                  <strong>Directional:</strong> Can flip horizontally,
                  vertically, or both axes
                </li>
                <li>
                  <strong>Optional fade:</strong> Can combine with opacity
                  transition
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
                <h3 className="font-semibold mb-2">3D Perspective Setup</h3>
                <p className="text-sm text-muted-foreground">
                  FlipIn requires a perspective container to create the 3D
                  effect:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    Outer wrapper has <code className="bg-background px-1 rounded">perspective: 1000px</code>{' '}
                    (default)
                  </li>
                  <li>
                    Inner element has{' '}
                    <code className="bg-background px-1 rounded">
                      transformStyle: &apos;preserve-3d&apos;
                    </code>
                  </li>
                  <li>
                    This creates the 3D space needed for the flip effect
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Initial State</h3>
                <p className="text-sm text-muted-foreground">
                  When the component mounts, the element starts rotated:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <strong>Horizontal:</strong>{' '}
                    <code className="bg-background px-1 rounded">rotateX: 90°</code> (flips up/down)
                  </li>
                  <li>
                    <strong>Vertical:</strong>{' '}
                    <code className="bg-background px-1 rounded">rotateY: 90°</code> (flips left/right)
                  </li>
                  <li>
                    <strong>Both:</strong> Both rotateX and rotateY applied
                  </li>
                  <li>
                    Optionally <code className="bg-background px-1 rounded">opacity: 0</code> if{' '}
                    <code className="bg-background px-1 rounded">withFade</code> is true
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Uses Framer Motion&apos;s{' '}
                  <code className="bg-background px-1 rounded">whileInView</code> to detect when
                  the element enters the viewport. The flip animation starts
                  when:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Element crosses the viewport threshold</li>
                  <li>
                    Default margin: <code className="bg-background px-1 rounded">-100px</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Process</h3>
                <p className="text-sm text-muted-foreground">
                  Over the specified duration (default: 0.6s), the element:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    Rotates to flat: <code className="bg-background px-1 rounded">rotateX/Y: 90° → 0°</code>
                  </li>
                  <li>
                    Optionally fades in: <code className="bg-background px-1 rounded">opacity 0 → 1</code>
                  </li>
                  <li>
                    Uses easing function for natural motion (default:{' '}
                    <code className="bg-background px-1 rounded">easeOut</code>)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Code Flow</h3>
                <CodeBlock
                  code={`// 1. Perspective container wrapper
<div style={{ perspective: 1000 }}>

  // 2. Animated element with 3D transform
  <motion.div
    initial={{ rotateX: 90, opacity: 0 }}  // Flipped and hidden
    whileInView={{ rotateX: 0, opacity: 1 }}  // Flat and visible
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.div>
</div>`}
                />
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
                    <code className="text-sm">children</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>ReactNode</code>
                  </td>
                  <td className="border border-border p-3 text-sm">-</td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Content to animate
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">direction</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;horizontal&apos; | &apos;vertical&apos; | &apos;both&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;horizontal&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Flip direction. horizontal = rotateX (up/down), vertical =
                    rotateY (left/right), both = both axes
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">angle</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>90</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Rotation angle in degrees. 90 = full flip, 45 = half flip
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">delay</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Delay before animation starts (seconds)
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
                    <code>0.6</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Animation duration in seconds
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">easing</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>EasingPreset | Easing | [number, number, number, number]</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;easeOut&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Easing function. Presets: easeIn, easeOut, easeInOut, linear,
                    bounce, spring, smooth, sharp
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
                    Enable fade effect alongside flip. false = flip only
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">perspective</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>1000</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    3D perspective distance in pixels. Lower = more dramatic,
                    Higher = subtler
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">viewportMargin</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;-100px&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Viewport margin for trigger. Negative = starts before visible
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">once</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    If true, animation only plays once. If false, replays on
                    scroll
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
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Step 1: Import</h3>
              <CodeBlock
                code={`import { FlipIn } from '@/components/animations';`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Step 2: Wrap Your Content
              </h3>
              <CodeBlock
                code={`<FlipIn direction="horizontal">
  <div className="card">
    <h2>Card Title</h2>
    <p>Card content</p>
  </div>
</FlipIn>`}
              />
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                That&apos;s it! The card will flip into view when it enters the
                viewport.
              </p>
            </div>
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
                Horizontal Flip (Default)
              </h3>
              <FlipIn direction="horizontal">
                <div className="bg-linear-to-br from-purple-600 to-pink-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Flips horizontally (rotateX)
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Vertical Flip</h3>
              <FlipIn direction="vertical">
                <div className="bg-linear-to-br from-blue-600 to-cyan-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Flips vertically (rotateY)
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Both Axes</h3>
              <FlipIn direction="both">
                <div className="bg-linear-to-br from-green-600 to-emerald-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Flips on both axes simultaneously
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Half Flip (45°)</h3>
              <FlipIn direction="horizontal" angle={45}>
                <div className="bg-linear-to-br from-orange-600 to-yellow-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Subtle 45-degree flip
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Flip Only (No Fade)</h3>
              <FlipIn direction="horizontal" withFade={false}>
                <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Pure flip effect without fade
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Dramatic Perspective (500px)
              </h3>
              <FlipIn direction="horizontal" perspective={500}>
                <div className="bg-linear-to-br from-rose-600 to-pink-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    More dramatic 3D effect
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Subtle Perspective (2000px)
              </h3>
              <FlipIn direction="horizontal" perspective={2000}>
                <div className="bg-linear-to-br from-violet-600 to-purple-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Subtler 3D effect
                  </p>
                </div>
              </FlipIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Use Cases in Web Design</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Card Reveals</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for feature cards, product cards, and content cards that
                should flip into view with a 3D effect.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Modal Dialogs</h3>
              <p className="text-sm text-muted-foreground">
                Create engaging modal entrances where dialogs flip into view
                rather than simply appearing.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Interactive Elements</h3>
              <p className="text-sm text-muted-foreground">
                Buttons, CTAs, and interactive components that need a dynamic,
                attention-grabbing entrance.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Portfolio Items</h3>
              <p className="text-sm text-muted-foreground">
                Showcase portfolio pieces, case studies, and project cards with
                a sophisticated 3D flip reveal.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Real-World Example</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <CodeBlock
            code={`'use client';

import { FlipIn } from '@/components/animations';

const features = [
  { id: 1, title: 'Feature 1', description: 'Description...' },
  { id: 2, title: 'Feature 2', description: 'Description...' },
  { id: 3, title: 'Feature 3', description: 'Description...' },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FlipIn
          key={feature.id}
          direction={index % 2 === 0 ? 'horizontal' : 'vertical'}
          delay={index * 0.1}
          perspective={800}
        >
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </FlipIn>
      ))}
    </div>
  );
}`}
          />
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Performance & Accessibility</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Performance Considerations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  3D transforms are GPU-accelerated and perform well on modern
                  devices
                </li>
                <li>
                  Perspective calculations are handled by the browser&apos;s
                  compositor
                </li>
                <li>
                  Avoid using FlipIn on too many elements simultaneously (limit
                  to 5-10)
                </li>
                <li>
                  Higher perspective values require more computation but create
                  more dramatic effects
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Accessibility</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  FlipIn respects{' '}
                  <code className="bg-background px-1 rounded">prefers-reduced-motion</code>{' '}
                  through Framer Motion&apos;s built-in support
                </li>
                <li>
                  Ensure content is readable during the flip animation
                </li>
                <li>
                  Don&apos;t use FlipIn for critical information that must be
                  immediately visible
                </li>
                <li>
                  Consider using withFade=true to ensure content is visible even
                  if animation is disabled
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Perspective Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Dramatic (300-600px):</strong> Strong 3D effect, use
                  sparingly
                </li>
                <li>
                  <strong>Standard (800-1200px):</strong> Balanced effect for
                  most use cases
                </li>
                <li>
                  <strong>Subtle (1500-2000px):</strong> Refined, elegant effect
                </li>
                <li>
                  <strong>Default (1000px):</strong> Good starting point for
                  most designs
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Direction Selection</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Horizontal:</strong> Best for cards that appear from
                  top/bottom
                </li>
                <li>
                  <strong>Vertical:</strong> Best for cards that appear from
                  left/right
                </li>
                <li>
                  <strong>Both:</strong> Most dramatic, use for special
                  emphasis
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ❌ Using too low perspective (&lt;300px) - creates distortion
                </li>
                <li>
                  ❌ Flipping too many elements at once - performance issues
                </li>
                <li>
                  ❌ Using angle &gt;90° - creates confusing rotation
                </li>
                <li>
                  ✅ Combine with fade for smoother, more professional effect
                </li>
                <li>
                  ✅ Use standard perspective (800-1200px) for best balance
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Design Recommendations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  FlipIn works best with card-like elements (borders, shadows,
                  rounded corners)
                </li>
                <li>
                  Use horizontal flip for content that flows top-to-bottom
                </li>
                <li>
                  Use vertical flip for content that flows left-to-right
                </li>
                <li>
                  Consider alternating directions in grids for visual interest
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
