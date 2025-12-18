# BlurIn Component - Complete Tutorial

## 📚 Table of Contents

1. [What is BlurIn?](#what-is-blurin)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is BlurIn?

**BlurIn** creates a modern focus effect using CSS blur filters. Elements start blurred and gradually sharpen into view, perfect for image reveals, card animations, and glassmorphism effects. It's one of the most sophisticated animations, using Framer Motion's advanced motion value system.

### Visual Effect

- Elements start: **blurred** (default: 10px) and optionally **invisible**
- Elements animate to: **sharp** (0px blur) and **fully visible**
- Uses **CSS filter: blur()** for the effect
- Uses **Framer Motion's useMotionValue and useTransform** for smooth filter animation
- Creates a "focus" effect as if a camera is focusing on the element

---

## Visual Behavior

```
Initial State (hidden, blur=10px):
┌─────────────────────────────────┐
│                                 │
│  [Element]                      │
│  ↑ Blurred (10px), invisible    │
│  (out of focus)                 │
└─────────────────────────────────┘

Animation:
Element sharpens and fades in

Final State (visible):
┌─────────────────────────────────┐
│  [Element]                      │
│  ↑ Sharp (0px blur), visible    │
│  (in focus)                     │
└─────────────────────────────────┘
```

**Blur Amounts:**

```
10px blur:  Slightly blurred (default)
20px blur:  Moderately blurred
30px blur:  Heavily blurred
0px blur:   Sharp (final state)
```

---

## Line-by-Line Code Explanation

### 1. Component Setup

```typescript
'use client';
```

**Why:** Next.js requires `'use client'` for components that use React hooks or browser APIs. Framer Motion needs client-side JavaScript.

```typescript
import {
  Easing,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { ReactNode } from 'react';
import type { EasingPreset } from './FadeIn';
```

**Why:**

- `motion` provides animated components
- `useMotionValue` creates reactive motion values
- `useTransform` transforms motion values
- `animate` animates motion values
- `Easing` is the type for easing functions

### 2. Motion Value System

```typescript
const blurValue = useMotionValue(blur);
const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
```

**What it does:**

**`useMotionValue(blur)`**

- Creates a reactive motion value starting at `blur` (e.g., 10)
- This value can be animated independently
- More performant than animating CSS directly

**`useTransform(blurValue, (value) => \`blur(${value}px)\`)`**

- Transforms the numeric blur value into a CSS filter string
- `blurValue: 10` → `blurFilter: "blur(10px)"`
- `blurValue: 0` → `blurFilter: "blur(0px)"`
- Updates automatically when `blurValue` changes

**Why useMotionValue + useTransform?**

- More performant than animating CSS directly
- Allows independent animation of blur
- Can be combined with other motion values
- Better control over animation timing

### 3. Dynamic Initial State

```typescript
const initial: Record<string, number> = {};

if (withFade) {
  initial.opacity = 0;
}
```

**What it does:**

- Starts with empty object (no initial state for blur)
- Conditionally adds `opacity: 0` if `withFade` is true
- Blur is handled separately via motion value

**Why no initial blur in state?**

- Blur is controlled via motion value, not state
- Motion value is set directly in style
- More performant approach

### 4. Animate State

```typescript
whileInView={{
  opacity: withFade ? 1 : undefined,
}}
```

**What it does:**

- Animates opacity to 1 if `withFade` is true
- Blur is animated separately via `onViewportEnter`

**Why separate blur animation?**

- Blur uses motion value system
- Needs to be animated via `animate()` function
- More control over timing

### 5. Style with Filter

```typescript
style={{
  willChange: 'filter, opacity',
  filter: blurFilter,
}}
```

**What it does:**

**`willChange: 'filter, opacity'`**

- Hints to browser to optimize for filter and opacity changes
- Improves performance
- Prepares browser for animation

**`filter: blurFilter`**

- Applies the CSS filter
- `blurFilter` is the transformed motion value
- Updates automatically when `blurValue` changes

### 6. Viewport Enter Handler

```typescript
onViewportEnter={() => {
  animate(blurValue, 0, {
    duration,
    delay,
    ease: resolvedEasing,
  });
}}
```

**What it does:**

- When element enters viewport, animates `blurValue` from current (blur) to 0
- Uses `animate()` function to animate motion value
- Respects `duration`, `delay`, and `easing` props

**Why `onViewportEnter`?**

- Blur animation needs to be triggered manually
- Motion values don't auto-animate with `whileInView`
- Gives precise control over when blur animation starts

**Animation Flow:**

```
1. Element enters viewport
2. onViewportEnter fires
3. animate(blurValue, 0) starts
4. blurValue animates: 10 → 0
5. blurFilter updates: "blur(10px)" → "blur(0px)"
6. Element sharpens
```

---

## Core Concepts Deep Dive

### 1. Motion Values

**`useMotionValue`** creates reactive values that can be animated.

```typescript
const blurValue = useMotionValue(10); // Start at 10
```

**Properties:**

- Reactive: Updates trigger re-renders
- Performant: Optimized for animations
- Independent: Can be animated separately
- Transformable: Can be transformed with `useTransform`

**Why use motion values?**

- More performant than state
- Can be animated independently
- Better for continuous animations
- Optimized for 60fps

### 2. Transform

**`useTransform`** transforms motion values.

```typescript
const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
```

**How it works:**

- Takes source motion value (`blurValue`)
- Applies transform function
- Returns new reactive value (`blurFilter`)
- Updates automatically when source changes

**Example:**

```
blurValue: 10 → blurFilter: "blur(10px)"
blurValue: 5  → blurFilter: "blur(5px)"
blurValue: 0  → blurFilter: "blur(0px)"
```

### 3. Animate Function

**`animate()`** animates motion values.

```typescript
animate(blurValue, 0, { duration, delay, ease });
```

**Parameters:**

- `blurValue`: Motion value to animate
- `0`: Target value
- `{ duration, delay, ease }`: Animation config

**Why use `animate()`?**

- Direct control over motion value animation
- Can be triggered manually
- More flexible than `transition` prop

### 4. CSS Filter Blur

**`filter: blur()`** applies blur effect.

```css
filter: blur(10px); /* 10px blur */
filter: blur(0px); /* No blur (sharp) */
```

**How it works:**

- Blurs element using Gaussian blur
- Higher values = more blur
- 0 = no blur (sharp)
- Uses GPU for performance

**Performance:**

- GPU-accelerated
- Smooth 60fps animations
- `willChange: 'filter'` optimizes further

---

## How to Use

### Basic Usage

```tsx
import { BlurIn } from '@/components/animations';

<BlurIn>
  <img src="image.jpg" alt="Image" />
</BlurIn>;
```

### Different Blur Amounts

```tsx
<BlurIn blur={5}>Subtle blur (5px)</BlurIn>
<BlurIn blur={10}>Default blur (10px)</BlurIn>
<BlurIn blur={20}>Heavy blur (20px)</BlurIn>
```

### Blur Only (No Fade)

```tsx
<BlurIn withFade={false}>Blur without fade</BlurIn>
```

### Custom Easing

```tsx
<BlurIn easing="smooth">Smooth focus (default)</BlurIn>
<BlurIn easing="easeOut">Ease out focus</BlurIn>
<BlurIn easing={[0.33, 1, 0.68, 1]}>Custom easing</BlurIn>
```

### Custom Duration and Delay

```tsx
<BlurIn duration={0.3}>Fast focus</BlurIn>
<BlurIn duration={1.0}>Slow focus</BlurIn>
<BlurIn delay={0.5}>Delayed focus</BlurIn>
```

### Complete Example

```tsx
export default function ImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <BlurIn blur={15} delay={0}>
        <img src="image1.jpg" alt="Image 1" />
      </BlurIn>
      <BlurIn blur={15} delay={0.1}>
        <img src="image2.jpg" alt="Image 2" />
      </BlurIn>
      <BlurIn blur={15} delay={0.2}>
        <img src="image3.jpg" alt="Image 3" />
      </BlurIn>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Images**

   ```tsx
   <BlurIn blur={10}>
     <img src="hero.jpg" alt="Hero" />
   </BlurIn>
   ```

2. **Cards**

   ```tsx
   <BlurIn blur={15}>
     <ProductCard product={product} />
   </BlurIn>
   ```

3. **Glassmorphism Effects**

   ```tsx
   <BlurIn blur={20} withFade={false}>
     <GlassCard>Content</GlassCard>
   </BlurIn>
   ```

4. **Hero Sections**

   ```tsx
   <BlurIn blur={10} delay={0.2}>
     <HeroContent />
   </BlurIn>
   ```

5. **Background Images**

   ```tsx
   <BlurIn blur={5}>
     <BackgroundImage />
   </BlurIn>
   ```

### ❌ Avoid For:

1. **Text-Heavy Content**

   - Blur makes text unreadable
   - Use `FadeIn` instead

2. **Small Text**

   - Blur makes small text illegible
   - Use `FadeIn` or `TextReveal`

3. **Critical Information**

   - Users might miss during blur
   - Use static or subtle `FadeIn`

4. **Too Much Blur**

   - 50px+ blur is excessive
   - Keep between 5px - 20px

---

## Common Pitfalls

### 1. ❌ Too Much Blur

```tsx
// ❌ BAD: Excessive blur (unreadable)
<BlurIn blur={50}>Content</BlurIn>

// ✅ GOOD: Reasonable blur (readable)
<BlurIn blur={10}>Content</BlurIn>
```

**Why it's bad:**

- Too much blur (50px+) makes content unreadable
- Defeats purpose of animation
- Poor UX

**Recommended Range:**

- **Subtle**: 5px - 8px
- **Medium**: 10px - 15px (default)
- **Heavy**: 20px - 30px
- **Avoid**: > 30px

### 2. ❌ Not Using willChange

```tsx
// ❌ BAD: No performance hint
style={{ filter: blurFilter }}

// ✅ GOOD: Performance hint
style={{
  willChange: 'filter, opacity',
  filter: blurFilter,
}}
```

**Why it's bad:**

- Browser doesn't optimize for filter changes
- Can cause janky animations
- Poor performance

### 3. ❌ Forgetting to Animate Motion Value

```tsx
// ❌ BAD: Blur value never animates
const blurValue = useMotionValue(10);
// No animate() call

// ✅ GOOD: Blur value animates
onViewportEnter={() => {
  animate(blurValue, 0, { duration, delay, ease });
}}
```

**Why it's bad:**

- Blur stays at initial value
- No animation happens
- Element stays blurred

### 4. ❌ Using State Instead of Motion Value

```tsx
// ❌ BAD: State-based (less performant)
const [blur, setBlur] = useState(10);

// ✅ GOOD: Motion value (more performant)
const blurValue = useMotionValue(10);
```

**Why it's bad:**

- State updates trigger full re-renders
- Less performant for animations
- Not optimized for 60fps

### 5. ❌ Not Handling Edge Cases

```tsx
// ❌ BAD: No validation
const blurValue = useMotionValue(blur);

// ✅ GOOD: Validate blur value
const blurValue = useMotionValue(Math.max(0, Math.min(blur, 50)));
```

**Why it's bad:**

- Negative blur doesn't make sense
- Very large blur (100px+) is excessive
- Can cause performance issues

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface MyBlurAnimationProps {
  children: ReactNode;
  blur?: number;
  withFade?: boolean;
}

export const MyBlurAnimation = ({
  children,
  blur = 10,
  withFade = true,
}: MyBlurAnimationProps) => {
  // Component logic
};
```

#### 2. **Set Up Motion Values**

```typescript
const blurValue = useMotionValue(blur);
const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);
```

#### 3. **Set Up Initial State**

```typescript
const initial: Record<string, number> = {};

if (withFade) {
  initial.opacity = 0;
}
```

#### 4. **Create Motion Element**

```typescript
return (
  <motion.div
    initial={initial}
    whileInView={{ opacity: withFade ? 1 : undefined }}
    viewport={{ once: true, margin: '-100px' }}
    style={{
      willChange: 'filter, opacity',
      filter: blurFilter,
    }}
    onViewportEnter={() => {
      animate(blurValue, 0, { duration: 0.6, ease: 'smooth' });
    }}
  >
    {children}
  </motion.div>
);
```

---

## Advanced Tips

### 1. **Different Blur Amounts for Different Content**

```typescript
// Images: More blur
<BlurIn blur={15}>Image</BlurIn>

// Text: Less blur
<BlurIn blur={5}>Text</BlurIn>

// Backgrounds: Subtle blur
<BlurIn blur={3}>Background</BlurIn>
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <BlurIn blur={10} delay={0.4}>
    <Card>Nested animations</Card>
  </BlurIn>
</FadeIn>
```

### 3. **Performance Optimization**

```typescript
// Use willChange for better performance
style={{
  willChange: 'filter, opacity',
  filter: blurFilter,
}}
```

### 4. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const blurValue = useMotionValue(prefersReducedMotion ? 0 : blur);

onViewportEnter={() => {
  if (!prefersReducedMotion) {
    animate(blurValue, 0, { duration, delay, ease });
  }
}}
```

### 5. **Custom Filter Combinations**

```typescript
// Combine blur with other filters
const blurFilter = useTransform(
  blurValue,
  (value) => `blur(${value}px) brightness(1.1)`
);
```

---

## Summary

**BlurIn** is a powerful component that:

- ✅ Creates modern focus effects with CSS blur filters
- ✅ Uses Framer Motion's motion value system for performance
- ✅ Can combine blur with fade for smooth reveals
- ✅ Uses GPU-accelerated filters for smooth animations
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Use `useMotionValue` and `useTransform` for filter animations
2. Use `willChange: 'filter'` for performance
3. Keep blur between 5px - 20px for best results
4. Animate motion values with `animate()` function
5. Use `onViewportEnter` to trigger blur animation
6. Avoid excessive blur (> 30px)

**Next Steps:**

- Experiment with different blur amounts
- Try combining with other animations
- Test on different devices for performance
- Use for images and cards, avoid for text

---

Happy animating! 🎉
