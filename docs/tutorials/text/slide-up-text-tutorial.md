# SlideUpText Component - Complete Tutorial

## 📚 Table of Contents

1. [What is SlideUpText?](#what-is-slideuptext)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is SlideUpText?

**SlideUpText** is a React component that slides entire text blocks up from below. It's a clean, simple reveal animation perfect for headlines, titles, and short text blocks.

### Visual Effect

- Text starts: **100% below** its container (completely hidden)
- Text animates to: **normal position** (fully visible)
- Uses **smooth cubic-bezier easing** for elegant motion
- Entire text block moves as one unit (not word-by-word or character-by-character)

---

## Visual Behavior

```
Initial State (hidden):
┌─────────────────────────────────┐
│                                 │
│                                 │
│                                 │
│  [Text block is 100% below]    │ ← Hidden below container
└─────────────────────────────────┘

Animation:
Text slides up smoothly from below

Final State (visible):
┌─────────────────────────────────┐
│  Your Text Block                │
│  ↑ Now fully visible            │
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

- `motion` provides animated components (`motion.div`)
- `ReactNode` is the type for children prop

### 2. Props Interface

```typescript
interface SlideUpTextProps {
  children: ReactNode; // Required: Content to animate
  delay?: number; // Optional: Initial delay before animation starts
  duration?: number; // Optional: Animation duration (default: 0.8s)
  className?: string; // Optional: Additional CSS classes
  viewportMargin?: string; // Optional: When to trigger animation (default: '-100px')
  once?: boolean; // Optional: Animate once or every time (default: true)
}
```

**Key Props:**

- `children`: The content to animate (can be text, elements, etc.)
- `duration`: How long the animation takes (0.8s default)
- `delay`: Initial delay before animation starts
- `viewportMargin`: When to trigger animation
- `once`: `true` = animate once, `false` = animate every time

### 3. Overflow Container

```typescript
return (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '100%' }}
      whileInView={{ y: 0 }}
      // ...
    >
      {children}
    </motion.div>
  </div>
);
```

**Breaking it down:**

**`<div className="overflow-hidden">`**

- Creates a container that hides overflow
- When text is at `y: '100%'`, it's completely hidden below
- Essential for the slide-up effect!

**Why `overflow-hidden`?**

```
Without overflow-hidden:
┌─────────────────────────────────┐
│                                 │
│  [Text visible below container] │ ← Text shows even when y: 100%
└─────────────────────────────────┘

With overflow-hidden:
┌─────────────────────────────────┐
│                                 │
│                                 │ ← Text hidden when y: 100%
└─────────────────────────────────┘
```

### 4. Initial State

```typescript
initial={{ y: '100%' }}
```

**What it does:**

- Starts text at `y: '100%'` (100% of its height below the container)
- Text is completely hidden below the visible area

**Why `'100%'` instead of pixels?**

- `'100%'` = 100% of the element's height
- Works with any text size automatically
- More flexible than fixed pixel values

**Visual:**

```
Container (overflow-hidden):
┌─────────────────────────────────┐
│                                 │ ← Visible area
│                                 │
└─────────────────────────────────┘
  ↓
  [Text at y: 100%] ← Hidden below
```

### 5. Animate State

```typescript
whileInView={{ y: 0 }}
```

**What it does:**

- When element enters viewport, animate to `y: 0` (normal position)
- Text slides up into view

**Why `whileInView`?**

- Animates only when user scrolls to it
- Better performance (doesn't animate off-screen elements)
- Better UX (animations happen as user scrolls)

### 6. Viewport Configuration

```typescript
viewport={{
  once,
  margin: viewportMargin,
}}
```

**What it does:**

- `once`: Controls whether animation repeats
- `margin`: Controls when animation triggers

**Viewport Margin Explained:**

- `margin: '-100px'`: Animation starts **100px before** element enters viewport
- `margin: '0px'`: Animation starts **exactly when** element enters viewport
- `margin: '100px'`: Animation starts **100px after** element enters viewport

### 7. Transition Configuration

```typescript
transition={{
  duration,
  delay,
  ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier
}}
```

**Breaking it down:**

**`duration`**

- How long the animation takes (default: 0.8s)
- Longer = slower, smoother
- Shorter = faster, snappier

**`delay`**

- Initial delay before animation starts
- Useful for sequencing multiple elements

**`ease: [0.33, 1, 0.68, 1]`**

- Custom cubic-bezier easing function
- Creates smooth, elegant motion
- "Ease out" curve - fast start, slow end

**Cubic-Bezier Explained:**

```
[0.33, 1, 0.68, 1]
  │    │   │    │
  │    │   │    └─ End point Y
  │    │   └────── End point X
  │    └────────── Start point Y
  └─────────────── Start point X
