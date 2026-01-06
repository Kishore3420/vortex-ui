# FadeIn Component - Complete Tutorial

## 📚 Table of Contents

1. [What is FadeIn?](#what-is-fadein)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is FadeIn?

**FadeIn** is the most fundamental entrance animation component. Elements gracefully fade into view with optional directional slide motion. It's the foundation of modern web animations and perfect for content reveals and scroll-triggered animations.

### Visual Effect

- Elements start: **invisible** (opacity: 0) and optionally **offset** from final position
- Elements animate to: **fully visible** (opacity: 1) and **in normal position**
- Supports **5 directions**: up, down, left, right, none (fade only)
- Uses **customizable easing functions** for different motion feels

---

## Visual Behavior

```
Initial State (hidden, direction="up"):
┌─────────────────────────────────┐
│                                 │
│  [Element] ← invisible, 40px   │
│            below                │
└─────────────────────────────────┘

Animation:
Element fades in and slides up

Final State (visible):
┌─────────────────────────────────┐
│  [Element]                      │
│  ↑ Fully visible, in position   │
└─────────────────────────────────┘
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
```

**Why:**

- `motion` provides animated components (`motion.div`)
- `Easing` is the type for easing functions
- `ReactNode` is the type for children prop

### 2. Easing Presets System

```typescript
export type EasingPreset =
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'linear'
  | 'bounce'
  | 'spring'
  | 'smooth'
  | 'sharp'
  | 'custom';

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

- Defines preset easing functions for different motion feels
- Each preset creates a different animation character
- Can also accept custom cubic-bezier arrays
- Exported type allows other components to use same presets

**Easing Explained:**

- **easeIn**: Slow start, fast end (like accelerating) - `[0.42, 0, 1, 1]`
- **easeOut**: Fast start, slow end (like braking) - `[0, 0, 0.58, 1]` - most natural
- **easeInOut**: Slow start, fast middle, slow end - `[0.42, 0, 0.58, 1]` - balanced
- **linear**: Constant speed - `'linear'` - mechanical
- **bounce**: Playful bounce effect - `[0.68, -0.55, 0.265, 1.55]` - overshoots
- **spring**: Natural spring-like motion - `[0.34, 1.56, 0.64, 1]` - elastic
- **smooth**: Very smooth, gentle motion - `[0.25, 0.4, 0.25, 1]` - default
- **sharp**: Quick, snappy motion - `[0.4, 0, 0.2, 1]` - precise

**Cubic-Bezier Format:**

```typescript
[0.25, 0.4, 0.25, 1]
  │     │    │    │
  │     │    │    └─ End point Y
  │     │    └────── End point X
  │     └─────────── Start point Y
  └───────────────── Start point X
```

### 3. Props Interface

```typescript
interface FadeInProps {
  children: ReactNode; // Required: Content to animate
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Optional: Slide direction
  delay?: number; // Optional: Initial delay before animation starts
  duration?: number; // Optional: Animation duration (default: 0.6s)
  className?: string; // Optional: Additional CSS classes
  easing?: EasingPreset | Easing | [number, number, number, number] | string;
  withSlide?: boolean; // Optional: Enable/disable slide (default: true)
  offset?: number; // Optional: Slide distance in pixels (default: 40)
  viewportMargin?: string; // Optional: When to trigger animation (default: '-100px')
  once?: boolean; // Optional: Animate once or every time (default: true)
}
```

**Key Props:**

- `direction`: Slide direction (up, down, left, right, none)
- `withSlide`: Whether to include slide motion (default: true)
- `offset`: Distance to slide from (default: 40px)
- `easing`: Animation easing function (default: 'smooth')
- `viewportMargin`: When to trigger animation
- `once`: Whether to animate only once

### 4. Direction Offset Calculation

```typescript
const directionOffset = {
  up: { y: offset, x: 0 },
  down: { y: -offset, x: 0 },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
  none: { x: 0, y: 0 },
};

const slideOffset = directionOffset[direction];
```

**What it does:**

- Calculates initial position based on direction
- `up`: Starts below (y: offset)
- `down`: Starts above (y: -offset)
- `left`: Starts to the right (x: offset)
- `right`: Starts to the left (x: -offset)
- `none`: No offset (fade only)

**Why negative for down/right?**

- `down`: Element starts above, so `y: -offset` (negative = up)
- `right`: Element starts left, so `x: -offset` (negative = left)

### 5. Dynamic Initial State

```typescript
const initial: Record<string, number> = {
  opacity: 0,
};

if (withSlide && direction !== 'none') {
  initial.x = slideOffset.x;
  initial.y = slideOffset.y;
}
```

**What it does:**

- Starts with opacity 0 (invisible)
- Conditionally adds x/y offset if slide is enabled
- Uses dynamic object building for flexibility

**Why dynamic object?**

- Allows conditional properties
- More flexible than hardcoded objects
- Can disable slide without changing structure

### 6. Dynamic Animate State

```typescript
const animate: Record<string, number> = {
  opacity: 1,
};

if (withSlide && direction !== 'none') {
  animate.x = 0;
  animate.y = 0;
}
```

**What it does:**

- Ends with opacity 1 (fully visible)
- Conditionally animates x/y to 0 if slide is enabled
- Matches initial state structure

### 7. Easing Resolution

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

**Why IIFE?**

- Executes immediately
- Cleaner than separate function
- Scoped to component

### 8. Motion Component

```typescript
<motion.div
  initial={initial}
  whileInView={animate}
  viewport={{
    once,
    margin: viewportMargin,
  }}
  transition={{
    duration,
    delay,
    ease: resolvedEasing,
  }}
  className={className}
>
  {children}
</motion.div>
```

**Breaking it down:**

**`initial={initial}`**

- Starting state (invisible, optionally offset)
- `opacity: 0` = invisible
- `x/y` = offset position (if slide enabled)

**`whileInView={animate}`**

- Animates when element enters viewport
- Better than `animate` (doesn't animate off-screen)
- Triggers on scroll

**`viewport` options:**

```typescript
viewport={{
  once: true, // Animate only once (default)
  margin: '-100px', // Start 100px before visible
}}
```

- `once: true` = animate once, `false` = repeat
- `margin: '-100px'` = starts before visible (anticipation)
- `margin: '0px'` = starts exactly when visible
- `margin: '100px'` = starts after visible

**`transition` config:**

```typescript
transition={{
  duration: 0.6, // Animation duration (seconds)
  delay: 0, // Initial delay (seconds)
  ease: resolvedEasing, // Easing function
}}
```

- `duration`: How long animation takes
- `delay`: Wait before starting
- `ease`: Motion curve (smooth, bounce, etc.)

**`className`**

- Custom CSS classes
- Can style the animated element
- Useful for spacing, colors, etc.

---

## Core Concepts Deep Dive

### 1. Opacity + Transform Combination

**FadeIn combines opacity and transform for smooth animation.**

```typescript
opacity: 0 → 1  // Fade in
y: 40 → 0       // Slide up
```

**Why both?**

- **Opacity**: Creates fade effect (invisible → visible)
- **Transform**: Creates slide effect (offset → position)
- **Both together**: Smooth, professional animation
- **GPU-accelerated**: Both properties use GPU for 60fps

**Performance Benefits:**

- `opacity` and `transform` are GPU-accelerated
- Don't trigger layout reflow
- Smooth 60fps animations
- Better than animating `top`/`left`

**Visual:**

```
Without transform (opacity only):
  Fade: ████████████████ (just appears)

With transform (opacity + slide):
  Fade + Slide: ████████████████ (appears while moving)
```

### 2. Direction System

**5 directions create different visual flows.**

**Up (default):**

- Most common direction
- Natural reading flow (top to bottom)
- Element slides up from below
- Perfect for most content

**Down:**

- Good for headers, top elements
- Element slides down from above
- Creates top-to-bottom flow
- Less common but useful

**Left:**

- Creates reading flow (left to right)
- Element slides from right to left
- Good for sidebars, menus
- Alternative to up

**Right:**

- Alternative reading flow
- Element slides from left to right
- Good for sidebars, menus
- Less common

**None:**

- Pure fade, no movement
- Subtle, elegant
- Good when movement is distracting
- Just opacity animation

**Visual Comparison:**

```
Up:    [Element] slides ↑ (from below)
Down:  [Element] slides ↓ (from above)
Left:  [Element] slides ← (from right)
Right: [Element] slides → (from left)
None:  [Element] fades (no movement)
```

### 3. Easing System

**9 preset easings + custom support.**

Each easing creates different motion feel:

**smooth (default):**

- Very smooth, gentle motion
- Professional, elegant
- Cubic-bezier: `[0.25, 0.4, 0.25, 1]`
- Best for most content

**easeOut:**

- Fast start, slow end
- Natural, most common
- Cubic-bezier: `[0, 0, 0.58, 1]`
- Like braking a car

**easeIn:**

- Slow start, fast end
- Like accelerating
- Cubic-bezier: `[0.42, 0, 1, 1]`
- Less common

**easeInOut:**

- Slow start, fast middle, slow end
- Balanced, natural
- Cubic-bezier: `[0.42, 0, 0.58, 1]`
- Good for longer animations

**bounce:**

- Playful bounce effect
- Overshoots and bounces back
- Cubic-bezier: `[0.68, -0.55, 0.265, 1.55]`
- Attention-grabbing

**spring:**

- Natural spring-like motion
- Elastic, bouncy
- Cubic-bezier: `[0.34, 1.56, 0.64, 1]`
- Organic feel

**sharp:**

- Quick, snappy motion
- Fast and precise
- Cubic-bezier: `[0.4, 0, 0.2, 1]`
- Good for quick interactions

**linear:**

- Constant speed
- Mechanical feel
- No acceleration/deceleration
- Rarely used

**Custom:**

- Custom cubic-bezier array
- Full control over motion
- `[x1, y1, x2, y2]` format
- For specific needs

### 4. Viewport Triggering

**Animates only when visible for better performance.**

```typescript
whileInView = { animate }; // Only animates when in viewport
```

**How it works:**

1. Element is off-screen (no animation)
2. User scrolls, element enters viewport
3. `whileInView` triggers
4. Animation starts
5. Element animates into view

**Benefits:**

- **Better performance**: Doesn't animate off-screen elements
- **Better UX**: Animations happen as user scrolls
- **Saves battery**: Less work on mobile devices
- **Smoother**: Only animates visible content

**Without viewport triggering:**

```typescript
animate = { animate }; // Animates immediately, even if off-screen
```

**Problems:**

- Wastes resources animating invisible elements
- User might miss the animation
- Poor performance
- Battery drain on mobile

**Viewport Margin Explained:**

```typescript
viewportMargin: '-100px'; // Starts 100px before visible
viewportMargin: '0px'; // Starts exactly when visible
viewportMargin: '100px'; // Starts 100px after visible
```

**Visual:**

```
margin: '-100px':
  ┌─────────────────┐
  │  Viewport        │
  │  ┌───────────┐   │ ← Animation starts here
  │  │ Element   │   │
  │  └───────────┘   │
  └─────────────────┘

margin: '0px':
  ┌─────────────────┐
  │  Viewport        │
  │  ┌───────────┐   │ ← Animation starts here
  │  │ Element   │   │
  │  └───────────┘   │
  └─────────────────┘
```

### 5. Dynamic Object Building

**Conditional properties for flexibility.**

```typescript
const initial: Record<string, number> = {
  opacity: 0,
};

if (withSlide && direction !== 'none') {
  initial.x = slideOffset.x;
  initial.y = slideOffset.y;
}
```

**Why dynamic?**

- Allows conditional properties
- More flexible than hardcoded objects
- Can disable slide without changing structure
- Cleaner code

**Alternative (hardcoded - bad):**

```typescript
// ❌ BAD: Hardcoded, not flexible
const initial = {
  opacity: 0,
  x: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
  y: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
};
```

### 6. GPU Acceleration

**Transform properties use GPU.**

```typescript
transform: translateY(40px)  // GPU-accelerated
opacity: 0                    // GPU-accelerated
```

**Why GPU?**

- Smooth 60fps animations
- Doesn't trigger layout reflow
- Better performance
- Less CPU usage

**Non-GPU properties (avoid):**

```typescript
top: 40px      // ❌ Triggers layout reflow
left: 40px     // ❌ Not GPU-accelerated
width: 100px   // ❌ Triggers layout reflow
```

**GPU-accelerated properties (use):**

```typescript
transform: translateX(40px)  // ✅ GPU-accelerated
transform: translateY(40px)  // ✅ GPU-accelerated
transform: scale(1.2)       // ✅ GPU-accelerated
opacity: 0.5                // ✅ GPU-accelerated
```

---

## How to Use

### Basic Usage

```tsx
import { FadeIn } from '@/components/animations';

export default function MyPage() {
  return (
    <FadeIn>
      <h1>Welcome</h1>
    </FadeIn>
  );
}
```

### Different Directions

```tsx
<FadeIn direction="up">Up (default)</FadeIn>
<FadeIn direction="down">Down</FadeIn>
<FadeIn direction="left">Left</FadeIn>
<FadeIn direction="right">Right</FadeIn>
<FadeIn direction="none">Fade Only</FadeIn>
```

### Custom Easing

```tsx
<FadeIn easing="bounce">Bouncy</FadeIn>
<FadeIn easing="spring">Springy</FadeIn>
<FadeIn easing="smooth">Smooth (default)</FadeIn>
<FadeIn easing="easeOut">Ease Out</FadeIn>
<FadeIn easing={[0.68, -0.55, 0.265, 1.55]}>Custom</FadeIn>
```

### Custom Offset

```tsx
<FadeIn offset={20}>Subtle (20px)</FadeIn>
<FadeIn offset={40}>Default (40px)</FadeIn>
<FadeIn offset={100}>Dramatic (100px)</FadeIn>
```

### Custom Duration and Delay

```tsx
<FadeIn duration={0.3}>Fast (0.3s)</FadeIn>
<FadeIn duration={0.6}>Default (0.6s)</FadeIn>
<FadeIn duration={1.2}>Slow (1.2s)</FadeIn>
<FadeIn delay={0.5}>Delayed start</FadeIn>
```

### Fade Only (No Slide)

```tsx
<FadeIn direction="none" withSlide={false}>
  Pure fade
</FadeIn>
```

### Custom Viewport Margin

```tsx
<FadeIn viewportMargin="0px">Immediate trigger</FadeIn>
<FadeIn viewportMargin="-100px">Default (starts early)</FadeIn>
<FadeIn viewportMargin="-200px">Very early trigger</FadeIn>
```

### Repeatable Animation

```tsx
<FadeIn once={false}>Repeats on every scroll</FadeIn>
```

### Complete Example

```tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <FadeIn direction="up" delay={0.2}>
          <h1 className="text-6xl font-bold">Welcome</h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-xl text-gray-600">
            Experience next-generation design
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.6}>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
            Get Started
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Hero Sections**

   ```tsx
   <FadeIn direction="up" delay={0.2}>
     <h1>Build Amazing Products</h1>
   </FadeIn>
   ```

