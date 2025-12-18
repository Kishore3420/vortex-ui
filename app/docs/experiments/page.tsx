'use client';
import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function ExperimentsPage() {
  const gridItems = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Animation Experiments</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Hands-on experiments to understand how delays, viewport margins, and
            stagger effects work. Try different values and see the results in
            real-time.
          </p>
        </header>
      </FadeIn>

      {/* Experiment 1: Diagonal Stagger */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Experiment 1: Diagonal Stagger
            </h2>
            <p className="text-muted-foreground">
              Create a diagonal stagger effect by combining X and Y delays. This
              creates a wave-like animation that flows diagonally across your
              grid.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How It Works</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>Concept:</strong> Instead of animating items in a single
              direction (left-to-right or top-to-bottom), we calculate delays
              based on both row and column positions.
            </p>
            <p>
              <strong>Formula:</strong> delay = (rowIndex × rowDelay) +
              (colIndex × colDelay)
            </p>
            <p>
              <strong>Result:</strong> Items animate in a diagonal pattern,
              creating a wave effect.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Example: 3x3 Grid</h3>
          <CodeBlock
            code={`// Calculate delay based on position
const getDiagonalDelay = (index: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return (row * 0.1) + (col * 0.1); // Combine row and col delays
};

// Use FadeIn with custom delays for diagonal effect
{items.map((item, index) => (
  <FadeIn
    key={item.id}
    delay={getDiagonalDelay(index, 3)}
    direction="up"
  >
    <div>{item.content}</div>
  </FadeIn>
))}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Live Example</h3>
          <div className="grid grid-cols-3 gap-4">
            {gridItems.map((item, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const delay = row * 0.1 + col * 0.1;
              return (
                <FadeIn key={item} delay={delay} direction="up">
                  <div className="border border-border rounded-lg p-6 bg-card aspect-square flex items-center justify-center relative">
                    <span className="text-2xl font-bold">{item}</span>
                    <span className="text-xs text-muted-foreground absolute bottom-2 right-2">
                      {delay.toFixed(1)}s
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            Notice how items animate diagonally from top-left to bottom-right.
            Each item&apos;s delay is shown in the bottom-right corner.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Try Different Patterns</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-border rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-2">Reverse Diagonal</h4>
              <CodeBlock
                code={`// Top-right to bottom-left
const delay = row * 0.1 - col * 0.1;`}
              />
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-2">Spiral Pattern</h4>
              <CodeBlock
                code={`// Spiral from center
const center = Math.floor(cols / 2);
const distance = Math.abs(row - center) + Math.abs(col - center);
const delay = distance * 0.15;`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiment 2: Viewport Margins */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Experiment 2: Viewport Margins
            </h2>
            <p className="text-muted-foreground">
              Viewport margins control when animations trigger relative to the
              element entering the viewport. Understanding this is crucial for
              timing your animations perfectly.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">How Viewport Margins Work</h3>
          <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
            <p>
              <strong>Default:</strong> <code>-100px</code> - Animation starts
              100px before element enters viewport
            </p>
            <p>
              <strong>0px:</strong> Animation starts exactly when element enters
              viewport (immediate trigger)
            </p>
            <p>
              <strong>Negative values (-200px):</strong> Animation starts
              earlier, before element is visible (good for long animations)
            </p>
            <p>
              <strong>Positive values (100px):</strong> Animation starts after
              element is already visible (delayed trigger)
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Example 1: Immediate Trigger (0px)
            </h3>
            <FadeIn direction="up" viewportMargin="0px">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">
                  viewportMargin=&quot;0px&quot;
                </h4>
                <p className="text-sm text-muted-foreground">
                  This animation triggers exactly when the element enters the
                  viewport. Scroll slowly to see it start immediately.
                </p>
              </div>
            </FadeIn>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Example 2: Early Trigger (-200px)
            </h3>
            <FadeIn direction="up" viewportMargin="-200px">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">
                  viewportMargin=&quot;-200px&quot;
                </h4>
                <p className="text-sm text-muted-foreground">
                  This animation starts 200px before the element enters the
                  viewport. Perfect for longer animations that need to finish by
                  the time the element is visible.
                </p>
              </div>
            </FadeIn>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Example 3: Default Trigger (-100px)
            </h3>
            <FadeIn direction="up" viewportMargin="-100px">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold mb-2">
                  viewportMargin=&quot;-100px&quot; (default)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The default margin. Animation starts 100px before element
                  enters viewport. Good balance for most use cases.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">When to Use Each</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-border rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-2">0px - Immediate</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Quick, snappy animations</li>
                <li>• Short duration (&lt;0.5s)</li>
                <li>• Elements that need instant feedback</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-2">-100px - Default</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Standard animations</li>
                <li>• Medium duration (0.5-1s)</li>
                <li>• Most common use case</li>
              </ul>
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              <h4 className="font-semibold mb-2">-200px+ - Early</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Long animations (&gt;1s)</li>
                <li>• Complex sequences</li>
                <li>• Hero sections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experiment 3: Combining Both */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">
              Experiment 3: Combining Both Techniques
            </h2>
            <p className="text-muted-foreground">
              Combine diagonal stagger with custom viewport margins for
              sophisticated animation sequences.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Advanced Example</h3>
          <CodeBlock
            code={`// Diagonal stagger with early viewport trigger
// Use FadeIn with custom delays and viewport margin
{items.map((item, index) => {
  const row = Math.floor(index / 3);
  const col = index % 3;
  const delay = row * 0.1 + col * 0.1;

  return (
    <FadeIn
      key={item.id}
      delay={delay}
      duration={0.8}  // Longer duration
      viewportMargin="-150px"  // Start early for long sequence
      direction="up"
    >
      <div>{item.content}</div>
    </FadeIn>
  );
})}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Live Example</h3>
          <div className="space-y-4">
            {gridItems.map((item, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              const delay = row * 0.1 + col * 0.1;
              return (
                <FadeIn
                  key={item}
                  delay={delay}
                  duration={0.8}
                  viewportMargin="-150px"
                  direction="up"
                >
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold">Item {item}</span>
                      <span className="text-xs text-muted-foreground">
                        Delay: {delay.toFixed(1)}s
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground">
            Notice how the animation starts early (150px before viewport) and
            flows diagonally. This creates a smooth, professional effect.
          </p>
        </div>
      </section>

      {/* Practice Section */}
      <section className="space-y-6 border-t border-border pt-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Practice Challenges</h2>
            <p className="text-muted-foreground">
              Try these challenges to master delay and viewport margin concepts.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-2">Challenge 1</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create a checkerboard pattern where every other item animates
              first, then the remaining items.
            </p>
            <CodeBlock
              code={`const delay = (row + col) % 2 === 0 ? 0 : 0.2;`}
            />
          </div>

          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-2">Challenge 2</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Create a ripple effect from center, where items animate based on
              distance from center.
            </p>
            <CodeBlock
              code={`const center = Math.floor(cols / 2);
const distance = Math.abs(row - center) + Math.abs(col - center);
const delay = distance * 0.1;`}
            />
          </div>

          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-2">Challenge 3</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Use different viewport margins for different sections to create a
              layered scroll experience.
            </p>
            <CodeBlock
              code={`<FadeIn viewportMargin="-300px">Hero</FadeIn>
<FadeIn viewportMargin="-100px">Content</FadeIn>
<FadeIn viewportMargin="0px">Footer</FadeIn>`}
            />
          </div>

          <div className="border border-border rounded-lg p-5 bg-card">
            <h3 className="font-semibold mb-2">Challenge 4</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Combine diagonal stagger with different easing functions for each
              row.
            </p>
            <CodeBlock
              code={`const easings = ['easeIn', 'easeOut', 'bounce'];
const easing = easings[row % easings.length];`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
