# BoxReveal Tutorial

## Overview

The `BoxReveal` component creates a minimalist reveal effect where text slides out from behind a colored block overlay.

## Import

```typescript
import { BoxReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<BoxReveal>
  <h1 className="text-5xl font-bold">Minimal Elegance</h1>
</BoxReveal>
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `children` | `ReactNode` | Required | Content to reveal |
| `boxColor` | `string` | `'var(--color-primary)'` | Block color |
| `duration` | `number` | `0.5` | Animation duration |

## Examples

### Custom Color

```tsx
<BoxReveal boxColor="#FF6B6B">
  <h2 className="text-4xl font-bold">Bold Statement</h2>
</BoxReveal>
```

### Slow Reveal

```tsx
<BoxReveal duration={1} boxColor="var(--color-accent)">
  <p className="text-2xl">Dramatic entrance</p>
</BoxReveal>
```

## Use Cases

- **Headlines**: Modern, editorial-style reveals
- **Section Titles**: Clean transitions between sections
- **Quotes**: Add emphasis to testimonials
- **Minimalist Designs**: Perfect for clean, modern aesthetics

## Tips

- Works beautifully with bold typography
- Match box color to brand palette
- Use for important headings only
- Pairs well with white space
