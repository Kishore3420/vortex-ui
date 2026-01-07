'use client';

import { FadeIn, LinkReveal } from '@/components/animations';
import { CodeBlock } from '@/components/ui';

export default function LinkRevealPage() {
  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Link Reveal</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Animated hover state for interactive links. Combines a
            growing underline with a subtle background highlight for
            maximum engagement.
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
              LinkReveal elevates standard hyperlinks by adding multi-layered
              feedback. When a user hovers over the link, an underline expands
              horizontally from the left, while the link background slightly
              dims or highlights. This provides a clear, &quot;premium&quot; feel that
              standard CSS `:hover` states often lack.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Smooth Underline:</strong> Origin-based horizontal growth
                </li>
                <li>
                  <strong>Ambient Highlight:</strong> Subtle background fill on hover
                </li>
                <li>
                  <strong>Semantic Anchor:</strong> Renders as a standard `&lt;a&gt;` tag
                </li>
                <li>
                  <strong>Fully Accessible:</strong> Maintains focus states and tab order
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
          <div className="border border-border rounded-lg p-16 bg-card flex flex-col items-center justify-center gap-8">
            <LinkReveal href="#" className="text-2xl font-bold text-primary">
              Discover Our Process
            </LinkReveal>
            <LinkReveal href="#" underlineColor="#10b981" className="text-lg">
              View Case Studies
            </LinkReveal>
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
                  <td className="border border-border p-3 text-sm text-muted-foreground">The link text or content</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">href</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;#&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Destination URL</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code className="text-sm">underlineColor</code></td>
                  <td className="border border-border p-3 text-sm"><code>string</code></td>
                  <td className="border border-border p-3 text-sm"><code>&quot;var(--color-primary)&quot;</code></td>
                  <td className="border border-border p-3 text-sm text-muted-foreground">Color of the expanding line</td>
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
              code={`import { LinkReveal } from '@/components/animations';

export default function Footer() {
  return (
    <nav className="flex gap-4">
      <LinkReveal href="/about">About Us</LinkReveal>
      <LinkReveal href="/contact" underlineColor="red">Contact</LinkReveal>
    </nav>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
