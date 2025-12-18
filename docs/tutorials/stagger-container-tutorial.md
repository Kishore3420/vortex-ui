# StaggerContainer Component - Complete Tutorial

## 📚 Table of Contents

1. [What is StaggerContainer?](#what-is-staggercontainer)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is StaggerContainer?

**StaggerContainer** orchestrates child animations with sequential timing. It controls when each child element animates, creating smooth, cascading reveal effects. It's the conductor of the animation orchestra, ensuring children animate in perfect sequence.

### Visual Effect

- Container manages **stagger timing** for all children
- Children animate **one after another** with configurable delay
- Works with **StaggerItem** or any motion component
- Creates **cascading, sequential animations**
- Uses **Framer Motion variants** for clean orchestration

---

## Visual Behavior

```
Initial State (hidden):
┌─────────────────────────────────┐
│                                 │
│  [Item 1] ← invisible          │
│  [Item 2] ← invisible          │
│  [Item 3] ← invisible          │
│  [Item 4] ← invisible          │
└─────────────────────────────────┘

Animation Sequence (staggerDelay: 0.1s):
Time 0.0s:  [Item 1] appears
Time 0.1s:  [Item 2] appears
Time 0.2s:  [Item 3] appears
Time 0.3s:  [Item 4] appears

Final State (visible):
┌─────────────────────────────────┐
│  [Item 1]                        │
│  [Item 2]                        │
│  [Item 3]                        │
│  [Item 4]                        │
│  ↑ All visible, in sequence      │
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
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
```

**Why:**

- `motion` provides animated components
- `ReactNode` is the type for children prop

### 2. Props Interface

```typescript
interface StaggerContainerProps {
  children: ReactNode; // Required: Child elements to animate
  staggerDelay?: number; // Optional: Delay between each child (default: 0.1s)
  initialDelay?: number; // Optional: Initial delay before first child (default: 0)
  className?: string; // Optional: Additional CSS classes
  viewportMargin?: string; // Optional: When to trigger animation (default: '-100px')
  once?: boolean; // Optional: Animate once or every time (default: true)
}
```

**Key Props:**

- `staggerDelay`: Time between each child animation (0.1s = 100ms)
- `initialDelay`: Initial delay before first child starts
- `viewportMargin`: When to trigger animation
- `once`: Whether to animate only once

### 3. Container Variants

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
};
```

**What it does:**

**`hidden: { opacity: 0 }`**

- Container starts invisible
- Children inherit this state initially

**`visible: { opacity: 1, transition: { ... } }`**

- Container becomes visible
- `staggerChildren`: Controls delay between children
- `delayChildren`: Initial delay before first child

**How Stagger Works:**

```
staggerChildren: 0.1  // 100ms between each child
delayChildren: 0.2    // Wait 200ms before starting

Timeline:
Time 0.0s:  Container becomes visible
Time 0.2s:  Child 1 starts (delayChildren)
Time 0.3s:  Child 2 starts (delayChildren + staggerChildren)
Time 0.4s:  Child 3 starts (delayChildren + 2*staggerChildren)
Time 0.5s:  Child 4 starts (delayChildren + 3*staggerChildren)
```

### 4. Motion Component

```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once,
    margin: viewportMargin,
  }}
  className={className}
>
  {children}
</motion.div>
```

**Breaking it down:**

- `variants`: Uses container variants for orchestration
- `initial="hidden"`: Starts in hidden state
- `whileInView="visible"`: Switches to visible when in viewport
- `viewport`: Controls when animation triggers
- `children`: Child elements (should be StaggerItem or motion components)

---

## Core Concepts Deep Dive

### 1. Variants Pattern

**Variants define animation states.**

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};
```

**How it works:**

- Parent defines `hidden` and `visible` states
- Children inherit these states via `variants` prop
- Parent controls timing via `staggerChildren` and `delayChildren`

### 2. Stagger Children

**`staggerChildren`** controls delay between children.

```typescript
staggerChildren: 0.1; // 100ms between each child
```

**Visual:**

```
Child 1: ████████████████ (starts at 0.0s)
Child 2:         ████████████████ (starts at 0.1s)
Child 3:                 ████████████████ (starts at 0.2s)
Child 4:                         ████████████████ (starts at 0.3s)
```

### 3. Delay Children

**`delayChildren`** adds initial delay.

```typescript
delayChildren: 0.2; // Wait 200ms before first child
```

**Visual:**

```
Time 0.0s:  Container visible
Time 0.2s:  Child 1 starts (delayChildren)
Time 0.3s:  Child 2 starts (delayChildren + staggerChildren)
```

### 4. Child Inheritance

**Children inherit parent's variant states.**

```typescript
// Parent
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {/* Children */}
  <motion.div variants={childVariants}>Child 1</motion.div>
  <motion.div variants={childVariants}>Child 2</motion.div>
</motion.div>
```

**How it works:**

1. Parent switches to `visible`
2. Children automatically switch to `visible`
3. Stagger timing applies to children
4. Each child animates in sequence

---

## How to Use

### Basic Usage with StaggerItem

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>;
```

### Custom Stagger Delay

```tsx
<StaggerContainer staggerDelay={0.15}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### With Initial Delay

```tsx
<StaggerContainer staggerDelay={0.1} initialDelay={0.5}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

### With Custom Children

```tsx
<StaggerContainer>
  <FadeIn>Custom child 1</FadeIn>
  <FadeIn>Custom child 2</FadeIn>
  <FadeIn>Custom child 3</FadeIn>
</StaggerContainer>
```

### Grid Layout

```tsx
<StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-4">
  {items.map((item) => (
    <StaggerItem key={item.id}>{item.content}</StaggerItem>
  ))}
