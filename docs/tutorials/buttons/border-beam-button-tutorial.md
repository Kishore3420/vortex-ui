# BorderBeamButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is BorderBeamButton?](#what-is-borderbeambutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [Core Concepts Deep Dive](#core-concepts-deep-dive)
5. [How to Use](#how-to-use)

---

## What is BorderBeamButton?

**BorderBeamButton** creates a high-tech "AI" feel by having a glowing gradient line travel endlessly around the border of the button. It relies on a CSS trick using a rotating background behind a slightly smaller inner container, or using `offset-path` (though mask-based approaches are often smoother).

### Visual Effect
-   **Glowing Border**: A moving gradient trail.
-   **Infinite Loop**: The beam travels around the perimeter.
-   **Modern/Dark Mode Friendly**: Looks best on dark backgrounds.

---

## Visual Behavior

```
      <-- Beam moving clockwise
┌──────────────────────┐
│  ┌────────────────┐  │
│  │   Button Text  │  │
│  └────────────────┘  │
│          |           │
└──────────V───────────┘
```

---

## Line-by-Line Code Explanation

### The Component

We use a simple React component with Tailwind.

```tsx
'use client';

import React from 'react';

interface BorderBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  beamColor?: string; // e.g., "from-indigo-500 via-purple-500 to-transparent"
}

export const BorderBeamButton = ({
  children,
  className = "",
  beamColor = "from-indigo-500 via-purple-500 to-transparent",
  ...props
}: BorderBeamButtonProps) => {
  return (
    <button
      className={`relative rounded-xl p-px overflow-hidden ${className}`}
      {...props}
    >
      {/* 1. The Moving Beam */}
      <div className="absolute -inset-full animate-[spin_3s_linear_infinite]"
           style={{
             background: `conic-gradient(from 90deg at 50% 50%, transparent 0%, transparent 70%, white 100%)`
             // Note: In real implementation we map beamColor to CSS or simple stops
           }}
      >
         {/* We can use Tailwind arbitrary values for the gradient if needed */}
         <div className={`w-full h-full bg-linear-to-r ${beamColor}`} />
      </div>

      {/* 2. The Inner Content (Masks the center) */}
      <div className="relative h-full w-full rounded-xl bg-slate-950 px-8 py-4 backdrop-blur-xl">
        {children}
      </div>
    </button>
  );
};
```

*Note: The actual implementation will use a cleaner `conic-gradient` approach or a specific `motion.div` for better control.*

---

## How to Use

```tsx
<BorderBeamButton>
  Generate Assets
</BorderBeamButton>
```
