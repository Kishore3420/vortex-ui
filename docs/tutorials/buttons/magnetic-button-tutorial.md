# MagneticButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is MagneticButton?](#what-is-magneticbutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is MagneticButton?

**MagneticButton** is an interactive button component that creates a magnetic attraction effect. When you move your mouse near the button, it smoothly follows your cursor, creating an engaging, interactive experience. The button uses spring physics for natural, bouncy motion.

### Visual Effect

- Button **attracts** to mouse cursor position
- Smooth **spring physics** animation
- Button **returns** to center when mouse leaves
- Customizable **strength** of attraction
- **GPU-accelerated** for smooth 60fps performance

---

## Visual Behavior

```
Initial State (mouse away):
┌─────────────────────────────────┐
│                                 │
│        [Button]                 │
│        ↑ Centered               │
└─────────────────────────────────┘

Mouse Moves Near:
┌─────────────────────────────────┐
│                                 │
│     [Button] ← Moves toward     │
│              mouse cursor       │
│              (spring physics)   │
└─────────────────────────────────┘

Mouse Leaves:
┌─────────────────────────────────┐
│                                 │
│        [Button]                 │
│        ↑ Returns to center      │
│          (smooth spring)         │
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
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useCallback, useRef } from 'react';
```

**Why:**

- `motion` provides animated components (`motion.button`)
- `useMotionValue` creates reactive values for smooth animations
- `useSpring` creates spring physics animations
- `useCallback` optimizes event handlers
- `useRef` stores button reference

### 2. Props Interface

```typescript
interface MagneticButtonProps {
  children: ReactNode; // Required: Button content
  className?: string; // Optional: Additional CSS classes
  strength?: number; // Optional: Attraction strength (default: 0.3)
  springConfig?: {
    // Optional: Spring physics configuration
    stiffness?: number; // Spring stiffness (default: 150)
    damping?: number; // Spring damping (default: 15)
    mass?: number; // Spring mass (default: 0.1)
  };
  disabled?: boolean; // Optional: Disable button
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-disabled'?: boolean;
}
```

**Key Props:**

- `strength`: How much the button moves (0.1 = subtle, 0.6 = strong)
- `springConfig`: Controls spring physics feel
- `disabled`: Disables interaction and animation

### 3. Motion Values Setup

```typescript
const ref = useRef<HTMLButtonElement>(null);
const x = useMotionValue(0);
const y = useMotionValue(0);

const springX = useSpring(x, springConfig);
const springY = useSpring(y, springConfig);
```

**What it does:**

- `ref`: Reference to button element for position calculations
- `x`, `y`: Motion values tracking cursor position
- `springX`, `springY`: Spring-animated versions of x/y

**Why Motion Values?**

- `useMotionValue`: Creates reactive values that don't trigger re-renders
- `useSpring`: Smooths the motion with spring physics
- GPU-accelerated: Better performance than state updates

### 4. Mouse Move Handler

```typescript
const handleMouseMove = useCallback(
  (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  },
  [strength, disabled, x, y]
);
```

**Breaking it down:**

1. **Get cursor position**: `clientX`, `clientY` = mouse position
2. **Get button position**: `getBoundingClientRect()` = button position/size
3. **Calculate center**: `centerX`, `centerY` = button center point
4. **Calculate distance**: How far cursor is from button center
5. **Apply strength**: Multiply by `strength` to control movement amount
6. **Update motion values**: `x.set()`, `y.set()` = update position

**Why useCallback?**

- Prevents function recreation on every render
- Better performance
- Required for dependency arrays

### 5. Mouse Leave Handler

```typescript
const handleMouseLeave = useCallback(() => {
  x.set(0);
  y.set(0);
}, [x, y]);
```

**What it does:**

- Resets button to center position (0, 0)
- Smooth spring animation returns button to center
- Triggered when mouse leaves button area

### 6. Motion Button Component

```typescript
<motion.button
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onClick={onClick}
  style={{
    x: springX,
    y: springY,
  }}
  disabled={disabled}
  type={type}
  aria-label={ariaLabel}
  aria-disabled={ariaDisabled ?? disabled}
  className={...}
  whileTap={disabled ? {} : { scale: 0.98 }}
>
  {children}
</motion.button>
```

