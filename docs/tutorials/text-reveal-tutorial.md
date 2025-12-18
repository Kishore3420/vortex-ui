# TextReveal Component - Complete Tutorial

## 📚 Table of Contents

1. [What is TextReveal?](#what-is-textreveal)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is TextReveal?

**TextReveal** is a React component that animates text by revealing words one at a time. Each word fades in and slides up from below, creating a smooth, sequential reveal effect.

### Visual Effect

- Words start: **invisible** and **20px below** their final position
- Words animate to: **fully visible** and **in their normal position**
- Animation uses **spring physics** for natural, bouncy motion
- Words appear **sequentially** with a delay between each

---

## Visual Behavior

```
Initial State (hidden):
┌─────────────────────────────────┐
│                                 │
│  [word1] ← invisible, 20px down│
│  [word2] ← invisible, 20px down│
│  [word3] ← invisible, 20px down│
└─────────────────────────────────┘

Animation Sequence:
Time 0.0s:  [word1] appears (fade + slide up)
Time 0.12s: [word2] appears (fade + slide up)
Time 0.24s: [word3] appears (fade + slide up)
...

Final State (visible):
┌─────────────────────────────────┐
│  word1 word2 word3              │
│  ↑ All visible, in position     │
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
import { useMemo } from 'react';
```

**Why:**

- `motion` provides animated components (`motion.div`, `motion.span`)
- `useMemo` prevents unnecessary re-computation

### 2. Props Interface

```typescript
interface TextRevealProps {
  text: string; // Required: The text to animate
  delay?: number; // Optional: Initial delay before animation starts
  className?: string; // Optional: Additional CSS classes
  staggerDelay?: number; // Optional: Delay between each word (default: 0.12s)
  viewportMargin?: string; // Optional: When to trigger animation (default: '-100px')
  once?: boolean; // Optional: Animate once or every time (default: true)
}
```

**Key Props:**

- `text`: The actual text content to animate
- `staggerDelay`: Time between each word (0.12s = 120ms)
- `viewportMargin`: Negative value = starts before visible, positive = starts after visible
- `once`: `true` = animate once, `false` = animate every time it enters viewport

### 3. Text Splitting with useMemo

```typescript
const words = useMemo(() => text.split(' '), [text]);
```

**What it does:**

- Splits text into an array of words: `"Hello world"` → `["Hello", "world"]`
- `useMemo` caches the result and only re-computes when `text` changes

**Why useMemo?**

```typescript
// ❌ WITHOUT useMemo (BAD)
const words = text.split(' '); // Runs on EVERY render, even if text didn't change

// ✅ WITH useMemo (GOOD)
const words = useMemo(() => text.split(' '), [text]); // Only runs when text changes
```

**Performance Impact:**

- Without `useMemo`: Re-splits on every render (parent re-render, state change, etc.)
- With `useMemo`: Only splits when `text` prop actually changes
- For long text, this saves significant computation

### 4. Container Variant

```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay, // Delay between each child
      delayChildren: delay, // Initial delay before starting
    },
  },
};
```

**What it does:**

- Defines two states: `hidden` (invisible) and `visible` (visible)
- Controls the **parent container's** opacity
- Orchestrates **child animations** with stagger timing

**Key Properties:**

- `staggerChildren`: Time delay between each child animation
  - `0.12` = 120ms between words
  - Word 1 starts at 0s, Word 2 at 0.12s, Word 3 at 0.24s, etc.
- `delayChildren`: Initial delay before any child starts
  - `delay={0.2}` = wait 200ms, then start word 1

**Visual Timeline:**

```
Time:    0.0s    0.2s    0.32s   0.44s   0.56s
         │       │       │       │       │
delay ───┘       │       │       │       │
                 │       │       │       │
word1 ───────────┼───────┘       │       │
                 │               │       │
stagger ─────────┼───────────────┼───────┘
                 │               │
word2 ───────────┼───────────────┼───────┘
                 │               │
word3 ───────────┼───────────────┼───────┘
```

### 5. Child Variant

```typescript
const child = {
  hidden: {
    opacity: 0, // Start invisible
    y: 20, // Start 20 pixels below
  },
  visible: {
    opacity: 1, // End fully visible
    y: 0, // End at normal position
    transition: {
      type: 'spring' as const, // Use spring physics
      damping: 12, // Controls bounce (lower = more bounce)
      stiffness: 100, // Controls speed (higher = faster)
    },
  },
};
```

**What it does:**

- Defines animation for **each individual word**
- Each word starts invisible and 20px below, ends visible and in place
- Uses **spring physics** for natural motion

**Spring Physics Explained:**

```typescript
type: 'spring'; // Natural, bouncy animation (like a spring)
```

**Damping:**

- **Lower (8-10)**: More bounce, overshoots more
- **Medium (12-15)**: Balanced, slight bounce
- **Higher (20+)**: Less bounce, more controlled

**Stiffness:**

- **Lower (50-80)**: Slower, more relaxed
- **Medium (100-150)**: Balanced speed
- **Higher (200+)**: Faster, snappier

**Why `as const`?**

```typescript
type: 'spring' as const; // TypeScript: treat as literal type, not string
```

Without `as const`, TypeScript sees `'spring'` as `string`, which causes type errors. `as const` makes it the literal type `'spring'`.

### 6. Motion Container

```typescript
<motion.div
  className={className}
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once,
    margin: viewportMargin,
  }}
>
```

**Breaking it down:**

**`variants={container}`**

- Applies the container variant (defines `hidden` and `visible` states)

**`initial="hidden"`**

- Component starts in `hidden` state (invisible)

**`whileInView="visible"`**

- When element enters viewport, switch to `visible` state
- This triggers the animation!

**`viewport` options:**

```typescript
viewport={{
  once: true,              // Animate only once (default)
  margin: '-100px',        // Start animation 100px before element is visible
}}
```

**Viewport Margin Explained:**

- `margin: '-100px'`: Animation starts **100px before** element enters viewport
- `margin: '0px'`: Animation starts **exactly when** element enters viewport
- `margin: '100px'`: Animation starts **100px after** element enters viewport

**Why `-100px`?**

- Creates anticipation - animation starts slightly before user sees it
- By the time user scrolls to it, animation is already in progress
- Feels more natural and responsive

### 7. Mapping Words

```typescript
{
  words.map((word, index) => (
    <motion.span
      variants={child}
      key={`${word}-${index}`}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));
}
```

**Breaking it down:**

**`words.map((word, index) => ...)`**

- Iterates through each word in the array
- Creates a `motion.span` for each word

**`variants={child}`**

- Each word uses the `child` variant
- Inherits stagger timing from parent container

**`key={word-${index}}`**

- React requires unique keys for list items
- `word-${index}` ensures uniqueness even if words repeat
- Example: `"hello hello"` → keys: `"hello-0"`, `"hello-1"`

**`className="inline-block mr-2"`**

- `inline-block`: Allows transform animations (y: 20)
- `mr-2`: Adds margin-right for spacing between words

**Why `inline-block`?**

- `inline` elements can't be transformed
- `block` elements break to new lines
- `inline-block` allows both: stays inline AND can be transformed

---

## Core Concepts Deep Dive

### 1. Framer Motion Variants

**Variants** are reusable animation state definitions. They're like CSS keyframes but more powerful.

```typescript
// Define states
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Use them
<motion.div variants={variants} initial="hidden" animate="visible" />;
```

**Benefits:**

- Reusable across components
- Cleaner code than inline animations
- Better performance (Framer Motion optimizes variants)
- Can be passed to children for orchestration

### 2. Stagger Animation

**Stagger** creates sequential animations - one after another.

```typescript
staggerChildren: 0.12; // 120ms between each child
```

**How it works:**

1. Parent container triggers animation
2. Child 1 starts immediately
3. Child 2 starts after `staggerDelay` (0.12s)
4. Child 3 starts after another `staggerDelay` (0.24s total)
5. And so on...

**Visual Example:**

```
Word 1: ████████████████ (starts at 0.0s)
Word 2:         ████████████████ (starts at 0.12s)
Word 3:                 ████████████████ (starts at 0.24s)
```

### 3. Spring Physics

Spring animations simulate real-world physics - like a spring bouncing.

**Spring vs Tween:**

```typescript
// Spring (natural, bouncy)
transition: { type: 'spring', damping: 12, stiffness: 100 }

// Tween (linear, controlled)
transition: { duration: 0.6, ease: 'easeOut' }
```

**When to use Spring:**

- ✅ Natural, organic feel
- ✅ Playful, energetic animations
- ✅ UI elements that should feel "alive"

**When to use Tween:**

- ✅ Precise timing needed
- ✅ Professional, corporate feel
- ✅ Consistent duration required

### 4. Viewport Detection

**`whileInView`** triggers animations when elements enter the viewport.

```typescript
whileInView = 'visible'; // Switch to "visible" when in viewport
```

**Why use viewport triggering?**

- ✅ Better performance (only animates visible elements)
- ✅ Better UX (animations happen as user scrolls)
- ✅ Saves battery on mobile devices

**Without viewport triggering:**

```typescript
animate = 'visible'; // Animates immediately on mount (even if off-screen)
```

**With viewport triggering:**

```typescript
whileInView = 'visible'; // Animates only when user scrolls to it
```

---

## How to Use

### Basic Usage

```tsx
import { TextReveal } from '@/components/animations';

export default function MyPage() {
  return <TextReveal text="Welcome to our amazing website" />;
}
```

### With Custom Delay

```tsx
<TextReveal text="This text appears after 0.5 seconds" delay={0.5} />
```

### Faster Stagger (Words appear quicker)

```tsx
<TextReveal
  text="Quick reveal with fast stagger"
  staggerDelay={0.08} // 80ms between words (faster)
/>
```

### Slower Stagger (Words appear slower)

```tsx
<TextReveal
  text="Slow, dramatic reveal"
  staggerDelay={0.2} // 200ms between words (slower)
/>
```

### Custom Styling

```tsx
<TextReveal
  text="Styled text reveal"
  className="text-4xl font-bold text-blue-600"
/>
```

### Animate Every Time (Not Just Once)

```tsx
<TextReveal
  text="Repeats on every scroll"
  once={false} // Animates every time it enters viewport
/>
```

### Complete Example

```tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <TextReveal
          text="Welcome to the Future"
          delay={0.2}
          staggerDelay={0.15}
          className="text-6xl font-bold"
        />

        <TextReveal
          text="Experience next-generation web design"
          delay={0.6}
          staggerDelay={0.1}
          className="text-xl text-gray-600"
        />
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
   <TextReveal text="Build Amazing Products" className="text-7xl" />
   ```

2. **Headings**

   ```tsx
   <TextReveal text="Our Services" className="text-4xl font-bold" />
   ```

3. **Call-to-Action Text**

   ```tsx
   <TextReveal text="Start Your Journey Today" className="text-2xl" />
   ```

4. **Feature Descriptions**

   ```tsx
   <TextReveal text="Powerful features that help you succeed" delay={0.3} />
   ```

5. **Testimonials**
   ```tsx
   <TextReveal
     text="This product changed my life completely"
     staggerDelay={0.1}
   />
   ```

### ❌ Avoid For:

1. **Body Text / Paragraphs**

   - Too many words = too long animation
   - Distracting for reading
   - Use `FadeIn` instead

2. **Frequently Changing Text**

   - Re-animates every time text changes
   - Can be jarring for users

3. **Critical Information**

   - Users might miss important info during animation
   - Use static text for critical content

4. **Mobile-Heavy Sites**
   - Long animations can feel slow on mobile
   - Consider shorter `staggerDelay` or skip animation

---

## Common Pitfalls

### 1. ❌ Animating on Mount Instead of Viewport

```tsx
// ❌ BAD: Animates immediately, even if off-screen
<motion.div animate="visible" />

// ✅ GOOD: Animates when user scrolls to it
<motion.div whileInView="visible" />
```

**Why it's bad:**

- Wastes resources animating invisible elements
- User might miss the animation
- Poor performance

### 2. ❌ Not Using useMemo for Expensive Operations

```tsx
// ❌ BAD: Re-splits on every render
const words = text.split(' ');

// ✅ GOOD: Only splits when text changes
const words = useMemo(() => text.split(' '), [text]);
```

**Why it's bad:**

- Unnecessary computation on every render
- Can cause performance issues with long text

### 3. ❌ Using Index as Key

```tsx
// ❌ BAD: Can cause issues with duplicate words
{
  words.map((word, index) => <motion.span key={index}>{word}</motion.span>);
}

// ✅ GOOD: Unique key even with duplicates
{
  words.map((word, index) => (
    <motion.span key={`${word}-${index}`}>{word}</motion.span>
  ));
}
```

**Why it's bad:**

- React can't properly track elements
- Can cause animation glitches
- Duplicate words cause key conflicts

### 4. ❌ Too Fast or Too Slow Stagger

```tsx
// ❌ BAD: Too fast (hard to read)
<TextReveal text="..." staggerDelay={0.01} />

// ❌ BAD: Too slow (feels sluggish)
<TextReveal text="..." staggerDelay={0.5} />

// ✅ GOOD: Balanced (readable and smooth)
<TextReveal text="..." staggerDelay={0.12} />
```

**Recommended Range:**

- **Fast**: 0.08 - 0.1s (energetic, quick)
- **Medium**: 0.12 - 0.15s (balanced, default)
- **Slow**: 0.2 - 0.3s (dramatic, deliberate)

### 5. ❌ Forgetting Inline-Block for Transforms

```tsx
// ❌ BAD: Transform won't work
<motion.span className="inline">{word}</motion.span>

// ✅ GOOD: Transform works
<motion.span className="inline-block">{word}</motion.span>
```

**Why it's bad:**

- `inline` elements can't be transformed
- Animation won't work (y: 20 won't move the element)

