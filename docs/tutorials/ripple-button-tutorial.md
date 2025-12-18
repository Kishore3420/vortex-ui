# RippleButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is RippleButton?](#what-is-ripplebutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is RippleButton?

**RippleButton** is an interactive button component that creates a Material Design-inspired ripple effect when clicked. The ripple expands from the click point, creating a visual feedback that shows exactly where the user clicked.

### Visual Effect

- Ripple **starts** at click position
- Expands **circularly** from click point
- **Fades out** as it expands
- **Multiple ripples** can exist simultaneously
- **Dynamic size** based on button dimensions

---

## Visual Behavior

```
Initial State (no click):
┌─────────────────────────────────┐
│                                 │
│        [Button]                 │
│        ↑ Normal state            │
└─────────────────────────────────┘

User Clicks (at point X):
┌─────────────────────────────────┐
│                                 │
│        [Button]                 │
│           ● ← Click point        │
│          ╱│╲                     │
│         ╱ │ ╲ ← Ripple expands   │
│        ╱  │  ╲                   │
└─────────────────────────────────┘

Ripple Animation:
Time 0.0s:  ● (0px, opacity: 0.6)
Time 0.2s:  ○ (100px, opacity: 0.4)
Time 0.4s:  ○ (200px, opacity: 0.2)
Time 0.6s:  ○ (300px, opacity: 0) → Removed
```

---

## Line-by-Line Code Explanation

### 1. Component Setup

```typescript
'use client';
```

**Why:** Next.js requires `'use client'` for components that use React hooks or browser APIs. Framer Motion needs client-side JavaScript.

```typescript
import { AnimatePresence, motion } from 'framer-motion';
import {
  ButtonHTMLAttributes,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
```

**Why:**

- `AnimatePresence`: Handles exit animations for ripples
- `motion`: Provides animated components
- `useState`: Tracks ripple instances
- `useRef`: Stores button reference and timeouts
- `useCallback`: Optimizes event handlers
- `useEffect`: Handles cleanup

### 2. Props Interface

```typescript
interface RippleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: React.ReactNode;
  rippleColor?: string; // Optional: Ripple color (default: rgba(255, 255, 255, 0.5))
  rippleDuration?: number; // Optional: Animation duration (default: 0.6s)
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
```

**Key Props:**

- `rippleColor`: Color of the ripple effect
- `rippleDuration`: How long the ripple animation takes
- `onClick`: Click handler (called after ripple is created)

### 3. Ripple State and Refs

```typescript
const [ripples, setRipples] = useState<Ripple[]>([]);
const buttonRef = useRef<HTMLButtonElement>(null);
const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());
```

**What it does:**

- `ripples`: Array of active ripple instances
- `buttonRef`: Reference to button element
- `timeoutRefs`: Set of active timeouts for cleanup

**Why Set for timeouts?**

- Tracks all active timeouts
- Allows proper cleanup on unmount
- Prevents memory leaks

### 4. Ripple Interface

```typescript
interface Ripple {
  x: number; // X position relative to button
  y: number; // Y position relative to button
  id: number; // Unique identifier
  size: number; // Final size of ripple
}
```

**Why these properties?**

- `x`, `y`: Position where ripple starts (click point)
- `id`: Unique key for React list rendering
- `size`: Calculated based on button size

### 5. Click Handler

```typescript
const handleClick = useCallback(
  (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate ripple size based on button dimensions
    const size = Math.max(rect.width, rect.height) * 2;

    const newRipple: Ripple = {
      x,
      y,
      id: Date.now() + Math.random(),
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    const timeout = setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      timeoutRefs.current.delete(timeout);
    }, rippleDuration * 1000);

    timeoutRefs.current.add(timeout);

    onClick?.(e);
  },
  [disabled, onClick, rippleDuration]
);
```

**Breaking it down:**

