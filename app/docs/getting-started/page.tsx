'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function GettingStartedPage() {
  return (
    <div className="space-y-12">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Install the core animation libraries, wire up the theme system, and
            render your first animated component. Follow these steps to get up
            and running.
          </p>
        </header>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Installation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Node.js 18+ or Bun</li>
                <li>React 19+</li>
                <li>Next.js 16+</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Install Dependencies
              </h3>
              <CodeBlock
                code={`# Using npm
npm install framer-motion gsap lenis

# Using yarn
yarn add framer-motion gsap lenis

# Using pnpm
pnpm add framer-motion gsap lenis

# Using bun
bun add framer-motion gsap lenis`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Optional: Three.js (for 3D animations)
              </h3>
              <CodeBlock
                code={`npm install @react-three/fiber @react-three/drei three`}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Project Setup</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                1. Theme Provider Setup
              </h3>
              <p className="text-muted-foreground mb-3">
                Wrap your app with the theme provider in your root layout:
              </p>
              <CodeBlock
                code={`// app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                2. Your First Animation
              </h3>
              <p className="text-muted-foreground mb-3">
                Use the FadeIn component to animate any element into view:
              </p>
              <CodeBlock
                code={`// app/page.tsx
import { FadeIn } from '@/components/animations';

export default function Home() {
  return (
    <main>
      <FadeIn direction="up" delay={0.2}>
        <h1>Hello, World!</h1>
      </FadeIn>
    </main>
  );
}`}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.3}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Configuration</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Theme Configuration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Customize colors in <code>lib/theme.ts</code>:
              </p>
              <CodeBlock
                code={`export const pantoneColors = {
  classicBlue: '#0F4C75',
  // ... customize colors
};`}
              />
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">
                Smooth Scroll Configuration
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Configure smooth scrolling in{' '}
                <code>components/providers/SmoothScroll.tsx</code>:
              </p>
              <CodeBlock
                code={`<SmoothScroll
  duration={1.2}
  wheelMultiplier={1}
  smoothWheel={true}
>
  {children}
</SmoothScroll>`}
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Next Steps</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Quick Start Guide</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create your first animation in 5 minutes
              </p>
              <a
                href="/docs/quick-start"
                className="text-sm text-primary hover:underline"
              >
                Go to Quick Start →
              </a>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <h3 className="font-semibold mb-2">Component Library</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Explore all available animation components
              </p>
              <a
                href="/docs/components"
                className="text-sm text-primary hover:underline"
              >
                View Components →
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
