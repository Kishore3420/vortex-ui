# ShimmerButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is ShimmerButton?](#what-is-shimmerbutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)

---

## What is ShimmerButton?

**ShimmerButton** is a sleek, modern button variant that features a metallic or light-reflective shine moving across its surface. This "linear" style effect is extremely popular in modern SaaS and AI interfaces (like Linear, Vercel, Raycast) to draw attention without being overly aggressive.

### Visual Effect

-   **Shine**: A gradient band moves diagonally across the button.
-   **Periodic**: The shine repeats at a set interval (or only on hover).
-   **Subtle**: Designed to look like light reflecting off a premium surface.
-   **Customizable**: Control the speed, color, size, and direction of the shimmer.

---

## Visual Behavior

```
Time 0s:
┌──────────────────┐
│  [Button Text]   │
└──────────────────┘

Time 1s (Shimmer starts):
┌──────────────────┐
│  / [Button Text] │  <-- Beam entering from left
└──────────────────┘

Time 1.5s:
┌──────────────────┐
│  [B/tt/n Text]   │  <-- Beam crossing middle
└──────────────────┘

Time 2s:
┌──────────────────┐
│  [Button Text] / │  <-- Beam exiting right
└──────────────────┘
```

---

## Line-by-Line Code Explanation

### 1. The Shimmer Component

We use `framer-motion` to animate a masked gradient overlay.

```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string; // Color of the shine (default: white/transparent)
  shimmerSize?: string; // Width of the shine (e.g. '30%')
  shimmerDuration?: number; // Speed of one pass
  borderRadius?: string; // Border radius to match button
}

export const ShimmerButton = ({
  children,
  className = "",
  shimmerColor = "rgba(255, 255, 255, 0.4)",
  shimmerSize = "50px",
  shimmerDuration = 2,
  borderRadius = "8px",
  ...props
}: ShimmerButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`relative overflow-hidden px-6 py-3 bg-slate-900 text-white ${className}`}
      style={{ borderRadius }}
      {...props}
    >
      {/* Content strictly on top */}
      <span className="relative z-10">{children}</span>

      {/* Shimmer Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: shimmerDuration,
          ease: 'linear',
          repeatDelay: 1, // Optional pause between loops
        }}
        style={{
           top: 0,
           left: 0,
           width: '100%',
           height: '100%',
           // The magic gradient mask
           background: `linear-gradient(
              100deg,
              transparent 0%,
              transparent 40%,
              ${shimmerColor} 50%,
              transparent 60%,
              transparent 100%
           )`
        }}
      />
    </button>
  );
};
```

---

## Core Concepts Deep Dive

### 1. The Gradient Trick
The shimmer isn't an object moving *over* the button. It's a `div` the same size as the button with a specific `linear-gradient` background.
The gradient is mostly `transparent`, with a small band of `shimmerColor` in the middle (`50%`).

### 2. Moving the Gradient
Instead of animating `background-position` (which can be jerky), we animate the entire `div` from `x: -100%` (fully left out of view) to `x: 100%` (fully right out of view).
Because the `button` has `overflow-hidden`, we only see the part of the Gradient Div that is currently "inside" the button frame.

---

## How to Use

### Basic Usage

```tsx
<ShimmerButton>
  Join Waitlist
</ShimmerButton>
```

### Premium "Gold" Effect

```tsx
<ShimmerButton
  className="bg-neutral-900 border border-amber-500/30 text-amber-500"
  shimmerColor="rgba(245, 158, 11, 0.4)" // Amber glow
  shimmerDuration={2.5}
>
  Premium Access
</ShimmerButton>
```

---

## Where to Use

### ✅ Perfect For:
-   **"Magic" AI Features**: "Generate with AI" buttons.
-   **Primary CTAs**: Sign up, buy now.
-   **Premium Tiers**: "Upgrade to Pro".

### ❌ Avoid For:
-   **Destructive Actions**: Delete, Cancel (too shiny).
-   **Secondary Buttons**: It draws too much attention.