**Breaking it down:**

- `ref`: Button reference for position calculations
- `onMouseMove`: Tracks mouse position
- `onMouseLeave`: Resets position
- `style={{ x: springX, y: springY }}`: Applies spring-animated position
- `whileTap`: Scale down on click for feedback

---

## Core Concepts Deep Dive

### 1. Motion Values vs State

**Motion Values (useMotionValue):**

```typescript
const x = useMotionValue(0); // No re-render
x.set(10); // Updates without re-render
```

**Benefits:**

- No re-renders: Updates don't trigger component re-render
- GPU-accelerated: Smooth 60fps animations
- Direct DOM updates: More efficient

**State (useState):**

```typescript
const [x, setX] = useState(0); // Triggers re-render
setX(10); // Causes re-render
```

**When to use:**

- Motion values: For animations (like this)
- State: For data that affects rendering

### 2. Spring Physics

**Spring Configuration:**

```typescript
springConfig = {
  stiffness: 150, // How "stiff" the spring (higher = faster)
  damping: 15, // How much it resists motion (higher = less bouncy)
  mass: 0.1, // Weight of the object (higher = slower)
};
```

**How it works:**

- **Stiffness**: Higher = faster response, more rigid
- **Damping**: Higher = less bouncy, more controlled
- **Mass**: Higher = slower, more inertia

**Visual:**

```
High Stiffness (300):  [Button] → Moves quickly, snaps to position
Low Stiffness (50):    [Button] → Moves slowly, gentle motion

High Damping (30):     [Button] → Smooth, no bounce
Low Damping (5):       [Button] → Bouncy, overshoots

High Mass (1.0):       [Button] → Heavy, slow to start
Low Mass (0.1):        [Button] → Light, quick response
```

### 3. Distance Calculation

**How attraction works:**

```typescript
const distanceX = (clientX - centerX) * strength;
const distanceY = (clientY - centerY) * strength;
```

**Step by step:**

