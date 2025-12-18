# Animation Examples

## Overview

This directory contains real-world code examples demonstrating how to use the AI Studio Animation Library.

## Example Categories

### Basic Animations

- Fade in/out
- Scale animations
- Rotate animations
- Slide animations

### Advanced Animations

- Staggered animations
- Parallax effects
- Scroll-triggered animations
- Timeline sequences

### Combined Animations

- Multiple animations together
- Library combinations
- Complex sequences

## Example Structure

Each example includes:

- **Code** - Complete, copy-paste ready
- **Explanation** - What it does and why
- **Props** - Available customization
- **Variations** - Different ways to use it

## Quick Examples

### Fade In List

```tsx
import { FadeIn } from '@/components/animations';

const items = ['Item 1', 'Item 2', 'Item 3'];

{
  items.map((item, index) => (
    <FadeIn key={item} delay={index * 0.1}>
      <div>{item}</div>
    </FadeIn>
  ));
}
```

### Staggered Grid

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div className="card">{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>;
```

## Full Examples

### [Hero Section](./hero-section.md)

Complete hero section with multiple animations.

### [Feature Grid](./feature-grid.md)

Animated feature grid with stagger effects.

### [Testimonials](./testimonials.md)

Testimonial carousel with animations.

## Contributing Examples

See [Contributing Guide](../contributing.md) for how to add examples.

---

**More examples coming soon!**
