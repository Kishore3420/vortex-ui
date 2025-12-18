# ScaleIn Component - Complete Tutorial

## 📚 Table of Contents

1. [What is ScaleIn?](#what-is-scalein)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is ScaleIn?

**ScaleIn** makes elements grow into view from a smaller scale, creating a zoom-in effect. Perfect for buttons, cards, and interactive elements that need to grab attention. It's one of the most versatile animations, creating everything from subtle pop-ins to dramatic zoom effects.

### Visual Effect

- Elements start: **smaller scale** (default: 0.8 = 80% size) and optionally **invisible**
- Elements animate to: **full scale** (1.0 = 100% size) and **fully visible**
- Uses **transform: scale()** for GPU-accelerated performance
- Customizable **transform origin** for different scaling effects (center, corners, etc.)

---

## Visual Behavior

```
Initial State (hidden, scale=0.8):
┌─────────────────────────────────┐
│                                 │
│      [Element]                  │
│      ↑ 80% size, invisible      │
│      (smaller, faded)           │
└─────────────────────────────────┘

Animation:
Element grows and fades in

Final State (visible):
┌─────────────────────────────────┐
│  [Element]                      │
│  ↑ 100% size, fully visible     │
│  (normal size)                   │
└─────────────────────────────────┘
```

**With Different Transform Origins:**

```
Center (default):
    ┌─────┐
    │     │  ← Grows from center
    └─────┘

Top Left:
┌─────┐
│     │  ← Grows from top-left corner
│     │
└─────┘

Bottom Right:
    ┌─────┐
    │     │
    │     │  ← Grows from bottom-right corner
    └─────┘
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

- `motion` provides animated components (`motion.div`)
- `Easing` is the type for easing functions
- `ReactNode` is the type for children prop
- `EasingPreset` is imported from FadeIn for consistency

### 2. Easing Presets

```typescript
const easingPresets: Record<
  EasingPreset,
  Easing | [number, number, number, number]
> = {
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  linear: 'linear',
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.4, 0.25, 1],
  sharp: [0.4, 0, 0.2, 1],
  custom: [0.25, 0.4, 0.25, 1],
};
```

**What it does:**

- Defines preset easing functions (same as FadeIn for consistency)
- Default is `'bounce'` for ScaleIn (playful, attention-grabbing)
- Each preset creates different motion feel

**Why 'bounce' as default?**

- Scale animations benefit from bounce effect
- Makes elements feel more "alive"
- Draws attention effectively

### 3. Props Interface

```typescript
interface ScaleInProps {
  children: ReactNode; // Required: Content to animate
  delay?: number; // Optional: Initial delay before animation starts
  duration?: number; // Optional: Animation duration (default: 0.5s)
  scale?: number; // Optional: Starting scale (default: 0.8)
  className?: string; // Optional: Additional CSS classes
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean; // Optional: Enable/disable fade (default: true)
  transformOrigin?: string; // Optional: Transform origin (default: 'center')
}
```

**Key Props:**

- `scale`: Starting scale value (0.8 = 80% size, 0.5 = 50% size)
- `withFade`: Whether to fade in/out (default: true)
- `transformOrigin`: Where scaling happens from (center, corners, etc.)
- `easing`: Animation easing (default: 'bounce')

### 4. Dynamic Initial State

```typescript
const initial: Record<string, number> = {
  scale,
};

if (withFade) {
  initial.opacity = 0;
}
```

**What it does:**

- Starts with `scale` value (e.g., 0.8 = 80% size)
- Conditionally adds `opacity: 0` if `withFade` is true
- Uses dynamic object building for flexibility

**Why dynamic object?**

- Allows conditional properties
- More flexible than hardcoded objects
- Can disable fade without changing structure

**Visual:**

```
withFade=true:
  initial = { scale: 0.8, opacity: 0 }  // Small and invisible

withFade=false:
  initial = { scale: 0.8 }  // Small but visible
```

### 5. Dynamic Animate State

```typescript
const animate: Record<string, number> = {
  scale: 1,
};

