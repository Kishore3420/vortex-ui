# Vortex UI Tutorials

## Quick Navigation

### Getting Started
- [Introduction](../getting-started/introduction.md)
- [Installation](../getting-started/installation.md)
- [Quick Start](../getting-started/quick-start.md)
- [Project Structure](../getting-started/project-structure.md)

### Animations
- [Basic Animations](animations/README.md) - FadeIn, ScaleIn, RotateIn, Stagger (7 tutorials)
- [Text Effects](text/README.md) - 19 text animation variants organized by category
- [Background Effects](backgrounds/README.md) - 5 immersive background animations
- [Button Components](buttons/README.md) - 6 interactive button variants

## Tutorial Categories

### By Component Type
- **Core Animations** (7) - Basic entrance and sequencing
- **Text Effects** (19) - Typography animations
- **Backgrounds** (5) - Full-screen effects
- **Buttons** (6) - Interactive components

### By Difficulty
- **Beginner**: FadeIn, TextReveal, Aurora
- **Intermediate**: WordPullUp, ShimmerText, GridBeams
- **Advanced**: GlitchText, TextMask, Custom combinations

## Quick Start Examples

### Hero Section
```tsx
import { BlurReveal } from '@/components/animations';
import { Aurora } from '@/components/backgrounds';

<div className="relative min-h-screen">
  <Aurora className="absolute inset-0" />
  <div className="relative z-10">
    <BlurReveal text="Welcome to the Future" className="text-6xl font-bold" />
  </div>
</div>
```

### Interactive Button
```tsx
import { ShimmerButton } from '@/components/ui';

<ShimmerButton>Get Started</ShimmerButton>
```

## Resources

- **Live Showcase**: `/test` - See all components in action
- **Component Source**: `components/` - Browse implementation
- **Guides**: `../guides/` - Templates and best practices
