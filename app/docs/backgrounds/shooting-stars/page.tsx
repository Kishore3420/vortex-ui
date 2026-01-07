'use client';

import { FadeIn } from '@/components/animations';
import { ShootingStars } from '@/components/backgrounds';
import { CodeBlock } from '@/components/ui';

export default function ShootingStarsPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Shooting Stars</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Night sky simulation with falling stars. Creates a magical,
            contemplative background with random trails of light.
          </p>
        </div>
      </FadeIn>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Overview</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              ShootingStars is an ambient background component that renders a
              star field with randomized shooting stars. Each star has its own
              trajectory, speed, and lifespan. It&apos;s a &quot;wow&quot; factor background
              that stays subtle enough for content to remain legible.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Randomization:</strong> Stars appear at different intervals and angles
                </li>
                <li>
                  <strong>Visual Trails:</strong> Dynamic sizing creates the illusion of speed
                </li>
                <li>
                  <strong>Stellar Palette:</strong> Customizable colors for the star trails
                </li>
                <li>
                  <strong>Lightweight:</strong> Uses pure CSS animations for smooth 60fps
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
          <div className="border border-border rounded-lg h-100 relative overflow-hidden bg-black">
            <ShootingStars starColor="#fff" trailColor="rgba(255,255,255,0.2)" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center z-10">
                <h3 className="text-white text-3xl font-serif">Reach for the stars</h3>
                <p className="text-zinc-500 mt-2">Ambient cinematic background</p>
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
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Prop</th>
                  <th className="border border-border p-3 text-left font-semibold">Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Default</th>
                  <th className="border border-border p-3 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">starColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;#fff&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the star head</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">trailColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;rgba(255,255,255,0.1)&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the star trail</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">minDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>1500</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Min time between stars (ms)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">maxDelay</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>4500</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Max time between stars (ms)</td>
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
            <CodeBlock
              code={`import { ShootingStars } from '@/components/backgrounds';

export default function UnderTheStars() {
  return (
    <div className="bg-zinc-950 h-75 relative">
      <ShootingStars
        starColor="#FEF08A"
        trailColor="rgba(254, 240, 138, 0.2)"
      />
      <h1 className="relative z-10">Stellar Site</h1>
    </div>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
