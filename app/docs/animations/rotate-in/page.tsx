'use client';

import { FadeIn, RotateIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function RotateInPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Rotate In</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Elements spin into view with rotation animation. Perfect for icons,
            badges, and decorative elements that need dynamic, playful
            entrances.
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
              RotateIn adds rotation motion to entrance animations. Elements spin
              from a specified angle (default 180°) to their final position,
              creating a dynamic, energetic feel. This animation is perfect for
              drawing attention to specific elements like icons, badges, or
              decorative components.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Rotation-based:</strong> Animates from rotated angle
                  to 0° using CSS transform
                </li>
                <li>
                  <strong>Directional control:</strong> Rotate clockwise,
                  counterclockwise, or both
                </li>
                <li>
                  <strong>Optional effects:</strong> Can combine with fade and
                  scale for richer animations
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
                    <code className="bg-background px-1 rounded">rotate: 180°</code> (default, can be
                    customized)
                  </li>
                  <li>
                    Optionally <code className="bg-background px-1 rounded">opacity: 0</code> if{' '}
                    <code className="bg-background px-1 rounded">withFade</code> is true
                  </li>
                  <li>
                    Optionally <code className="bg-background px-1 rounded">scale: 0.8</code> if{' '}
                    <code className="bg-background px-1 rounded">withScale</code> is true
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Uses Framer Motion&apos;s{' '}
                  <code className="bg-background px-1 rounded">whileInView</code> hook to detect
                  when the element enters the viewport. The animation starts
                  when:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Element crosses the viewport threshold</li>
                  <li>
                    Default margin: <code className="bg-background px-1 rounded">-100px</code> (starts
                    slightly before visible)
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
                    Rotates to position: <code className="bg-background px-1 rounded">rotate 180° → 0°</code>
                  </li>
                  <li>
                    Optionally fades in: <code className="bg-background px-1 rounded">opacity 0 → 1</code>
                  </li>
                  <li>
                    Optionally scales up: <code className="bg-background px-1 rounded">scale 0.8 → 1</code>
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
                  code={`// 1. Component receives props
<RotateIn direction="clockwise" angle={180} withFade={true}>

// 2. Calculates initial rotation based on direction
initialRotation = 180  // for clockwise
initial = { rotate: 180, opacity: 0 }

// 3. Sets animation target
animate = { rotate: 0, opacity: 1 }

// 4. Framer Motion handles the transition
motion.div
  initial={initial}
  whileInView={animate}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
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
                    <code className="text-sm">direction</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;clockwise&apos; | &apos;counterclockwise&apos; | &apos;both&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;clockwise&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Rotation direction. Clockwise = positive angle,
                    counterclockwise = negative angle
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
                    <code>180</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Starting rotation angle in degrees. Higher = more spins
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
                    Combine rotation with opacity fade. <code>false</code> =
                    rotate only
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
                    Combine rotation with scale animation. Creates spin + zoom
                    effect
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
                    Starting scale when <code>withScale</code> is true
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
                    Easing function. <code>easeOut</code> works well for
                    rotation, but you can use any preset or custom cubic-bezier
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
                code={`import { RotateIn } from '@/components/animations';`}
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
      <RotateIn>
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
          <span>🎯</span>
        </div>
      </RotateIn>
    </main>
  );
}`}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                The element will spin clockwise 180° while fading in when it
                enters the viewport.
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
                Different Directions
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                <RotateIn direction="clockwise">
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">↻</div>
                    <h4 className="font-semibold mb-2">Clockwise</h4>
                    <p className="text-sm text-muted-foreground">
                      Rotates right (default)
                    </p>
                  </div>
                </RotateIn>

                <RotateIn direction="counterclockwise">
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">↺</div>
                    <h4 className="font-semibold mb-2">Counterclockwise</h4>
                    <p className="text-sm text-muted-foreground">
                      Rotates left
                    </p>
                  </div>
                </RotateIn>

                <RotateIn direction="both" angle={360}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">⟲</div>
                    <h4 className="font-semibold mb-2">Full Spin</h4>
                    <p className="text-sm text-muted-foreground">
                      360° rotation
                    </p>
                  </div>
                </RotateIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Different Angles</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <RotateIn angle={90}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">⟳</div>
                    <h4 className="font-semibold mb-2">90°</h4>
                    <p className="text-sm text-muted-foreground">
                      Quarter turn
                    </p>
                  </div>
                </RotateIn>

                <RotateIn angle={180}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">⟲</div>
                    <h4 className="font-semibold mb-2">180° (Default)</h4>
                    <p className="text-sm text-muted-foreground">
                      Half turn
                    </p>
                  </div>
                </RotateIn>

                <RotateIn angle={360}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">⟲</div>
                    <h4 className="font-semibold mb-2">360°</h4>
                    <p className="text-sm text-muted-foreground">
                      Full rotation
                    </p>
                  </div>
                </RotateIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Combined Effects
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <RotateIn withFade={true} withScale={false}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <h4 className="font-semibold mb-2">Rotate + Fade</h4>
                    <p className="text-sm text-muted-foreground">
                      Spins and fades in (default)
                    </p>
                  </div>
                </RotateIn>

                <RotateIn withFade={true} withScale={true} scale={0.5}>
                  <div className="border border-border rounded-lg p-6 bg-card text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <h4 className="font-semibold mb-2">Rotate + Fade + Scale</h4>
                    <p className="text-sm text-muted-foreground">
                      Spins, fades, and zooms
                    </p>
                  </div>
                </RotateIn>
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
                <h3 className="font-semibold text-lg">Icons & Badges</h3>
                <p className="text-sm text-muted-foreground">
                  RotateIn is perfect for icons, badges, and decorative elements.
                  The spin adds energy and draws attention.
                </p>
                <CodeBlock
                  code={`<RotateIn angle={180} duration={0.5}>
  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
    <Icon />
  </div>
</RotateIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Notification Badges</h3>
                <p className="text-sm text-muted-foreground">
                  Animate notification badges when they appear. The rotation
                  makes them impossible to miss.
                </p>
                <CodeBlock
                  code={`<RotateIn angle={360} duration={0.4} easing="bounce">
  <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
    New
  </span>
</RotateIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Loading Indicators</h3>
                <p className="text-sm text-muted-foreground">
                  Use continuous rotation for loading spinners. Combine with
                  other effects for variety.
                </p>
                <CodeBlock
                  code={`<RotateIn
  angle={360}
  duration={1.0}
  easing="linear"
>
  <Spinner />
</RotateIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Decorative Elements</h3>
                <p className="text-sm text-muted-foreground">
                  Add playful rotation to decorative graphics, illustrations, or
                  background elements for visual interest.
                </p>
                <CodeBlock
                  code={`<RotateIn
  angle={180}
  withScale={true}
  scale={0.8}
>
  <DecorativeIcon />
</RotateIn>`}
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
                Example 1: Feature Icons
              </h3>
              <CodeBlock
                code={`export default function Features({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <RotateIn
          key={feature.id}
          angle={180}
          delay={index * 0.1}
          withFade={true}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </RotateIn>
      ))}
    </div>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 2: Status Badge
              </h3>
              <CodeBlock
                code={`export default function StatusBadge({ status, count }) {
  if (count === 0) return null;

  return (
    <RotateIn
      angle={360}
      duration={0.5}
      easing="bounce"
      withScale={true}
      scale={0.5}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-xs font-bold">
        {count}
      </span>
    </RotateIn>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 3: Achievement Unlock
              </h3>
              <CodeBlock
                code={`export default function Achievement({ achievement, isUnlocked }) {
  if (!isUnlocked) return null;

  return (
    <RotateIn
      angle={360}
      duration={0.8}
      easing="bounce"
      withFade={true}
      withScale={true}
      scale={0.3}
    >
      <div className="border-2 border-gold rounded-full p-4 bg-gold/10">
        <TrophyIcon className="w-12 h-12 text-gold" />
        <p className="mt-2 font-bold">{achievement.name}</p>
      </div>
    </RotateIn>
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
                Adjusting Rotation Amount
              </h3>
              <CodeBlock
                code={`// Subtle rotation (90°)
<RotateIn angle={90}>Content</RotateIn>

// Medium rotation (180° - default)
<RotateIn angle={180}>Content</RotateIn>

// Full spin (360°)
<RotateIn angle={360}>Content</RotateIn>

// Multiple spins (720°)
<RotateIn angle={720}>Content</RotateIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Combining Effects
              </h3>
              <CodeBlock
                code={`// Rotate only
<RotateIn withFade={false}>Content</RotateIn>

// Rotate + Fade (default)
<RotateIn withFade={true}>Content</RotateIn>

// Rotate + Fade + Scale
<RotateIn
  withFade={true}
  withScale={true}
  scale={0.5}
>
  Content
</RotateIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Different Easing for Different Feels
              </h3>
              <CodeBlock
                code={`// Smooth and natural
<RotateIn easing="easeOut">Content</RotateIn>

// Playful bounce
<RotateIn easing="bounce">Content</RotateIn>

// Linear (for continuous spinners)
<RotateIn easing="linear" duration={1.0}>
  Content
</RotateIn>`}
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
                  <strong>GPU Accelerated:</strong> Uses <code className="bg-background px-1 rounded">transform: rotate()</code> for
                  hardware acceleration
                </li>
                <li>
                  <strong>Efficient:</strong> Only animates when element enters
                  viewport
                </li>
                <li>
                  <strong>Optimized:</strong> Default <code className="bg-background px-1 rounded">once: true</code> prevents
                  re-animation
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
                  <strong>Use sparingly:</strong> Too much rotation can cause
                  motion sickness for some users
                </li>
                <li>
                  <strong>Not for essential content:</strong> Don&apos;t use
                  rotation for critical information
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
                CSS transforms are supported in all modern browsers. Rotation
                works perfectly on desktop and mobile devices.
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
                  Use rotation for icons, badges, and decorative elements
                </li>
                <li>
                  Keep angles between 90° - 360° for most use cases
                </li>
                <li>
                  Combine with fade for smoother, more professional effects
                </li>
                <li>
                  Use <code className="bg-background px-1 rounded">bounce</code> easing for playful
                  elements
                </li>
                <li>
                  Use shorter durations (0.4s - 0.6s) for snappy animations
                </li>
                <li>
                  Test with reduced motion preferences enabled
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  Don&apos;t use rotation for large text blocks or essential
                  content
                </li>
                <li>
                  Don&apos;t use excessive angles (&gt;720°) - can be
                  disorienting
                </li>
                <li>
                  Don&apos;t animate everything - use rotation selectively
                </li>
                <li>
                  Don&apos;t forget about motion sensitivity - some users may
                  find rotation uncomfortable
                </li>
                <li>
                  Don&apos;t use rotation for loading states that take a long
                  time (use continuous animation instead)
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
