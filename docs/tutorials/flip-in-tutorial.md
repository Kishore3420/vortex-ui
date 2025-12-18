# FlipIn Component - Complete Tutorial

## 📚 Table of Contents

1. [What is FlipIn?](#what-is-flipin)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is FlipIn?

**FlipIn** creates 3D flip animations using CSS perspective transforms. Elements flip into view like cards, perfect for modals, cards, and interactive elements. It's one of the most dramatic animations, creating true 3D depth effects.

### Visual Effect

- Elements start: **rotated on X/Y axis** (default: 90°) and optionally **invisible**
- Elements animate to: **normal rotation** (0°) and **fully visible**
- Uses **CSS perspective** for 3D effect
- Supports **3 directions**: horizontal, vertical, both
- Creates **true 3D depth** with perspective

---

## Visual Behavior

```
Initial State (hidden, direction="horizontal", angle=90):
┌─────────────────────────────────┐
│                                 │
│      [Element]                  │
│      ↑ Rotated 90° on X-axis,   │
│        invisible                │
│      (flipped backward)         │
└─────────────────────────────────┘

Animation:
Element flips into view

Final State (visible):
┌─────────────────────────────────┐
│  [Element]                      │
│  ↑ Normal rotation, visible     │
│  (0° rotation)                   │
└─────────────────────────────────┘
```

**3D Flip Directions:**

```
Horizontal (rotateX: 90°):
    ┌───┐
    │   │  → Flips like a card (top to bottom)
    └───┘

Vertical (rotateY: 90°):
    ┌───┐
    │   │  → Flips like a door (left to right)
    └───┘

Both (rotateX: 90°, rotateY: 90°):
    ┌───┐
    │   │  → Flips both ways (complex)
    └───┘
```

---

## Line-by-Line Code Explanation

### 1. Component Setup

```typescript
'use client';
```

**Why:** Next.js requires `'use client'` for components that use React hooks or browser APIs. Framer Motion needs client-side JavaScript.

```typescript
import { Easing, motion } from 'framer-motion';
import { ReactNode } from 'react';
import type { EasingPreset } from './FadeIn';
```

**Why:**

- `motion` provides animated components
- `Easing` is the type for easing functions
- `ReactNode` is the type for children prop

### 2. Rotation Calculation

```typescript
const getInitialRotation = () => {
  switch (direction) {
    case 'horizontal':
      return { rotateX: angle, rotateY: 0 };
    case 'vertical':
      return { rotateX: 0, rotateY: angle };
    case 'both':
      return { rotateX: angle, rotateY: angle };
    default:
      return { rotateX: angle, rotateY: 0 };
  }
};

const initialRotation = getInitialRotation();
```

**What it does:**

- Calculates initial 3D rotation based on direction
- `horizontal`: Rotates on X-axis (flips top to bottom)
- `vertical`: Rotates on Y-axis (flips left to right)
- `both`: Rotates on both axes (complex flip)

**3D Rotation Axes:**

- `rotateX`: Rotates around horizontal axis (flips vertically)
- `rotateY`: Rotates around vertical axis (flips horizontally)
- `rotateZ`: Rotates around depth axis (spins, not used in FlipIn)

### 3. Dynamic Initial State

```typescript
const initial: Record<string, number> = {
  ...initialRotation,
};

if (withFade) {
  initial.opacity = 0;
}
```

**What it does:**

- Starts with rotation values (e.g., `{ rotateX: 90, rotateY: 0 }`)
- Conditionally adds `opacity: 0` if `withFade` is true
- Spreads rotation object for flexibility

### 4. Dynamic Animate State

```typescript
const animate: Record<string, number> = {
  rotateX: 0,
  rotateY: 0,
};

if (withFade) {
  animate.opacity = 1;
}
```

**What it does:**

- Ends with `rotateX: 0` and `rotateY: 0` (normal rotation)
- Conditionally animates `opacity: 1` if `withFade` is true
- Always sets both axes to 0 (ensures clean final state)

### 5. Perspective Container

```typescript
<div
  style={{
    perspective,
    transformStyle: 'preserve-3d',
  }}
  className={className}
>
  <motion.div
    // ...
    style={{
      transformStyle: 'preserve-3d',
    }}
  >
    {children}
  </motion.div>
</div>
```

**Breaking it down:**

**`perspective: 1000`**

- Creates 3D perspective (depth)
- Higher values = less dramatic (more distant)
- Lower values = more dramatic (closer)
- Default: 1000px

**`transformStyle: 'preserve-3d'`**

- Preserves 3D transforms
- Required for 3D rotations to work
- Applied to both container and motion element

**Why two elements?**

- Outer `div`: Provides perspective context
- Inner `motion.div`: Performs the actual rotation
- Both need `preserve-3d` for 3D to work

---

## Core Concepts Deep Dive

### 1. CSS 3D Transforms

**3D transforms create depth and perspective.**

```typescript
rotateX: 90; // Rotate around X-axis (horizontal)
rotateY: 90; // Rotate around Y-axis (vertical)
rotateZ: 90; // Rotate around Z-axis (depth, not used)
```

**How it works:**

- `rotateX`: Flips element vertically (like a card)
- `rotateY`: Flips element horizontally (like a door)
- `rotateZ`: Spins element (not used in FlipIn)

**Visual:**

```
rotateX: 90° (horizontal flip):
    ┌───┐
    │   │  → Flips top to bottom
    └───┘

rotateY: 90° (vertical flip):
    ┌───┐
    │   │  → Flips left to right
    └───┘
```

### 2. Perspective

**`perspective` creates 3D depth.**

```typescript
perspective: 1000; // 1000px perspective
```

**How it works:**

- Creates a 3D viewing context
- Elements appear to have depth
- Higher values = less dramatic
- Lower values = more dramatic

**Values:**

- `500`: Very dramatic (close)
- `1000`: Balanced (default)
- `2000`: Subtle (distant)

### 3. Transform Style

**`transformStyle: 'preserve-3d'` preserves 3D transforms.**

```typescript
style={{ transformStyle: 'preserve-3d' }}
```

**Why it's needed:**

- Without it, 3D transforms flatten to 2D
- Required for `rotateX` and `rotateY` to work
- Must be on both container and element

### 4. Rotation Angles

**Angle controls flip amount.**

```typescript
angle: 90; // Quarter flip (default)
angle: 180; // Half flip (more dramatic)
angle: 45; // Small flip (subtle)
```

**Recommended:**

- **Subtle**: 45° - 60°
- **Medium**: 90° (default)
- **Dramatic**: 120° - 180°
- **Avoid**: > 180° (disorienting)

---

## How to Use

### Basic Usage

```tsx
import { FlipIn } from '@/components/animations';

<FlipIn>
  <Card>Content</Card>
</FlipIn>;
```

### Different Directions

```tsx
<FlipIn direction="horizontal">Horizontal flip</FlipIn>
<FlipIn direction="vertical">Vertical flip</FlipIn>
<FlipIn direction="both">Both ways</FlipIn>
```

### Different Angles

```tsx
<FlipIn angle={45}>Subtle flip</FlipIn>
<FlipIn angle={90}>Default flip</FlipIn>
<FlipIn angle={180}>Dramatic flip</FlipIn>
```

### Different Perspective

```tsx
<FlipIn perspective={500}>Dramatic depth</FlipIn>
<FlipIn perspective={1000}>Default depth</FlipIn>
<FlipIn perspective={2000}>Subtle depth</FlipIn>
```

### Flip Only (No Fade)

```tsx
<FlipIn withFade={false}>Flip without fade</FlipIn>
```

### Custom Easing

```tsx
<FlipIn easing="easeOut">Smooth flip (default)</FlipIn>
<FlipIn easing="bounce">Bouncy flip</FlipIn>
<FlipIn easing="spring">Springy flip</FlipIn>
```

### Complete Example

```tsx
export default function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <FlipIn direction="horizontal" delay={0}>
        <Card>Card 1</Card>
      </FlipIn>
      <FlipIn direction="vertical" delay={0.1}>
        <Card>Card 2</Card>
      </FlipIn>
      <FlipIn direction="horizontal" delay={0.2} angle={180}>
        <Card>Card 3</Card>
      </FlipIn>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Cards**

   ```tsx
   <FlipIn direction="horizontal">
     <ProductCard product={product} />
   </FlipIn>
   ```

2. **Modals**

   ```tsx
   <FlipIn direction="vertical" perspective={500}>
     <Modal>Content</Modal>
   </FlipIn>
   ```

3. **Interactive Elements**

   ```tsx
   <FlipIn direction="horizontal">
     <InteractiveCard />
   </FlipIn>
   ```

4. **Image Galleries**

   ```tsx
   <FlipIn direction="vertical">
     <GalleryImage src="image.jpg" />
   </FlipIn>
   ```

5. **Accordions**

   ```tsx
   <FlipIn direction="horizontal">
     <AccordionItem />
   </FlipIn>
   ```

### ❌ Avoid For:

1. **Large Content Blocks**

   - Can be disorienting
   - Use `FadeIn` instead

2. **Text-Heavy Content**

   - Distracting for reading
   - Use `FadeIn` or `TextReveal`

3. **Critical Information**

   - Users might miss during flip
   - Use static or subtle `FadeIn`

4. **Too Much Angle**

   - 180°+ is disorienting
   - Keep angles reasonable (45° - 180°)

---

## Common Pitfalls

### 1. ❌ Forgetting Perspective Container

```tsx
// ❌ BAD: No perspective (3D won't work)
<motion.div rotateX={90}>

// ✅ GOOD: Perspective container
<div style={{ perspective: 1000 }}>
  <motion.div rotateX={90}>
```

**Why it's bad:**

- 3D transforms need perspective context
- Without it, transforms flatten to 2D
- Flip effect won't work

### 2. ❌ Not Using preserve-3d

```tsx
// ❌ BAD: No preserve-3d (3D flattens)
<div style={{ perspective: 1000 }}>
  <motion.div>

// ✅ GOOD: preserve-3d on both
<div style={{ perspective: 1000, transformStyle: 'preserve-3d' }}>
  <motion.div style={{ transformStyle: 'preserve-3d' }}>
```

**Why it's bad:**

- 3D transforms flatten without `preserve-3d`
- Must be on both container and element
- Flip effect won't work

### 3. ❌ Too Much Angle

```tsx
// ❌ BAD: Excessive angle (disorienting)
<FlipIn angle={270}>Content</FlipIn>

// ✅ GOOD: Reasonable angle (smooth)
<FlipIn angle={90}>Content</FlipIn>
```

**Why it's bad:**

- Too much angle (270°+) is disorienting
- Hard to follow visually
- Feels unprofessional

**Recommended Range:**

- **Subtle**: 45° - 60°
- **Medium**: 90° (default)
- **Dramatic**: 120° - 180°
- **Avoid**: > 180°

### 4. ❌ Wrong Perspective Value

```tsx
// ❌ BAD: Too low (too dramatic)
<FlipIn perspective={100}>Content</FlipIn>

// ✅ GOOD: Balanced (smooth)
<FlipIn perspective={1000}>Content</FlipIn>
```

**Why it's bad:**

- Too low perspective (< 200) is too dramatic
- Too high perspective (> 3000) is too subtle
- Find balance for your use case

**Recommended Range:**

- **Dramatic**: 300 - 500
- **Medium**: 800 - 1200 (default: 1000)
- **Subtle**: 1500 - 2000

### 5. ❌ Using `animate` Instead of `whileInView`

```tsx
// ❌ BAD: Animates immediately, even if off-screen
<motion.div animate={animate}>

// ✅ GOOD: Animates when user scrolls to it
<motion.div whileInView={animate}>
```

**Why it's bad:**

- Wastes resources animating invisible elements
- User might miss the animation
- Poor performance

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MyFlipAnimationProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  angle?: number;
  perspective?: number;
}

export const MyFlipAnimation = ({
  children,
  direction = 'horizontal',
  angle = 90,
  perspective = 1000,
}: MyFlipAnimationProps) => {
  // Component logic
};
```

#### 2. **Calculate Rotation**

```typescript
const getInitialRotation = () => {
  if (direction === 'horizontal') {
    return { rotateX: angle, rotateY: 0 };
  } else {
    return { rotateX: 0, rotateY: angle };
  }
};

const initialRotation = getInitialRotation();
```

#### 3. **Set Up Initial State**

```typescript
const initial: Record<string, number> = {
  ...initialRotation,
  opacity: 0,
};
```

#### 4. **Set Up Animate State**

```typescript
const animate: Record<string, number> = {
  rotateX: 0,
  rotateY: 0,
  opacity: 1,
};
```

#### 5. **Create Perspective Container**

```typescript
return (
  <div
    style={{
      perspective,
      transformStyle: 'preserve-3d',
    }}
  >
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-100px' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  </div>
);
```

---

## Advanced Tips

### 1. **Different Perspectives for Different Effects**

```typescript
// Dramatic
perspective={500}  // Close, dramatic

// Balanced
perspective={1000}  // Default

// Subtle
perspective={2000}  // Distant, subtle
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <FlipIn direction="horizontal" delay={0.4}>
    <Card>Nested animations</Card>
  </FlipIn>
</FadeIn>
```

### 3. **Performance Optimization**

```typescript
// Use willChange for better performance
style={{
  transformStyle: 'preserve-3d',
  willChange: 'transform, opacity',
}}
```

### 4. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const initial = {
  ...initialRotation,
  opacity: prefersReducedMotion ? 1 : 0,
};

const animate = {
  rotateX: prefersReducedMotion ? 0 : 0,
  rotateY: prefersReducedMotion ? 0 : 0,
  opacity: 1,
};
```

### 5. **Different Angles for Different Directions**

```typescript
// Horizontal: 90° works well
direction="horizontal" angle={90}

// Vertical: 90° works well
direction="vertical" angle={90}

// Both: Smaller angle (45° - 60°)
direction="both" angle={45}
```

---

## Summary

**FlipIn** is a powerful component that:

- ✅ Creates dramatic 3D flip effects with perspective
- ✅ Supports 3 flip directions (horizontal, vertical, both)
- ✅ Uses CSS 3D transforms for true depth
- ✅ Requires perspective container and preserve-3d
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Always use perspective container for 3D effects
2. Use `transformStyle: 'preserve-3d'` on both elements
3. Keep angles between 45° - 180° for best results
4. Use perspective values between 500 - 2000
5. Use `whileInView` for scroll-triggered animations
6. Avoid excessive angles (> 180°)

**Next Steps:**

- Experiment with different perspectives
- Try different angles and directions
- Combine with other animations
- Test on different devices for performance

---

Happy animating! 🎉
