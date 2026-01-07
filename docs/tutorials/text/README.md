# Text Animations Tutorials

## Overview

This directory contains comprehensive tutorials for all text animation components in the Vortex UI library. Each tutorial includes component documentation, props reference, usage examples, and best practices.

## Tutorial Organization

Tutorials are organized by animation category to match the component structure:

### Basic (`basic/`)
Core text reveal and entrance animations:
- [TextReveal](basic/text-reveal-tutorial.md) - Word-by-word reveal
- [CharacterReveal](basic/character-reveal-tutorial.md) - Character-by-character reveal
- [SlideUpText](basic/slide-up-text-tutorial.md) - Smooth slide-up entrance
- [Typewriter](basic/typewriter-tutorial.md) - Classic typewriter effect

### Reveals (`reveals/`)
Sophisticated reveal and entrance effects:
- [BlurReveal](reveals/blur-reveal-tutorial.md) - Smooth unblurring effect
- [ScrambleReveal](reveals/scramble-reveal-tutorial.md) - Cyberpunk decryption
- [BoxReveal](reveals/box-reveal-tutorial.md) - Minimalist block reveal
- [GradualSpacing](reveals/gradual-spacing-tutorial.md) - Letter-spacing animation
- [ElasticReveal](reveals/elastic-reveal-tutorial.md) - Bouncy spring entrance
- [SparkleReveal](reveals/sparkle-reveal-tutorial.md) - Magical particle reveal

### Physics (`physics/`)
Motion-based animations with natural physics:
- [WordPullUp](physics/word-pull-up-tutorial.md) - Sequential word slide
- [LetterPullUp](physics/letter-pull-up-tutorial.md) - Character pull-up
- [WavyText](physics/wavy-text-tutorial.md) - Continuous wave motion

### Dynamic (`dynamic/`)
Continuous and cycling effects:
- [RotatingText](dynamic/rotating-text-tutorial.md) - Word carousel
- [ShimmerText](dynamic/shimmer-text-tutorial.md) - Glossy shimmer effect
- [RollingText](dynamic/rolling-text-tutorial.md) - Slot machine/counter

### Advanced (`advanced/`)
Interactive and experimental effects:
- [GlitchText](advanced/glitch-text-tutorial.md) - Digital distortion
- [LinkReveal](advanced/link-reveal-tutorial.md) - Premium link hover
- [TextMask](advanced/text-mask-tutorial.md) - Image-clipped text

## Quick Start

1. Choose a category based on your desired effect
2. Read the component overview and props reference
3. Review the example implementations
4. Copy and adapt the code for your project

## Common Patterns

### Hero Headlines
```tsx
import { BlurReveal, WordPullUp } from '@/components/animations';

<BlurReveal text="Welcome to the Future" className="text-6xl font-bold" />
<WordPullUp text="Building tomorrow's interfaces" className="text-2xl" />
```

### Interactive Elements
```tsx
import { LinkReveal, GlitchText } from '@/components/animations';

<LinkReveal href="/explore">Explore Collection</LinkReveal>
<GlitchText text="SYSTEM ALERT" enableHover />
```

### Dynamic Content
```tsx
import { RotatingText, ShimmerText } from '@/components/animations';

<RotatingText texts={['Fast', 'Secure', 'Scalable']} />
<ShimmerText text="Premium Feature" />
```

## Additional Resources

- **Component Source**: `components/animations/`
- **Live Showcase**: `/test/text`
- **Main Documentation**: See individual component files
