# WavyText Tutorial

## Overview

The `WavyText` component creates a continuous wave motion across characters, adding playful movement and visual interest to text.

## Import

```typescript
import { WavyText } from '@/components/animations';
```

## Basic Usage

```tsx
<WavyText text="Flowing like water" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `amplitude` | `number` | `10` | Wave height in pixels |
| `frequency` | `number` | `2` | Wave speed |
| `delay` | `number` | `0` | Initial delay |

## Examples

### Subtle Wave

```tsx
<WavyText
  text="Gentle motion"
  amplitude={5}
  frequency={1.5}
  className="text-3xl font-semibold"
/>
```

### Dramatic Wave

```tsx
<WavyText
  text="BIG WAVES"
  amplitude={20}
  frequency={3}
  className="text-6xl font-black text-primary"
/>
```

## Use Cases

- **Playful Headings**: Add fun to creative projects
- **Loading States**: Engaging loading indicators
- **Interactive Elements**: Highlight hoverable items
- **Fun Brands**: Perfect for youth-oriented products

## Tips

- Keep amplitude subtle (5-15px) for elegance
- Use bold fonts for visibility
- Works well with bright colors
- Ideal for accent text, not body copy
