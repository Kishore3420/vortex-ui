# AI Instructions for Vortex UI

This document provides context and guidelines for AI assistants working on the **Vortex UI** project. Use these instructions to ensure code consistency, adhere to project standards, and understand the architectural decisions.

## 1. Project Overview & Model

### Goal of this Repo
- **Public library site**: Showcase & document reusable animation components.
- **Personal lab**: Space for learning, notes, and experiments that should not ship in the package.

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**:
  - `framer-motion` (Primary for UI interactions)
  - `gsap` (Complex sequences)
  - `@react-three/fiber` & `@react-three/drei` (3D elements)
- **Core Library**: React 19
- **Theme System**: always prefer `bg-background`, `text-foreground`, `bg-card`, etc., over hardcoded colors. Use CSS variables (`hsl(var(--primary))`) for custom backgrounds.
- **Strictness**: Strict linting & types. No `any`.

## 2. Directory Roles & Architecture

### Public-Facing Docs (Ship with Library)
- **`app/docs/`**: The documentation site. User-facing, production-quality.
  - `animations/`: Documentation for animation primitives (e.g., `fade-in`, `stagger`, `text-reveal`).
  - `buttons/`: Documentation for button components (e.g., `magnetic-button`).
- **`components/ui/DocsSidebar.tsx`**: Controls left navigation. Update this when adding new docs pages.
- **`app/docs/components/page.tsx`**: Components catalog. Update `basicAnimations`, `textAnimations`, etc. arrays when adding public components.

### Reusable Library Code (The Actual Components)
- **`components/animations/`**: Core animation primitives (e.g., `FadeIn`, `TextReveal`). Export from `index.tsx`.
- **`components/ui/`**: Reusable UI primitives (e.g., `MagneticButton`, `CodeBlock`).
- **`components/sections/`**: Larger page sections (Hero, Features).

### Internal Learning & Experiments (Do NOT Ship)
- **`docs/` (root)**: Internal notes, planning, and tutorials. excluded from npm.
- **`app/test/`**: Playground pages for experiments. (`app/test/new-effect/page.tsx`). Excluded from package.

### Meta & Config
- **`package.json`**: Use semver for versions.
- **`VERSION.md`**: Human-friendly version log.
- **`docs/CHANGELOG.md`**: Main package changelog only.

## 3. Workflow & Patterns

### 1. Adding or Changing a Component
- **Where**: `components/animations/*` (primitives) or `components/ui/*` (widgets).
- **Checklist**:
  - Use **Framer Motion** + **Tailwind**.
  - use **Theme-aware colors** (tokens/CSS vars).
  - Add prop types with clear defaults.
  - Verify with `bun run build`.

### 2. Documenting a New Component
1. **Create Docs Page**: `app/docs/animations/x/page.tsx`. Use the `FadeIn + CodeBlock` pattern.
2. **Update Sidebar**: `components/ui/DocsSidebar.tsx`.
3. **Update Catalog**: `app/docs/components/page.tsx`.
4. **Verify**: Check new route exists.

### 3. Internal Tutorials
- Write in **`docs/` (root)**. These don't need to be perfect.

### 4. Playground Pages
- Create in **`app/test/`**. Messy is fine, but prefer theme-aware colors.

## 4. Coding Standards

### TypeScript & React
- **Functional Components**: Arrow functions, named exports.
- **Props**: Destructure, type definitions (Interfaces), default values.
- **Client Components**: Add `'use client'` where needed.
- **Hooks**: Use custom hooks, `useCallback`/`useMemo` for performance.

### Animation Patterns
- **Performance**: Animate `transform` and `opacity`.
- **Spring Physics**: Use spring animations for natural feel.
- **Interactivity**: `whileHover`, `whileTap`. Use `useMotionValue` for complex tracking.

## 5. How to "Think" as an AI in this Repo
- **Public Docs**: Work in `app/docs/*`, `DocsSidebar`. High quality.
- **Internal Learning**: Work in `docs/` (root).
- **Playground**: Work in `app/test/*`.
- **General Rule**: Keep components theme-aware, accessible, and lint-clean. Use `bun run build` to verify.

## 6. Future Roadmap & Plans

### Big Picture
- **Two Parallel Tracks**:
  - **Library Track**: Add polished, reusable components to `app/docs/` (shipped with the package).
  - **Learning Track**: Use `docs/` and `app/test/` for deep learning and experiments (not shipped).

### Planned Features (Near-Term)
- **Buttons**:
  - **Variants**: `primary`, `secondary`, `outline`, `ghost` (Tailwind-style).
  - **Sizes**: `sm`, `md`, `lg`, `xl` with consistent typography/padding.
  - **Effects**: Keep magnetic/ripple/glow as *behaviors* layered on base styles.
- **Animation Primitives**:
  - **Parallax**: Section parallax, scroll-linked effects (`app/docs/animations/parallax-*`).
  - **Page Transitions**: Route-level transitions (fade/slide).
  - **Advanced Text**: Morphing text, line splits, counter animations.
- **Backgrounds & 3D**:
  - **GSAP**: Bridge for complex timelines.
  - **Three.js/WebGL**: Simple 3D backgrounds/objects (separated from Framer Motion basics).
- **Layouts**:
  - **Landing Pages**: Real-world examples (SaaS, Portfolio) using existing primitives.
  - **Combinations**: "Recipes" like Hero with TextReveal + MagneticButton.

### Performance & Evolution
- **Publishing**: Eventually extract `@vortex-ui/core` as a pure component library. `app/` remains the docs site.
- **Mindset**:
  1. **Learn**: Start in `docs/` or `app/test/*`.
  2. **Promote**: Move solid ideas to `components/animations` or `components/ui` + `app/docs`.
  3. **Publish**: Update version and logs after meaningful batch of features.
