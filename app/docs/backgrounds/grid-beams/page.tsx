'use client';

import { FadeIn } from '@/components/animations';
import { GridBeams } from '@/components/backgrounds';
import { CodeBlock } from '@/components/ui';

export default function GridBeamsPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Grid Beams</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Futuristic grid background with traveling light beams.
            Creates a high-tech &quot;data flow&quot; or &quot;circuitboard&quot; aesthetic with
            precise geometric motion.
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
              GridBeams combines a static geometric grid with dynamic SVG light
              paths that traverse the grid lines. It&apos;s the perfect backdrop for
              developer tools, dashboards, and technology showcases. The beams
              move in random intervals along pre-defined grid paths, suggesting
              active processing or connectivity.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Geometric Precision:</strong> Clean, SVG-based grid lines
                </li>
                <li>
                  <strong>Dynamic Particles:</strong> Beams that travel along X and Y axes
                </li>
                <li>
                  <strong>Configurable Density:</strong> Control the dash pattern and spacing
                </li>
                <li>
                  <strong>Interactive Feeling:</strong> Suggests a live, active system
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
          <div className="border border-border rounded-lg h-100 relative overflow-hidden bg-white dark:bg-zinc-950">
            <GridBeams />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-md border border-border p-6 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold">Tech Infrastructure</h3>
                <p className="text-muted-foreground">Active data monitoring system</p>
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
                  <td className="border border-border p-3"><code className="text-sm">className</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                   <td className="border border-border p-3 text-sm"><code>&quot;&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Additional CSS classes</td>
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
              code={`import { GridBeams } from '@/components/backgrounds';

export default function Dashboard() {
  return (
    <div className="relative overflow-hidden">
      <GridBeams />
      <div className="relative z-10">
        <h1>System Overview</h1>
      </div>
    </div>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-6 space-y-4 text-muted-foreground">
              <p>
                GridBeams uses high-performance SVG rendering to create its technical aesthetic:
              </p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li><strong>SVG Pattern Grid:</strong> The base grid is generated using an SVG pattern, ensuring it scales perfectly to any container size without pixelation.</li>
                <li><strong>Beam Pathing:</strong> The &quot;beams&quot; are actually short <code>motion.path</code> elements. They are programmed to travel exactly along the X and Y coordinates defined by the grid lines.</li>
                <li><strong>Deterministic Randomness:</strong> Beam start delays and durations are randomized to ensure that no two areas of the grid feel identical, while still maintaining a cohesive rhythm.</li>
                <li><strong>Gradient Masking:</strong> Faint linear gradients are applied to the beams to give them a &quot;comet tail&quot; effect, fading out behind the lead edge.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Customization Guide</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Color Theme</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By default, GridBeams inherits the current text color at low opacity. You can override this by passing custom CSS variables or utility classes via <code>className</code> to change line and beam colors.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Full-Bleed Layouts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For a true dashboard background, set the container to <code>fixed inset-0</code>. Use a radial-gradient mask on the parent to fade out the grid at the edges of the screen.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Performance & Accessibility</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="border border-border rounded-lg p-6 bg-card space-y-4 text-muted-foreground">
             <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Performance</h3>
                  <p className="text-sm">
                    SVG animations are extremely lightweight. Even with dozens of active beams, the impact on main-thread performance is minimal. This component is safe for use on landing pages that need to maintain a high SEO and Core Web Vitals score.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Accessibility</h3>
                  <p className="text-sm">
                    The component is purely decorative and is hidden from screen readers via <code>aria-hidden=&quot;true&quot;</code>. It respects user motion preferences, typically slowing down or stopping the beam travel if reduced motion is requested.
                  </p>
                </div>
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
            <div className="border-l-4 border-primary pl-4 space-y-2">
              <h3 className="font-semibold">✅ Do</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Use for SaaS dashboards, developer portfolios, and tech showcases.</li>
                <li>Stick to dark modes (Zinc, Slate, or Black) for the most authentic &quot;tech&quot; feel.</li>
                <li>Place high-level metrics and data visualizations over the grid.</li>
              </ul>
            </div>

            <div className="border-l-4 border-destructive pl-4 space-y-2">
              <h3 className="font-semibold">❌ Don&apos;t</h3>
              <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                <li>Don&apos;t use with bright, busy patterns in the foreground; it will create visual noise.</li>
                <li>Avoid extremely fast beam movements that might distract from reading important data.</li>
                <li>Don&apos;t use on pages with very long scrolling content where the grid might feel repetitive.</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
