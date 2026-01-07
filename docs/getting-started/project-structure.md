# Library Structure

## 📁 Project Organization

This document outlines the structure of VortexUI, inspired by best practices from popular animation libraries like Framer Motion, GSAP, and React Spring.

```
vortex-ui/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Main landing page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles & Pantone theme
│   ├── docs/                    # Documentation pages
│   │   ├── page.tsx
│   │   ├── framer-motion/
│   │   ├── gsap/
│   │   ├── three-js/
│   │   └── combinations/
│   ├── examples/                # Code examples
│   │   ├── page.tsx
│   │   └── [category]/
│   ├── landing-pages/           # 5 showcase landing pages
│   │   ├── minimal/
│   │   ├── creative/
│   │   ├── corporate/
│   │   ├── portfolio/
│   │   └── ecommerce/
│   └── playground/              # Interactive playground
│
├── components/
│   ├── animations/              # Animation components
│   │   ├── framer-motion/       # Framer Motion animations
│   │   │   ├── FadeIn.tsx
│   │   │   ├── ScaleIn.tsx
│   │   │   ├── RotateIn.tsx
│   │   │   ├── StaggerContainer.tsx
│   │   │   ├── StaggerItem.tsx
│   │   │   ├── Parallax.tsx
│   │   │   ├── HoverScale.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── TextReveal.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── gsap/                # GSAP animations
│   │   │   ├── ScrollTrigger.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── TextSplit.tsx
│   │   │   └── SVGAnimation.tsx
│   │   └── three-js/            # Three.js animations
│   │       ├── Scene3D.tsx
│   │       ├── ParticleSystem.tsx
│   │       └── Interactive3D.tsx
│   ├── providers/               # Context providers
│   │   ├── ThemeProvider.tsx
│   │   └── SmoothScroll.tsx
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                      # UI components
│       └── ThemeToggle.tsx
│
├── lib/
│   ├── animations/               # Animation utilities
│   │   ├── easing.ts            # Easing functions
│   │   ├── helpers.ts           # Animation helpers
│   │   └── presets.ts           # Animation presets
│   ├── hooks/                   # Custom hooks
│   │   ├── useTheme.ts
│   │   ├── useAnimation.ts
│   │   └── useScrollAnimation.ts
│   ├── theme.ts                 # Pantone color system
│   └── utils/                   # Utility functions
│       └── index.ts
│
├── docs/                        # Documentation
│   ├── README.md
│   ├── 00-roadmap.md
│   ├── 00-structure.md
│   ├── 01-introduction.md
│   ├── 02-getting-started.md
│   ├── components/
│   ├── examples/
│   └── api/
│
├── public/                      # Static assets
│   └── [assets]
│
└── package.json
```

## 🏗️ Architecture Principles

### 1. Component Organization

**By Library:**

- Components are grouped by animation library (Framer Motion, GSAP, Three.js)
- Makes it easy to find library-specific animations
- Clear separation of concerns

**By Type:**

- `animations/` - Reusable animation components
- `providers/` - Context providers and wrappers
- `sections/` - Page-level sections
- `ui/` - Basic UI components

### 2. Library Structure

**Framer Motion Components:**

```
components/animations/framer-motion/
├── FadeIn.tsx          # Fade in animation
├── ScaleIn.tsx          # Scale animation
├── RotateIn.tsx         # Rotation animation
├── StaggerContainer.tsx # Stagger wrapper
├── StaggerItem.tsx      # Stagger child
└── [more components]
```

**GSAP Components:**

```
components/animations/gsap/
├── ScrollTrigger.tsx   # Scroll-triggered animations
├── Timeline.tsx        # Timeline sequences
├── TextSplit.tsx       # Text splitting
└── [more components]
```

**Three.js Components:**

```
components/animations/three-js/
├── Scene3D.tsx         # 3D scene setup
├── ParticleSystem.tsx  # Particle effects
└── [more components]
```

### 3. Shared Utilities

**Animation Utilities:**

- `lib/animations/easing.ts` - Shared easing functions
- `lib/animations/helpers.ts` - Common animation helpers
- `lib/animations/presets.ts` - Pre-configured animations

**Hooks:**

- `lib/hooks/useTheme.ts` - Theme management
- `lib/hooks/useAnimation.ts` - Animation state management
- `lib/hooks/useScrollAnimation.ts` - Scroll-based animations

### 4. Documentation Structure

**Organized by Topic:**

- Getting started guides
- Component documentation
- Examples and showcases
- API reference
- Best practices

## 📦 Component Structure

Each animation component follows this structure:

```typescript
// Component name and purpose
interface ComponentProps {
  // Props with TypeScript types
}

export function Component({ props }: ComponentProps) {
  // Implementation
  return (
    // JSX with animation
  );
}
```

## 🎨 Theme System

**Pantone-Based Colors:**

- `lib/theme.ts` - Color definitions
- `app/globals.css` - CSS variables
- Consistent color usage across components

## 📚 Documentation Standards

**Each Component Includes:**

1. Purpose and use case
2. Props documentation
3. Usage examples
4. Customization options
5. Performance considerations
6. Accessibility notes

## 🔄 Future Structure Additions

**Planned:**

- `/tests/` - Unit and integration tests
- `/scripts/` - Build and utility scripts
- `/storybook/` - Component storybook
- `/examples/` - Standalone examples

---

**Last Updated:** 2025-01-27
