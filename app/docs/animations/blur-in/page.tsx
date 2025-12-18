'use client';

import { BlurIn, FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function BlurInPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Blur In</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Modern blur filter animation that creates a focus effect. Elements
            start blurred and gradually sharpen into view, perfect for image
            reveals, card animations, and glassmorphism effects.
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
              BlurIn creates a sophisticated focus effect by animating CSS
              filter blur. Elements start with a blur filter applied (default:
              10px) and gradually sharpen to 0px as they enter the viewport.
              This creates a modern, premium feel often seen in high-end web
              applications and design portfolios.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Filter-based:</strong> Uses CSS filter blur property
                  for the effect
                </li>
                <li>
                  <strong>Focus effect:</strong> Creates a sense of depth and
                  focus as content sharpens
                </li>
                <li>
                  <strong>Optional fade:</strong> Can combine with opacity
                  transition for enhanced effect
                </li>
                <li>
                  <strong>Modern aesthetic:</strong> Popular in glassmorphism
                  and modern UI design
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
                <h3 className="font-semibold mb-2">Initial State</h3>
                <p className="text-sm text-muted-foreground">
                  When the component mounts, the element starts with:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>
                    <code className="bg-background px-1 rounded">
                      filter: blur(10px)
                    </code>{' '}
                    (default blur amount)
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
                    onViewportEnter
                  </code>{' '}
                  callback to detect when the element enters the viewport. The
                  blur animation starts when:
                </p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                  <li>Element crosses the viewport threshold</li>
                  <li>
                    Default margin:{' '}
                    <code className="bg-background px-1 rounded">-100px</code>
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
                    Blur reduces:{' '}
                    <code className="bg-background px-1 rounded">
                      blur(10px) → blur(0px)
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
                    <code className="bg-background px-1 rounded">smooth</code>)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Technical Implementation</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  BlurIn uses Framer Motion&apos;s{' '}
                  <code className="bg-background px-1 rounded">
                    useMotionValue
                  </code>{' '}
                  and{' '}
                  <code className="bg-background px-1 rounded">
                    useTransform
                  </code>{' '}
                  to animate the blur filter, as CSS filters require special
                  handling:
                </p>
                <CodeBlock
                  code={`// 1. Create motion value for blur amount
const blurValue = useMotionValue(blur); // Starts at 10px

// 2. Transform to CSS filter string
const blurFilter = useTransform(
  blurValue,
  (value) => \`blur(\${value}px)\`
);

// 3. Animate blur value when viewport entered
onViewportEnter={() => {
  animate(blurValue, 0, {
    duration,
    delay,
    ease: resolvedEasing,
  });
}`}
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
                  <th className="border border-border p-3 text-left">
                    Default
                  </th>
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
                    <code className="text-sm">blur</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>number</code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>10</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Initial blur amount in pixels. Higher = more blurred start
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
                    <code>
                      EasingPreset | Easing | [number, number, number, number]
                    </code>
                  </td>
                  <td className="border border-border p-3 text-sm">
                    <code>&apos;smooth&apos;</code>
                  </td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">
                    Easing function. Presets: easeIn, easeOut, easeInOut,
                    linear, bounce, spring, smooth, sharp
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
                    Enable fade effect alongside blur. false = blur only
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
                code={`import { BlurIn } from '@/components/animations';`}
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Step 2: Wrap Your Content
              </h3>
              <CodeBlock
                code={`<BlurIn>
  <img src="/image.jpg" alt="Description" />
</BlurIn>`}
              />
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm text-muted-foreground">
                That&apos;s it! The image will blur in when it enters the
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
                Default Blur (10px)
              </h3>
              <BlurIn>
                <div className="bg-linear-to-br from-purple-600 to-pink-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Default blur effect with fade
                  </p>
                </div>
              </BlurIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Subtle Blur (5px)</h3>
              <BlurIn blur={5}>
                <div className="bg-linear-to-br from-blue-600 to-cyan-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Subtle blur for refined effect
                  </p>
                </div>
              </BlurIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Dramatic Blur (20px)
              </h3>
              <BlurIn blur={20}>
                <div className="bg-linear-to-br from-green-600 to-emerald-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Strong blur for dramatic reveal
                  </p>
                </div>
              </BlurIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Blur Only (No Fade)
              </h3>
              <BlurIn withFade={false} blur={15}>
                <div className="bg-linear-to-br from-orange-600 to-yellow-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Pure blur effect without fade
                  </p>
                </div>
              </BlurIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fast Animation</h3>
              <BlurIn duration={0.3} blur={12}>
                <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Quick, snappy blur reveal
                  </p>
                </div>
              </BlurIn>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Slow Animation</h3>
              <BlurIn duration={1.2} blur={8} easing="easeOut">
                <div className="bg-linear-to-br from-rose-600 to-pink-600 p-12 rounded-lg">
                  <p className="text-xl font-bold text-white">
                    Slow, elegant blur transition
                  </p>
                </div>
              </BlurIn>
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
              <h3 className="font-semibold mb-2">Image Reveals</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for portfolio galleries, product images, and hero
                sections where images should focus into view.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Card Animations</h3>
              <p className="text-sm text-muted-foreground">
                Create sophisticated card reveals in feature sections,
                testimonials, and service showcases.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Glassmorphism</h3>
              <p className="text-sm text-muted-foreground">
                Essential for modern glassmorphism effects where content appears
                to focus through frosted glass.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Text Reveals</h3>
              <p className="text-sm text-muted-foreground">
                Headlines and important text that should draw attention as they
                sharpen into focus.
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

