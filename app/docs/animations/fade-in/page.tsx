'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function FadeInPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Fade In</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            The most fundamental entrance animation. Elements gracefully fade into
            view with optional slide motion, perfect for content reveals and
            scroll-triggered animations.
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
              FadeIn is the cornerstone of modern web animations. It combines
              opacity transitions with optional directional movement to create
              smooth, professional content reveals. When users scroll, elements
              elegantly appear rather than abruptly showing up.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Opacity-based:</strong> Smoothly transitions from
                  invisible (0) to fully visible (1)
                </li>
                <li>
                  <strong>Directional movement:</strong> Optional slide from any
                  direction (up, down, left, right)
                </li>
                <li>
                  <strong>Viewport-triggered:</strong> Animates when element
                  enters the viewport
                </li>
                <li>
                  <strong>GPU-accelerated:</strong> Uses transform properties
                  for smooth 60fps performance
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
                    <code className="bg-background px-1 rounded">opacity: 0</code>{' '}
                    (invisible)
                  </li>
                  <li>
                    Optionally offset by <code className="bg-background px-1 rounded">x</code> or{' '}
                    <code className="bg-background px-1 rounded">y</code> based on direction
                    (default: 40px)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Trigger</h3>
                <p className="text-sm text-muted-foreground">
                  Uses Framer Motion&apos;s{' '}
                  <code className="bg-background px-1 rounded">whileInView</code> hook to detect
                  when the element enters the viewport. The animation starts when:
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
                    Fades in: <code className="bg-background px-1 rounded">opacity 0 → 1</code>
                  </li>
                  <li>
                    Slides to position: <code className="bg-background px-1 rounded">x/y offset → 0</code>
                  </li>
                  <li>
                    Uses easing function for natural motion (default:{' '}
                    <code className="bg-background px-1 rounded">smooth</code>)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Code Flow</h3>
                <CodeBlock
                  code={`// 1. Component receives props
<FadeIn direction="up" delay={0.2}>

// 2. Calculates initial position based on direction
initial = { opacity: 0, y: 40 }  // for "up"

// 3. Sets animation target
animate = { opacity: 1, y: 0 }

// 4. Framer Motion handles the transition
motion.div
  initial={initial}
  whileInView={animate}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6, delay: 0.2, ease: 'smooth' }}
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
                    <code>&apos;up&apos; | &apos;down&apos; | &apos;left&apos; | &apos;right&apos; | &apos;none&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;up&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Slide direction. <code>&apos;none&apos;</code> = fade only, no
                    slide
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
                    Delay before animation starts (seconds). Useful for
                    sequencing multiple elements
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
                    Animation duration in seconds. Lower = faster, Higher =
                    slower
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
                    <code>&apos;smooth&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Easing function. Presets: easeIn, easeOut, easeInOut, linear,
                    bounce, spring, smooth, sharp. Or custom cubic-bezier array
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">withSlide</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>boolean</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>true</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Enable/disable slide motion. <code>false</code> = fade only
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
                    <code>40</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Distance to slide from initial position (pixels). Higher =
                    more dramatic entrance
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
                    Viewport margin for trigger. Negative = starts before visible,
                    positive = starts after visible
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
                    Animate only once. <code>false</code> = re-animate on every
                    viewport entry
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
                code={`import { FadeIn } from '@/components/animations';`}
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
      <FadeIn>
        <h1>Hello, World!</h1>
      </FadeIn>
    </main>
  );
}`}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                That&apos;s it! The element will automatically fade in from
                below when it enters the viewport.
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
              <div className="grid gap-4 md:grid-cols-2">
                <FadeIn direction="up">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Fade Up (Default)</h4>
                    <p className="text-sm text-muted-foreground">
                      Slides up 40px while fading in. Perfect for most content.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="down">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Fade Down</h4>
                    <p className="text-sm text-muted-foreground">
                      Slides down while fading. Great for headers or top
                      elements.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="left">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Fade Left</h4>
                    <p className="text-sm text-muted-foreground">
                      Slides from right to left. Creates reading flow.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="right">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Fade Right</h4>
                    <p className="text-sm text-muted-foreground">
                      Slides from left to right. Useful for sidebars.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Fade Only (No Slide)</h3>
              <FadeIn direction="none">
                <div className="border border-border rounded-lg p-6 bg-card">
                  <h4 className="font-semibold mb-2">Fade Only</h4>
                  <p className="text-sm text-muted-foreground">
                    Pure opacity transition. No movement. Subtle and elegant.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Different Easing</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <FadeIn easing="easeOut" delay={0.1}>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Ease Out</h4>
                    <p className="text-sm text-muted-foreground">
                      Fast start, slow end. Natural and smooth.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn easing="bounce" delay={0.2}>
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h4 className="font-semibold mb-2">Bounce</h4>
                    <p className="text-sm text-muted-foreground">
                      Playful bounce effect. Adds energy.
                    </p>
                  </div>
                </FadeIn>
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
                <h3 className="font-semibold text-lg">Hero Sections</h3>
                <p className="text-sm text-muted-foreground">
                  Fade in headlines, subheadings, and CTAs as users land on your
                  page. Creates a professional first impression.
                </p>
                <CodeBlock
                  code={`<FadeIn direction="up" delay={0.2}>
  <h1>Welcome to Our Site</h1>
</FadeIn>
<FadeIn direction="up" delay={0.4}>
  <p>Your journey starts here</p>
</FadeIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Content Sections</h3>
                <p className="text-sm text-muted-foreground">
                  Animate paragraphs, images, and cards as users scroll. Keeps
                  engagement high throughout the page.
                </p>
                <CodeBlock
                  code={`<FadeIn direction="up">
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
</FadeIn>`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Feature Lists</h3>
                <p className="text-sm text-muted-foreground">
                  Reveal features one by one with staggered delays. Guides user
                  attention naturally.
                </p>
                <CodeBlock
                  code={`{features.map((feature, i) => (
  <FadeIn key={feature.id} delay={i * 0.1}>
    <FeatureCard {...feature} />
  </FadeIn>
))}`}
                />
              </div>

              <div className="border border-border rounded-lg p-6 bg-card space-y-3">
                <h3 className="font-semibold text-lg">Testimonials</h3>
                <p className="text-sm text-muted-foreground">
                  Fade in testimonials and reviews. Builds trust and
                  credibility as users scroll.
                </p>
                <CodeBlock
                  code={`<FadeIn direction="up" delay={0.3}>
  <blockquote>
    "This product changed my life!"
  </blockquote>
</FadeIn>`}
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
                Example 1: Landing Page Hero
              </h3>
              <CodeBlock
                code={`export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-5xl font-bold">
            Build Amazing Products
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Create beautiful, performant web experiences
            with our animation library
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg">
            Get Started
          </button>
        </FadeIn>
      </div>
    </section>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 2: Blog Post Content
              </h3>
              <CodeBlock
                code={`export default function BlogPost({ post }) {
  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <FadeIn direction="up">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <div className="prose">
          {post.content}
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <img src={post.image} alt={post.title} />
      </FadeIn>
    </article>
  );
}`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">
                Example 3: Product Grid
              </h3>
              <CodeBlock
                code={`export default function ProductGrid({ products }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <FadeIn
          key={product.id}
          direction="up"
          delay={index * 0.1}
        >
          <ProductCard product={product} />
        </FadeIn>
      ))}
    </div>
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
                Custom Easing Functions
              </h3>
              <CodeBlock
                code={`// Use preset easing
<FadeIn easing="bounce">Content</FadeIn>

// Or custom cubic-bezier
<FadeIn easing={[0.68, -0.55, 0.265, 1.55]}>
  Content
</FadeIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Adjusting Animation Speed
              </h3>
              <CodeBlock
                code={`// Fast animation (0.3s)
<FadeIn duration={0.3}>Quick reveal</FadeIn>

// Slow animation (1.5s)
<FadeIn duration={1.5}>Dramatic entrance</FadeIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Controlling Slide Distance
              </h3>
              <CodeBlock
                code={`// Subtle movement (20px)
<FadeIn offset={20}>Subtle</FadeIn>

// Dramatic movement (100px)
<FadeIn offset={100}>Dramatic</FadeIn>`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Repeating Animations
              </h3>
              <CodeBlock
                code={`// Animate every time it enters viewport
<FadeIn once={false}>
  Repeats on scroll
</FadeIn>`}
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
                  <strong>GPU Accelerated:</strong> Uses <code className="bg-background px-1 rounded">transform</code> and{' '}
                  <code className="bg-background px-1 rounded">opacity</code> for hardware acceleration
                </li>
                <li>
                  <strong>Efficient:</strong> Only animates when element enters viewport
                </li>
                <li>
                  <strong>Optimized:</strong> Default <code className="bg-background px-1 rounded">once: true</code> prevents
                  re-animation on scroll
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card space-y-4">
              <h3 className="font-semibold text-lg">Accessibility</h3>
              <ul className="space-y-2 list-disc list-inside text-sm text-muted-foreground">
                <li>
                  <strong>Respects prefers-reduced-motion:</strong> Framer Motion
                  automatically respects user preferences
                </li>
                <li>
                  <strong>No layout shift:</strong> Element occupies space
                  before animation
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
                Works in all modern browsers. Uses CSS transforms and opacity,
                which are widely supported.
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
                <li>Use consistent directions throughout your page</li>
                <li>Keep durations between 0.3s - 1s for best UX</li>
                <li>Stagger multiple elements with delays (0.1s - 0.2s apart)</li>
                <li>
                  Use{' '}
                  <code className="bg-background px-1 rounded">
                    direction=&quot;up&quot;
                  </code>{' '}
                  for most content
                </li>
                <li>Test on mobile devices for performance</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use too many different directions (creates chaos)</li>
                <li>Don&apos;t make animations too slow (&gt;1.5s feels sluggish)</li>
                <li>Don&apos;t animate everything (let some content be static)</li>
                <li>Don&apos;t use huge offsets (&gt;100px is usually too much)</li>
                <li>Don&apos;t forget to test with reduced motion preferences</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
