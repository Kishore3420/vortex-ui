'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock, Interactive3DButton } from '@/components/ui';

export default function Interactive3DPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Interactive 3D</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Tactile, physical-feel button with 3D depth. Responds to mouse
            movement with perspective shifting and depresses on click
            like a physical switch.
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
              Interactive 3D Button brings skeuomorphism into the modern era.
              Using dynamic shadow layering and transform-perspective, it
              simulates a physical object that tilts toward the cursor.
              The click interaction features a &quot;push-down&quot; state that provides
              unparalleled tactile satisfaction in a purely digital interface.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>3D Perspective:</strong> Real-time tilting based on mouse position
                </li>
                <li>
                  <strong>Tactile Click:</strong> Physical &quot;depth&quot; change on press
                </li>
                <li>
                  <strong>Dynamic Shadows:</strong> Shadows shift to maintain consistent lighting
                </li>
                <li>
                  <strong>Premium Feel:</strong> Adds a sense of quality and craftsmanship to the UI
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
          <div className="border border-border rounded-lg p-20 bg-card flex flex-col items-center justify-center gap-12">
            <Interactive3DButton className="bg-primary text-primary-foreground font-bold px-12 py-5 rounded-2xl text-xl shadow-2xl">
              Push to Execute
            </Interactive3DButton>
            <Interactive3DButton className="bg-white text-black border-2 border-zinc-200 px-8 py-3 rounded-lg font-semibold">
              Skeuomorphic Toggle
            </Interactive3DButton>
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
                  <td className="border border-border p-3"><code className="text-sm">children</code></td>
                  <td className="border border-border p-3 text-sm"><code>ReactNode</code></td>
                  <td className="border border-border p-3 text-sm"><span className="text-muted-foreground">Required</span></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Button content</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">depth</code></td>
                  <td className="border border-border p-3 text-sm"><code>number</code></td>
                  <td className="border border-border p-3 text-sm"><code>4</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Physical depth of the button (px)</td>
                </tr>
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
          <h2 className="text-3xl font-bold">How It Works</h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The 3D effect is achieved using CSS <code>transform: perspective()</code>
              and <code>rotateX/rotateY</code>. As the mouse moves, the component
              calculates the distance from the center and applies a proportional
              rotation to the button face.
            </p>
            <p>
              The &quot;physical depth&quot; is actually a stack of multiple
              box-shadows or a layered 3D transform that translates the button base
              along the Z-axis. When clicked, we transition the <code>translateY</code>
              property to match the <code>depth</code> prop, simulating the compression
              of a physical spring.
            </p>
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
              <h3 className="font-semibold text-lg text-foreground">Physical Depth</h3>
              <p className="text-sm text-muted-foreground">
                The <code>depth</code> prop (in pixels) defines how thick the button
                slab is. Recommended values for a premium feel are 4-8px. Extreme values
                (12px+) can be used for a playful, toy-like aesthetic.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-foreground">Shadow Presence</h3>
              <p className="text-sm text-muted-foreground">
                The button face and base use independent shadow variables. You can
                control the ambient occlusion and drop shadows by wrapping the
                component in a div with custom shadow utility classes.
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
          <div className="space-y-4">
            <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Transformed Geometry</h4>
                  <p className="text-sm text-muted-foreground">Perspective calculations are performed on every mouse frame but are limited to the specific button instance, keeping layout shifts localized.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Semantic Click</h4>
                  <p className="text-sm text-muted-foreground">While the visual depth changes, the button&apos;s hit area remains consistent to prevent &quot;missed clicks&quot; during the animation transition.</p>
                </div>
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
          <ul className="grid gap-4 md:grid-cols-2 list-none p-0">
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Border Radius</h4>
              <p className="text-sm text-muted-foreground">High border-radius values (e.g., <code>rounded-2xl</code>) look best with 3D buttons as they evoke the feel of rounded physical hardware buttons or keys.</p>
            </li>
            <li className="bg-card border border-border p-5 rounded-lg">
              <h4 className="font-bold mb-2">Typography Weight</h4>
              <p className="text-sm text-muted-foreground">Use <code>font-bold</code> or <code>font-black</code> labels. Thin text can get slightly distorted or blurry when the 3D perspective tilt is at its maximum angle.</p>
            </li>
          </ul>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Basic Usage</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { Interactive3DButton } from '@/components/ui';

export default function GameUI() {
  return (
    <Interactive3DButton
      depth={8}
      className="bg-green-500 text-white font-black px-12 py-6 rounded-3xl"
    >
      START GAME
    </Interactive3DButton>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
