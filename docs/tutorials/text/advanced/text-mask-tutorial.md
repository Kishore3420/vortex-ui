# TextMask Tutorial

## Overview

The `TextMask` component clips an image or video background into text shapes, creating stunning visual text effects.

## Import

```typescript
import { TextMask } from '@/components/animations';
```

## Basic Usage

```tsx
<TextMask text="COSMOS" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to display |
| `backgroundImage` | `string` | Default space image | Image URL |
| `className` | `string` | `''` | Additional CSS classes |
| `maskSize` | `string` | `'cover'` | CSS background-size |

## Examples

### Custom Image
```tsx
<TextMask
  text="MOUNTAINS"
  backgroundImage="/images/mountains.jpg"
  className="text-9xl font-black"
/>
```

### Video Background
```tsx
<TextMask
  text="MOTION"
  backgroundImage="/video/waves.mp4"
  className="text-8xl font-black uppercase"
/>
```

## Use Cases

- **Hero Sections**: Dramatic main headlines
- **Brand Names**: Memorable logo treatments
- **Category Headers**: Visual section dividers
- **Artistic Designs**: Creative, bold statements

## Tips

- Use very large, bold fonts (6xl-9xl)
- Uppercase text works best
- Black fonts with strong weights
- High-contrast images for readability
- Perfect for above-the-fold content
