# Basic Animations Tutorials

## Overview

Core animation components that serve as building blocks for more complex effects.

## Tutorials

### Entrance Animations
- [FadeIn](basic/fade-in-tutorial.md) - Smooth opacity and slide transitions
- [BlurIn](basic/blur-in-tutorial.md) - Unblurring entry effect
- [ScaleIn](basic/scale-in-tutorial.md) - Growing scale animation
- [RotateIn](basic/rotate-in-tutorial.md) - Rotating entrance
- [FlipIn](basic/flip-in-tutorial.md) - 3D flip effect

### Stagger & Sequencing
- [StaggerContainer](core/stagger-container-tutorial.md) - Container for sequential animations
- [StaggerItem](core/stagger-item-tutorial.md) - Individual staggered items

## Quick Start

```tsx
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/animations';

// Simple fade entrance
<FadeIn direction="up">
  <h1>Welcome</h1>
</FadeIn>

// Stagger multiple items
<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>
```
