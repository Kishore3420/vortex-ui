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

### Background Effects

Immersive full-screen background animations:
- **Aurora** - Ethereal Northern Lights gradient effect
- **Grid Beams** - High-tech structural grid with animated light beams
- **Mesh Gradient** - Dynamic blob-based gradient animation
- **Shooting Stars** - Whimsical meteor shower effect
- **Spotlight** - Interactive cursor spotlight effect

### Button Components

Interactive button variants with premium animations:
- **Shimmer Button** - Glossy shimmer effect
- **Border Beam Button** - Animated border beam
- **Ripple Button** - Material-inspired ripple effect
- **Magnetic Button** - Magnetic cursor attraction
- **Glow Button** - Glowing hover effect
- **Interactive 3D Button** - 3D perspective tilt

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
import { Aurora } from '@/components/backgrounds';
import { ShimmerButton } from '@/components/ui';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <Aurora className="absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <h1 className="text-6xl font-bold mb-8">Welcome</h1>
        <ShimmerButton>Get Started</ShimmerButton>
      </div>
    </div>
  );
}
```

## Documentation

Comprehensive documentation is available in the `/docs` folder:
- **Getting Started** - Installation and setup guides
- **Component Guides** - Detailed API documentation
- **Project Information** - Roadmap and changelog

## Requirements

- Node.js 18+ or Bun
- Next.js 16+
- React 19+
- Tailwind CSS v4

## Project Status

🚧 **Active Development** - This library is under active development. Additional animation components and features are being added regularly. Check the [roadmap](./docs/project/roadmap.md) for upcoming features.

## License

[Add your license here]

## Contributing

Contributions are welcome! Please check the documentation for guidelines.

---

Built with ❤️ using Next.js 16, React 19, and Tailwind CSS v4
