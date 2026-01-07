# SparkleReveal Tutorial

## Overview

The `SparkleReveal` component reveals text with subtle glowing particles that appear around each character, creating a magical entrance effect.

## Import

```typescript
import { SparkleReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<SparkleReveal text="Magical Text" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to reveal |
| `className` | `string` | `''` | Additional CSS classes |
| `sparkleColor` | `string` | `'#FFD700'` | Color of sparkles |
| `delay` | `number` | `0` | Initial delay |
| `staggerDelay` | `number` | `0.05` | Delay between characters |

## Examples

### Blue Sparkles
```tsx
<SparkleReveal
  text="Crystal Clear"
  sparkleColor="#60A5FA"
  className="text-5xl font-bold"
/>
```

### Slow Magical Reveal
```tsx
<SparkleReveal
  text="Enchanted"
  staggerDelay={0.1}
  sparkleColor="#F472B6"
  className="text-6xl font-black text-primary"
/>
```

## Use Cases

- **Premium Features**: Highlight special offerings
- **Achievement Unlocks**: Celebrate milestones
- **Magical/Fantasy Themes**: Wizards, castles, dreams
- **Luxury Products**: Add sparkle to premium items

## Tips

- Gold sparkles for luxury feel
- Blue/purple for mystery and magic
- Keep text short for maximum impact
- Works beautifully on dark backgrounds
