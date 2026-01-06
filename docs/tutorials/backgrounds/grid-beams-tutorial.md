# Grid Beams Animation - Complete Tutorial

## 📚 Table of Contents

1. [What is Grid Beams?](#what-is-grid-beams)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)

---

## What is Grid Beams?

**Grid Beams** is a structural, high-tech background effect where a grid defines the space, and "beams" of light travel along the grid lines. It creates a sense of data flow, engineering precision, and futuristic architecture.

### Visual Effect

-   **Base Grid**: A subtle, static grid (usually SVG or CSS background).
-   **Moving Beams**: Gradients masking over the grid lines to creating a "laser" effect.
-   **Fading Trails**: The beams have a bright head and a long fading tail.
-   **Masking**: The effect often "fades out" at the edges to blend into the background.

---

## Visual Behavior

```
┌────────────────────────────────────────┐
│  │   │   │   │   │   │   │   │   │   │
│──┼───┼───┼───┼───┼───┼───┼───┼───┼───│
│  │ ⚡│   │   │   │   │   │   │   │   │  <-- Beam moving down
│──┼───┼───┼───┼───┼───┼───┼───┼───┼───│
│  │   │   │   │ ⚡│   │   │   │   │   │  <-- Beam moving right
│──┼───┼───┼───┼───┼───┼───┼───┼───┼───│
│  │   │   │   │   │   │   │   │   │   │
└────────────────────────────────────────┘

Animation:
Bright gradients translate across the X or Y axis,
revealing the grid lines underneath them.
```

---

## Line-by-Line Code Explanation

### 1. The Grid Pattern (SVG)

We use a repeatable SVG pattern to draw the grid efficiently.

```tsx
<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-pattern)" />
</svg>
```

**Why SVG?** It's crisp on all screens and extremely lightweight compared to hundreds of HTML divs.

### 2. The Beam (Motion Div)

The "Beam" isn't a line itself. It's a **gradient div** that sits *behind* or *overlaps* the grid, masked to only show where the lines are.

Wait, an easier way: We can just fly a 1px `div` with a gradient shadow across the screen.

```typescript
interface GridBeamsProps {
  className?: string;
  cellSize?: number;
  gridColor?: string; // Class for static grid lines
  beamColor?: string; // Class for beam "via" color
  numBeams?: number;
}

const GridBeams = ({
  className,
  cellSize = 50,
  gridColor = 'stroke-neutral-500/20',
  beamColor = 'via-blue-500',
  numBeams = 3,
}: GridBeamsProps) => {
  // Generate random beams (in real app, use useMemo or stable ID)
  const beams = Array.from({ length: numBeams }).map((_, i) => ({
    id: i,
    offset: i * 3,
    delay: i * 2,
    horizontal: Math.random() > 0.5
  }));

  return (
    <div className={`relative w-full h-full overflow-hidden bg-background ${className}`}>
      {/* 1. Static Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className={gridColor}>
          {/* ... Pattern Definition ... */}
          <rect width="100%" height="100%" fill={`url(#grid-pattern-${cellSize})`} />
        </svg>
      </div>

      {/* 2. Moving Beams Pattern */}
      {beams.map((beam) => (
         <motion.div
            key={beam.id}
            className={`absolute bg-gradient-to-${beam.horizontal ? 'r' : 'b'} from-transparent ${beamColor} to-transparent opacity-40`}
            style={{
                width: beam.horizontal ? '100%' : '1px',
                height: beam.horizontal ? '1px' : '100%',
                top: beam.horizontal ? `${beam.offset * cellSize}px` : 0,
                left: beam.horizontal ? 0 : `${beam.offset * cellSize}px`,
            }}
            initial={/* ... */}
            animate={/* ... */}
            transition={/* ... */}
         />
      ))}
    </div>
  );
};
```

**Key Concepts:**
-   `w-[1px] h-full`: Uses a vertical line.
-   `bg-gradient-to-b`: The beam fades in and out (Head and Tail).
-   `y: '-100%' -> '100%'`: Moves from top to bottom completely.

### 3. Combining Them

We place the static grid, then layer the moving beams on top, aligned with the grid columns/rows.

---

## Core Concepts Deep Dive

### 1. The "Scanner" Effect
By effectively "scanning" the grid with light, we imply activity. This is very popular in "Developer Tools" branding (e.g. Next.js, Linear).

### 2. Masking for Subtlety
A sharp grid can be harsh. Using a radial mask on the *entire container* makes the grid fade out at the edges, making it feel like it's emerging from the darkness.

```css
mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
```

---

## How to Use

### Basic Usage

```tsx
<div className="relative h-96 w-full overflow-hidden bg-black">
  <GridBeams />
  <div className="relative z-10 p-10 text-white">
    <h1>API Infrastructure</h1>
  </div>
</div>
```

## Customization

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `cellSize` | `number` | `50` | Size of spacing between grid lines. |
| `gridColor` | `string` | `stroke-neutral-500/20` | Color class for the static grid lines. |
| `beamColor` | `string` | `via-blue-500` | Tailwind class for the central color of the beam. |
| `numBeams` | `number` | `3` | Number of concurrent beams. |
| `beamWidth` | `number` | `1` | Thickness of the beam in pixels. |

### Advanced Usage

```tsx
// Cyberpunk Implementation
<GridBeams
    cellSize={40}
    gridColor="stroke-pink-500/30"
    beamColor="via-pink-500"
    numBeams={7}
    beamDuration={2}
/>
```

---

## Where to Use

### ✅ Perfect For:
1.  **DevTools / API Products**: Screams "technical precision".
2.  **"How it works" Sections**: Implies data flow.
3.  **Footers**: A subtle grid in the footer is a nice touch.

### ❌ Avoid For:
1.  **Nature / Organic Brands**: Too rigid and robotic.
2.  **Text-Heavy Blogs**: The lines interfere with reading flow.

---

## Common Pitfalls

### 1. Misaligned Beams
If your grid is `40px` wide, your beams MUST be positioned at `40px`, `80px`, etc. If they are off by 1px, it looks broken.

### 2. Too Many Beams
If every line lights up, it's a strobe light. Use beams sparingly (3-5 max).