if (withFade) {
  animate.opacity = 1;
}
```

**What it does:**

- Ends with `scale: 1` (100% size = normal size)
- Conditionally animates `opacity: 1` if `withFade` is true
- Matches initial state structure

**Why scale: 1?**

- `1` = 100% = normal size
- `0.5` = 50% size
- `2` = 200% size (larger than normal)

### 6. Easing Resolution

```typescript
const resolvedEasing: Easing | [number, number, number, number] = (() => {
  if (typeof easing === 'string' && easing in easingPresets) {
    return easingPresets[easing as EasingPreset];
  }
  return easing as Easing | [number, number, number, number];
})();
```

**What it does:**

- Resolves easing prop to actual easing value
- If string, looks up in presets
- If custom, uses directly
- Uses IIFE for clean resolution

### 7. Transform Origin

```typescript
style={{
  transformOrigin,
}}
```

**What it does:**

- Sets CSS `transform-origin` property
- Controls where scaling happens from
- Default: `'center'` (scales from center)

**Transform Origin Values:**

- `'center'` (default): Scales from center
- `'top left'`: Scales from top-left corner
- `'bottom right'`: Scales from bottom-right corner
- `'50% 50%'`: Custom percentage
- Any valid CSS transform-origin value

**Visual Example:**

```
transformOrigin: 'center'
    ┌─────┐
    │  •  │  ← Scales from center
    └─────┘

transformOrigin: 'top left'
┌─────┐
│ •   │  ← Scales from top-left
│     │
└─────┘
```

### 8. Motion Component

```typescript
<motion.div
  initial={initial}
  whileInView={animate}
  viewport={{
    once: true,
    margin: '-50px',
  }}
  transition={{
    duration,
    delay,
    ease: resolvedEasing,
  }}
  className={className}
  style={{
    transformOrigin,
  }}
>
  {children}
</motion.div>
```

**Breaking it down:**

- `initial`: Starting state (smaller scale, optionally invisible)
- `whileInView`: Animates when element enters viewport
- `viewport`: Controls when animation triggers
  - `once: true`: Animate only once
  - `margin: '-50px'`: Start 50px before visible
- `transition`: Animation timing and easing
- `style`: Transform origin for scaling direction

**Why `margin: '-50px'`?**

- Smaller than FadeIn's `-100px` because scale animations are quicker
- Starts slightly before visible for smooth entrance
- Creates anticipation

---

## Core Concepts Deep Dive

### 1. CSS Transform Scale

**`transform: scale()`** is GPU-accelerated and very performant.

```typescript
scale: 0.8; // 80% size
scale: 1.0; // 100% size (normal)
scale: 1.5; // 150% size (larger)
```

**How it works:**

- Scales element from its transform origin
- Maintains aspect ratio
- Uses GPU for smooth animation
- More performant than width/height changes

**Why GPU-accelerated?**

- `transform` properties use GPU
- Smooth 60fps animations
- Doesn't trigger layout reflow
- Better performance than animating width/height

### 2. Transform Origin

**Controls where scaling happens from.**

**Common Values:**

- `'center'`: Scales from center (default, most common)
- `'top left'`: Scales from top-left (good for dropdowns)
- `'bottom right'`: Scales from bottom-right (good for tooltips)
- `'50% 50%'`: Custom center point

**Visual Impact:**

```
Center: Element grows equally in all directions
Top Left: Element grows down and to the right
Bottom Right: Element grows up and to the left
```

### 3. Scale Values

**Scale is a multiplier:**

- `0.5` = 50% size (half size)
- `0.8` = 80% size (default, subtle)
- `1.0` = 100% size (normal)
- `1.5` = 150% size (larger)

**Recommended Ranges:**

- **Subtle**: 0.9 - 0.95 (barely noticeable)
- **Medium**: 0.7 - 0.8 (default, noticeable)
- **Dramatic**: 0.3 - 0.5 (very noticeable)
- **Extreme**: 0.1 - 0.2 (too much, usually)

### 4. Combining Scale + Fade

**Scale and fade together create smooth reveals.**

```typescript
withFade: true; // Scale + fade
withFade: false; // Scale only
```

**Why combine?**

- Fade adds smoothness
- Scale adds emphasis
- Together: Professional, polished effect
- Separately: Scale-only can feel abrupt

---

## How to Use

### Basic Usage

```tsx
import { ScaleIn } from '@/components/animations';

<ScaleIn>
  <div>This will scale in</div>