1. **Check disabled**: Return early if disabled
2. **Get button rect**: Button's position and size
3. **Calculate click position**: Relative to button (`clientX - rect.left`)
4. **Calculate ripple size**: `Math.max(width, height) * 2` ensures ripple covers entire button
5. **Create ripple**: New ripple object with unique ID
6. **Add to state**: Add ripple to array
7. **Schedule removal**: Remove after animation completes
8. **Track timeout**: Add to Set for cleanup
9. **Call onClick**: Execute user's click handler

**Why `Date.now() + Math.random()`?**

- Ensures unique IDs even for rapid clicks
- `Date.now()` = timestamp
- `Math.random()` = prevents collisions

### 6. Cleanup Effect

```typescript
useEffect(() => {
  const timeouts = timeoutRefs.current;
  return () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts.clear();
  };
}, []);
```

**What it does:**

- Cleans up all timeouts on unmount
- Prevents memory leaks
- Copies ref to variable (fixes exhaustive-deps warning)

**Why copy ref?**

- Ref value might change
- Copy ensures we clean up the right timeouts
- React hooks best practice

### 7. Button Component

```typescript
<button
  ref={buttonRef}
  onClick={handleClick}
  disabled={disabled}
  className="relative overflow-hidden ..."
  {...buttonProps}
>
  {children}

  <AnimatePresence>
    {ripples.map((ripple) => (
      <motion.span
        key={ripple.id}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: ripple.x,
          top: ripple.y,
          backgroundColor: rippleColor,
        }}
        initial={{
          width: 0,
          height: 0,
          x: '-50%',
          y: '-50%',
          opacity: 0.6,
        }}
        animate={{
          width: ripple.size,
          height: ripple.size,
          opacity: 0,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: rippleDuration, ease: 'easeOut' }}
      />
    ))}
  </AnimatePresence>
</button>
```

**Breaking it down:**

- `overflow-hidden`: Clips ripple to button bounds
- `AnimatePresence`: Handles exit animations
- `pointer-events-none`: Ripple doesn't block clicks
- `x: '-50%', y: '-50%'`: Centers ripple on click point
- `initial`: Starts at 0 size, centered
- `animate`: Expands to full size, fades out
- `exit`: Fades out when removed

---

## Core Concepts Deep Dive

### 1. Click Position Calculation

**Absolute vs Relative Coordinates:**

```typescript
// Absolute (screen coordinates)
e.clientX, e.clientY // Position on entire screen

// Relative (button coordinates)
const x = e.clientX - rect.left; // Position within button
const y = e.clientY - rect.top;
```

**Visual:**

```
Screen: (0, 0) ────────────────────── (1920, 1080)
         │
         │ Button at (100, 200)
         │ ┌─────────┐
         │ │ Button  │
         │ │         │
         │ └─────────┘
         │
Click at screen (250, 350)
Relative to button: (150, 150)
```

### 2. Ripple Size Calculation

```typescript
const size = Math.max(rect.width, rect.height) * 2;
```

**Why `Math.max`?**

- Ensures ripple covers entire button
- Works for any button shape (square, rectangle, etc.)
- `* 2` ensures full coverage even for diagonal clicks

**Example:**

```
Button: 100px × 50px
Math.max(100, 50) = 100
Size = 100 × 2 = 200px
Ripple covers entire button ✅
```

### 3. Multiple Ripples

**Why array of ripples?**

- User can click multiple times rapidly
- Each click creates new ripple
- All ripples animate independently
- `AnimatePresence` handles multiple animations

**Visual:**

```
Click 1: Ripple A expands
Click 2 (0.2s later): Ripple B expands (A still animating)
Click 3 (0.4s later): Ripple C expands (A, B still animating)
```

### 4. AnimatePresence

**What it does:**

- Manages enter/exit animations
- Handles multiple elements
- Properly removes elements after exit animation

**Without AnimatePresence:**

```tsx
{ripples.map((ripple) => (
  <motion.span ... /> // Removed immediately, no exit animation
))}
```

**With AnimatePresence:**

