# RollingText Tutorial

## Overview

The `RollingText` component creates a slot-machine or counter-style animation where characters roll vertically through numbers or letters.

## Import

```typescript
import { RollingText } from '@/components/animations';
```

## Basic Usage

```tsx
<RollingText text="2025" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text/number to display |
| `className` | `string` | `''` | Additional CSS classes |
| `duration` | `number` | `2` | Roll duration in seconds |

## Examples

### Counter Animation

```tsx
<RollingText
  text="99999"
  duration={3}
  className="text-6xl font-mono font-bold text-primary"
/>
```

### Year Display

```tsx
<RollingText
  text="2025"
  duration={1.5}
  className="text-5xl font-black"
/>
```

## Use Cases

- **Counters**: Animate numbers and statistics
- **Timers**: Countdown or count-up displays
- **Years/Dates**: Highlight temporal information
- **Scores**: Gaming and achievement displays

## Tips

- Works best with monospace fonts
- Ideal for numeric content
- Use for 3-6 digit numbers
- Perfect for dashboard metrics and stats pages