</ScaleIn>;
```

### Different Scale Values

```tsx
<ScaleIn scale={0.5}>Dramatic zoom (50%)</ScaleIn>
<ScaleIn scale={0.8}>Default zoom (80%)</ScaleIn>
<ScaleIn scale={0.9}>Subtle zoom (90%)</ScaleIn>
```

### Different Transform Origins

```tsx
<ScaleIn transformOrigin="center">Center (default)</ScaleIn>
<ScaleIn transformOrigin="top left">Top-left corner</ScaleIn>
<ScaleIn transformOrigin="bottom right">Bottom-right corner</ScaleIn>
<ScaleIn transformOrigin="50% 30%">Custom position</ScaleIn>
```

### Scale Only (No Fade)

```tsx
<ScaleIn withFade={false}>Scale without fade</ScaleIn>
```

### Custom Easing

```tsx
<ScaleIn easing="bounce">Bouncy (default)</ScaleIn>
<ScaleIn easing="spring">Springy</ScaleIn>
<ScaleIn easing="smooth">Smooth</ScaleIn>
<ScaleIn easing={[0.68, -0.55, 0.265, 1.55]}>Custom</ScaleIn>
```

### Custom Duration and Delay

```tsx
<ScaleIn duration={0.3}>Fast</ScaleIn>
<ScaleIn duration={1.0}>Slow</ScaleIn>
<ScaleIn delay={0.5}>Delayed start</ScaleIn>
```

### Complete Example

```tsx
export default function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ScaleIn delay={0} scale={0.7}>
        <Card>Card 1</Card>
      </ScaleIn>
      <ScaleIn delay={0.1} scale={0.7}>
        <Card>Card 2</Card>
      </ScaleIn>
      <ScaleIn delay={0.2} scale={0.7}>
        <Card>Card 3</Card>
      </ScaleIn>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Buttons**

   ```tsx
   <ScaleIn scale={0.9}>
     <button>Click Me</button>
   </ScaleIn>
   ```

2. **Cards**

   ```tsx
   <ScaleIn scale={0.8}>
     <ProductCard product={product} />
   </ScaleIn>
   ```

3. **Icons**

   ```tsx
   <ScaleIn scale={0.5} transformOrigin="center">
     <Icon name="star" />
   </ScaleIn>
   ```

4. **Modals/Dialogs**

   ```tsx
   <ScaleIn scale={0.8} transformOrigin="center">
     <Modal>Content</Modal>
   </ScaleIn>
   ```

5. **Tooltips**

   ```tsx
   <ScaleIn scale={0.9} transformOrigin="bottom right">
     <Tooltip>Help text</Tooltip>
   </ScaleIn>
   ```

6. **Badges/Notifications**

   ```tsx
   <ScaleIn scale={0.5} easing="bounce">
     <Badge>New</Badge>
   </ScaleIn>
   ```

### ❌ Avoid For:

1. **Large Content Blocks**

   - Can feel slow or overwhelming
   - Use `FadeIn` instead

2. **Text-Heavy Content**

   - Distracting for reading
   - Use `FadeIn` or `TextReveal`

3. **Critical Information**

   - Users might miss during animation
   - Use static or subtle `FadeIn`

---

## Common Pitfalls

### 1. ❌ Too Dramatic Scale

```tsx
// ❌ BAD: Too small (hard to see, jarring)
<ScaleIn scale={0.1}>Content</ScaleIn>

// ✅ GOOD: Balanced (noticeable but smooth)
<ScaleIn scale={0.8}>Content</ScaleIn>
```

**Why it's bad:**

- Too small scale (0.1) is jarring
- Hard to see during animation
- Feels unprofessional

**Recommended Range:**

- **Subtle**: 0.9 - 0.95
- **Medium**: 0.7 - 0.8 (default)
- **Dramatic**: 0.5 - 0.6
- **Avoid**: < 0.3

### 2. ❌ Forgetting Transform Origin

```tsx
// ❌ BAD: Might scale from wrong point
<ScaleIn>
  <DropdownMenu />
</ScaleIn>

// ✅ GOOD: Scale from appropriate origin
<ScaleIn transformOrigin="top left">
  <DropdownMenu />
</ScaleIn>
```

**Why it's bad:**