### 6. ❌ Not Handling Empty or Short Text

```tsx
// ❌ BAD: No handling for edge cases
const words = text.split(' ');

// ✅ GOOD: Handle edge cases
const words = useMemo(() => {
  if (!text || text.trim() === '') return [];
  return text.split(' ').filter((word) => word.length > 0);
}, [text]);
```

### 7. ❌ Too Many Words (Performance)

```tsx
// ❌ BAD: 100+ words = 100+ animated elements
<TextReveal text="Very long text with many many words..." />

// ✅ GOOD: Use for short phrases
<TextReveal text="Short impactful phrase" />
```

**Performance Impact:**

- Each word = 1 animated element
- 100 words = 100 simultaneous animations
- Can cause performance issues on low-end devices

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface MyAnimationProps {
  // Define your props
}

export const MyAnimation = ({ ...props }: MyAnimationProps) => {
  // Component logic
};
```

#### 2. **Process Your Data**

```typescript
// If you need to split/process data, use useMemo
const processedData = useMemo(() => {
  // Your processing logic
  return data.split('...');
}, [data]);
```

#### 3. **Define Variants**

```typescript
// Container variant (orchestrates children)
const container = {
  hidden: { /* initial state */ },
  visible: {
    /* final state */,
    transition: {
      staggerChildren: 0.1,  // Delay between children
      delayChildren: 0,      // Initial delay
    },
  },
};