2. **Headings**

   ```tsx
   <FadeIn direction="up">
     <h2>Our Services</h2>
   </FadeIn>
   ```

3. **Content Sections**

   ```tsx
   <FadeIn direction="up">
     <p>Long paragraph content...</p>
   </FadeIn>
   ```

4. **Cards**

   ```tsx
   <FadeIn direction="up" delay={index * 0.1}>
     <ProductCard product={product} />
   </FadeIn>
   ```

5. **Images**

   ```tsx
   <FadeIn direction="up">
     <img src="image.jpg" alt="Description" />
   </FadeIn>
   ```

6. **Feature Lists**

   ```tsx
   {
     features.map((feature, index) => (
       <FadeIn key={feature.id} delay={index * 0.1}>
         <FeatureCard feature={feature} />
       </FadeIn>
     ));
   }
   ```

7. **Testimonials**

   ```tsx
   <FadeIn direction="up" delay={0.3}>
     <blockquote>"This product changed my life!"</blockquote>
   </FadeIn>
   ```

8. **Call-to-Action Buttons**

   ```tsx
   <FadeIn direction="up" delay={0.5}>
     <button>Get Started</button>
   </FadeIn>
   ```

### ❌ Avoid For:

1. **Nothing!** - FadeIn works for everything
2. (But consider alternatives for specific effects like text reveals, scale effects, etc.)