import { BlurIn } from '@/components/animations';

const portfolioItems = [
  { id: 1, image: '/project1.jpg', title: 'Project 1' },
  { id: 2, image: '/project2.jpg', title: 'Project 2' },
  { id: 3, image: '/project3.jpg', title: 'Project 3' },
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <BlurIn key={item.id} blur={15} duration={0.8}>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        </BlurIn>
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
                  CSS filter blur can be GPU-intensive. Use moderate blur values
                  (5-15px) for best performance
                </li>
                <li>
                  Blur animations work well on images, but avoid animating blur
                  on large text blocks
                </li>
                <li>
                  Consider using{' '}
                  <code className="bg-background px-1 rounded">
                    willChange: &apos;filter&apos;
                  </code>{' '}
                  (already applied) for smoother animations
                </li>
                <li>
                  For many items, consider staggering blur animations to avoid
                  performance issues
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Accessibility</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  BlurIn respects{' '}
                  <code className="bg-background px-1 rounded">
                    prefers-reduced-motion
                  </code>{' '}
                  through Framer Motion&apos;s built-in support
                </li>
                <li>
                  Ensure blurred content is still readable when animation is
                  disabled
                </li>
                <li>
                  Don&apos;t rely solely on blur for important information
                  visibility
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
              <h3 className="font-semibold mb-3">Blur Amount Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Subtle (3-5px):</strong> Refined, elegant effect for
                  text and small elements
                </li>
                <li>
                  <strong>Standard (8-12px):</strong> Balanced effect for most
                  use cases
                </li>
                <li>
                  <strong>Dramatic (15-20px):</strong> Strong effect for images
                  and hero sections
                </li>
                <li>
                  <strong>Avoid (&gt;25px):</strong> Too blurry, poor
                  performance, hard to see content
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  ❌ Using too high blur values - creates performance issues
                </li>
                <li>❌ Blurring important text without fade - hard to read</li>
                <li>❌ Animating blur on too many elements simultaneously</li>
                <li>
                  ✅ Combine with fade for smoother, more professional effect
                </li>
                <li>
                  ✅ Use moderate blur (8-12px) for best balance of effect and
                  performance
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Design Recommendations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  BlurIn works exceptionally well with images and visual content
                </li>
                <li>
                  Combine with glassmorphism backgrounds for modern aesthetic
                </li>
                <li>
                  Use slower durations (0.8-1.2s) for more dramatic, elegant
                  reveals
                </li>
                <li>
                  Consider using BlurIn for hero sections and above-the-fold
                  content
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
