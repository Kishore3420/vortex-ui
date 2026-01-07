# ScrambleReveal Tutorial

## Overview

The `ScrambleReveal` component creates a cyberpunk-style decryption effect where characters randomly cycle through different letters before settling into the final text. Perfect for tech-focused and dynamic interfaces.

## Import

```typescript
import { ScrambleReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<ScrambleReveal text="DECODING..." />
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `text` | `string` | Required | The text to reveal |
| `className` | `string` | `''` | Additional CSS classes |
| `scrambleDuration` | `number` | `0.05` | Time between character changes (ms) |
| `revealDelay` | `number` | `0` | Delay before reveal starts |
| `staggerDelay` | `number` | `0.05` | Delay between each character reveal |

## Examples

### Fast Scramble

```tsx
<ScrambleReveal
  text="SYSTEM ONLINE"
  scrambleDuration={0.03}
  className="text-3xl font-mono uppercase text-primary"
/>
```

### Slow Dramatic Reveal

```tsx
<ScrambleReveal
  text="ACCESS GRANTED"
  scrambleDuration={0.08}
  staggerDelay={0.1}
  className="text-4xl font-bold tracking-wider"
/>
```

## Use Cases

- **Tech/SaaS Interfaces**: Perfect for dashboard headers and system messages
- **Gaming UI**: Create retro-futuristic loading screens
- **Security/Auth**: Add drama to login and verification flows
- **Data Visualization**: Animate data labels and metrics

## Animation Behavior

1. Characters start as random uppercase letters and numbers
2. Each character scrambles rapidly through different values
3. Characters settle one by one into the final text
4. The effect creates a "decryption" or "hacking" visual

## Tips

- Works best with **uppercase** text and **monospace** fonts
- Ideal for short messages (5-15 characters)
- Use primary or accent colors for tech aesthetic
- Combine with other effects for loading states
