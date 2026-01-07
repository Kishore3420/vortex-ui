# GlowButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is GlowButton?](#what-is-glowbutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is GlowButton?

**GlowButton** is an interactive button component that creates a glowing halo effect when hovered. The glow appears behind the button, creating a premium, modern feel. It's perfect for highlighting important actions and creating visual depth.

### Visual Effect

- Glow **appears** on hover
- **Smooth fade-in** animation
- **Scales up** slightly for depth
- **Theme-aware** colors by default
- **Customizable** intensity and color

---

## Visual Behavior

```
Initial State (no hover):
┌─────────────────────────────────┐
│                                 │
│        [Button]                 │
│        ↑ No glow                │
└─────────────────────────────────┘

On Hover:
┌─────────────────────────────────┐
│                                 │
│     ╭───────╮                   │
│    ╱  Glow  ╲ ← Blurred glow    │
│   │ [Button] │ ← Button on top  │
│    ╲        ╱                   │
│     ╰───────╯                   │
└─────────────────────────────────┘

Animation:
Time 0.0s:  Glow opacity: 0, scale: 0.8
Time 0.15s: Glow opacity: 0.5, scale: 1.0
Time 0.3s:  Glow opacity: 0.5, scale: 1.2 (final)
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

- `motion` provides animated components (`motion.button`, `motion.div`)
- `ReactNode` is the type for children prop

### 2. Props Interface

```typescript
interface GlowButtonProps {
  children: ReactNode; // Required: Button content
  className?: string; // Optional: Additional CSS classes
  glowColor?: string; // Optional: Custom glow color
  glowIntensity?: number; // Optional: Glow intensity (default: 1)
  scaleOnHover?: boolean; // Optional: Scale button on hover (default: true)
  disabled?: boolean; // Optional: Disable button
  variant?: 'primary' | 'secondary' | 'accent' | 'default'; // Optional: Theme variant
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  'aria-disabled'?: boolean;
}
```

**Key Props:**

- `glowColor`: Custom glow color (overrides variant)
- `glowIntensity`: How bright the glow is (0.5 = subtle, 1.5 = intense)
- `scaleOnHover`: Whether button scales on hover
- `variant`: Theme-aware color selection

### 3. Glow Color Resolution

```typescript
const getGlowColor = () => {
  if (glowColor) return glowColor;

  // Use CSS variables - opacity will be controlled by the motion.div
  if (variant === 'primary') {
    return 'var(--color-primary)';
  } else if (variant === 'secondary') {
    return 'var(--color-secondary)';
  } else if (variant === 'accent') {
    return 'var(--color-accent)';
  }
  return 'var(--color-primary)';
};

const defaultGlowColor = getGlowColor();
```

**What it does:**

- Checks if custom `glowColor` is provided
- If not, uses theme color based on `variant`
- Returns CSS variable for theme-aware color

**Why CSS variables?**

- Automatically adapts to light/dark mode
- Uses theme system colors
- Consistent with design system

### 4. Motion Button Component

```typescript
<motion.button
  className={`relative inline-flex items-center justify-center transition-opacity ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${className}`}
  whileHover={disabled || !scaleOnHover ? {} : { scale: 1.05 }}
  whileTap={disabled ? {} : { scale: 0.98 }}
  disabled={disabled}
  onClick={onClick}
  type={type}
  aria-label={ariaLabel}
  aria-disabled={ariaDisabled ?? disabled}