```tsx
<AnimatePresence>
  {ripples.map((ripple) => (
    <motion.span ... /> // Exit animation plays before removal
  ))}
</AnimatePresence>
```

### 5. Centering Ripple on Click Point

```typescript
style={{
  left: ripple.x, // Click X position
  top: ripple.y,  // Click Y position
}}
initial={{
  x: '-50%', // Move left by 50% of width
  y: '-50%', // Move up by 50% of height
}}
```

**How it works:**

1. Position element at click point (`left`, `top`)
2. Translate by -50% (`x: '-50%'`, `y: '-50%'`)
3. Ripple center aligns with click point

**Visual:**

```
Click at (50, 30):
┌─────────────────┐
│                 │
│      ● ← Click  │
│     ┌─┐         │
│     │ │ ← Ripple│
│     └─┘         │
└─────────────────┘

left: 50, top: 30
x: '-50%', y: '-50%'
→ Ripple centered on click point
```

### 6. Cleanup Strategy

**Why track timeouts?**

- Multiple ripples = multiple timeouts
- Component might unmount before timeouts complete
- Need to clean up all timeouts

**Cleanup flow:**

1. Timeout created → Added to Set
2. Timeout completes → Removed from Set
3. Component unmounts → All timeouts cleared

---

## How to Use

### Basic Usage

```tsx
import { RippleButton } from '@/components/ui';

<RippleButton className="bg-primary text-white px-6 py-3 rounded-lg">
  Click Me
</RippleButton>
```

### Custom Ripple Color

```tsx
<RippleButton
  className="bg-blue-600 text-white px-6 py-3 rounded-lg"
  rippleColor="rgba(255, 255, 255, 0.8)"
>
  White Ripple
</RippleButton>

<RippleButton
  className="bg-purple-600 text-white px-6 py-3 rounded-lg"
  rippleColor="rgba(147, 51, 234, 0.6)"
>
  Purple Ripple
</RippleButton>
```

### Custom Duration

```tsx
<RippleButton
  rippleDuration={0.3}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Fast Ripple (0.3s)
</RippleButton>

<RippleButton
  rippleDuration={1.0}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Slow Ripple (1.0s)
</RippleButton>
```

### With Click Handler

```tsx
<RippleButton
  onClick={(e) => {
    console.log('Button clicked at:', e.clientX, e.clientY);
    // Handle click
  }}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Click Me
</RippleButton>
```

### Disabled State

```tsx
<RippleButton
  disabled
  className="bg-muted text-muted-foreground px-6 py-3 rounded-lg"
>
  Disabled Button
</RippleButton>
```

### Different Shapes

```tsx
{/* Rounded */}
<RippleButton className="bg-primary text-white px-6 py-3 rounded-lg">
  Rounded
</RippleButton>

{/* Pill */}
<RippleButton className="bg-primary text-white px-6 py-3 rounded-full">
  Pill
</RippleButton>

{/* Square */}
<RippleButton className="bg-primary text-white px-6 py-3 rounded-none">
  Square
</RippleButton>
```

### Complete Example

```tsx
export default function MyPage() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('Button clicked!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <RippleButton
        onClick={handleClick}
        rippleColor="rgba(255, 255, 255, 0.6)"
        rippleDuration={0.6}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold"
      >
        Click for Ripple
      </RippleButton>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Material Design Interfaces**
   - Google Material Design style
   - Modern, clean UIs
   - Mobile-first designs

2. **Interactive Buttons**
   - Primary actions
   - Call-to-action buttons
   - Navigation buttons

3. **Form Buttons**
   - Submit buttons
   - Action buttons
   - Confirmation buttons

4. **Card Actions**
   - Card buttons
   - Action menus
   - Quick actions

### ❌ Avoid For:

1. **Dense Button Groups** - Too many ripples = visual noise
2. **Rapid Click Scenarios** - Multiple ripples can overlap confusingly
3. **Very Small Buttons** - Ripple might be too large
4. **Non-Interactive Elements** - Only use on clickable elements

---

## Common Pitfalls

### 1. ❌ Not Using AnimatePresence

```tsx
// ❌ BAD: No exit animation
{ripples.map((ripple) => (
  <motion.span ... />
))}