---

## Common Pitfalls

### 1. ❌ Using `animate` Instead of `whileInView`

```tsx
// ❌ BAD: Animates immediately, even if off-screen
<motion.div animate={animate}>

// ✅ GOOD: Animates when user scrolls to it
<motion.div whileInView={animate}>
```

**Why it's bad:**

- Wastes resources animating invisible elements
- User might miss the animation
- Poor performance on mobile devices

### 2. ❌ Not Handling Easing Types

```tsx
// ❌ BAD: Type errors
ease: easing;

// ✅ GOOD: Resolve easing properly
const resolvedEasing =
  typeof easing === 'string' ? easingPresets[easing] : easing;
```

**Why it's bad:**

- TypeScript errors
- Runtime errors if easing is invalid
- No fallback for custom easings

### 3. ❌ Hardcoding Directions

```tsx
// ❌ BAD: Hardcoded (not flexible)
if (direction === 'up') initial.y = 40;
if (direction === 'down') initial.y = -40;
// ... more hardcoded conditions

// ✅ GOOD: Dynamic object (flexible)
const directionOffset = {
  up: { y: offset, x: 0 },
  down: { y: -offset, x: 0 },
  // ... all directions
};
```

**Why it's bad:**

- Hard to maintain
- Not flexible
- Error-prone

