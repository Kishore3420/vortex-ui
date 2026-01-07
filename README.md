# Vortex UI

A premium animation component library for Next.js and React, built with modern web technologies for creating stunning, performant user interfaces.

## Overview

Vortex UI provides a collection of carefully crafted animation components designed for modern web applications. Built with performance and developer experience in mind, each component is fully customizable and production-ready.

## Tech Stack

- **Framework**: Next.js 16, React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion, GSAP, Three.js
- **TypeScript**: Full type safety throughout

## Available Components

### Text Animations (19)

Premium text effects from basic reveals to advanced interactive animations:

**Basic Reveals** (4)
- **Text Reveal** - Word-by-word reveal animation
- **Character Reveal** - Character-by-character reveal
- **Slide Up Text** - Smooth upward slide entrance
- **Typewriter** - Classic typewriter effect

**Advanced Reveals** (6)
- **Blur Reveal** - Smooth unblurring effect
- **Scramble Reveal** - Cyberpunk decryption animation
- **Box Reveal** - Minimalist block reveal
- **Gradual Spacing** - Letter-spacing animation
- **Elastic Reveal** - Bouncy spring entrance
- **Sparkle Reveal** - Magical particle reveal

**Physics & Motion** (3)
- **Word Pull Up** - Sequential word sliding
- **Letter Pull Up** - Character pull-up animation
- **Wavy Text** - Continuous wave motion

**Dynamic Effects** (3)
- **Rotating Text** - Word carousel
- **Shimmer Text** - Glossy shimmer effect
- **Rolling Text** - Slot machine/counter animation

**Interactive & Advanced** (3)
- **Glitch Text** - Digital distortion effect
- **Link Reveal** - Premium link hover animation
- **Text Mask** - Image/video-clipped text

### Background Effects (5)

Immersive full-screen background animations:
- **Aurora** - Ethereal Northern Lights gradient effect
- **Grid Beams** - High-tech structural grid with animated light beams
- **Mesh Gradient** - Dynamic blob-based gradient animation
- **Shooting Stars** - Whimsical meteor shower effect
- **Spotlight** - Interactive cursor spotlight effect

### Button Components (6)

Interactive button variants with premium animations:
- **Shimmer Button** - Glossy shimmer effect
- **Border Beam Button** - Animated border beam
- **Ripple Button** - Material-inspired ripple effect
- **Magnetic Button** - Magnetic cursor attraction
- **Glow Button** - Glowing hover effect
- **Interactive 3D Button** - 3D perspective tilt

### Core Animations (6)

Essential building blocks for entrance animations:
- **Fade In** - Opacity and slide transitions
- **Scale In** - Growing scale animation
- **Rotate In** - Rotating entrance
- **Blur In** - Unblurring entry effect
- **Flip In** - 3D flip effect
- **Stagger Container/Item** - Sequential animation utilities

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vortex-ui.git

# Install dependencies
bun install

# Start development server
bun dev
```

## Quick Start

```tsx
// Text animations
import { BlurReveal, WordPullUp } from '@/components/animations';

<BlurReveal text="Welcome to the Future" className="text-6xl font-bold" />
<WordPullUp text="Building tomorrow's interfaces" />

// Background + Text combination
import { Aurora } from '@/components/backgrounds';

<div className="relative min-h-screen">
  <Aurora className="absolute inset-0" />
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <BlurReveal text="Amazing Experience" className="text-7xl font-black" />
  </div>
</div>

// Interactive buttons
import { ShimmerButton } from '@/components/ui';

<ShimmerButton>Get Started</ShimmerButton>
```

## Documentation

Comprehensive documentation is available in the `/docs` folder:
- **Getting Started** - Installation and setup guides
- **Component Guides** - Detailed API documentation for all 36 components
- **Techniques** - Best practices for performance and accessibility
- **Project Information** - Roadmap and changelog

## Requirements

- Node.js 18+ or Bun
- Next.js 16+
- React 19+
- Tailwind CSS v4

## What's New in v1.0

🎉 **Major Release** - Text Animations Suite

- 19 premium text animation components
- Organized component architecture (6 categorized directories)
- Comprehensive documentation site
- Premium showcase pages
- 19 detailed tutorials

See [CHANGELOG.md](./CHANGELOG.md) for full details.

## Project Status

🚀 **v1.0 Released** - The library now includes 36 production-ready components. Check the [roadmap](./docs/project/roadmap.md) for upcoming features.

## License

[Add your license here]

## Contributing

Contributions are welcome! Please check the documentation for guidelines.

---

**Total Components: 36** (19 text + 5 backgrounds + 6 buttons + 6 core)
Built with ❤️ using Next.js 16, React 19, and Tailwind CSS v4
