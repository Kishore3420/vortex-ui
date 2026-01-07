# LetterPullUp Tutorial

## Overview

The `LetterPullUp` component animates individual characters sliding up sequentially, creating a playful and energetic entrance effect.

## Import

```typescript
import { LetterPullUp } from '@/components/animations';
```

## Basic Usage

```tsx
<LetterPullUp text="Character Magic" />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to animate |
| `className` | `string` | `''` | Additional CSS classes |
| `delay` | `number` | `0` | Initial delay |
| `staggerDelay` | `number` | `0.03` | Delay between characters |

## Examples

### Fast Typing Effect

```tsx
<LetterPullUp
  text="HELLO WORLD"
  staggerDelay={0.02}
  className="text-6xl font-black uppercase"
/>
```

### Slow Character Reveal

```tsx
<LetterPullUp
  text="Premium"
  staggerDelay={0.08}
  className="text-5xl font-bold text-linear-to-r from-primary to-primary/60"
/>
```

## Use Cases

- **Brand Names**: Animate logos and brand text
- **Short Headlines**: 1-2 word impactful statements
- **Numbers/Stats**: Highlight key metrics
- **CTAs**: Create urgency in call-to-actions

## Tips

- Best for short text (1-12 characters)
- Use uppercase for bold impact
- Pairs well with monospace fonts
- Ideal for hero sections and splash screens
