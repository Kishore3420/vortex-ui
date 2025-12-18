'use client';

import { FadeIn } from '@/components/animations';
import { CodeBlock } from '@/components/ui/CodeBlock';

export default function DiagonalStaggerPage() {
  const gridItems = Array.from({ length: 9 }, (_, i) => i + 1);

  const getDiagonalDelay = (index: number, cols: number) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    return row * 0.1 + col * 0.1;
  };

  return (
    <div className="space-y-16">
      <FadeIn direction="up">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Diagonal Stagger</h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Create wave-like diagonal animations across grids by calculating
            delays based on both row and column positions. Perfect for portfolio
            grids, product showcases, and card layouts.
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
              Diagonal stagger creates a wave effect that flows diagonally
              across your grid. Instead of animating items in a single direction
              (left-to-right or top-to-bottom), diagonal stagger combines both
              row and column positions to create a more dynamic, visually
              interesting pattern.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg">Key Characteristics</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <strong>Wave pattern:</strong> Creates a diagonal wave effect
                  across the grid
                </li>
                <li>
                  <strong>Position-based:</strong> Delay calculated from both
                  row and column indices
                </li>
                <li>
                  <strong>Flexible:</strong> Works with any grid size and
                  spacing
                </li>
                <li>
                  <strong>Uses FadeIn:</strong> Built on top of FadeIn
                  component with custom delays
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
                <h3 className="font-semibold mb-2">Delay Calculation</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  The key is calculating delay based on both row and column:
                </p>
                <CodeBlock
                  code={`const getDiagonalDelay = (index: number, cols: number) => {
  const row = Math.floor(index / cols);  // Which row (0, 1, 2...)
  const col = index % cols;               // Which column (0, 1, 2...)
  return (row * rowDelay) + (col * colDelay);
};`}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  By combining both row and column delays, items animate in a
                  diagonal pattern from top-left to bottom-right.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Visual Pattern</h3>
                <p className="text-sm text-muted-foreground">
                  In a 3x3 grid, the animation flows like this:
                </p>
                <div className="mt-2 p-4 bg-background rounded border border-border font-mono text-sm">
                  <div>0.0s → 0.1s → 0.2s</div>
                  <div>0.1s → 0.2s → 0.3s</div>
                  <div>0.2s → 0.3s → 0.4s</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Notice how items on the same diagonal have the same total
                  delay (row + col).
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Basic Implementation</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <CodeBlock
              code={`import { FadeIn } from '@/components/animations';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cols = 3;

const getDiagonalDelay = (index: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return (row * 0.1) + (col * 0.1);
};

export default function Grid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <FadeIn
          key={item}
          delay={getDiagonalDelay(index, cols)}
          direction="up"
        >
          <div className="p-6 bg-card rounded-lg">
            Item {item}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}`}
            />
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Live Example</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Scroll to see the diagonal stagger effect in action:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {gridItems.map((item, index) => {
                const delay = getDiagonalDelay(index, 3);
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
              Notice how items animate diagonally from top-left to
              bottom-right. Each item&apos;s delay is shown in the
              bottom-right corner.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Variations</h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fast Diagonal</h3>
              <CodeBlock
                code={`// Faster wave with smaller delays
const getDiagonalDelay = (index: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return (row * 0.05) + (col * 0.05); // Smaller multiplier
};`}
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-semibold mb-4">Reverse Diagonal</h3>
              <CodeBlock
                code={`// Animate from bottom-right to top-left
const getDiagonalDelay = (index: number, cols: number, totalRows: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  const reverseRow = totalRows - 1 - row;
  const reverseCol = cols - 1 - col;
  return (reverseRow * 0.1) + (reverseCol * 0.1);
};`}
              />
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Asymmetric Diagonal
              </h3>
              <CodeBlock
                code={`// Different speeds for row vs column
const getDiagonalDelay = (index: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return (row * 0.15) + (col * 0.05); // Row moves slower
};`}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold">Use Cases</h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Portfolio Grids</h3>
              <p className="text-sm text-muted-foreground">
                Showcase projects or artwork with a dynamic diagonal reveal
                effect.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Product Showcases</h3>
              <p className="text-sm text-muted-foreground">
                Display products in a grid with an engaging wave animation.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Team Member Cards</h3>
              <p className="text-sm text-muted-foreground">
                Introduce team members with a sophisticated diagonal stagger.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Gallery Layouts</h3>
              <p className="text-sm text-muted-foreground">
                Create visual interest in image galleries and photo grids.
              </p>
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
              <h3 className="font-semibold mb-3">Timing Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong>Small grids (2x2, 3x3):</strong> 0.1-0.15s per
                  row/column
                </li>
                <li>
                  <strong>Medium grids (4x4, 5x5):</strong> 0.05-0.1s per
                  row/column
                </li>
                <li>
                  <strong>Large grids (6x6+):</strong> 0.03-0.05s per
                  row/column
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Performance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  Diagonal stagger works well with any number of items
                </li>
                <li>
                  Uses GPU-accelerated transforms for smooth performance
                </li>
                <li>
                  Consider using <code className="bg-background px-1 rounded">once=true</code> to
                  prevent re-animations
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
