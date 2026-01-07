# ShimmerText Tutorial

## Overview

The `ShimmerText` component adds a moving glossy gradient effect that sweeps across text, creating a premium shimmer or shine animation.

## Import

```typescript
import { ShimmerText } from '@/components/animations';
```

## Basic Usage

```tsx
<ShimmerText text="Premium Features" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to display |
| `className` | `string` | `''` | Additional CSS classes |
| `shimmerColor` | `string` | `'rgba(255,255,255,0.5)'` | Color of the shimmer |
| `duration` | `number` | `3` | Animation duration in seconds |

## Examples

### Gold Shimmer

```tsx
<ShimmerText
  text="Gold Standard"
  shimmerColor="rgba(255, 215, 0, 0.6)"
  className="text-5xl font-black"
/>
```

### Fast Shimmer

```tsx
<ShimmerText
  text="Quick Shine"
  duration={1.5}
  className="text-3xl font-bold text-primary"
/>
```

### Slow Elegant Shimmer

```tsx
<ShimmerText
  text="Luxury Brand"
  duration={5}
  shimmerColor="rgba(200, 200, 255, 0.4)"
  className="text-4xl font-light tracking-wide"
/>
```

## Use Cases

- **Premium CTAs**: Add luxury feel to buttons and links
- **Product Names**: Highlight premium products or features
- **Hero Headlines**: Create eye-catching main titles
- **Achievement Badges**: Celebrate milestones and rewards
- **Brand Names**: Add polish to company or product names

## Animation Behavior

- Creates a gradient overlay that moves from left to right
- Uses `background-clip: text` for text-specific shimmer
- Loops continuously for constant visual interest
- Works with any text color and size

## Styling Tips

- Use with **bold fonts** for maximum visibility
- Pair with dark backgrounds for best contrast
- White/light shimmers work on dark text
- Gold/silver for premium/luxury feel
- Keep shimmer subtle (0.3-0.5 opacity) for elegance

## Performance Notes

- GPU-accelerated gradient animation
- Lightweight and performant
- Suitable for headlines and important text
- No JavaScript overhead, pure CSS animation
