# Contributing to VortexUI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## Getting Started

**Prerequisites:** This project uses [Bun](https://bun.sh) as the package manager. Please install Bun before contributing.

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/vortex-ui.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `bun install`

## Development Workflow

1. Make your changes
2. Test your changes: `bun run dev`
3. Ensure linting passes: `bun run lint`
4. Commit your changes with clear messages
5. Push to your fork and create a Pull Request

## Why Bun?

We use Bun for its:

- ⚡ Faster installation and execution
- 🎯 Built-in TypeScript support
- 📦 Better package management
- 🚀 Improved development experience

## Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Follow ESLint rules (configured in `eslint.config.mjs`)
- Write self-documenting code with clear variable names

## Component Guidelines

When adding new animation components:

1. Follow the existing component structure
2. Include TypeScript types for all props
3. Add comprehensive documentation page
4. Include interactive examples
5. Test with `prefers-reduced-motion`
6. Ensure GPU-accelerated performance

## Documentation

- Update relevant documentation pages
- Add examples to the test pages
- Update CHANGELOG.md for significant changes
- Keep the roadmap updated if adding new features

## Commit Messages

Use clear, descriptive commit messages:

```
feat: Add MotionBlur component
fix: Resolve viewport margin calculation
docs: Update FadeIn documentation
refactor: Optimize StaggerContainer performance
```

## Pull Request Process

1. Ensure all tests pass
2. Update documentation as needed
3. Add yourself to contributors (if applicable)
4. Request review from maintainers

## Questions?

Open an issue for questions or discussions about contributions.

Thank you for contributing! 🎉
