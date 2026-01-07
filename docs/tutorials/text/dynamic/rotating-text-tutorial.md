# RotatingText Tutorial

## Overview

The `RotatingText` component cycles through an array of words or phrases with smooth transitions. Perfect for hero sections, feature highlights, and dynamic headlines.

## Import

```typescript
import { RotatingText } from '@/components/animations';
```

## Basic Usage

```tsx
<div className="text-4xl font-bold">
  Design for{' '}
  <RotatingText
    texts={['Everyone', 'Creators', 'Innovators']}
    className="text-primary"
  />
</div>
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `texts` | `string[]` | Required | Array of words to rotate through |
| `className` | `string` | `''` | Additional CSS classes |
| `interval` | `number` | `2000` | Time between rotations (ms) |
| `direction` | `'up' \| 'down'` | `'up'` | Slide direction |

## Examples

### Fast Rotation

```tsx
<RotatingText
  texts={['Fast', 'Quick', 'Rapid', 'Swift']}
  interval={1500}
  className="text-primary italic"
/>
```

### Downward Slide

```tsx
<RotatingText
  texts={['Feature 1', 'Feature 2', 'Feature 3']}
  direction="down"
  className="font-semibold"
/>
```

### Hero Headline

```tsx
<h1 className="text-6xl font-black">
  Build{' '}
  <RotatingText
    texts={['Faster', 'Smarter', 'Better']}
    interval={2500}
    className="text-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent"
  />
</h1>
```

## Use Cases

- **Hero Sections**: Showcase multiple value propositions
- **Feature Lists**: Highlight rotating benefits
- **Call-to-Actions**: Create dynamic, attention-grabbing CTAs
- **Status Indicators**: Show cycling states or modes

## Animation Behavior

- Smoothly slides words in the specified direction
- Automatically loops through the array indefinitely
- Pauses at each word for the specified interval
- Maintains consistent width through absolute positioning

## Tips

- Keep words similar in length for smooth transitions
- Use 3-5 words for optimal impact
- Pair with gradient text for premium feel
- Consider interval based on word length (1500-3000ms)
