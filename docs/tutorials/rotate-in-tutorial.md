# RotateIn Component - Complete Tutorial

## 📚 Table of Contents

1. [What is RotateIn?](#what-is-rotatein)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is RotateIn?

**RotateIn** rotates elements into view with 2D rotation. Elements spin into position, creating dynamic, eye-catching entrances. Perfect for cards, icons, and interactive elements that need a playful, energetic feel.

### Visual Effect

- Elements start: **rotated** (default: 180°) and optionally **invisible/scaled**
- Elements animate to: **normal rotation** (0°) and **fully visible**
- Supports **3 directions**: clockwise, counterclockwise, both
- Can combine with **fade and scale** for complex effects
- Uses **2D rotation** (rotateZ) for smooth spinning motion

---

## Visual Behavior

```
Initial State (hidden, direction="clockwise", angle=180):
┌─────────────────────────────────┐
│                                 │
│      [Element]                  │
│      ↑ Rotated 180°, invisible  │
│      (spinning in)              │
└─────────────────────────────────┘

Animation:
Element rotates and fades in

Final State (visible):
┌─────────────────────────────────┐
│  [Element]                      │
│  ↑ Normal rotation, visible     │
│  (0° rotation)                   │
└─────────────────────────────────┘
```

**Rotation Directions:**

```
Clockwise (180°):
    ┌───┐
    │   │  → Rotates clockwise
    └───┘

Counterclockwise (180°):
    ┌───┐
    │   │  ← Rotates counter-clockwise
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
- Default is `'easeOut'` for RotateIn (smooth, natural)
- Each preset creates different motion feel

### 3. Props Interface

```typescript
interface RotateInProps {
  children: ReactNode; // Required: Content to animate
  direction?: 'clockwise' | 'counterclockwise' | 'both'; // Optional: Rotation direction
  angle?: number; // Optional: Rotation angle in degrees (default: 180)
  delay?: number; // Optional: Initial delay before animation starts
  duration?: number; // Optional: Animation duration (default: 0.6s)
  className?: string; // Optional: Additional CSS classes
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withFade?: boolean; // Optional: Enable/disable fade (default: true)
  withScale?: boolean; // Optional: Enable/disable scale (default: false)
  scale?: number; // Optional: Starting scale if withScale is true (default: 0.8)
}
```

**Key Props:**

- `direction`: Rotation direction (clockwise, counterclockwise, both)
- `angle`: Rotation angle in degrees (180° = half rotation, 360° = full spin)
- `withFade`: Whether to fade in/out (default: true)
- `withScale`: Whether to scale while rotating (default: false)

### 4. Rotation Calculation

```typescript
const getInitialRotation = () => {
  const baseAngle = angle;
  switch (direction) {
    case 'clockwise':
      return baseAngle;
    case 'counterclockwise':
      return -baseAngle;
    case 'both':
      return baseAngle;
    default:
      return baseAngle;
  }
};

const initialRotation = getInitialRotation();
```

**What it does:**

- Calculates initial rotation based on direction
- `clockwise`: Positive angle (e.g., 180°)
- `counterclockwise`: Negative angle (e.g., -180°)
- `both`: Positive angle (rotates both ways during animation)

**Why negative for counterclockwise?**

- Positive angles = clockwise rotation
- Negative angles = counter-clockwise rotation
- CSS rotation: positive = clockwise, negative = counter-clockwise

### 5. Dynamic Initial State

```typescript
const initial: Record<string, number | string> = {
  rotate: initialRotation,
};

if (withFade) {
  initial.opacity = 0;
}

if (withScale) {
  initial.scale = scale;
}
```

**What it does:**

- Starts with `rotate` value (e.g., 180°)
- Conditionally adds `opacity: 0` if `withFade` is true
- Conditionally adds `scale` if `withScale` is true
- Uses dynamic object building for flexibility

**Visual:**

```
withFade=true, withScale=false:
  initial = { rotate: 180, opacity: 0 }  // Rotated and invisible

withFade=true, withScale=true:
  initial = { rotate: 180, opacity: 0, scale: 0.8 }  // Rotated, invisible, small

withFade=false, withScale=false:
  initial = { rotate: 180 }  // Rotated but visible
```

### 6. Dynamic Animate State

```typescript
const animate: Record<string, number> = {
  rotate: 0,
};

if (withFade) {
  animate.opacity = 1;
}

if (withScale) {
  animate.scale = 1;
}
```

**What it does:**

- Ends with `rotate: 0` (normal rotation = no rotation)
- Conditionally animates `opacity: 1` if `withFade` is true
- Conditionally animates `scale: 1` if `withScale` is true
- Matches initial state structure

### 7. Transform Origin

```typescript
style={{
  transformOrigin: 'center',
}}
```

**What it does:**

- Sets CSS `transform-origin` to `'center'`
- Ensures rotation happens around center point
- Critical for proper rotation behavior

**Why 'center'?**

- Elements should rotate around their center
- Other origins create weird spinning effects
- Center is most natural for rotation

### 8. Motion Component

```typescript
<motion.div
  initial={initial}
  whileInView={animate}
  viewport={{
    once: true,
    margin: '-100px',
  }}
  transition={{
    duration,
    delay,
    ease: resolvedEasing,
  }}
  className={className}
  style={{
    transformOrigin: 'center',
  }}
>
  {children}
</motion.div>
```

**Breaking it down:**

- `initial`: Starting state (rotated, optionally invisible/scaled)
- `whileInView`: Animates when element enters viewport
- `viewport`: Controls when animation triggers
  - `once: true`: Animate only once
  - `margin: '-100px'`: Start 100px before visible
- `transition`: Animation timing and easing
- `style`: Transform origin for rotation center

---

## Core Concepts Deep Dive

### 1. CSS Rotation

**`transform: rotate()`** rotates elements around a point.

```typescript
rotate: 180  // 180 degrees (half rotation)
rotate: 360  // 360 degrees (full rotation)
rotate: 90   // 90 degrees (quarter rotation)
```

**How it works:**

- Rotates element around its transform origin
- Positive values = clockwise
- Negative values = counter-clockwise
- Uses GPU for smooth animation

**Rotation Angles:**

- `90°`: Quarter turn
- `180°`: Half turn (default)
- `270°`: Three-quarter turn
- `360°`: Full spin

### 2. Rotation Directions

**Three directions create different visual effects:**

**Clockwise:**

```typescript
direction: 'clockwise'
rotate: 180  // Positive angle
```

- Rotates clockwise (right)
- Most common direction
- Natural, expected motion

**Counterclockwise:**

```typescript
direction: 'counterclockwise'
rotate: -180  // Negative angle
```

- Rotates counter-clockwise (left)
- Alternative direction
- Creates different visual flow

**Both:**

```typescript
direction: 'both'
rotate: 180  // Rotates both ways during animation
```

- Rotates in both directions
- More complex motion
- Use sparingly

### 3. Combining Effects

**Rotate can combine with fade and scale:**

**Rotate + Fade:**

```typescript
withFade: true  // Rotate and fade
```

- Element rotates while fading in
- Smooth, professional effect
- Most common combination

**Rotate + Scale:**

```typescript
withScale: true, scale: 0.8  // Rotate and scale
```

- Element rotates while scaling
- More dramatic effect
- Use for emphasis

**Rotate + Fade + Scale:**

```typescript
withFade: true, withScale: true, scale: 0.5
```

- All three effects combined
- Very dramatic
- Use sparingly (can be overwhelming)

### 4. Transform Origin

**Critical for proper rotation:**

```typescript
transformOrigin: 'center'  // Rotate around center
```

**Why center?**

- Elements should rotate around their center
- Other origins create weird effects
- Center is most natural

**Other origins (usually not recommended):**

- `'top left'`: Rotates around corner (weird)
- `'bottom right'`: Rotates around corner (weird)
- `'center'`: Rotates around center (correct)

---

## How to Use

### Basic Usage

```tsx
import { RotateIn } from '@/components/animations';

<RotateIn>
  <div>This will rotate in</div>
</RotateIn>
```

### Different Directions

```tsx
<RotateIn direction="clockwise">Clockwise</RotateIn>
<RotateIn direction="counterclockwise">Counter-clockwise</RotateIn>
<RotateIn direction="both">Both ways</RotateIn>
```

### Different Angles

```tsx
<RotateIn angle={90}>Quarter turn</RotateIn>
<RotateIn angle={180}>Half turn (default)</RotateIn>
<RotateIn angle={360}>Full spin</RotateIn>
```

### Rotate + Scale

```tsx
<RotateIn withScale scale={0.5}>
  Rotate and scale
</RotateIn>
```

### Rotate Only (No Fade)

```tsx
<RotateIn withFade={false}>Rotate without fade</RotateIn>
```

### Custom Easing

```tsx
<RotateIn easing="bounce">Bouncy rotation</RotateIn>
<RotateIn easing="spring">Springy rotation</RotateIn>
<RotateIn easing="easeOut">Smooth rotation (default)</RotateIn>
```

### Complete Example

```tsx
export default function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <RotateIn direction="clockwise" delay={0}>
        <Card>Card 1</Card>
      </RotateIn>
      <RotateIn direction="counterclockwise" delay={0.1}>
        <Card>Card 2</Card>
      </RotateIn>
      <RotateIn direction="clockwise" delay={0.2} easing="bounce">
        <Card>Card 3</Card>
      </RotateIn>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Cards**

   ```tsx
   <RotateIn direction="clockwise" angle={180}>
     <ProductCard product={product} />
   </RotateIn>
   ```

2. **Icons**

   ```tsx
   <RotateIn angle={360} easing="bounce">
     <Icon name="star" />
   </RotateIn>
   ```

3. **Buttons**

   ```tsx
   <RotateIn angle={90}>
     <button>Click Me</button>
   </RotateIn>
   ```

4. **Badges**

   ```tsx
   <RotateIn angle={180} easing="bounce">
     <Badge>New</Badge>
   </RotateIn>
   ```

5. **Interactive Elements**

   ```tsx
   <RotateIn direction="counterclockwise">
     <InteractiveCard />
   </RotateIn>
   ```

### ❌ Avoid For:

1. **Large Content Blocks**

   - Can be disorienting
   - Use `FadeIn` instead

2. **Text-Heavy Content**

   - Distracting for reading
   - Use `FadeIn` or `TextReveal`

3. **Critical Information**

   - Users might miss during rotation
   - Use static or subtle `FadeIn`

4. **Too Much Rotation**

   - 720°+ is excessive
   - Keep angles reasonable (90° - 360°)

---

## Common Pitfalls

### 1. ❌ Too Much Rotation

```tsx
// ❌ BAD: Excessive rotation (disorienting)
<RotateIn angle={720}>Content</RotateIn>

// ✅ GOOD: Reasonable rotation (noticeable but smooth)
<RotateIn angle={180}>Content</RotateIn>
```

**Why it's bad:**

- Too much rotation (720°+) is disorienting
- Hard to follow visually
- Feels unprofessional

**Recommended Range:**

- **Subtle**: 45° - 90°
- **Medium**: 90° - 180° (default)
- **Dramatic**: 180° - 360°
- **Avoid**: > 360°

### 2. ❌ Wrong Transform Origin

```tsx
// ❌ BAD: Rotates around corner (weird)
<RotateIn style={{ transformOrigin: 'top left' }}>
  Content
</RotateIn>

// ✅ GOOD: Rotates around center (natural)
<RotateIn style={{ transformOrigin: 'center' }}>
  Content
</RotateIn>
```

**Why it's bad:**

- Rotating around corners creates weird effects
- Elements spin off-center
- Looks unprofessional

### 3. ❌ Combining Too Many Effects

```tsx
// ❌ BAD: Too many effects (overwhelming)
<RotateIn withFade withScale scale={0.3} angle={360}>
  Content
</RotateIn>

// ✅ GOOD: Balanced effects (smooth)
<RotateIn withFade angle={180}>
  Content
</RotateIn>
```

**Why it's bad:**

- Too many simultaneous effects
- Overwhelming for users
- Hard to focus on content

### 4. ❌ Not Using GPU-Accelerated Transforms

```tsx
// ❌ BAD: Animating with JavaScript (not GPU-accelerated)
// Don't do this - use transform: rotate() instead

// ✅ GOOD: Using transform: rotate() (GPU-accelerated)
<RotateIn angle={180}>Content</RotateIn>
```

**Why it's bad:**

- JavaScript animations not GPU-accelerated
- Poor performance
- Not smooth

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

interface MyRotateAnimationProps {
  children: ReactNode;
  direction?: 'clockwise' | 'counterclockwise';
  angle?: number;
  withFade?: boolean;
}

export const MyRotateAnimation = ({
  children,
  direction = 'clockwise',
  angle = 180,
  withFade = true,
}: MyRotateAnimationProps) => {
  // Component logic
};
```

#### 2. **Calculate Rotation**

```typescript
const getInitialRotation = () => {
  return direction === 'clockwise' ? angle : -angle;
};

const initialRotation = getInitialRotation();
```

#### 3. **Set Up Initial State**

```typescript
const initial: Record<string, number> = {
  rotate: initialRotation,
};

if (withFade) {
  initial.opacity = 0;
}
```

#### 4. **Set Up Animate State**

```typescript
const animate: Record<string, number> = {
  rotate: 0,
};

if (withFade) {
  animate.opacity = 1;
}
```

#### 5. **Create Motion Element**

```typescript
return (
  <motion.div
    initial={initial}
    whileInView={animate}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    style={{ transformOrigin: 'center' }}
  >
    {children}
  </motion.div>
);
```

---

## Advanced Tips

### 1. **Different Angles for Different Effects**

```typescript
// Subtle
angle={45}  // Small rotation

// Medium
angle={180}  // Half rotation (default)

// Dramatic
angle={360}  // Full spin
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <RotateIn angle={180} delay={0.4}>
    <Card>Nested animations</Card>
  </RotateIn>
</FadeIn>
```

### 3. **Staggered Rotations**

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item, index) => (
    <RotateIn
      key={item.id}
      direction={index % 2 === 0 ? 'clockwise' : 'counterclockwise'}
      delay={0}
    >
      <Card>{item.content}</Card>
    </RotateIn>
  ))}
</StaggerContainer>
```

### 4. **Performance Optimization**

```typescript
// Use willChange for better performance
style={{
  transformOrigin: 'center',
  willChange: 'transform, opacity',
}}
```

### 5. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const initial = {
  rotate: prefersReducedMotion ? 0 : initialRotation,
  opacity: prefersReducedMotion ? 1 : 0,
};
```

### 6. **Different Easing for Different Angles**

```typescript
// Small angles = smooth
const easing = angle < 90 ? 'smooth' : 'easeOut';

// Large angles = bounce
const easing = angle >= 360 ? 'bounce' : 'easeOut';
```

---

## Summary

**RotateIn** is a powerful component that:

- ✅ Creates dynamic rotation effects with 2D rotation
- ✅ Supports 3 rotation directions (clockwise, counterclockwise, both)
- ✅ Can combine with fade and scale for complex effects
- ✅ Uses GPU-accelerated transforms for smooth performance
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Use `transform: rotate()` for GPU-accelerated performance
2. Keep angles between 90° - 360° for best results
3. Always use `transformOrigin: 'center'` for proper rotation
4. Combine with fade for smoother reveals
5. Use `whileInView` for scroll-triggered animations
6. Avoid excessive rotation (> 360°)

**Next Steps:**

- Experiment with different angles
- Try different directions
- Combine with other animations
- Test on different devices for performance

---

Happy animating! 🎉