### 4. ❌ Too Fast or Too Slow Duration

```tsx
// ❌ BAD: Too fast (jarring)
<FadeIn duration={0.1}>Content</FadeIn>

// ❌ BAD: Too slow (feels sluggish)
<FadeIn duration={3}>Content</FadeIn>

// ✅ GOOD: Balanced (smooth)
<FadeIn duration={0.6}>Content</FadeIn>
```

**Recommended Range:**

- **Fast**: 0.3s - 0.4s (snappy)
- **Medium**: 0.5s - 0.7s (balanced, default: 0.6s)
- **Slow**: 0.8s - 1.2s (dramatic)

### 5. ❌ Too Large Offset

```tsx
// ❌ BAD: Too dramatic (disorienting)
<FadeIn offset={200}>Content</FadeIn>

// ✅ GOOD: Reasonable (smooth)
<FadeIn offset={40}>Content</FadeIn>
```

**Why it's bad:**

- Too large offset (200px+) is disorienting
- Element moves too far
- Poor UX

**Recommended Range:**

- **Subtle**: 20px - 30px
- **Medium**: 40px - 60px (default: 40px)
- **Dramatic**: 80px - 100px
- **Avoid**: > 100px

### 6. ❌ Not Using GPU-Accelerated Properties

```tsx
// ❌ BAD: Animating top/left (not GPU-accelerated)
// Don't do this - use transform instead

// ✅ GOOD: Using transform (GPU-accelerated)
<FadeIn direction="up">Content</FadeIn>
```