1. **Cursor position**: `clientX`, `clientY` (absolute screen position)
2. **Button center**: `centerX`, `centerY` (button's center point)
3. **Distance**: `clientX - centerX` = how far cursor is from center
4. **Apply strength**: Multiply by `strength` to control movement

**Example:**

```
Button center: (100, 100)
Cursor: (150, 120)
Distance: (50, 20)
Strength: 0.3
Result: Button moves (15px, 6px) toward cursor
```

### 4. GPU Acceleration

**Transform properties:**

```typescript
style={{ x: springX, y: springY }} // GPU-accelerated
```

**Why GPU-accelerated?**

- `transform: translate()` uses GPU
- Smooth 60fps animations
- Doesn't trigger layout reflow
- Better performance than `top`/`left`

**Performance:**

```
transform: translate() → GPU → 60fps ✅
top/left → CPU → Layout reflow → 30fps ❌
```

### 5. useSpring Hook

**What it does:**

```typescript
const springX = useSpring(x, springConfig);
```

- Takes a motion value (`x`)
- Applies spring physics
- Returns animated motion value
- Smooths out rapid changes

**Without spring:**

```
x.set(10) → Button jumps to position (jarring)
```

**With spring:**

```
x.set(10) → Button smoothly animates to position (natural)
```

---

## How to Use

### Basic Usage

```tsx
import { MagneticButton } from '@/components/ui';

<MagneticButton>
  <button className="bg-primary text-white px-6 py-3 rounded-lg">
    Hover Near Me
  </button>
</MagneticButton>;
```

### Different Strengths

```tsx
<MagneticButton strength={0.2}>
  <button>Subtle (0.2)</button>
</MagneticButton>

<MagneticButton strength={0.4}>
  <button>Medium (0.4)</button>
</MagneticButton>

<MagneticButton strength={0.6}>
  <button>Strong (0.6)</button>
</MagneticButton>
```

### Custom Spring Physics

```tsx
<MagneticButton
  strength={0.3}
  springConfig={{
    stiffness: 200, // Faster response
    damping: 20, // Less bouncy
    mass: 0.05, // Lighter
  }}
>
  <button>Custom Spring</button>
</MagneticButton>
```

### With Click Handler

```tsx
<MagneticButton
  onClick={(e) => {
    console.log('Button clicked!');
  }}
>
  <button>Click Me</button>
</MagneticButton>
```

### Disabled State

```tsx
<MagneticButton disabled>
  <button>Disabled Button</button>
</MagneticButton>
```

### Complete Example

```tsx
export default function MyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <MagneticButton
        strength={0.4}
        onClick={() => alert('Clicked!')}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold"
      >
        Magnetic Button
      </MagneticButton>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Call-to-Action Buttons**

   - Primary CTAs that need attention
   - Landing page buttons
   - Sign-up/Login buttons

2. **Interactive Elements**

   - Navigation buttons
   - Feature highlights
   - Product cards

3. **Engagement**

   - Buttons that need user interaction
   - Playful, modern interfaces
   - Creative portfolios

4. **Hero Sections**
   - Main CTA buttons
   - Download buttons
   - Get Started buttons

### ❌ Avoid For:

1. **Forms** - Can be distracting
2. **Dense UIs** - Too many magnetic buttons = overwhelming
3. **Mobile-Heavy** - Less effective without mouse
4. **Accessibility-Critical** - May confuse screen readers if overused

---

## Common Pitfalls

### 1. ❌ Using useState Instead of useMotionValue

```tsx
// ❌ BAD: Causes re-renders, poor performance
const [position, setPosition] = useState({ x: 0, y: 0 });

// ✅ GOOD: No re-renders, GPU-accelerated
const x = useMotionValue(0);
const y = useMotionValue(0);
```

**Why it's bad:**

- Triggers re-render on every mouse move
- Poor performance (30fps instead of 60fps)
- Janky animation

### 2. ❌ Not Using useCallback

```tsx
// ❌ BAD: Function recreated on every render
const handleMouseMove = (e) => { ... };

// ✅ GOOD: Function memoized
const handleMouseMove = useCallback((e) => { ... }, [deps]);
```

**Why it's bad:**

- Function recreated = unnecessary work
- Can cause performance issues
- Breaks dependency arrays

### 3. ❌ Too High Strength

```tsx
// ❌ BAD: Too strong (disorienting)
<MagneticButton strength={1.0}>

// ✅ GOOD: Balanced
<MagneticButton strength={0.3}>
```

**Why it's bad:**

- Button moves too far
- Disorienting for users
- Poor UX

**Recommended Range:**

- **Subtle**: 0.1 - 0.2
- **Medium**: 0.3 - 0.4 (default: 0.3)
- **Strong**: 0.5 - 0.6
- **Avoid**: > 0.7

### 4. ❌ Not Handling Disabled State

```tsx
// ❌ BAD: Still animates when disabled
const handleMouseMove = (e) => {
  // No disabled check
  x.set(distanceX);
};

// ✅ GOOD: Checks disabled state
const handleMouseMove = useCallback(
  (e) => {
    if (!ref.current || disabled) return;
    // ...
  },
  [disabled]
);
```

### 5. ❌ Forgetting Cleanup

```tsx
// ❌ BAD: No cleanup
useEffect(() => {
  // Setup
}, []);

// ✅ GOOD: Proper cleanup
useEffect(() => {
  // Setup
  return () => {
    // Cleanup
  };
}, []);
```

### 6. ❌ Not Using Spring Physics

```tsx
// ❌ BAD: Direct position (jarring)
style={{ x: x, y: y }}

// ✅ GOOD: Spring physics (smooth)
const springX = useSpring(x, springConfig);
style={{ x: springX, y: springY }}
```

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Setup Motion Values**

```typescript
const x = useMotionValue(0);
const y = useMotionValue(0);
const springX = useSpring(x, { stiffness: 150, damping: 15 });
const springY = useSpring(y, { stiffness: 150, damping: 15 });
```

#### 2. **Create Mouse Handler**

```typescript
const handleMouseMove = useCallback(
  (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  },
  [strength, x, y]
);
```

#### 3. **Create Reset Handler**

```typescript
const handleMouseLeave = useCallback(() => {
  x.set(0);
  y.set(0);
}, [x, y]);
```

#### 4. **Apply to Motion Component**

```typescript
<motion.div
  ref={ref}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ x: springX, y: springY }}