</StaggerContainer>
```

### Complete Example

```tsx
export default function FeatureGrid() {
  const features = [
    { id: 1, title: 'Feature 1' },
    { id: 2, title: 'Feature 2' },
    { id: 3, title: 'Feature 3' },
  ];

  return (
    <StaggerContainer staggerDelay={0.15} initialDelay={0.2}>
      {features.map((feature) => (
        <StaggerItem key={feature.id}>
          <FeatureCard feature={feature} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Lists**

   ```tsx
   <StaggerContainer>
     {items.map((item) => (
       <StaggerItem key={item.id}>{item.content}</StaggerItem>
     ))}
   </StaggerContainer>
   ```

2. **Grids**

   ```tsx
   <StaggerContainer className="grid grid-cols-3">
     {cards.map((card) => (
       <StaggerItem key={card.id}>
         <Card>{card.content}</Card>
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

3. **Feature Lists**

   ```tsx
   <StaggerContainer staggerDelay={0.1}>
     {features.map((feature) => (
       <StaggerItem key={feature.id}>
         <Feature feature={feature} />
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

4. **Testimonials**

   ```tsx
   <StaggerContainer>
     {testimonials.map((testimonial) => (
       <StaggerItem key={testimonial.id}>
         <Testimonial testimonial={testimonial} />
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

5. **Navigation Items**

   ```tsx
   <StaggerContainer>
     {navItems.map((item) => (
       <StaggerItem key={item.id}>
         <NavItem item={item} />
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

### ❌ Avoid For:

1. **Single Elements**

   - No need for stagger with one element
   - Use `FadeIn` instead

2. **Unordered Content**

   - Stagger works best with lists/grids
   - Use individual animations for scattered content

---

## Common Pitfalls

### 1. ❌ Too Fast or Too Slow Stagger

```tsx
// ❌ BAD: Too fast (hard to see)
<StaggerContainer staggerDelay={0.01}>Items</StaggerContainer>

// ❌ BAD: Too slow (feels sluggish)
<StaggerContainer staggerDelay={0.5}>Items</StaggerContainer>

// ✅ GOOD: Balanced (smooth)
<StaggerContainer staggerDelay={0.1}>Items</StaggerContainer>
```

**Recommended Range:**

- **Fast**: 0.05s - 0.08s (energetic)
- **Medium**: 0.1s - 0.15s (balanced, default)
- **Slow**: 0.2s - 0.3s (dramatic)

### 2. ❌ Not Using with StaggerItem

```tsx
// ❌ BAD: Children don't have variants
<StaggerContainer>
  <div>Item 1</div>
  <div>Item 2</div>
</StaggerContainer>

// ✅ GOOD: Children have variants
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

**Why it's bad:**

- Children need `variants` prop to inherit parent states
- Regular divs don't animate
- Stagger won't work

### 3. ❌ Too Many Children

```tsx
// ❌ BAD: Too many items (very long animation)
<StaggerContainer>
  {Array(100).fill(0).map((_, i) => (
    <StaggerItem key={i}>Item {i}</StaggerItem>
  ))}
</StaggerContainer>

// ✅ GOOD: Reasonable number of items
<StaggerContainer>
  {items.slice(0, 20).map((item) => (
    <StaggerItem key={item.id}>{item.content}</StaggerItem>
  ))}
</StaggerContainer>
```

**Why it's bad:**

- Too many items = very long animation
- User might scroll away
- Performance issues

### 4. ❌ Using `animate` Instead of `whileInView`

```tsx
// ❌ BAD: Animates immediately, even if off-screen
<motion.div animate="visible">

// ✅ GOOD: Animates when user scrolls to it
<motion.div whileInView="visible">
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

interface MyStaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
}

export const MyStaggerContainer = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
}: MyStaggerContainerProps) => {
  // Component logic
};
```

#### 2. **Define Container Variants**

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
};
```

#### 3. **Create Motion Element**

```typescript
return (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
  >
    {children}
  </motion.div>
);
```

---

## Advanced Tips

### 1. **Different Stagger Delays for Different Content**

```typescript
// Fast for small items
<StaggerContainer staggerDelay={0.05}>
  {smallItems.map(...)}
</StaggerContainer>

// Medium for medium items
<StaggerContainer staggerDelay={0.1}>
  {mediumItems.map(...)}
</StaggerContainer>

// Slow for large items
<StaggerContainer staggerDelay={0.2}>
  {largeItems.map(...)}
</StaggerContainer>
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <StaggerContainer staggerDelay={0.1}>
    {items.map((item) => (
      <StaggerItem key={item.id}>{item.content}</StaggerItem>
    ))}
  </StaggerContainer>
</FadeIn>
```

### 3. **Performance Optimization**

```typescript
// Limit number of items for performance
const displayItems = items.slice(0, 20);

<StaggerContainer>
  {displayItems.map((item) => (
    <StaggerItem key={item.id}>{item.content}</StaggerItem>
  ))}
</StaggerContainer>;
```

### 4. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but stagger still works (just faster).

---

## Summary

**StaggerContainer** is a powerful component that:

- ✅ Orchestrates child animations with sequential timing
- ✅ Uses Framer Motion variants for clean code
- ✅ Supports customizable stagger and delay timing
- ✅ Works with StaggerItem or any motion component
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Use variants pattern for orchestration
2. Keep stagger delay between 0.05s - 0.3s
3. Use with StaggerItem or motion components with variants
4. Limit number of children for performance
5. Use `whileInView` for scroll-triggered animations

**Next Steps:**

- Experiment with different stagger delays
- Try combining with other animations
- Test with different numbers of children
- Use for lists, grids, and sequential content

---

Happy animating! 🎉
