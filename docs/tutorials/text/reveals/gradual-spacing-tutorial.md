# GradualSpacing Tutorial

## Overview

The `GradualSpacing` component animates letter-spacing from condensed or expanded state to normal, creating a smooth expanding or contracting effect.

## Import

```typescript
import { GradualSpacing } from '@/components/animations';
```

## Basic Usage

```tsx
<GradualSpacing text="EXPANSION" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `initialSpacing` | `string` | `'-0.5em'` | Starting letter-spacing |
| `duration` | `number` | `1.5` | Animation duration |

## Examples

### Expanding Effect
```tsx
<GradualSpacing
  text="EXPAND"
  initialSpacing="-0.8em"
  className="text-6xl font-black uppercase"
/>
```

### Condensing Effect
```tsx
<GradualSpacing
  text="CONDENSE"
  initialSpacing="1em"
  className="text-5xl font-bold"
/>
```

## Use Cases

- **Logo Animations**: Dramatic brand name reveals
- **Headlines**: Eye-catching title treatments
- **Uppercase Text**: Works best with all caps
- **Minimalist Designs**: Clean, modern aesthetics

## Tips

- Use uppercase text for maximum impact
- Pair with bold fonts
- Ideal for short words (4-10 letters)
- Creates strong visual interest
