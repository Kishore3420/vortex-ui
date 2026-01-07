# StaggerItem Component - Complete Tutorial

## 📚 Table of Contents

1. [What is StaggerItem?](#what-is-staggeritem)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is StaggerItem?

**StaggerItem** is an individual item in a stagger sequence. It works with **StaggerContainer** to create sequential animations. Each item can have its own animation type, direction, and effects, making it highly customizable.

### Visual Effect

- Items start: **hidden** (invisible, optionally offset/scaled)
- Items animate to: **visible** (fully visible, in position)
- Supports **2 animation types**: spring (bouncy) or tween (smooth)
- Supports **5 directions**: up, down, left, right, none
- Can combine **fade, slide, and scale** effects

---

## Visual Behavior

```
Initial State (hidden, direction="up", withFade=true):
┌─────────────────────────────────┐
│                                 │
│  [Item] ← invisible, 20px down │
│         (hidden state)          │
└─────────────────────────────────┘

Animation:
Item fades in and slides up

Final State (visible):
┌─────────────────────────────────┐
│  [Item]                         │
│  ↑ Fully visible, in position   │
└─────────────────────────────────┘
```

**With Different Effects:**

```
Fade + Slide:  Fades in and slides
Fade + Scale:  Fades in and scales
All Three:     Fades, slides, and scales
```

---

## Line-by-Line Code Explanation

### 1. Component Setup

```typescript
'use client';
```

**Why:** Next.js requires `'use client'` for components that use React hooks or browser APIs. Framer Motion needs client-side JavaScript.

```typescript
import { Easing, motion, Transition } from 'framer-motion';
import { ReactNode } from 'react';
import type { EasingPreset } from './FadeIn';
```

**Why:**

- `motion` provides animated components
- `Transition` is the type for transition configs
- `Easing` is the type for easing functions

### 2. Direction Offset Calculation

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
- Same logic as FadeIn component
- `none` = no slide, just fade/scale

### 3. Dynamic Hidden State

```typescript
const hidden: Record<string, number> = {};

if (withFade) {
  hidden.opacity = 0;
}

if (direction !== 'none') {
  hidden.x = slideOffset.x;
  hidden.y = slideOffset.y;
}

if (withScale) {
  hidden.scale = scale;
}
```

**What it does:**

- Builds hidden state dynamically
- Conditionally adds opacity, position, and scale
- Creates flexible initial state

**Example States:**

```
withFade=true, direction="up", withScale=false:
  hidden = { opacity: 0, y: 20, x: 0 }

withFade=true, direction="none", withScale=true:
  hidden = { opacity: 0, scale: 0.8 }

All effects:
  hidden = { opacity: 0, y: 20, x: 0, scale: 0.8 }
```

### 4. Dynamic Visible State

```typescript
const visible: Record<string, number> = {};

if (withFade) {
  visible.opacity = 1;
}

if (direction !== 'none') {
  visible.x = 0;
  visible.y = 0;
}

if (withScale) {
  visible.scale = 1;
}
```

**What it does:**

- Builds visible state dynamically
- Matches hidden state structure
- All properties animate to final values

### 5. Transition Builder

```typescript
const buildTransition = (): Transition => {
  if (animationType === 'spring') {
    return {
      type: 'spring',
      damping: springDamping,
      stiffness: springStiffness,
    };
  } else {
    const resolvedEasing =
      typeof easing === 'string' && easing in easingPresets
        ? easingPresets[easing as EasingPreset]
        : easing;

    return {
      type: 'tween',
      duration,
      ease: resolvedEasing as Easing | [number, number, number, number],
    };
  }
};
```

**What it does:**

**Spring Animation:**

- Returns spring transition config
- Uses `damping` and `stiffness` for control
- Natural, bouncy motion

**Tween Animation:**

- Returns tween transition config
- Uses `duration` and `easing` for control
- Smooth, controlled motion

**Why two types?**

- Spring: Natural, bouncy (default)
- Tween: Smooth, controlled
- Different feels for different use cases

### 6. Item Variants

```typescript
const itemVariants = {
  hidden,
  visible: {
    ...visible,
    transition: buildTransition(),
  },
};
```

**What it does:**

- Defines variants for the item
- `hidden`: Initial state
- `visible`: Final state with transition
- Transition is built based on animation type

### 7. Motion Component

```typescript
<motion.div variants={itemVariants} className={className}>
  {children}
</motion.div>
```

**Breaking it down:**

- `variants`: Uses item variants (inherits from parent)
- No `initial` or `animate` props (inherited from StaggerContainer)
- Parent controls when animation triggers
- Item controls how it animates

**Why no initial/animate?**

- Parent (StaggerContainer) controls timing
- Item just defines how it animates
- Variants pattern handles inheritance

---

## Core Concepts Deep Dive

### 1. Animation Types

**Two types create different motion feels.**

**Spring (default):**

```typescript
animationType="spring"
springDamping={12}    // Lower = more bounce
springStiffness={100} // Higher = faster
```

- Natural, bouncy motion
- Good for playful, energetic animations
- Uses physics simulation

**Tween:**

```typescript
animationType="tween"
duration={0.5}
easing="easeOut"
```

- Smooth, controlled motion
- Good for professional, precise animations
- Uses easing curves

### 2. Combined Effects

**Can combine fade, slide, and scale.**

**Fade + Slide:**

```typescript
withFade={true}
direction="up"
```

- Fades in while sliding
- Most common combination
- Smooth, professional

**Fade + Scale:**

```typescript
withFade={true}
withScale={true}
scale={0.8}
```

- Fades in while scaling
- More dramatic effect
- Good for emphasis

**All Three:**

```typescript
withFade={true}
direction="up"
withScale={true}
```

- All effects combined
- Very dramatic
- Use sparingly

### 3. Variants Inheritance

**Items inherit parent's variant states.**

```typescript
// Parent (StaggerContainer)
<motion.div variants={containerVariants} initial="hidden" whileInView="visible">
  {/* Children */}
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
</motion.div>
```

**How it works:**

1. Parent switches to `visible`
2. Children automatically switch to `visible`
3. Stagger timing applies
4. Each child animates based on its variants

---

## How to Use

### Basic Usage with StaggerContainer

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>;
```

### Different Animation Types

```tsx
<StaggerContainer>
  <StaggerItem animationType="spring">Spring (default)</StaggerItem>
  <StaggerItem animationType="tween">Tween</StaggerItem>
</StaggerContainer>
```

### Different Directions

```tsx
<StaggerContainer>
  <StaggerItem direction="up">Up (default)</StaggerItem>
  <StaggerItem direction="down">Down</StaggerItem>
  <StaggerItem direction="left">Left</StaggerItem>
  <StaggerItem direction="right">Right</StaggerItem>
  <StaggerItem direction="none">None (fade only)</StaggerItem>
</StaggerContainer>
```

### With Scale

```tsx
<StaggerContainer>
  <StaggerItem withScale scale={0.7}>
    Scale + fade + slide
  </StaggerItem>
</StaggerContainer>
```

### Custom Spring Config

```tsx
<StaggerContainer>
  <StaggerItem animationType="spring" springDamping={8} springStiffness={150}>
    Bouncy spring
  </StaggerItem>
</StaggerContainer>
```

### Custom Tween Config

```tsx
<StaggerContainer>
  <StaggerItem animationType="tween" duration={0.6} easing="smooth">
    Smooth tween
  </StaggerItem>
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
    <StaggerContainer staggerDelay={0.1}>
      {features.map((feature, index) => (
        <StaggerItem
          key={feature.id}
          animationType={index % 2 === 0 ? 'spring' : 'tween'}
          direction="up"
          withScale={index === 0}
        >
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

1. **Lists with StaggerContainer**

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
       <StaggerItem key={card.id} withScale>
         <Card>{card.content}</Card>
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

3. **Feature Lists**

   ```tsx
   <StaggerContainer>
     {features.map((feature) => (
       <StaggerItem key={feature.id} direction="left">
         <Feature feature={feature} />
       </StaggerItem>
     ))}
   </StaggerContainer>
   ```

### ❌ Avoid For:

1. **Using Without StaggerContainer**

   ```tsx
   // ❌ BAD: No parent container
   <StaggerItem>Item</StaggerItem>

   // ✅ GOOD: With parent container
   <StaggerContainer>
     <StaggerItem>Item</StaggerItem>
   </StaggerContainer>
   ```

2. **Single Elements**

   - No need for stagger with one element
   - Use `FadeIn` instead

---

## Common Pitfalls

### 1. ❌ Using Without StaggerContainer

```tsx
// ❌ BAD: No parent, no stagger
<StaggerItem>Item</StaggerItem>

// ✅ GOOD: With parent container
<StaggerContainer>
  <StaggerItem>Item</StaggerItem>
</StaggerContainer>
```

**Why it's bad:**

- StaggerItem needs parent to control timing
- No stagger effect without container
- Animation won't work as expected

### 2. ❌ Mixing Animation Types Inconsistently

```tsx
// ❌ BAD: Inconsistent types (jarring)
<StaggerContainer>
  <StaggerItem animationType="spring">Item 1</StaggerItem>
  <StaggerItem animationType="tween">Item 2</StaggerItem>
  <StaggerItem animationType="spring">Item 3</StaggerItem>
</StaggerContainer>

// ✅ GOOD: Consistent types (smooth)
<StaggerContainer>
  <StaggerItem animationType="spring">Item 1</StaggerItem>
  <StaggerItem animationType="spring">Item 2</StaggerItem>
  <StaggerItem animationType="spring">Item 3</StaggerItem>
</StaggerContainer>
```

**Why it's bad:**

- Mixing types creates inconsistent feel
- Jarring transitions between items
- Poor UX

### 3. ❌ Too Many Combined Effects

```tsx
// ❌ BAD: Too many effects (overwhelming)
<StaggerItem
  withFade
  direction="up"
  withScale
  scale={0.3}
  animationType="spring"
  springDamping={5}
>
  Content
</StaggerItem>

// ✅ GOOD: Balanced effects (smooth)
<StaggerItem withFade direction="up">
  Content
</StaggerItem>
```

**Why it's bad:**

- Too many simultaneous effects
- Overwhelming for users
- Hard to focus on content

### 4. ❌ Wrong Spring Config

```tsx
// ❌ BAD: Too bouncy (distracting)
<StaggerItem
  animationType="spring"
  springDamping={5}
  springStiffness={200}
>
  Content
</StaggerItem>

// ✅ GOOD: Balanced (smooth)
<StaggerItem
  animationType="spring"
  springDamping={12}
  springStiffness={100}
>
  Content
</StaggerItem>
```

**Why it's bad:**

- Too low damping = excessive bounce
- Too high stiffness = too fast
- Find balance for your use case

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion, Transition } from 'framer-motion';
import { ReactNode } from 'react';

interface MyStaggerItemProps {
  children: ReactNode;
  animationType?: 'spring' | 'tween';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  withFade?: boolean;
}

export const MyStaggerItem = ({
  children,
  animationType = 'spring',
  direction = 'up',
  withFade = true,
}: MyStaggerItemProps) => {
  // Component logic
};
```

#### 2. **Calculate Direction Offset**

```typescript
const directionOffset = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
  none: { x: 0, y: 0 },
};

const slideOffset = directionOffset[direction];
```

#### 3. **Build Hidden State**

```typescript
const hidden: Record<string, number> = {};

if (withFade) {
  hidden.opacity = 0;
}

if (direction !== 'none') {
  hidden.x = slideOffset.x;
  hidden.y = slideOffset.y;
}
```

#### 4. **Build Visible State**

```typescript
const visible: Record<string, number> = {};

if (withFade) {
  visible.opacity = 1;
}

if (direction !== 'none') {
  visible.x = 0;
  visible.y = 0;
}
```

#### 5. **Build Transition**

```typescript
const buildTransition = (): Transition => {
  if (animationType === 'spring') {
    return {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    };
  } else {
    return {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut',
    };
  }
};
```

#### 6. **Create Variants**

```typescript
const itemVariants = {
  hidden,
  visible: {
    ...visible,
    transition: buildTransition(),
  },
};
```

#### 7. **Create Motion Element**

```typescript
return <motion.div variants={itemVariants}>{children}</motion.div>;
```

---

## Advanced Tips

### 1. **Different Configs for Different Items**

```typescript
{
  items.map((item, index) => (
    <StaggerItem
      key={item.id}
      animationType={index % 2 === 0 ? 'spring' : 'tween'}
      direction={index % 4 === 0 ? 'up' : 'left'}
    >
      {item.content}
    </StaggerItem>
  ));
}
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <StaggerContainer>
    {items.map((item) => (
      <StaggerItem key={item.id}>{item.content}</StaggerItem>
    ))}
  </StaggerContainer>
</FadeIn>
```

### 3. **Performance Optimization**

```typescript
// Use consistent animation types for better performance
const animationType = 'spring'; // Same for all items

{
  items.map((item) => (
    <StaggerItem key={item.id} animationType={animationType}>
      {item.content}
    </StaggerItem>
  ));
}
```

### 4. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but stagger still works (just faster).

---

## Summary

**StaggerItem** is a powerful component that:

- ✅ Works with StaggerContainer for sequential animations
- ✅ Supports 2 animation types (spring, tween)
- ✅ Supports 5 directions (up, down, left, right, none)
- ✅ Can combine fade, slide, and scale effects
- ✅ Uses variants pattern for clean code
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Always use with StaggerContainer
2. Choose consistent animation types
3. Keep effects balanced (don't overdo it)
4. Use spring for playful, tween for professional
5. Combine effects thoughtfully

**Next Steps:**

- Experiment with different animation types
- Try different directions and effects
- Combine with StaggerContainer
- Test with different numbers of items

---

Happy animating! 🎉
