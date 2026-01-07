# WordPullUp Tutorial

## Overview

The `WordPullUp` component animates words sliding up from below with an optional bounce effect. Each word appears sequentially, creating a smooth reading flow.

## Import

```typescript
import { WordPullUp } from '@/components/animations';
```

## Basic Usage

```tsx
<WordPullUp text="Building amazing experiences" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `delay` | `number` | `0` | Initial delay before animation |
| `staggerDelay` | `number` | `0.1` | Delay between each word |

## Examples

### Fast Sequential

```tsx
<WordPullUp
  text="Fast smooth animation"
  staggerDelay={0.05}
  className="text-4xl font-bold"
/>
```

### Slow Dramatic

```tsx
<WordPullUp
  text="Each word matters"
  staggerDelay={0.2}
  delay={0.3}
  className="text-5xl font-black text-primary"
/>
```

## Use Cases

- **Headlines**: Create engaging hero section titles
- **Feature Lists**: Animate benefit statements
- **Quotes**: Add emphasis to testimonials
- **Section Intros**: Smooth transitions between content

## Tips

- Works best with 3-8 words
- Pairs well with gradient text
- Use shorter stagger for faster pacing
- Ideal for above-the-fold content
