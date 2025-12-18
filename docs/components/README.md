# Component Library

## Overview

VortexUI provides a comprehensive collection of animation components organized by library and use case.

## Library Organization

### [Framer Motion Components](./framer-motion.md)

Declarative, React-friendly animations perfect for most use cases.

**Components:**

- FadeIn - Fade in animations
- ScaleIn - Scale animations
- RotateIn - Rotation animations
- StaggerContainer - Stagger wrapper
- StaggerItem - Stagger child items
- Parallax - Parallax scrolling effects
- HoverScale - Hover scale effects
- MagneticButton - Magnetic button effects
- TextReveal - Text reveal animations
- PageTransition - Page transition effects

### [GSAP Components](./gsap.md)

Powerful timeline-based animations for complex sequences.

**Components:**

- ScrollTrigger - Scroll-triggered animations
- Timeline - Timeline sequences
- TextSplit - Text splitting animations
- SVGAnimation - SVG path animations
- MorphAnimation - Morphing animations

### [Three.js Components](./three-js.md)

3D animations and WebGL effects.

**Components:**

- Scene3D - 3D scene setup
- ParticleSystem - Particle effects
- Interactive3D - Interactive 3D elements
- ShaderEffect - Custom shader effects

### [Combined Animations](./combinations.md)

Using multiple libraries together.

**Examples:**

- Framer Motion + GSAP
- GSAP + Three.js
- All three libraries together

## Component Structure

Each component follows this pattern:

```typescript
interface ComponentProps {
  // Props with TypeScript types
  children: React.ReactNode;
  // ... other props
}

export function Component({ children, ...props }: ComponentProps) {
  // Implementation
}
```

## Usage Pattern

```tsx
import { ComponentName } from '@/components/animations';

<ComponentName prop1="value" prop2={123}>
  <div>Your content</div>
</ComponentName>;
```

## Common Props

Most components share these props:

- `delay` - Animation delay in seconds
- `duration` - Animation duration in seconds
- `easing` - Easing function
- `once` - Animate only once (default: true)
- `viewportMargin` - Viewport trigger margin

## Choosing the Right Component

### Use Framer Motion When:

- ✅ Simple, declarative animations
- ✅ React-friendly API needed
- ✅ Viewport-triggered animations
- ✅ Layout animations

### Use GSAP When:

- ✅ Complex timeline sequences
- ✅ Scroll-based animations
- ✅ SVG animations
- ✅ Advanced easing needed

### Use Three.js When:

- ✅ 3D effects needed
- ✅ Particle systems
- ✅ WebGL shaders
- ✅ Interactive 3D elements

## Documentation

Each component includes:

- Purpose and use case
- Props documentation
- Usage examples
- Customization options
- Performance notes
- Accessibility considerations

## Examples

See [Examples](../examples/README.md) for real-world usage.

---

**Next:** Explore [Framer Motion Components](./framer-motion.md)