**Why it's bad:**

- `top`/`left` properties trigger layout reflow
- Not GPU-accelerated
- Poor performance

### 7. ❌ Forgetting Viewport Margin

```tsx
// ❌ BAD: Animation starts too late
<FadeIn viewportMargin="100px">Content</FadeIn>

// ✅ GOOD: Animation starts at right time
<FadeIn viewportMargin="-100px">Content</FadeIn>
```

**Why it's bad:**

- Positive margin = animation starts after element is visible
- User sees element before animation
- Poor UX

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MyFadeAnimationProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export const MyFadeAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: MyFadeAnimationProps) => {
  // Component logic
};
```

#### 2. **Calculate Direction Offset**

```typescript
const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

const slideOffset = directionOffset[direction];
```

#### 3. **Set Up Initial State**

```typescript
const initial: Record<string, number> = {
  opacity: 0,
  x: slideOffset.x,
  y: slideOffset.y,
};
```

#### 4. **Set Up Animate State**

```typescript
const animate: Record<string, number> = {
  opacity: 1,
  x: 0,
  y: 0,
};
```

#### 5. **Create Motion Element**

```typescript
return (
  <motion.div
    initial={initial}
    whileInView={animate}
    viewport={{ once: true, margin: '-100px' }}
    transition={{
      duration,
      delay,
      ease: 'smooth',
    }}
  >
    {children}
  </motion.div>
);
```

### Example: Custom Fade Animation

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CustomFadeProps {
  children: ReactNode;
  from?: 'top' | 'bottom' | 'left' | 'right';
  distance?: number;
  delay?: number;
}

export const CustomFade = ({
  children,
  from = 'bottom',
  distance = 50,
  delay = 0,
}: CustomFadeProps) => {
  const offsets = {
    top: { y: -distance, x: 0 },
    bottom: { y: distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
  };

  const offset = offsets[from];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
```