```

This creates a smooth "ease out" curve - starts fast, ends slow.

---

## Core Concepts Deep Dive

### 1. Percentage-Based Transforms

**`y: '100%'`** uses percentage instead of pixels.

**Why percentages?**

```typescript
// ❌ Pixels (BAD)
y: 100; // Fixed 100px - doesn't work for different text sizes

// ✅ Percentage (GOOD)
y: '100%'; // 100% of element height - works for any size
```

**Benefits:**

- Works with any text size
- Responsive to content changes
- More flexible than fixed values

### 2. Overflow Hidden Pattern

**The overflow-hidden container is essential!**

```typescript
<div className="overflow-hidden">
  {' '}
  {/* Hides overflow */}
  <motion.div y="100%">
    {' '}
    {/* Text starts below */}
    {children}
  </motion.div>
</div>
```

**How it works:**

1. Container has `overflow-hidden` (clips content)
2. Text starts at `y: '100%'` (below container)
3. Text animates to `y: 0` (normal position)
4. Container hides text when it's below

### 3. Smooth Easing Function

**`[0.33, 1, 0.68, 1]`** is a custom cubic-bezier curve.

**What it creates:**

- Fast start (text quickly begins moving)
- Slow end (text gently settles into place)
- Smooth, elegant motion
- Professional feel

**Comparison:**

```typescript
// Linear (mechanical)
ease: 'linear';

// Ease out (smooth, default)
ease: [0.33, 1, 0.68, 1];

// Bounce (playful)
ease: 'bounce';
```

---

## How to Use

### Basic Usage

```tsx
import { SlideUpText } from '@/components/animations';

export default function MyPage() {
  return (
    <SlideUpText>
      <h1>Welcome to our site</h1>
    </SlideUpText>
  );
}
```

### With Custom Delay

```tsx
<SlideUpText delay={0.5}>
  <h2>This text appears after 0.5 seconds</h2>
</SlideUpText>
```

### Faster Animation

```tsx
<SlideUpText duration={0.5}>
  <h2>Quick slide up</h2>
</SlideUpText>
```

### Slower Animation

```tsx
<SlideUpText duration={1.2}>
  <h2>Slow, dramatic slide up</h2>
</SlideUpText>
```

### Custom Styling

```tsx
<SlideUpText className="text-4xl font-bold text-blue-600">
  <h1>Styled text</h1>
</SlideUpText>
```

### Multiple Lines with Stagger

```tsx
<div className="space-y-4">
  <SlideUpText delay={0}>
    <h2>First line</h2>
  </SlideUpText>
  <SlideUpText delay={0.2}>
    <h2>Second line</h2>
  </SlideUpText>
  <SlideUpText delay={0.4}>
    <h2>Third line</h2>
  </SlideUpText>
</div>
```

### Complete Example

```tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <SlideUpText delay={0.2}>
          <h1 className="text-6xl font-bold">Welcome</h1>
        </SlideUpText>

        <SlideUpText delay={0.4}>
          <p className="text-xl text-gray-600">
            Experience next-generation design
          </p>
        </SlideUpText>

        <SlideUpText delay={0.6}>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg">
            Get Started
          </button>
        </SlideUpText>
      </div>
    </section>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Headlines**

   ```tsx
   <SlideUpText>
     <h1>Main Headline</h1>
   </SlideUpText>
   ```

2. **Titles**

   ```tsx
   <SlideUpText>
     <h2>Section Title</h2>
   </SlideUpText>
   ```

3. **Short Text Blocks**

   ```tsx
   <SlideUpText>
     <p>Short description text</p>
   </SlideUpText>
   ```

4. **Call-to-Action Buttons**

   ```tsx
   <SlideUpText delay={0.3}>
     <button>Get Started</button>
   </SlideUpText>
   ```

5. **Hero Sections**

   ```tsx
   <SlideUpText delay={0.2}>
     <h1>Welcome to the Future</h1>
   </SlideUpText>
   ```

### ❌ Avoid For:

1. **Long Paragraphs**

   - Entire block slides as one unit
   - Can feel slow for long text
   - Use `FadeIn` or `TextReveal` instead

2. **Body Text**

   - Distracting for reading
   - Use static text or subtle `FadeIn`

3. **Frequently Changing Content**

   - Re-animates every time content changes
   - Can be jarring

---

## Common Pitfalls

### 1. ❌ Forgetting Overflow Hidden

