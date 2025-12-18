# VortexUI

A comprehensive, production-ready animation library for modern React and Next.js applications. Built with Framer Motion, GSAP, and Three.js, featuring a professional Pantone-based color system.

## 🚀 Quick Start

**Prerequisites:** This project uses [Bun](https://bun.sh). Install Bun if you haven't already.

```bash
# Install dependencies
bun install

# Run development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📚 Documentation

Comprehensive documentation is available at `/docs`:

- **[Documentation Home](./app/docs)** - Overview and getting started
- **[Getting Started](./app/docs/getting-started)** - Installation and setup
- **[Quick Start](./app/docs/quick-start)** - Your first animation
- **[Roadmap](./app/docs/roadmap)** - Development plan and phases
- **[Component Library](./app/docs/components)** - All animation components

## ✨ Features

- 🎨 **Multi-Library Support** - Framer Motion, GSAP, Three.js
- 🎯 **Production Ready** - Optimized, accessible, performant
- 🎨 **Professional Design** - Pantone-based color system
- 📱 **Modern Stack** - React 19, Next.js 16, TypeScript 5
- 📖 **Comprehensive Docs** - Detailed guides and examples
- ♿ **Accessible** - Respects `prefers-reduced-motion`
- ⚡ **Performance** - 60fps target, GPU-accelerated
- 📝 **Text Animations** - Word/character reveals, typewriter effects
- 🎯 **Interactive Buttons** - Magnetic, ripple, and glow effects
- 📚 **14 Tutorials** - Comprehensive learning guides for all components

## 🏗️ Project Structure

```
├── components/
│   ├── animations/     # Animation components
│   ├── providers/      # Context providers
│   └── sections/       # Page sections
├── lib/
│   ├── animations/     # Animation utilities
│   ├── hooks/          # Custom hooks
│   └── theme.ts        # Pantone colors
├── docs/               # Documentation
└── app/                # Next.js app
```

## 🎯 Current Status

**Phase 1: Foundation** ✅

- Basic Framer Motion components
- Theme system
- Smooth scrolling
- Documentation structure

**Phase 2: Framer Motion Expansion** ✅

- Text animation components (TextReveal, CharacterReveal, SlideUpText, Typewriter)
- Interactive button components (MagneticButton, RippleButton, GlowButton)
- Comprehensive tutorials (14 detailed guides)
- Performance optimizations
- Theme system integration

**Phase 3: Advanced Features** 🚧

- GSAP integration
- Three.js integration
- Parallax effects
- Page transitions

See [Roadmap](./docs/00-roadmap.md) for full development plan.

## 📦 Components

### Animation Components (11)

- **Basic:** FadeIn, ScaleIn, RotateIn, BlurIn, FlipIn
- **Stagger:** StaggerContainer, StaggerItem
- **Text:** TextReveal, CharacterReveal, SlideUpText, Typewriter

### Button Components (3)

- **MagneticButton** - Mouse-attracted buttons with spring physics
- **RippleButton** - Material Design-inspired ripple effect
- **GlowButton** - Hover glow animations

### UI Components (3)

- CodeBlock, DocsSidebar, ThemeToggle

## 📚 Tutorials

Comprehensive tutorials available in `docs/tutorials/`:

**Text Animations:**

- [TextReveal Tutorial](./docs/tutorials/text-reveal-tutorial.md)
- [CharacterReveal Tutorial](./docs/tutorials/character-reveal-tutorial.md)
- [SlideUpText Tutorial](./docs/tutorials/slide-up-text-tutorial.md)
- [Typewriter Tutorial](./docs/tutorials/typewriter-tutorial.md)

**Button Components:**

- [MagneticButton Tutorial](./docs/tutorials/magnetic-button-tutorial.md)
- [RippleButton Tutorial](./docs/tutorials/ripple-button-tutorial.md)
- [GlowButton Tutorial](./docs/tutorials/glow-button-tutorial.md)

**Basic Animations:**

- [FadeIn Tutorial](./docs/tutorials/fade-in-tutorial.md)
- [ScaleIn Tutorial](./docs/tutorials/scale-in-tutorial.md)
- [RotateIn Tutorial](./docs/tutorials/rotate-in-tutorial.md)
- [BlurIn Tutorial](./docs/tutorials/blur-in-tutorial.md)
- [FlipIn Tutorial](./docs/tutorials/flip-in-tutorial.md)

**Stagger Animations:**

- [StaggerContainer Tutorial](./docs/tutorials/stagger-container-tutorial.md)
- [StaggerItem Tutorial](./docs/tutorials/stagger-item-tutorial.md)

## 📖 Learn More

- [Documentation](./docs/README.md) - Complete documentation
- [Examples](./docs/examples/README.md) - Code examples
- [Component Library](./docs/components/README.md) - All components
- [Best Practices](./docs/07-performance.md) - Performance guide
- [Changelog](./docs/CHANGELOG.md) - Version history

## 🤝 Contributing

Contributions are welcome! See [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Built with:** Next.js 16, React 19, TypeScript, Framer Motion, GSAP, Three.js
