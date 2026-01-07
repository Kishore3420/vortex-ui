# GlitchText Tutorial

## Overview

The `GlitchText` component creates a digital distortion effect with RGB split and jittery motion. Perfect for cyberpunk, gaming, and tech-focused interfaces.

## Import

```typescript
import { GlitchText } from '@/components/animations';
```

## Basic Usage

```tsx
<GlitchText text="SYSTEM ERROR" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to display |
| `className` | `string` | `''` | Additional CSS classes |
| `glitchSpeed` | `number` | `200` | Glitch frequency in ms |
| `enableHover` | `boolean` | `false` | Glitch only on hover |

## Examples

### Always Glitching

```tsx
<GlitchText
  text="LOADING..."
  glitchSpeed={150}
  className="text-4xl font-black font-mono"
/>
```

### Hover-Triggered Glitch

```tsx
<GlitchText
  text="HOVER ME"
  enableHover={true}
  className="text-3xl font-bold cursor-pointer"
/>
```

### Fast Glitch Effect

```tsx
<GlitchText
  text="CRITICAL ERROR"
  glitchSpeed={100}
  className="text-5xl font-black text-red-500"
/>
```

## Use Cases

- **Error States**: Dramatic error messages and warnings
- **Loading Screens**: Tech-themed loading indicators
- **Gaming UI**: Cyberpunk-style interface elements
- **Interactive Elements**: Hover effects for buttons and links
- **Status Indicators**: System states and alerts

## Animation Behavior

The component creates a glitch effect using:
1. **RGB Split**: Red and blue ghost copies slightly offset
2. **Position Jitter**: Random X/Y position changes
3. **Filter Effects**: Hue rotation for color distortion
4. **Continuous Loop**: Infinite animation or hover-triggered

## Styling Tips

- Works best with **monospace** fonts
- Use **bold weights** for more impact
- Pair with dark backgrounds for visibility
- Consider system colors (red, yellow) for alerts
- Keep text short (1-3 words) for maximum effect

## Performance Notes

- Uses CSS filters and transforms (GPU-accelerated)
- Hover mode is more performance-friendly
- Suitable for accent text, not large paragraphs