// Child variant (individual items)
const child = {
  hidden: { /* initial state */ },
  visible: {
    /* final state */,
    transition: { /* animation config */ },
  },
};
```

#### 4. **Create Motion Elements**

```typescript
return (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
  >
    {items.map((item, index) => (
      <motion.span key={`${item}-${index}`} variants={child}>
        {item}
      </motion.span>
    ))}
  </motion.div>
);
```

#### 5. **Add Configuration Props**

```typescript
interface MyAnimationProps {
  // Required props
  data: string;

  // Optional configuration
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}
```

### Example: Character-by-Character Reveal

```typescript
'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CharRevealProps {
  text: string;
  delay?: number;
  staggerDelay?: number;
  className?: string;
}

export const CharReveal = ({
  text,
  delay = 0,
  staggerDelay = 0.03,
  className = '',
}: CharRevealProps) => {
  // Split into characters
  const chars = useMemo(() => text.split(''), [text]);

  // Container variant
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  // Child variant (each character)
  const child = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
```

---

## Advanced Tips

### 1. **Custom Spring Configurations**

```typescript
// Bouncy spring
const child = {
  visible: {
    transition: {
      type: 'spring' as const,
      damping: 8, // Lower = more bounce
      stiffness: 150, // Higher = faster
    },
  },
};

// Smooth spring
const child = {
  visible: {
    transition: {
      type: 'spring' as const,
      damping: 20, // Higher = less bounce
      stiffness: 100, // Medium = balanced
    },
  },
};
```

### 2. **Combining with Other Animations**

```tsx
<FadeIn direction="up" delay={0.2}>
  <TextReveal text="Nested animations" delay={0.4} />
</FadeIn>
```

### 3. **Conditional Animation**

```tsx
{
  shouldAnimate && <TextReveal text="Conditional text" />;
}
```

### 4. **Dynamic Text Updates**

```tsx
const [text, setText] = useState('Initial text');

// TextReveal will re-animate when text changes
<TextReveal text={text} />;
```

### 5. **Performance Optimization for Long Text**

```typescript
// Only animate first N words
const words = useMemo(() => {
  const allWords = text.split(' ');
  return allWords.slice(0, 20); // Limit to 20 words
}, [text]);
```

### 6. **Accessibility Considerations**

Framer Motion automatically respects `prefers-reduced-motion`, but you can add custom handling:

```typescript
const prefersReducedMotion = useReducedMotion();

const child = {
  visible: {
    opacity: 1,
    y: prefersReducedMotion ? 0 : 0, // No movement if reduced motion
    transition: {
      duration: prefersReducedMotion ? 0 : undefined, // Instant if reduced motion
    },
  },
};
```

---

## Summary

**TextReveal** is a powerful component that:

- ✅ Reveals text word-by-word with smooth animations
- ✅ Uses Framer Motion variants for clean, reusable code
- ✅ Implements stagger timing for sequential reveals
- ✅ Uses spring physics for natural motion
- ✅ Triggers on viewport entry for better performance
- ✅ Is fully configurable and customizable

**Key Takeaways:**

1. Always use `useMemo` for expensive operations
2. Use `whileInView` instead of `animate` for scroll-triggered animations
3. Use unique keys for list items
4. Use `inline-block` for transformable inline elements
5. Keep stagger delays between 0.08s - 0.2s for best UX
6. Limit word count for performance

**Next Steps:**

- Experiment with different `staggerDelay` values
- Try different spring configurations
- Combine with other animation components
- Test on different devices for performance

---

Happy animating! 🎉