>
```

**Breaking it down:**

- `relative`: Needed for absolute positioned glow
- `whileHover`: Scales button to 1.05 on hover (if enabled)
- `whileTap`: Scales down to 0.98 on click for feedback
- `disabled`: Disables interactions and animations

### 5. Glow Effect Element

```typescript
<motion.div
  className="absolute inset-0 blur-xl -z-10"
  style={{
    backgroundColor: defaultGlowColor,
    borderRadius: 'inherit',
    opacity: 0.5, // Base opacity, will be animated
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  whileHover={
    disabled ? {} : { opacity: 0.5 * glowIntensity, scale: 1.2 }
  }
  transition={{ duration: 0.3, ease: 'easeOut' }}
/>
```

**Breaking it down:**

- `absolute inset-0`: Covers entire button
- `blur-xl`: Creates blur effect (glow)
- `-z-10`: Behind button content
- `borderRadius: 'inherit'`: Matches button shape
- `initial`: Starts invisible and smaller
- `whileHover`: Fades in and scales up on hover
- `opacity: 0.5 * glowIntensity`: Controls brightness

**Why `-z-10`?**

- Places glow behind button
- Button content stays on top
- Creates depth effect

### 6. Button Content

```typescript
<span className="relative z-10 inline-flex items-center justify-center">
  {children}
</span>
```

**Why z-10?**

- Ensures content is above glow (`-z-10`)
- `relative`: Establishes stacking context
- Content always visible

---

## Core Concepts Deep Dive

### 1. CSS Blur Filter

**How blur works:**

```css
filter: blur(24px); /* blur-xl in Tailwind */
```

**Visual:**

```
Without blur:
┌─────┐
│ Glow│ ← Sharp edges
└─────┘

With blur:
╭─────╮
│ Glow│ ← Soft, glowing edges
╰─────╯
```

**Blur values:**

- `blur-sm`: 4px (subtle)
- `blur-md`: 8px (medium)
- `blur-lg`: 16px (strong)
- `blur-xl`: 24px (very strong, default)

### 2. Opacity and Intensity

**How intensity works:**

```typescript
opacity: 0.5 * glowIntensity
```

**Examples:**

- `glowIntensity: 0.5` → `opacity: 0.25` (subtle)
- `glowIntensity: 1.0` → `opacity: 0.5` (normal)
- `glowIntensity: 1.5` → `opacity: 0.75` (intense)
- `glowIntensity: 2.0` → `opacity: 1.0` (very intense)

**Why multiply by 0.5?**

- Base opacity of 0.5 prevents too-bright glow
- Intensity multiplier controls brightness
- Keeps glow visible but not overwhelming

### 3. Scale Animation

**Button scale:**

```typescript
whileHover={{ scale: 1.05 }} // Button grows 5%
whileTap={{ scale: 0.98 }}   // Button shrinks 2% on click
```

**Glow scale:**

```typescript
initial={{ scale: 0.8 }}        // Starts smaller
whileHover={{ scale: 1.2 }}    // Grows larger than button
```

**Why different scales?**

- Button: Subtle growth (5%) for feedback
- Glow: Larger growth (20%) for depth effect
- Creates 3D-like appearance

### 4. Z-Index Stacking

**Layer order:**

```
z-index: 10  → Button content (top)
z-index: 0   → Button element (middle)
z-index: -10 → Glow effect (bottom)
```

**Visual:**

```
┌─────────────────┐
│  Button Content │ ← z-10 (visible)
│  ┌───────────┐  │
│  │   Glow    │  │ ← z-10 (behind)
│  └───────────┘  │
└─────────────────┘
```

### 5. Inherit Border Radius

```typescript
style={{
  borderRadius: 'inherit',
}}
```

**What it does:**

- Glow matches button's border radius
- Works for any shape (rounded, pill, square)
- Maintains visual consistency

**Without inherit:**

```
Button: rounded-lg (8px)
Glow:   rounded-none (0px) → Doesn't match ❌
```

**With inherit:**

```
Button: rounded-lg (8px)
Glow:   inherit (8px) → Matches perfectly ✅
```

### 6. Theme-Aware Colors

**CSS Variables:**

```typescript
'var(--color-primary)' // Light mode: #0F4C75, Dark mode: #3282B8
```

**Benefits:**

- Automatically adapts to theme
- No manual color switching
- Consistent with design system

---

## How to Use

### Basic Usage

```tsx
import { GlowButton } from '@/components/ui';

<GlowButton className="bg-primary text-white px-6 py-3 rounded-lg">
  Hover for Glow
</GlowButton>
```

### With Variant

```tsx
<GlowButton
  variant="primary"
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Primary Glow
</GlowButton>

<GlowButton
  variant="secondary"
  className="bg-secondary text-white px-6 py-3 rounded-lg"
>
  Secondary Glow
</GlowButton>

<GlowButton
  variant="accent"
  className="bg-accent text-white px-6 py-3 rounded-lg"
>
  Accent Glow
</GlowButton>
```

### Custom Glow Color

```tsx
<GlowButton
  glowColor="rgba(139, 92, 246, 0.6)"
  className="bg-purple-600 text-white px-6 py-3 rounded-lg"
>
  Purple Glow
</GlowButton>

<GlowButton
  glowColor="rgba(34, 211, 238, 0.5)"
  className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
>
  Cyan Glow
</GlowButton>
```

### Different Intensities

```tsx
<GlowButton
  glowIntensity={0.5}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Subtle Glow
</GlowButton>

<GlowButton
  glowIntensity={1.0}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Normal Glow
</GlowButton>

<GlowButton
  glowIntensity={1.5}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Intense Glow
</GlowButton>
```

### Without Scale on Hover

```tsx
<GlowButton
  scaleOnHover={false}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Glow Only (No Scale)
</GlowButton>
```

### With Click Handler

```tsx
<GlowButton
  onClick={(e) => {
    console.log('Button clicked!');
  }}
  className="bg-primary text-white px-6 py-3 rounded-lg"
>
  Click Me
</GlowButton>
```

### Disabled State

```tsx
<GlowButton
  disabled
  className="bg-muted text-muted-foreground px-6 py-3 rounded-lg"
>
  Disabled Button
</GlowButton>
```

### Complete Example

```tsx
export default function MyPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <GlowButton
        variant="primary"
        glowIntensity={1.2}
        onClick={() => alert('Clicked!')}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold"
      >
        Hover for Glow
      </GlowButton>
    </div>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Call-to-Action Buttons**
   - Primary CTAs
   - Sign-up buttons
   - Download buttons

2. **Hero Sections**
   - Main action buttons
   - Get Started buttons
   - Learn More buttons

3. **Feature Highlights**
   - Important actions
   - Premium features
   - Special offers

4. **Interactive Elements**
   - Navigation buttons
   - Action buttons
   - Play buttons

### ❌ Avoid For:

1. **Form Buttons** - Can be distracting
2. **Dense UIs** - Too many glows = visual noise
3. **Subtle Interfaces** - May be too flashy
4. **Mobile-Heavy** - Less effective without hover

---

## Common Pitfalls

### 1. ❌ Wrong Z-Index Order

```tsx
// ❌ BAD: Glow on top
<motion.div className="z-10">Glow</motion.div>
<span className="z-0">Content</span>

// ✅ GOOD: Glow behind
<motion.div className="-z-10">Glow</motion.div>
<span className="z-10">Content</span>
```

**Why it's bad:**

- Glow covers button content
- Content not visible
- Breaks functionality

### 2. ❌ Not Using Inherit for Border Radius

```tsx
// ❌ BAD: Fixed border radius
<motion.div className="rounded-lg">

// ✅ GOOD: Inherits from button
<motion.div style={{ borderRadius: 'inherit' }}>
```

**Why it's bad:**

- Glow doesn't match button shape
- Looks inconsistent
- Breaks on different button shapes

### 3. ❌ Too High Intensity

```tsx
// ❌ BAD: Too bright (overwhelming)
glowIntensity={3.0}

// ✅ GOOD: Balanced
glowIntensity={1.0}
```

**Why it's bad:**

- Glow too bright
- Overwhelming
- Poor UX

**Recommended Range:**

- **Subtle**: 0.3 - 0.7
- **Normal**: 0.8 - 1.2 (default: 1.0)
- **Intense**: 1.3 - 1.8
- **Avoid**: > 2.0

### 4. ❌ Not Handling Disabled State

```tsx
// ❌ BAD: Glow still works when disabled
whileHover={{ opacity: 0.5 * glowIntensity }}

// ✅ GOOD: Check disabled state
whileHover={disabled ? {} : { opacity: 0.5 * glowIntensity }}
```

### 5. ❌ Missing Overflow Hidden

```tsx
// ❌ BAD: Glow extends beyond button
<button className="relative">

// ✅ GOOD: Glow clipped (if needed)
<button className="relative overflow-hidden">
```

**Note:** Usually not needed since glow is behind button, but useful for certain designs.

### 6. ❌ Hardcoded Colors

```tsx
// ❌ BAD: Doesn't adapt to theme
glowColor="rgba(139, 92, 246, 0.5)"

// ✅ GOOD: Theme-aware
variant="primary" // Uses CSS variables
```

**Why it's bad:**

- Doesn't work with dark mode
- Inconsistent with design system
- Manual color management

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Setup Motion Component**

```typescript
<motion.button
  className="relative"
  whileHover={{ scale: 1.05 }}
>
```

#### 2. **Create Effect Element**

```typescript
<motion.div
  className="absolute inset-0 -z-10"
  style={{
    backgroundColor: effectColor,
    borderRadius: 'inherit',
  }}
  initial={{ opacity: 0, scale: 0.8 }}
  whileHover={{ opacity: 0.5, scale: 1.2 }}
/>
```

#### 3. **Add Content Layer**

```typescript
<span className="relative z-10">
  {children}
</span>
```

### Example: Shadow Button

```typescript
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShadowButtonProps {
  children: ReactNode;
  shadowColor?: string;
  shadowIntensity?: number;
}

export const ShadowButton = ({
  children,
  shadowColor = 'rgba(0, 0, 0, 0.3)',
  shadowIntensity = 1,
}: ShadowButtonProps) => {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shadow effect */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundColor: shadowColor,
          borderRadius: 'inherit',
          filter: 'blur(8px)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileHover={{
          opacity: 0.3 * shadowIntensity,
          scale: 1.1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
```

---

## Advanced Tips

### 1. **Different Glow Colors for Different States**

```typescript
const getGlowColor = () => {
  if (disabled) return 'var(--color-muted)';
  if (isPressed) return 'var(--color-primary)';
  return 'var(--color-primary)';
};
```

### 2. **Animated Glow Color**

```typescript
<motion.div
  animate={{
    backgroundColor: [
      'var(--color-primary)',
      'var(--color-secondary)',
      'var(--color-primary)',
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
/>
```

### 3. **Multiple Glow Layers**

```typescript
{/* Outer glow */}
<motion.div className="absolute inset-0 blur-2xl -z-20" />

{/* Inner glow */}
<motion.div className="absolute inset-0 blur-lg -z-10" />
```

### 4. **Glow with Gradient**

```typescript
style={{
  background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
}}
```

### 5. **Directional Glow**

```typescript
// Glow only on one side
style={{
  background: `linear-gradient(to right, ${glowColor}, transparent)`,
}}
```

### 6. **Pulsing Glow**

```typescript
animate={{
  opacity: [0.3, 0.6, 0.3],
  scale: [1.0, 1.1, 1.0],
}}
transition={{
  duration: 2,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

### 7. **Glow on Focus (Keyboard)**

```typescript
<motion.button
  onFocus={() => setFocused(true)}
  onBlur={() => setFocused(false)}
>
  <motion.div
    animate={focused ? { opacity: 0.5 } : { opacity: 0 }}
  />
</motion.button>
```

### 8. **Performance: Reduce Blur on Mobile**

```typescript
const [blur, setBlur] = useState('blur-xl');

useEffect(() => {
  const isMobile = window.innerWidth < 768;
  setBlur(isMobile ? 'blur-md' : 'blur-xl');
}, []);
```

### 9. **Glow with Border**

```typescript
<motion.div
  style={{
    border: `2px solid ${glowColor}`,
    boxShadow: `0 0 20px ${glowColor}`,
  }}
/>
```

### 10. **Combining with Other Effects**

```tsx
<MagneticButton strength={0.3}>
  <GlowButton variant="primary">
    <RippleButton>
      Triple Effect
    </RippleButton>
  </GlowButton>
</MagneticButton>
```

---

## Summary

**GlowButton** creates premium hover effects:

- ✅ Smooth glow animation on hover
- ✅ Theme-aware colors by default
- ✅ Customizable intensity and color
- ✅ Optional scale animation
- ✅ Accessible and disabled state support

**Key Takeaways:**

1. Use `-z-10` for glow (behind button)
2. Use `z-10` for content (above glow)
3. Use `borderRadius: 'inherit'` to match button shape
4. Keep intensity between 0.5 - 1.5 for best UX
5. Use CSS variables for theme-aware colors
6. Always handle disabled state
7. Use `blur-xl` for strong glow effect

---

Happy animating! 🎉

