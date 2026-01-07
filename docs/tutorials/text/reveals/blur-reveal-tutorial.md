# BlurReveal Tutorial

## Overview

The `BlurReveal` component creates a smooth unblurring effect as text enters the viewport. Characters or words transition from a blurred state to crystal clear, creating an elegant reveal animation.

## Import

```typescript
import { BlurReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<BlurReveal text="Focusing into clarity" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `blur` | `number` | `10` | Initial blur amount in pixels |
| `duration` | `number` | `0.8` | Animation duration in seconds |
| `delay` | `number` | `0` | Delay before animation starts |
| `staggerDelay` | `number` | `0.05` | Delay between each word/character |
| `animateBy` | `'word' \| 'character' \| 'text'` | `'word'` | Animation granularity |
| `once` | `boolean` | `true` | Animate only once or every time in view |

## Examples

### Character-by-Character

```tsx
<BlurReveal
  text="Letter by letter reveal"
  animateBy="character"
  staggerDelay={0.03}
/>
```

### Full Text Blur

```tsx
<BlurReveal
  text="All at once"
  animateBy="text"
  blur={20}
  duration={1.2}
/>
```

### Heavy Blur Effect

```tsx
<BlurReveal
  text="From deep blur to focus"
  blur={25}
  duration={1.5}
  className="text-4xl font-bold"
/>
```

## Use Cases

- **Hero Headlines**: Draw attention to main headlines with a dramatic reveal
- **Section Titles**: Create visual interest as users scroll
- **Feature Descriptions**: Highlight key information with smooth unblurring
- **Call-to-Actions**: Make CTAs stand out with elegant entry

## Animation Behavior

The component uses Framer Motion's viewport detection to trigger animations when the element enters view. The blur effect is applied using CSS filters and transitions smoothly from the specified blur amount to 0.

## Performance Notes

- Blur effects are GPU-accelerated
- Animation triggers once by default to optimize performance
- Suitable for headline and title text