- Default `center` might not be appropriate
- Dropdowns should scale from top-left
- Tooltips should scale from bottom-right

### 3. ❌ Not Using GPU-Accelerated Transforms

```tsx
// ❌ BAD: Animating width/height (not GPU-accelerated)
// Don't do this - use scale instead

// ✅ GOOD: Using transform: scale() (GPU-accelerated)
<ScaleIn scale={0.8}>Content</ScaleIn>
```

**Why it's bad:**

- Width/height changes trigger layout reflow
- Not GPU-accelerated
- Poor performance

### 4. ❌ Too Fast or Too Slow Duration

```tsx
// ❌ BAD: Too fast (jarring)
<ScaleIn duration={0.1}>Content</ScaleIn>

// ❌ BAD: Too slow (feels sluggish)
<ScaleIn duration={2}>Content</ScaleIn>

// ✅ GOOD: Balanced (smooth)
<ScaleIn duration={0.5}>Content</ScaleIn>
```

**Recommended Range:**

- **Fast**: 0.3 - 0.4s (snappy)
- **Medium**: 0.5 - 0.6s (balanced, default)
- **Slow**: 0.8 - 1.0s (dramatic)

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

### 6. ❌ Not Handling Edge Cases

```tsx
// ❌ BAD: No handling for scale=0 or scale<0
const initial = { scale };

// ✅ GOOD: Validate scale value
const initial = { scale: Math.max(0, Math.min(scale, 2)) };
```

**Why it's bad:**

- Scale 0 makes element invisible
- Negative scale flips element
- Scale > 2 might be too large

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MyScaleAnimationProps {
  children: ReactNode;
  scale?: number;
  withFade?: boolean;
  transformOrigin?: string;
}

export const MyScaleAnimation = ({
  children,
  scale = 0.8,
  withFade = true,
  transformOrigin = 'center',
}: MyScaleAnimationProps) => {
  // Component logic
};
```

#### 2. **Set Up Initial State**

```typescript
const initial: Record<string, number> = {
  scale,
};

if (withFade) {
  initial.opacity = 0;
}
```

#### 3. **Set Up Animate State**

```typescript
const animate: Record<string, number> = {
  scale: 1,
};

if (withFade) {
  animate.opacity = 1;
}
```

#### 4. **Create Motion Element**

```typescript
return (
  <motion.div
    initial={initial}
    whileInView={animate}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: 'bounce' }}
    style={{ transformOrigin }}
  >
    {children}
  </motion.div>
);
```

---

## Advanced Tips

### 1. **Custom Transform Origins**

```typescript
// Different origins for different effects
transformOrigin = 'center'; // Default, balanced
transformOrigin = 'top left'; // Dropdowns, menus
transformOrigin = 'bottom right'; // Tooltips, popovers
transformOrigin = '50% 30%'; // Custom position
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <ScaleIn scale={0.8} delay={0.4}>
    <Card>Nested animations</Card>
  </ScaleIn>
</FadeIn>
```

### 3. **Staggered Scale Animations**

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id} withScale scale={0.7}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 4. **Performance Optimization**

```typescript
// Use willChange for better performance
style={{
  transformOrigin,
  willChange: 'transform, opacity',
}}
```

### 5. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const initial = {
  scale: prefersReducedMotion ? 1 : scale,
  opacity: prefersReducedMotion ? 1 : 0,
};
```

### 6. **Different Easing for Different Scales**

```typescript
// Smaller scale = more bounce
const easing = scale < 0.5 ? 'bounce' : 'smooth';
```

---

## Summary

**ScaleIn** is a powerful component that:

- ✅ Creates zoom-in effects with GPU-accelerated transforms
- ✅ Supports customizable transform origins
- ✅ Can combine scale with fade for smooth reveals
- ✅ Uses bounce easing by default for playful feel
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Use `transform: scale()` for GPU-accelerated performance
2. Choose appropriate transform origin for context
3. Keep scale between 0.5 - 0.9 for best results
4. Combine with fade for smoother reveals
5. Use `whileInView` for scroll-triggered animations
6. Consider context when choosing transform origin

**Next Steps:**

- Experiment with different scale values
- Try different transform origins
- Combine with other animations
- Test on different devices for performance

---

Happy animating! 🎉
