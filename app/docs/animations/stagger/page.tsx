'use client';

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function StaggerPage() {
  const features = [
    { id: 1, title: 'Feature 1', description: 'Description for feature 1' },
    { id: 2, title: 'Feature 2', description: 'Description for feature 2' },
    { id: 3, title: 'Feature 3', description: 'Description for feature 3' },
    { id: 4, title: 'Feature 4', description: 'Description for feature 4' },
  ];

  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Stagger Container</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Orchestrates sequential animations for child elements. Perfect for
            lists, grids, and any collection of items that should animate one
            after another, creating a smooth cascading effect.
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
              StaggerContainer is the conductor of sequential animations. It
              doesn&apos;t animate itself, but instead coordinates when each
              child element should start its animation. When combined with
              StaggerItem components, it creates beautiful cascading effects
              where items appear one after another.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Orchestration:</strong> Controls timing of child
                  animations using Framer Motion&apos;s variant system
                </li>
                <li>
                  <strong>Sequential timing:</strong> Each child starts after a
                  configurable delay from the previous one
                </li>
                <li>
                  <strong>Viewport-triggered:</strong> Starts when container
                  enters viewport
                </li>
                <li>
                  <strong>Works with StaggerItem:</strong> Designed to wrap
                  StaggerItem components for best results
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
                  StaggerContainer uses Framer Motion&apos;s variant system to
                  coordinate animations:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <code className="bg-background px-1 rounded">hidden</code>:
                    Initial state (opacity: 0)
                  </li>
                  <li>
                    <code className="bg-background px-1 rounded">visible</code>:
                    Final state with stagger configuration
                  </li>
                  <li>
                    <code className="bg-background px-1 rounded">
                      staggerChildren
                    </code>
                    : Delay between each child animation
                  </li>
                  <li>
                    <code className="bg-background px-1 rounded">
                      delayChildren
                    </code>
                    : Initial delay before first child animates
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Animation Flow</h3>
                <p className="text-sm text-muted-foreground">
                  When the container enters the viewport:
                </p>
                <ol className="mt-2 space-y-1 list-decimal list-inside text-sm text-muted-foreground">
                  <li>Container detects viewport entry</li>
                  <li>Switches from &quot;hidden&quot; to &quot;visible&quot; variant</li>
                  <li>Waits for initialDelay (if set)</li>
                  <li>First child starts animating</li>
                  <li>Each subsequent child starts after staggerDelay</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Child Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  StaggerItem components must use the same variant names
                  (&quot;hidden&quot; and &quot;visible&quot;) to work with StaggerContainer.
                  The container&apos;s transition configuration automatically
                  applies to all children.
                </p>
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
                    Child elements (typically StaggerItem components)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">staggerDelay</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0.1</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Delay between each child animation (seconds). Lower = faster
                    cascade, Higher = slower cascade
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3">
                    <code className="text-sm">initialDelay</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>0</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Delay before first child starts animating (seconds)
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
                    Additional CSS classes for styling the container
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
                    Viewport margin for trigger. Negative = starts before
                    visible
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
                    If true, animation only plays once. If false, replays when
                    scrolling back into view
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
                code={`import { StaggerContainer, StaggerItem } from '@/components/animations';`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Step 2: Wrap Your Items
              </h3>
              <CodeBlock
                code={`<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.name}</div>
    </StaggerItem>
  ))}
</StaggerContainer>`}
              />
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                That&apos;s it! Items will animate sequentially with a 0.1s
                delay between each.
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
                Basic Stagger (Default)
              </h3>
              <StaggerContainer staggerDelay={0.15}>
                {features.slice(0, 4).map((feature) => (
                  <StaggerItem key={feature.id}>
                    <div className="bg-linear-to-r from-purple-600 to-pink-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fast Stagger</h3>
              <StaggerContainer staggerDelay={0.05}>
                {features.slice(0, 4).map((feature) => (
                  <StaggerItem key={feature.id}>
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="text-sm text-muted-foreground mt-2">
                staggerDelay={0.05} - Items appear quickly one after another
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Slow Stagger</h3>
              <StaggerContainer staggerDelay={0.3} initialDelay={0.2}>
                {features.slice(0, 4).map((feature) => (
                  <StaggerItem key={feature.id}>
                    <div className="bg-linear-to-r from-green-600 to-emerald-600 p-6 rounded-lg mb-4">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <p className="text-sm text-muted-foreground mt-2">
                staggerDelay={0.3} initialDelay={0.2} - More dramatic, slower
                cascade
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Grid Layout</h3>
              <StaggerContainer
                staggerDelay={0.1}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature) => (
                  <StaggerItem key={feature.id} withScale={true} scale={0.8}>
                    <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-6 rounded-lg aspect-square flex flex-col justify-center">
                      <h4 className="text-xl font-bold">{feature.title}</h4>
                      <p className="mt-2 text-sm opacity-90">
                        {feature.description}
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
          <h2 className="text-3xl font-bold">Use Cases in Web Design</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Feature Lists</h3>
              <p className="text-sm text-muted-foreground">
                Animate feature cards, benefits, or service lists to draw
                attention to each item sequentially.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Testimonials</h3>
              <p className="text-sm text-muted-foreground">
                Create engaging testimonial sections where reviews appear one
                after another.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Product Grids</h3>
              <p className="text-sm text-muted-foreground">
                Showcase products, portfolio items, or gallery images with a
                cascading reveal effect.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Navigation Menus</h3>
              <p className="text-sm text-muted-foreground">
                Animate menu items or dropdown options for smooth, professional
                interactions.
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

import { StaggerContainer, StaggerItem } from '@/components/animations';

const services = [
  { id: 1, name: 'Web Design', icon: '🎨' },
  { id: 2, name: 'Development', icon: '💻' },
  { id: 3, name: 'Marketing', icon: '📈' },
  { id: 4, name: 'Consulting', icon: '💡' },
];

export default function ServicesSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Our Services</h2>
      <StaggerContainer staggerDelay={0.15} initialDelay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id} withScale={true} scale={0.8}>
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.name}</h3>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}`}
          />
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Tips & Best Practices</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Timing Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Fast (0.05-0.1s):</strong> Quick, snappy lists (3-5
                  items)
                </li>
                <li>
                  <strong>Medium (0.1-0.15s):</strong> Standard feature lists
                  (4-8 items)
                </li>
                <li>
                  <strong>Slow (0.2-0.3s):</strong> Dramatic reveals for
                  important content
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  StaggerContainer uses GPU-accelerated transforms for smooth
                  performance
                </li>
                <li>
                  For large lists (20+ items), consider pagination or virtual
                  scrolling
                </li>
                <li>
                  Use <code className="bg-background px-1 rounded">once=true</code> to prevent
                  re-animations on scroll
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ❌ Using regular divs instead of StaggerItem - won&apos;t
                  animate
                </li>
                <li>
                  ❌ Too fast staggerDelay (&lt;0.03s) - looks rushed
                </li>
                <li>
                  ❌ Too slow staggerDelay (&gt;0.5s) - users lose interest
                </li>
                <li>
                  ✅ Always use StaggerItem as direct children for best results
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