```tsx
// ❌ BAD: Text shows even when below
<motion.div initial={{ y: '100%' }}>
  {children}
</motion.div>

// ✅ GOOD: Container hides overflow
<div className="overflow-hidden">
  <motion.div initial={{ y: '100%' }}>
    {children}
  </motion.div>
</div>
```

**Why it's bad:**

- Text shows even when it's supposed to be hidden
- Animation doesn't work correctly
- No slide-up effect

### 2. ❌ Using Pixels Instead of Percentage

```tsx
// ❌ BAD: Fixed pixels don't work for all sizes
initial={{ y: 100 }}

// ✅ GOOD: Percentage works for any size
initial={{ y: '100%' }}
```

**Why it's bad:**

- Fixed pixels don't scale with content
- Doesn't work for different text sizes
- Not responsive

### 3. ❌ Too Fast or Too Slow Duration

```tsx
// ❌ BAD: Too fast (jarring)
<SlideUpText duration={0.2}>Text</SlideUpText>

// ❌ BAD: Too slow (feels sluggish)
<SlideUpText duration={2}>Text</SlideUpText>

// ✅ GOOD: Balanced (smooth)
<SlideUpText duration={0.8}>Text</SlideUpText>
```

**Recommended Range:**

- **Fast**: 0.5 - 0.6s (energetic)
- **Medium**: 0.7 - 0.9s (balanced, default)
- **Slow**: 1.0 - 1.5s (dramatic)

### 4. ❌ Not Using whileInView

```tsx
// ❌ BAD: Animates immediately, even if off-screen
<motion.div animate={{ y: 0 }}>

// ✅ GOOD: Animates when user scrolls to it
<motion.div whileInView={{ y: 0 }}>
```

**Why it's bad:**

- Wastes resources animating invisible elements
- User might miss the animation
- Poor performance

### 5. ❌ Nesting Incorrectly

```tsx
// ❌ BAD: overflow-hidden on wrong element
<SlideUpText className="overflow-hidden">
  <h1>Text</h1>
</SlideUpText>

// ✅ GOOD: overflow-hidden is inside component
<SlideUpText>
  <h1>Text</h1>
</SlideUpText>
```

**Why it's bad:**

- Overflow-hidden needs to be on the container
- Component handles it internally
- Don't override it

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MySlideAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export const MySlideAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
}: MySlideAnimationProps) => {
  // Component logic
};
```

#### 2. **Create Overflow Container**

```typescript
return (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: '100%' }} // Start below
      whileInView={{ y: 0 }} // End at normal position
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1], // Smooth easing
      }}
    >
      {children}
    </motion.div>
  </div>
);
```

#### 3. **Add Configuration Props**

```typescript
interface MySlideAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}
```

---

## Advanced Tips

### 1. **Different Directions**

```typescript
// Slide from different directions
initial={{ x: '-100%' }} // Slide from left
initial={{ x: '100%' }} // Slide from right
initial={{ y: '-100%' }} // Slide from top
initial={{ y: '100%' }} // Slide from bottom (default)
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <SlideUpText delay={0.4}>
    <h1>Nested animations</h1>
  </SlideUpText>
</FadeIn>
```

### 3. **Custom Easing Functions**

```typescript
// Different easing curves
ease: [0.25, 0.1, 0.25, 1], // Smooth
ease: [0.68, -0.55, 0.265, 1.55], // Bounce
ease: 'easeOut', // Standard
```

### 4. **Multiple Elements with Stagger**

```tsx
<div className="space-y-4">
  {items.map((item, index) => (
    <SlideUpText key={item.id} delay={index * 0.1}>
      <div>{item.content}</div>
    </SlideUpText>
  ))}
</div>
```

### 5. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

<motion.div
  initial={{ y: prefersReducedMotion ? 0 : '100%' }}
  whileInView={{ y: 0 }}
  transition={{
    duration: prefersReducedMotion ? 0 : duration,
  }}
>
```

---

## Summary

**SlideUpText** is a powerful component that:

- ✅ Slides entire text blocks up from below
- ✅ Uses percentage-based transforms for flexibility
- ✅ Implements overflow-hidden pattern for clean reveals
- ✅ Uses smooth cubic-bezier easing for elegant motion
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Always use `overflow-hidden` container
2. Use percentage (`'100%'`) instead of pixels
3. Use `whileInView` instead of `animate`
4. Keep duration between 0.5s - 1.5s
5. Use smooth easing for elegant motion

**Next Steps:**

- Experiment with different durations
- Try different easing functions
- Combine with other animation components
- Test on different devices for performance

---

Happy animating! 🎉
