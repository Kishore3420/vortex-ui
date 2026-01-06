# Spotlight Animation - Complete Tutorial

## 📚 Table of Contents

1. [What is Spotlight?](#what-is-spotlight)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)

---

## What is Spotlight?

**Spotlight** is a subtle background effect where a focused radial gradient highlights a specific area of the screen. In advanced versions, it follows the cursor, but the foundational version acts as a "breathing" light source that draws attention to the center or a specific focal point.

### Visual Effect

- **Single, large radial gradient**
- **Soft falloff** (transparent edges)
- **Pulse animation** (scaling and opacity changes)
- Adds **depth** and **cinematic feel** to dark interfaces

---

## Visual Behavior

```
       Dark Background
┌──────────────────────────────┐
│                              │
│            ( )               │
│          (     )             │
│        (  GLOW   )           │
│          (     )             │
│            ( )               │
│                              │
└──────────────────────────────┘

Animation:
The glow expands (scale 1 → 1.2)
and dims (opacity 0.5 → 0.3) continuously.
```

---

## Line-by-Line Code Explanation

### 1. The Gradient Layer

```typescript
const Spotlight = ({ className, size = 70, speed = 10, color }: SpotlightProps) => {
  const containerStyle = color
    ? ({ '--color-primary': color } as React.CSSProperties)
    : undefined;

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-background ${className}`}
      style={containerStyle}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, var(--color-primary) 0%, transparent ${size}%)`,
        }}
        // Animation props follow...
      />
    </div>
  );
};
```

**Breaking it down:**
- `radial-gradient(circle at center...)`:
  - `circle at center`: Places the gradient dead center.
  - `hsl(var(--primary) / 0.3)`: Uses the theme's primary color with 30% opacity.
  - `0%`: Starts at full (30%) opacity at the center.
  - `transparent 70%`: Fades out completely by 70% of the radius.

### 2. The Pulse Animation

```typescript
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
```

**What happens here:**
- **Scale**: The spotlight grows 20% larger (`1.2`) and then shrinks back.
- **Opacity**: It gets brighter (`0.5`) and then dimmer (`0.3`).
- **Sync**: Both happen over 10 seconds, creating a slow, rhythmic "breathing" effect that feels alive.

---

## Core Concepts Deep Dive

### 1. Theme Awareness
Using `hsl(var(--primary) / 0.3)` is crucial.
- **Consistency**: If your site's primary color changes (e.g. Blue to Purple), the spotlight automatically updates.
- **Dark/Light Mode**: If tailored correctly, it works in both modes, though spotlights are most effective in Dark Mode.

### 2. Composition
A spotlight is usually a **backing layer**.
- It sits `absolute` behind your text.
- It provides *contrast* by lighting up the background behind the text, making the foreground pop.

---

## How to Use

### Basic Usage

```tsx
<div className="relative h-100 w-full flex items-center justify-center border">
  <Spotlight />
  <h2 className="relative z-10 text-3xl font-bold">Featured Content</h2>
</div>
```

### Changing Colors
Since it uses `bg-background` and `var(--primary)`, simply changing the parent's generic color variables or overriding the style works.

```tsx
// Custom color override
<div style={{ "--primary": "220 100% 50%" } as React.CSSProperties}>
  <Spotlight />
</div>
```

---

## Customization

The component accepts optional props to tweak the feel.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` | `70` | Percentage of container covered (gradient spread). |
| `speed` | `number` | `10` | Animation cycle duration in seconds. |
| `color` | `string` | `undefined` | Valid CSS color string (e.g., `hsl(...)`) to override primary color. |

### Advanced Usage

```tsx
// Small, fast, purple glow
<Spotlight
  size={40}
  speed={5}
  color="hsl(270, 100%, 60%)"
/>

// Huge, slow, cyan ambient
<Spotlight
  size={90}
  speed={20}
  color="cyan"
/>
```

---

## Where to Use

### ✅ Perfect For:
1.  **Hero Headers**: Center focus on the main H1.
2.  **Product Showcases**: "Lighting up" a product image.
3.  **Empty States**: Making a "No items found" screen look designed rather than broken.

### ❌ Avoid For:
1.  **Busy Layouts**: If there are many cards/images, a spotlight just adds noise.
2.  **Light Mode (Caution)**: Spotlights on white backgrounds can look like dirty smudges if not carefully tuned (requires darker/stronger colors).

---

## Common Pitfalls

### 1. Performance
Large box-shadows or blurs can be expensive. Radial gradients are generally cheaper `background-image` operations for the GPU.

### 2. Layout Shifts
Always ensure the parent has `relative` positioning. If the parent collapses (height 0), the spotlight vanishes.
