# ElasticReveal Tutorial

## Overview

The `ElasticReveal` component creates a bouncy, spring-physics based entrance where characters scale up with elastic easing.

## Import

```typescript
import { ElasticReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<ElasticReveal text="Bouncy Text!" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `delay` | `number` | `0` | Initial delay |
| `staggerDelay` | `number` | `0.05` | Delay between characters |

## Examples

### Playful Heading
```tsx
<ElasticReveal
  text="HELLO!"
  className="text-7xl font-black text-primary"
/>
```

### Fast Bounce
```tsx
<ElasticReveal
  text="Quick Pop"
  staggerDelay={0.03}
  className="text-5xl font-bold"
/>
```

## Use Cases

- **Playful Brands**: Fun, energetic interfaces
- **Attention Grabbers**: Important announcements
- **Gaming UI**: Energetic game elements
- **Kids Content**: Playful, bouncy feel

## Tips

- Best for short, impactful text
- Use bold fonts for visibility
- Great for CTAs and notifications
- Adds personality to interfaces
