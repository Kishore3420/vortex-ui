# LinkReveal Tutorial

## Overview

The `LinkReveal` component creates a premium hover effect for links with animated underlines and background highlights.

## Import

```typescript
import { LinkReveal } from '@/components/animations';
```

## Basic Usage

```tsx
<LinkReveal href="/explore">
  Explore Collection
</LinkReveal>
```

## Props

| Prop | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `children` | `ReactNode` | Required | Link content |
| `href` | `string` | `'#'` | Link destination |
| `className` | `string` | `''` | Additional CSS classes |
| `underlineColor` | `string` | `'var(--color-primary)'` | Underline color |

## Examples

### Custom Color
```tsx
<LinkReveal
  href="/learn"
  underlineColor="#FF6B6B"
  className="text-2xl font-semibold"
>
  Learn More →
</LinkReveal>
```

### Navigation Links
```tsx
<LinkReveal href="/about">
  About Us
</LinkReveal>
```

## Use Cases

- **Navigation Menus**: Premium hover states
- **CTAs**: Interactive call-to-actions
- **Footer Links**: Elegant link styling
- **Article Links**: Enhanced reading experience

## Tips

- Works great in navigation bars
- Match underline to brand colors
- Beautiful on both light and dark modes
- Adds polish to any link
