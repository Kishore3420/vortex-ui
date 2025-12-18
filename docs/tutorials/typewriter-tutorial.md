# Typewriter Component - Complete Tutorial

## 📚 Table of Contents

1. [What is Typewriter?](#what-is-typewriter)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)
6. [Where to Use](#where-to-use)
7. [Common Pitfalls](#common-pitfalls)
8. [How to Write Similar Components](#how-to-write-similar-components)
9. [Advanced Tips](#advanced-tips)

---

## What is Typewriter?

**Typewriter** is a React component that creates a classic typing effect. Characters appear one by one as if being typed, complete with a blinking cursor. Perfect for creating engaging, retro-style text reveals.

### Visual Effect

- Text starts: **empty** (no characters visible)
- Text animates: **characters appear one by one** (like typing)
- Cursor: **blinks** at the end of the text
- Uses **JavaScript intervals** to control typing speed

---

## Visual Behavior

```
Initial State:
┌─────────────────────────────────┐
│                                 │
│  [Empty]                        │
└─────────────────────────────────┘

Animation Sequence:
Time 0.0s:  H|
Time 0.05s: He|
Time 0.10s: Hel|
Time 0.15s: Hell|
Time 0.20s: Hello|

Final State:
┌─────────────────────────────────┐
│  Hello|                         │
│  ↑ Text complete, cursor blinks │
└─────────────────────────────────┘
```

---

## Line-by-Line Code Explanation

### 1. Component Setup

```typescript
'use client';
```

**Why:** Next.js requires `'use client'` for components that use React hooks or browser APIs. Uses React hooks (`useState`, `useEffect`).

```typescript
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
```

**Why:**

- `motion` provides animated components for cursor
- `useState` manages displayed text state
- `useEffect` handles typing logic
- `useRef` stores interval reference for cleanup

### 2. Props Interface

```typescript
interface TypewriterProps {
  text: string; // Required: The text to type
  delay?: number; // Optional: Initial delay before typing starts
  speed?: number; // Optional: Milliseconds between each character (default: 50ms)
  className?: string; // Optional: Additional CSS classes
  showCursor?: boolean; // Optional: Show/hide cursor (default: true)
  cursorChar?: string; // Optional: Cursor character (default: '|')
}
```

**Key Props:**

- `text`: The text to type out
- `speed`: Milliseconds between each character (50ms = fast, 100ms = slow)
- `delay`: Initial delay before typing starts
- `showCursor`: Toggle cursor visibility
- `cursorChar`: Custom cursor character

### 3. State Management

```typescript
const [displayedText, setDisplayedText] = useState('');
const [startTyping, setStartTyping] = useState(false);
const intervalRef = useRef<NodeJS.Timeout | null>(null);
```

**Breaking it down:**

**`displayedText`**

- Stores the currently displayed text
- Starts empty (`''`)
- Gradually builds up character by character

**`startTyping`**

- Boolean flag to control when typing starts
- Prevents typing from starting immediately
- Allows delay to work properly

**`intervalRef`**

- Stores reference to the interval
- Used for cleanup (preventing memory leaks)
- Allows clearing interval when component unmounts

### 4. Delay Effect

```typescript
useEffect(() => {
  const timer = setTimeout(() => setStartTyping(true), delay * 1000);
  return () => clearTimeout(timer);
}, [delay]);
```

**What it does:**

- Waits for `delay` seconds before setting `startTyping` to `true`
- Cleans up timer if component unmounts or delay changes

**Why separate delay effect?**

- Allows typing to start after a delay
- Prevents immediate typing on mount
- Can be used for sequencing multiple typewriters

**Visual Timeline:**

```
Time:    0.0s    0.5s    0.55s   0.60s   0.65s
         │       │       │       │       │
delay ───┘       │       │       │       │
                 │       │       │       │
start ───────────┼───────┘       │       │
                 │               │       │
char1 ───────────┼───────────────┼───────┘
                 │               │
char2 ───────────┼───────────────┼───────┘
```

### 5. Typing Effect

```typescript
useEffect(() => {
  if (!startTyping) return;

  let i = 0;
  intervalRef.current = setInterval(() => {
    if (i < text.length) {
      setDisplayedText(text.substring(0, i + 1));
      i++;
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, speed);

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, [startTyping, text, speed]);
```

**Breaking it down:**

**`if (!startTyping) return;`**

- Only runs when `startTyping` is `true`
- Prevents typing from starting before delay

**`let i = 0;`**

- Counter for current character index
- Starts at 0 (first character)

**`setInterval(() => {...}, speed)`**

- Runs every `speed` milliseconds
- Adds one character each time

**`text.substring(0, i + 1)`**

- Gets substring from start to current character
- `substring(0, 1)` = first character
- `substring(0, 2)` = first two characters
- etc.

**`i++`**

- Increments counter
- Moves to next character

**Cleanup:**

```typescript
return () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
};
```

- Clears interval when component unmounts
- Prevents memory leaks
- Stops typing if component is removed

**Why useRef for interval?**

```typescript
// ❌ BAD: Can't clear interval on cleanup
const interval = setInterval(...);

// ✅ GOOD: Can clear interval on cleanup
intervalRef.current = setInterval(...);
```

### 6. Cursor Animation

```typescript
{
  showCursor && (
    <motion.span
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      className="inline-block w-1 h-[1em] bg-current ml-1"
      aria-hidden="true"
    >
      {cursorChar}
    </motion.span>
  );
}
```

**Breaking it down:**

**`animate={{ opacity: [1, 0, 1] }}`**

- Animates opacity from 1 → 0 → 1
- Creates blinking effect

**`transition={{ duration: 0.8, repeat: Infinity }}`**

- Each blink cycle takes 0.8 seconds
- Repeats infinitely

**`className="inline-block w-1 h-[1em] bg-current ml-1"`**

- `inline-block`: Stays inline with text
- `w-1`: 1 unit width (thin cursor)
- `h-[1em]`: Height matches text line height
- `bg-current`: Uses current text color
- `ml-1`: Small margin-left for spacing

**`aria-hidden="true"`**

- Hides cursor from screen readers
- Cursor is decorative, not content

---

## Core Concepts Deep Dive

### 1. JavaScript Intervals

**`setInterval`** runs code repeatedly at specified intervals.

```typescript
setInterval(() => {
  // This runs every 'speed' milliseconds
  setDisplayedText(text.substring(0, i + 1));
  i++;
}, speed);
```

**How it works:**

1. Runs callback every `speed` milliseconds
2. Each time, adds one more character
3. Continues until all characters are added
4. Then clears interval

**Visual:**

```
Time:  0ms    50ms   100ms  150ms  200ms
       │      │      │      │      │
       H      He     Hel    Hell   Hello
```

### 2. State Updates

**`setDisplayedText`** updates state, triggering re-render.

```typescript
setDisplayedText(text.substring(0, i + 1));
```

**What happens:**

1. State updates with new text
2. Component re-renders
3. New text appears in DOM
4. Creates typing effect

### 3. Cleanup Pattern

**Always clean up intervals!**

```typescript
useEffect(() => {
  const interval = setInterval(...);

  return () => {
    clearInterval(interval); // Cleanup!
  };
}, [dependencies]);
```

**Why cleanup?**

- Prevents memory leaks
- Stops intervals when component unmounts
- Prevents multiple intervals running

### 4. Cursor Blinking

**Opacity animation creates blinking effect.**

```typescript
animate={{ opacity: [1, 0, 1] }}
```

**How it works:**

- Opacity goes: 1 (visible) → 0 (invisible) → 1 (visible)
- Repeats infinitely
- Creates blinking cursor

---

## How to Use

### Basic Usage

```tsx
import { Typewriter } from '@/components/animations';

export default function MyPage() {
  return <Typewriter text="Hello, World!" />;
}
```

### With Custom Delay

```tsx
<Typewriter text="This text starts typing after 1 second" delay={1} />
```

### Fast Typing

```tsx
<Typewriter text="Quick typing speed" speed={30} />
```

### Slow Typing

```tsx
<Typewriter text="Slow, deliberate typing" speed={100} />
```

### Without Cursor

```tsx
<Typewriter text="No cursor" showCursor={false} />
```

### Custom Cursor Character

```tsx
<Typewriter text="Custom cursor" cursorChar="_" />
```

### Monospace Font (Recommended)

```tsx
<Typewriter text="Typing effect" className="font-mono text-2xl" />
```

### Complete Example

```tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <Typewriter
          text="Welcome to the Future"
          delay={0.5}
          speed={50}
          className="text-6xl font-bold font-mono"
        />

        <Typewriter
          text="Experience next-generation design"
          delay={2}
          speed={40}
          className="text-xl text-gray-600 font-mono"
        />
      </div>
    </section>
  );
}
```

---

## Where to Use

### ✅ Perfect For:

1. **Hero Headlines**

   ```tsx
   <Typewriter text="Welcome to Our Site" className="text-5xl font-mono" />
   ```

2. **Code Examples**

   ```tsx
   <Typewriter text="const hello = 'world';" className="font-mono" />
   ```

3. **Terminal-Style Interfaces**

   ```tsx
   <Typewriter text="$ npm install vortex-ui" className="font-mono" />
   ```

4. **Retro/Retro-Futuristic Designs**

   ```tsx
   <Typewriter text="SYSTEM ONLINE" className="font-mono text-green-400" />
   ```

5. **Loading States**

   ```tsx
   <Typewriter text="Loading..." speed={100} />
   ```

### ❌ Avoid For:

1. **Body Text / Paragraphs**

   - Too slow for reading
   - Distracting
   - Use static text or `FadeIn`

2. **Critical Information**

   - Users might miss info during typing
   - Use static text for important content

3. **Frequently Changing Text**

   - Re-types every time text changes
   - Can be jarring

4. **Mobile-Heavy Sites**

   - Typing can feel slow on mobile
   - Consider faster speeds or skip animation

---

## Common Pitfalls

### 1. ❌ Not Cleaning Up Intervals

```tsx
// ❌ BAD: Memory leak!
useEffect(() => {
  setInterval(() => {
    // ...
  }, speed);
  // No cleanup!
}, [speed]);

// ✅ GOOD: Proper cleanup
useEffect(() => {
  const interval = setInterval(...);
  return () => clearInterval(interval);
}, [speed]);
```

**Why it's bad:**

- Intervals keep running after component unmounts
- Memory leaks
- Performance issues

### 2. ❌ Too Fast or Too Slow Speed

```tsx
// ❌ BAD: Too fast (hard to read)
<Typewriter text="..." speed={10} />

// ❌ BAD: Too slow (feels sluggish)
<Typewriter text="..." speed={200} />

// ✅ GOOD: Balanced (readable)
<Typewriter text="..." speed={50} />
```

**Recommended Range:**

- **Fast**: 30 - 40ms (energetic, quick)
- **Medium**: 50 - 70ms (balanced, default)
- **Slow**: 80 - 120ms (deliberate, dramatic)

### 3. ❌ Not Using useRef for Interval

```tsx
// ❌ BAD: Can't clear on cleanup
const [interval, setInterval] = useState(null);

// ✅ GOOD: Can clear on cleanup
const intervalRef = useRef<NodeJS.Timeout | null>(null);
```

**Why it's bad:**

- Can't properly clean up interval
- Memory leaks
- Multiple intervals can run

### 4. ❌ Text Changes Don't Reset

```tsx
// ❌ BAD: Doesn't reset when text changes
const [displayedText, setDisplayedText] = useState('');

// ✅ GOOD: Resets when text changes
useEffect(() => {
  setDisplayedText('');
  setStartTyping(false);
  // Restart typing...
}, [text]);
```

**Why it's bad:**

- Old text might remain
- New text doesn't type correctly
- Confusing for users

### 5. ❌ Not Handling Empty Text

```tsx
// ❌ BAD: No handling for empty text
const [displayedText, setDisplayedText] = useState('');

// ✅ GOOD: Handle empty text
if (!text || text.length === 0) {
  return null; // or return empty div
}
```

---

## How to Write Similar Components

### Step-by-Step Guide

#### 1. **Define the Component Structure**

```typescript
'use client';

import { useState, useEffect, useRef } from 'react';

interface MyTypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const MyTypingEffect = ({
  text,
  speed = 50,
  delay = 0,
}: MyTypingEffectProps) => {
  // Component logic
};
```

#### 2. **Set Up State**

```typescript
const [displayedText, setDisplayedText] = useState('');
const [startTyping, setStartTyping] = useState(false);
const intervalRef = useRef<NodeJS.Timeout | null>(null);
```

#### 3. **Delay Effect**

```typescript
useEffect(() => {
  const timer = setTimeout(() => setStartTyping(true), delay * 1000);
  return () => clearTimeout(timer);
}, [delay]);
```

#### 4. **Typing Effect**

```typescript
useEffect(() => {
  if (!startTyping) return;

  let i = 0;
  intervalRef.current = setInterval(() => {
    if (i < text.length) {
      setDisplayedText(text.substring(0, i + 1));
      i++;
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, speed);

  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
}, [startTyping, text, speed]);
```

#### 5. **Render**

```typescript
return <div>{displayedText}</div>;
```

---

## Advanced Tips

### 1. **Variable Typing Speed**

```typescript
// Different speeds for different characters
const getSpeed = (char: string) => {
  if (char === ' ') return 100; // Slower for spaces
  if (char === '.') return 300; // Much slower for periods
  return 50; // Normal speed
};
```

### 2. **Typing Sound Effects**

```typescript
const playSound = () => {
  // Play typing sound
  const audio = new Audio('/sounds/type.mp3');
  audio.play();
};

useEffect(() => {
  if (displayedText.length > 0) {
    playSound();
  }
}, [displayedText]);
```

### 3. **Backspace Effect**

```typescript
// Type, then backspace
const [isTyping, setIsTyping] = useState(true);

useEffect(() => {
  if (isTyping) {
    // Type forward
  } else {
    // Backspace
    if (displayedText.length > 0) {
      setDisplayedText(text.substring(0, displayedText.length - 1));
    }
  }
}, [isTyping]);
```

### 4. **Multiple Lines**

```typescript
const lines = ['Line 1', 'Line 2', 'Line 3'];
const [currentLine, setCurrentLine] = useState(0);

// Type one line at a time
```

### 5. **Accessibility Considerations**

```typescript
// Announce to screen readers
useEffect(() => {
  if (displayedText === text) {
    // Text is complete
    // Announce to screen reader
  }
}, [displayedText, text]);
```

---

## Summary

**Typewriter** is a powerful component that:

- ✅ Creates classic typing effect with character-by-character reveal
- ✅ Uses JavaScript intervals for precise timing control
- ✅ Includes blinking cursor for authentic feel
- ✅ Properly cleans up intervals to prevent memory leaks
- ✅ Is fully configurable (speed, delay, cursor)
- ✅ Works great with monospace fonts

**Key Takeaways:**

1. Always clean up intervals in useEffect
2. Use `useRef` to store interval references
3. Keep speed between 30ms - 120ms
4. Use monospace fonts for best effect
5. Handle text changes properly
6. Consider accessibility (screen readers)

**Next Steps:**

- Experiment with different speeds
- Try custom cursor characters
- Combine with other animations
- Add sound effects for extra immersion

---

Happy animating! 🎉