---

## Advanced Tips

### 1. **Different Easing for Different Directions**

```typescript
// Up: Smooth (natural)
const easing = direction === 'up' ? 'smooth' : 'easeOut';

// Down: Sharp (quick)
const easing = direction === 'down' ? 'sharp' : 'smooth';
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <ScaleIn scale={0.8} delay={0.4}>
    <Card>Nested animations</Card>
  </ScaleIn>
</FadeIn>
```

### 3. **Staggered FadeIn Animations**

```tsx
{
  items.map((item, index) => (
    <FadeIn key={item.id} delay={index * 0.1} direction="up">
      <Card>{item.content}</Card>
    </FadeIn>
  ));
}
```

### 4. **Performance Optimization**

```typescript
// Use willChange for better performance
<motion.div
  initial={initial}
  whileInView={animate}
  style={{
    willChange: 'transform, opacity',
  }}
>
  {children}
</motion.div>
```

### 5. **Conditional Animation**

```tsx
{
  shouldAnimate && (
    <FadeIn direction="up">
      <Content />
    </FadeIn>
  );
}
```

### 6. **Dynamic Offset Based on Content**

```typescript
// Larger offset for larger elements
const offset = elementHeight > 500 ? 80 : 40;
```

### 7. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const initial = {
  opacity: prefersReducedMotion ? 1 : 0,
  y: prefersReducedMotion ? 0 : offset,
};

const animate = {
  opacity: 1,
  y: 0,
};

const transition = {
  duration: prefersReducedMotion ? 0 : duration,
};
```

### 8. **Different Easing Presets**

```typescript
// Professional: smooth
easing="smooth"

// Playful: bounce
easing="bounce"

// Natural: easeOut
easing="easeOut"

// Custom: cubic-bezier
easing={[0.68, -0.55, 0.265, 1.55]}
```

### 9. **Viewport Margin Strategies**

```typescript
// Immediate trigger (no anticipation)
viewportMargin = '0px';

// Default (slight anticipation)
viewportMargin = '-100px';

// Early trigger (more anticipation)
viewportMargin = '-200px';

// Late trigger (element visible first)
viewportMargin = '100px';
```

### 10. **Combining Multiple FadeIn Elements**

```tsx
<div className="space-y-8">
  <FadeIn direction="up" delay={0}>
    <h1>Title</h1>
  </FadeIn>
  <FadeIn direction="up" delay={0.2}>
    <p>Subtitle</p>
  </FadeIn>
  <FadeIn direction="up" delay={0.4}>
    <button>CTA</button>
  </FadeIn>
</div>
```

---

## Summary

**FadeIn** is the foundation of web animations:

- ✅ Most versatile and commonly used animation
- ✅ Supports 5 directions + fade-only mode
- ✅ 9 easing presets + custom easing support
- ✅ GPU-accelerated for smooth performance
- ✅ Viewport-triggered for better UX

**Key Takeaways:**

1. Use `whileInView` for scroll-triggered animations
2. Combine opacity + transform for best effect
3. Choose appropriate easing for motion feel
4. Use `direction="up"` for most content
5. Customize offset for different intensities

---

Happy animating! 🎉