>
  {children}
</motion.div>
```

### Example: Magnetic Card

```typescript
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCallback, useRef } from 'react';

interface MagneticCardProps {
  children: React.ReactNode;
  strength?: number;
}

export const MagneticCard = ({
  children,
  strength = 0.2,
}: MagneticCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = (clientX - centerX) * strength;
      const distanceY = (clientY - centerY) * strength;

      x.set(distanceX);
      y.set(distanceY);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};
```

---

## Advanced Tips

### 1. **Different Spring Configs for Different Feels**

```typescript
// Snappy, quick response
springConfig={{ stiffness: 300, damping: 25, mass: 0.05 }}

// Smooth, gentle motion
springConfig={{ stiffness: 100, damping: 20, mass: 0.2 }}

// Bouncy, playful
springConfig={{ stiffness: 200, damping: 10, mass: 0.1 }}

// Heavy, slow motion
springConfig={{ stiffness: 80, damping: 30, mass: 1.0 }}
```

### 2. **Combining with Other Effects**

```tsx
<MagneticButton strength={0.3}>
  <GlowButton variant="primary">
    <RippleButton>Triple Effect Button</RippleButton>
  </GlowButton>
</MagneticButton>
```

### 3. **Conditional Strength Based on Screen Size**

```typescript
const [strength, setStrength] = useState(0.3);

useEffect(() => {
  const isMobile = window.innerWidth < 768;
  setStrength(isMobile ? 0.1 : 0.3);
}, []);
```

### 4. **Performance Optimization**

```typescript
// Throttle mouse move events for better performance
const handleMouseMove = useCallback(
  throttle((e: React.MouseEvent) => {
    // ... calculation
  }, 16), // ~60fps
  [deps]
);
```

### 5. **Custom Distance Calculation**

```typescript
// Only move if cursor is within certain distance
const distance = Math.sqrt(
  Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
);

if (distance < 100) {
  // Only move if cursor is within 100px
  x.set(distanceX);
  y.set(distanceY);
}
```

### 6. **3D Rotation Effect**

```typescript
// Add rotation based on cursor position
const rotateX = useSpring(useMotionValue(0));
const rotateY = useSpring(useMotionValue(0));

// In handleMouseMove:
rotateX.set((clientY - centerY) * 0.1);
rotateY.set((clientX - centerX) * -0.1);

// In style:
style={{
  x: springX,
  y: springY,
  rotateX,
  rotateY,
  transformStyle: 'preserve-3d',
}}
```

### 7. **Accessibility Considerations**

```typescript
// Respect prefers-reduced-motion
const prefersReducedMotion = useReducedMotion();

const handleMouseMove = useCallback(
  (e) => {
    if (prefersReducedMotion) return; // Disable if user prefers reduced motion
    // ... normal behavior
  },
  [prefersReducedMotion]
);
```

### 8. **Debugging Motion Values**

```typescript
// Log motion value changes
useEffect(() => {
  const unsubscribe = x.on('change', (latest) => {
    console.log('X position:', latest);
  });
  return unsubscribe;
}, [x]);
```

### 9. **Different Strengths for X and Y**

```typescript
const distanceX = (clientX - centerX) * strengthX;
const distanceY = (clientY - centerY) * strengthY;
```

### 10. **Magnetic Boundary**

```typescript
// Limit movement to certain area
const maxDistance = 50;
const distanceX = Math.min(
  Math.max((clientX - centerX) * strength, -maxDistance),
  maxDistance
);
```

---

## Summary

**MagneticButton** creates engaging, interactive buttons:

- ✅ Smooth spring physics animation
- ✅ GPU-accelerated for 60fps performance
- ✅ Customizable strength and spring config
- ✅ Accessible and disabled state support
- ✅ No re-renders (uses motion values)

**Key Takeaways:**

1. Use `useMotionValue` for animations (not `useState`)
2. Use `useSpring` for smooth physics
3. Use `useCallback` for event handlers
4. Keep strength between 0.2 - 0.5 for best UX
5. Always handle disabled state
6. Use `transform` (GPU) not `top`/`left` (CPU)

---

Happy animating! 🎉