// ✅ GOOD: Proper exit animation
<AnimatePresence>
  {ripples.map((ripple) => (
    <motion.span ... />
  ))}
</AnimatePresence>
```

**Why it's bad:**

- Ripples disappear instantly
- No smooth exit animation
- Jarring user experience

### 2. ❌ Hardcoded Ripple Size

```tsx
// ❌ BAD: Fixed size (doesn't work for all buttons)
animate={{ width: 500, height: 500 }}

// ✅ GOOD: Dynamic size based on button
const size = Math.max(rect.width, rect.height) * 2;
animate={{ width: size, height: size }}
```

**Why it's bad:**

- Small buttons: Ripple too large
- Large buttons: Ripple too small
- Doesn't adapt to button size

### 3. ❌ Not Cleaning Up Timeouts

```tsx
// ❌ BAD: Memory leak
setTimeout(() => {
  setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
}, 600);

// ✅ GOOD: Proper cleanup
const timeout = setTimeout(...);
timeoutRefs.current.add(timeout);
// Cleanup in useEffect
```

**Why it's bad:**

- Memory leaks
- Timeouts continue after unmount
- Can cause errors

### 4. ❌ Using Index as Key

```tsx
// ❌ BAD: Index can cause issues
{ripples.map((ripple, index) => (
  <motion.span key={index} ... />
))}

// ✅ GOOD: Unique ID
{ripples.map((ripple) => (
  <motion.span key={ripple.id} ... />
))}
```

**Why it's bad:**

- React can't track ripples correctly
- Animation issues
- Performance problems

### 5. ❌ Not Handling Disabled State

```tsx
// ❌ BAD: Ripple still works when disabled
const handleClick = (e) => {
  // No disabled check
  createRipple();
};

// ✅ GOOD: Check disabled state
const handleClick = useCallback((e) => {
  if (disabled) return;
  // Create ripple
}, [disabled]);
```

### 6. ❌ Forgetting Overflow Hidden

```tsx
// ❌ BAD: Ripple extends beyond button
<button className="relative">

// ✅ GOOD: Ripple clipped to button
<button className="relative overflow-hidden">
```

**Why it's bad:**

- Ripple visible outside button
- Breaks visual design
- Poor UX

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Setup State and Refs**

```typescript
const [effects, setEffects] = useState<Effect[]>([]);
const elementRef = useRef<HTMLElement>(null);
const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());
```

#### 2. **Create Effect on Interaction**

```typescript
const handleInteraction = useCallback((e: InteractionEvent) => {
  const element = e.currentTarget;
  const rect = element.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const newEffect = {
    x,
    y,
    id: Date.now() + Math.random(),
    // ... other properties
  };

  setEffects((prev) => [...prev, newEffect]);
}, []);
```

#### 3. **Remove Effect After Animation**

```typescript
const timeout = setTimeout(() => {
  setEffects((prev) => prev.filter((e) => e.id !== newEffect.id));
  timeoutRefs.current.delete(timeout);
}, duration * 1000);

timeoutRefs.current.add(timeout);
```

#### 4. **Render Effects with AnimatePresence**

```typescript
<AnimatePresence>
  {effects.map((effect) => (
    <motion.div
      key={effect.id}
      initial={{ ... }}
      animate={{ ... }}
      exit={{ ... }}
    />
  ))}
</AnimatePresence>
```

#### 5. **Cleanup on Unmount**

```typescript
useEffect(() => {
  const timeouts = timeoutRefs.current;
  return () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    timeouts.clear();
  };
}, []);
```

### Example: Splash Effect

```typescript
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Splash {
  x: number;
  y: number;
  id: number;
}

