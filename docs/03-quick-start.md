# Quick Start Guide

Get up and running with your first animation in 5 minutes!

## Your First Animation

### Step 1: Import the Component

```tsx
import { FadeIn } from '@/components/animations';
```

### Step 2: Wrap Your Content

```tsx
export default function Home() {
  return (
    <main>
      <FadeIn>
        <h1>Hello, World!</h1>
      </FadeIn>
    </main>
  );
}
```

That's it! Your content will fade in when it enters the viewport.

## Common Patterns

### 1. Fade In from Different Directions

```tsx
<FadeIn direction="up">    {/* From bottom */}
<FadeIn direction="down">  {/* From top */}
<FadeIn direction="left">   {/* From right */}
<FadeIn direction="right"> {/* From left */}
```

### 2. Add Delay

```tsx
<FadeIn delay={0.5}>
  <p>This appears 0.5 seconds after the animation starts</p>
</FadeIn>
```

### 3. Scale Animation

```tsx
import { ScaleIn } from '@/components/animations';

<ScaleIn>
  <button>Click me</button>
</ScaleIn>;
```

### 4. Rotate Animation

```tsx
import { RotateIn } from '@/components/animations';

<RotateIn angle={360}>
  <div>Spins in</div>
</RotateIn>;
```

### 5. Staggered List

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.name}</div>
    </StaggerItem>
  ))}
</StaggerContainer>;
```

## Complete Example

```tsx
'use client';

import { FadeIn } from '@/components/animations';
import { ScaleIn } from '@/components/animations';
import { StaggerContainer, StaggerItem } from '@/components/animations';

const features = [
  { id: 1, title: 'Feature 1' },
  { id: 2, title: 'Feature 2' },
  { id: 3, title: 'Feature 3' },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <FadeIn direction="up" delay={0.2}>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Site</h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <p className="text-lg mb-8">This is a quick start example</p>
      </FadeIn>

      {/* CTA Button */}
      <ScaleIn delay={0.6}>
        <button className="px-6 py-3 bg-primary text-white rounded-lg">
          Get Started
        </button>
      </ScaleIn>

      {/* Features List */}
      <StaggerContainer staggerDelay={0.15} className="mt-16">
        {features.map((feature) => (
          <StaggerItem key={feature.id}>
            <div className="p-4 border rounded-lg mb-4">{feature.title}</div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </main>
  );
}
```

## Customization

### Change Animation Speed

```tsx
<FadeIn duration={0.8}>  {/* Faster */}
<FadeIn duration={1.5}>  {/* Slower */}
```

### Change Easing

```tsx
<FadeIn easing="easeOut">     {/* Smooth end */}
<FadeIn easing="bounce">       {/* Bouncy */}
<FadeIn easing="spring">       {/* Spring physics */}
```

### Custom Offset

```tsx
<FadeIn offset={100}>  {/* Moves 100px */}
```

### Fade Only (No Slide)

```tsx
<FadeIn withSlide={false}>  {/* Only opacity changes */}
```

## Next Steps

1. **Explore Components** - Check out all available animations
2. **Learn Basics** - Understand [Animation Basics](./04-animation-basics.md)
3. **See Examples** - View [Code Examples](./examples/README.md)
4. **Build Landing Page** - Check [Landing Pages](./landing-pages/README.md)

## Tips

- **Start Simple** - Use basic animations first
- **Test Performance** - Check on different devices
- **Respect Motion** - Always test with `prefers-reduced-motion`
- **Combine Animations** - Mix different animation types

---

**Ready for more?** Explore the [Component Library](./components/framer-motion.md)!
