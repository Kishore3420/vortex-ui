'use client';

import { FadeIn, ScaleIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function ScaleInPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Scale In</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Elements grow into view from a smaller scale, creating a zoom-in
            effect. Perfect for buttons, cards, and interactive elements that
            need to grab attention.
          </p>
        </div>
      </FadeIn>

      {/* Overview */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Overview</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              ScaleIn creates a zoom-in effect by animating the scale transform
              property. Elements start smaller (default 0.8) and grow to full
              size (1.0) as they enter the viewport. This creates a sense of
              depth and draws attention to important content.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Scale-based:</strong> Animates from smaller to full
                  size using CSS transform
                </li>
                <li>
                  <strong>Optional fade:</strong> Can combine with opacity
                  transition for smoother effect
                </li>
                <li>
                  <strong>Transform origin:</strong> Controls where scaling
                  starts (center, top, bottom, etc.)
                </li>
                <li>
                  <strong>GPU-accelerated:</strong> Uses transform for smooth
                  60fps performance
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Initial State</h3>
                <p className="text-sm text-muted-foreground">
                  When the component mounts, the element starts with:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <code className="bg-background px-1 rounded">
                      scale: 0.8
                    </code>{' '}
                    (80% of original size, default)
                  </li>
                  <li>
                    Optionally{' '}
                    <code className="bg-background px-1 rounded">
                      opacity: 0
                    </code>{' '}
                    if{' '}
                    <code className="bg-background px-1 rounded">withFade</code>{' '}
                    is true
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Uses Framer Motion&apos;s{' '}
                  <code className="bg-background px-1 rounded">
                    whileInView
                  </code>{' '}
                  hook to detect when the element enters the viewport. The
                  animation starts when:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Element crosses the viewport threshold</li>
                  <li>
                    Default margin:{' '}
                    <code className="bg-background px-1 rounded">-50px</code>{' '}
                    (starts slightly before visible)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Process</h3>
                <p className="text-sm text-muted-foreground">
                  Over the specified duration (default: 0.5s), the element:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    Scales up:{' '}
                    <code className="bg-background px-1 rounded">
                      scale 0.8 → 1.0
                    </code>
                  </li>
                  <li>
                    Optionally fades in:{' '}
                    <code className="bg-background px-1 rounded">
                      opacity 0 → 1
                    </code>
                  </li>
                  <li>
                    Uses easing function for natural motion (default:{' '}
                    <code className="bg-background px-1 rounded">bounce</code>)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Code Flow</h3>
                <CodeBlock
                  code={`// 1. Component receives props
<ScaleIn scale={0.8} withFade={true}>

// 2. Sets initial state
initial = { scale: 0.8, opacity: 0 }

// 3. Sets animation target
animate = { scale: 1, opacity: 1 }

// 4. Framer Motion handles the transition
motion.div
  initial={initial}
  whileInView={animate}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.5, ease: 'bounce' }}
  style={{ transformOrigin: 'center' }}
/>`}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Props Reference */}
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
                    Content to animate
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
                    Starting scale (0-1). Lower = more dramatic zoom. 0.8 = 80%
                    size
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
                    Combine scale with opacity fade. <code>false</code> = scale
                    only
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">transformOrigin</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>string</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;center&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Point from which scaling occurs. Options: center, top,
                    bottom, left, right, or custom (e.g., &apos;top left&apos;)
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
                    <code>0.5</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Animation duration in seconds. Shorter = snappier
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">easing</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>
                      EasingPreset | Easing | [number, number, number, number]
                    </code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;bounce&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Easing function. <code>bounce</code> works great for scale,
                    but you can use any easing preset or custom cubic-bezier
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

      {/* Basic Usage */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Basic Usage</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Step 1: Import</h3>
              <CodeBlock
                code={`import { ScaleIn } from '@/components/animations';`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Step 2: Wrap Your Content
              </h3>
              <CodeBlock
                code={`export default function Home() {
  return (
    <main>
      <ScaleIn>
        <button>Click Me</button>
      </ScaleIn>
    </main>
  );
}`}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                The button will zoom in from 80% to 100% size when it enters the
                viewport, with a subtle bounce effect.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Interactive Examples */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Interactive Examples</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Different Scale Values
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <ScaleIn scale={0.5}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <h4 className="font-semibold mb-2">Scale 0.5</h4>
                    <p className="text-sm text-muted-foreground">
                      Dramatic zoom from 50%
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn scale={0.8}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <h4 className="font-semibold mb-2">Scale 0.8 (Default)</h4>
                    <p className="text-sm text-muted-foreground">
                      Subtle zoom from 80%
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn scale={0.95}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <h4 className="font-semibold mb-2">Scale 0.95</h4>
                    <p className="text-sm text-muted-foreground">
                      Very subtle zoom from 95%
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                With and Without Fade
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ScaleIn withFade={true}>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">With Fade</h4>
                    <p className="text-sm text-muted-foreground">
                      Scales and fades simultaneously. Smoother effect.
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn withFade={false}>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Scale Only</h4>
                    <p className="text-sm text-muted-foreground">
                      Pure scale animation. No opacity change.
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Different Transform Origins
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ScaleIn transformOrigin="top">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">From Top</h4>
                    <p className="text-sm text-muted-foreground">
                      Scales from top edge. Great for dropdowns.
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn transformOrigin="bottom">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">From Bottom</h4>
                    <p className="text-sm text-muted-foreground">
                      Scales from bottom edge. Good for modals.
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Different Easing</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ScaleIn easing="bounce">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Bounce (Default)</h4>
                    <p className="text-sm text-muted-foreground">
                      Playful bounce effect. Adds energy.
                    </p>
                  </div>
                </ScaleIn>

                <ScaleIn easing="easeOut">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Ease Out</h4>
                    <p className="text-sm text-muted-foreground">
                      Smooth and natural. Professional feel.
                    </p>
                  </div>
                </ScaleIn>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Use Cases in Web Design */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Use Cases in Web Design</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">
                  Call-to-Action Buttons
                </h3>
                <p className="text-sm text-muted-foreground">
                  ScaleIn draws attention to primary actions. The zoom effect
                  makes buttons feel interactive and important.
                </p>
                <CodeBlock
                  code={`<ScaleIn scale={0.9} easing="bounce">
  <button className="px-8 py-3 bg-primary text-white rounded-lg">
    Get Started
  </button>
</ScaleIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Product Cards</h3>
                <p className="text-sm text-muted-foreground">
                  Animate product cards as they enter view. Creates a sense of
                  discovery and keeps users engaged.
                </p>
                <CodeBlock
                  code={`{products.map((product, i) => (
  <ScaleIn key={product.id} delay={i * 0.1}>
    <ProductCard product={product} />
  </ScaleIn>
))}`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Modal Dialogs</h3>
                <p className="text-sm text-muted-foreground">
                  Scale from center when modals open. Creates focus and draws
                  attention to the dialog content.
                </p>
                <CodeBlock
                  code={`<ScaleIn scale={0.9} transformOrigin="center">
  <Modal>
    <h2>Confirm Action</h2>
    <p>Are you sure?</p>
  </Modal>
</ScaleIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Tooltips & Popovers</h3>
                <p className="text-sm text-muted-foreground">
                  Scale from specific origins (top, bottom) to create natural
                  popover animations that feel connected to their triggers.
                </p>
                <CodeBlock
                  code={`<ScaleIn
  scale={0.8}
  transformOrigin="bottom"
  duration={0.3}
>
  <Tooltip>Helpful information</Tooltip>
</ScaleIn>`}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Real-World Examples */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Real-World Examples</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 1: Feature Cards Grid
              </h3>
              <CodeBlock
                code={`export default function Features({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <ScaleIn
          key={feature.id}
          scale={0.85}
          delay={index * 0.1}
          easing="bounce"
        >
          <div className="border rounded-lg p-6 bg-card">
            <h3 className="text-xl font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </ScaleIn>
      ))}
    </div>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 2: Pricing Cards
              </h3>
              <CodeBlock
                code={`export default function Pricing({ plans }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <ScaleIn
          key={plan.id}
          scale={0.9}
          delay={index * 0.15}
          withFade={true}
        >
          <div className="border-2 rounded-xl p-8 bg-card">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">
              {'$'}{plan.price}
            </div>
            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg">
              Choose Plan
            </button>
          </div>
        </ScaleIn>
      ))}
    </div>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 3: Notification Toast
              </h3>
              <CodeBlock
                code={`export default function Toast({ message, isVisible }) {
  if (!isVisible) return null;

  return (
    <ScaleIn
      scale={0.8}
      transformOrigin="top right"
      duration={0.3}
      easing="easeOut"
    >
      <div className="fixed top-4 right-4 bg-card border rounded-lg p-4 shadow-lg">
        <p>{message}</p>
      </div>
    </ScaleIn>
  );
}`}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Customization Guide */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Customization Guide</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Adjusting Scale Intensity
              </h3>
              <CodeBlock
                code={`// Subtle zoom (95%)
<ScaleIn scale={0.95}>Subtle</ScaleIn>

// Medium zoom (80% - default)
<ScaleIn scale={0.8}>Medium</ScaleIn>

// Dramatic zoom (50%)
<ScaleIn scale={0.5}>Dramatic</ScaleIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Custom Transform Origins
              </h3>
              <CodeBlock
                code={`// Scale from top (dropdowns)
<ScaleIn transformOrigin="top">Content</ScaleIn>

// Scale from bottom (modals)
<ScaleIn transformOrigin="bottom">Content</ScaleIn>

// Scale from corner
<ScaleIn transformOrigin="top left">Content</ScaleIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Combining with Other Effects
              </h3>
              <CodeBlock
                code={`// Scale with fade (default)
<ScaleIn withFade={true}>Content</ScaleIn>

// Scale only (no fade)
<ScaleIn withFade={false}>Content</ScaleIn>

// Fast animation
<ScaleIn duration={0.3}>Quick</ScaleIn>

// Slow, dramatic animation
<ScaleIn duration={1.0}>Dramatic</ScaleIn>`}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Performance & Accessibility */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Performance & Accessibility</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card space-y-4">
              <h3 className="font-semibold text-lg">Performance</h3>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  <strong>GPU Accelerated:</strong> Uses{' '}
                  <code className="bg-background px-1 rounded">
                    transform: scale()
                  </code>{' '}
                  for hardware acceleration
                </li>
                <li>
                  <strong>Efficient:</strong> Only animates when element enters
                  viewport
                </li>
                <li>
                  <strong>Optimized:</strong> Default{' '}
                  <code className="bg-background px-1 rounded">once: true</code>{' '}
                  prevents re-animation
                </li>
                <li>
                  <strong>No Layout Shift:</strong> Element maintains space
                  before animation
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card space-y-4">
              <h3 className="font-semibold text-lg">Accessibility</h3>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  <strong>Respects prefers-reduced-motion:</strong> Framer
                  Motion automatically handles this
                </li>
                <li>
                  <strong>No content loss:</strong> Element is visible (just
                  scaled) before animation
                </li>
                <li>
                  <strong>Keyboard navigable:</strong> Doesn&apos;t interfere
                  with keyboard navigation
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card space-y-4">
              <h3 className="font-semibold text-lg">Browser Support</h3>
              <p className="text-sm text-muted-foreground">
                CSS transforms are supported in all modern browsers. Works
                perfectly on desktop and mobile devices.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Tips & Best Practices */}
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <h3 className="font-semibold">✅ Do</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  Use{' '}
                  <code className="bg-background px-1 rounded">
                    scale={0.8}
                  </code>{' '}
                  to <code className="bg-background px-1 rounded">0.9</code> for
                  most content (subtle and professional)
                </li>
                <li>
                  Combine with{' '}
                  <code className="bg-background px-1 rounded">
                    withFade={true}
                  </code>{' '}
                  for smoother effects
                </li>
                <li>
                  Use <code className="bg-background px-1 rounded">bounce</code>{' '}
                  easing for playful, interactive elements
                </li>
                <li>
                  Match transform origin to UI pattern (top for dropdowns,
                  center for modals)
                </li>
                <li>Keep duration between 0.3s - 0.6s for best UX</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  Don&apos;t use very small scales (&lt;0.5) - can feel
                  disorienting
                </li>
                <li>
                  Don&apos;t make animations too slow (&gt;1s) - feels sluggish
                </li>
                <li>
                  Don&apos;t scale everything - use selectively for important
                  elements
                </li>
                <li>Don&apos;t forget to test on mobile devices</li>
                <li>
                  Don&apos;t use scale for large text blocks - can cause
                  readability issues
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