export const SplashButton = ({ children, ...props }) => {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const timeoutRefs = useRef<Set<NodeJS.Timeout>>(new Set());

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSplash: Splash = {
      x,
      y,
      id: Date.now() + Math.random(),
    };

    setSplashes((prev) => [...prev, newSplash]);

    const timeout = setTimeout(() => {
      setSplashes((prev) => prev.filter((s) => s.id !== newSplash.id));
      timeoutRefs.current.delete(timeout);
    }, 800);

    timeoutRefs.current.add(timeout);
  }, []);

  useEffect(() => {
    const timeouts = timeoutRefs.current;
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
      timeouts.clear();
    };
  }, []);

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden"
      {...props}
    >
      {children}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: splash.x,
              top: splash.y,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            }}
            initial={{
              width: 0,
              height: 0,
              x: '-50%',
              y: '-50%',
              scale: 0,
            }}
            animate={{
              width: 200,
              height: 200,
              scale: [0, 1.2, 1],
              opacity: [0.8, 0.4, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
    </button>
  );
};
```

---

## Advanced Tips

### 1. **Different Ripple Colors Based on Button State**

```typescript
const getRippleColor = () => {
  if (disabled) return 'rgba(128, 128, 128, 0.3)';
  if (isHovered) return 'rgba(255, 255, 255, 0.8)';
  return 'rgba(255, 255, 255, 0.5)';
};
```

### 2. **Ripple with Rotation**

```typescript
animate={{
  width: ripple.size,
  height: ripple.size,
  opacity: 0,
  rotate: 360, // Add rotation
}}
```

### 3. **Multiple Ripple Types**

```typescript
interface Ripple {
  type: 'primary' | 'secondary';
  // ... other properties
}

// Different animations based on type
animate={
  ripple.type === 'primary'
    ? { width: size, height: size }
    : { width: size * 0.8, height: size * 0.8 }
}
```

### 4. **Ripple with Gradient**

```typescript
style={{
  background: `radial-gradient(circle, ${rippleColor} 0%, transparent 70%)`,
}}
```

### 5. **Throttle Rapid Clicks**

```typescript
const [lastClick, setLastClick] = useState(0);

const handleClick = useCallback((e) => {
  const now = Date.now();
  if (now - lastClick < 100) return; // Throttle to 100ms
  setLastClick(now);
  // ... create ripple
}, [lastClick]);
```

### 6. **Ripple with Particles**

```typescript
// Create particles at click point
const particles = Array.from({ length: 10 }, (_, i) => ({
  id: `${ripple.id}-${i}`,
  angle: (360 / 10) * i,
  distance: 50,
}));
```

### 7. **Accessibility: Keyboard Support**

```typescript
const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    // Create ripple at center
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      createRipple(rect.width / 2, rect.height / 2);
    }
  }
}, []);
```

### 8. **Performance: Limit Concurrent Ripples**

```typescript
const MAX_RIPPLES = 3;

if (ripples.length >= MAX_RIPPLES) {
  // Remove oldest ripple
  setRipples((prev) => prev.slice(1));
}
```

### 9. **Custom Easing**

```typescript
transition={{
  duration: rippleDuration,
  ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier
}}
```

### 10. **Ripple with Border**

```typescript
style={{
  border: `2px solid ${rippleColor}`,
  backgroundColor: 'transparent',
}}
```

---

## Summary

**RippleButton** provides Material Design-inspired click feedback:

- ✅ Expands from click point
- ✅ Dynamic size based on button
- ✅ Multiple ripples supported
- ✅ Proper cleanup and memory management
- ✅ Customizable color and duration

**Key Takeaways:**

1. Use `AnimatePresence` for exit animations
2. Calculate ripple size dynamically
3. Always clean up timeouts
4. Use unique IDs (not index) for keys
5. Handle disabled state
6. Use `overflow-hidden` to clip ripple
7. Center ripple with `x: '-50%', y: '-50%'`

---

Happy animating! 🎉

