# Changelog

All notable changes to Vortex UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-07

### 🎉 Documentation & UX Launch Finalization

This release marks the final documentation sweep and UX refinement for the v1.1.0 launch.

### Added
- **Standardized Documentation**: All background and button components now include "How It Works", "Customization Guide", "Performance & Accessibility", and "Tips & Best Practices" sections.
- **Premium Sidebar Interface**: Completely redesigned documentation sidebar optimized for productivity.
  - Interactive collapsed "slim" view with icon-hover popovers.
  - Lightning-fast `Cmd + K` search integration.
  - Persistent state management (sidebar preference saved to local storage).
  - Smooth entrance animations and active-state tracking.
- **Improved Overviews**: Redesigned category overview pages (Text, Backgrounds, Buttons) with refined copy and design features.

### Fixed
- **Sidebar Scrolling**: Resolved conflict with Lenis scroll library using `data-lenis-prevent`.
- **Navigation Performance**: All internal links in the documentation and sidebar now use `next/link` for SPA-like navigation (no full page reloads).
- **Styling Lints**: Fixed miscellaneous Tailwind CSS v4 transition and gradient warnings.

---

## [1.0.0] - 2026-01-07

### 🎉 Major Release - Text Animations Suite

This release marks the launch of Vortex UI v1.0 with a comprehensive suite of text animation components and a complete reorganization of the library structure.

### Added

#### Text Animations (19 new components)
- **Basic Reveals** (4 components)
  - `TextReveal` - Word-by-word reveal animation
  - `CharacterReveal` - Character-by-character reveal
  - `SlideUpText` - Smooth upward slide entrance
  - `Typewriter` - Classic typewriter effect

- **Advanced Reveals** (6 components)
  - `BlurReveal` - Smooth unblurring effect
  - `ScrambleReveal` - Cyberpunk decryption animation
  - `BoxReveal` - Minimalist block reveal
  - `GradualSpacing` - Letter-spacing animation
  - `ElasticReveal` - Bouncy spring physics entrance
  - `SparkleReveal` - Magical particle reveal with deterministic randomization

- **Physics & Motion** (3 components)
  - `WordPullUp` - Sequential word sliding with spring physics
  - `LetterPullUp` - Character pull-up animation
  - `WavyText` - Continuous wave motion effect

- **Dynamic Effects** (3 components)
  - `RotatingText` - Word carousel with smooth transitions
  - `ShimmerText` - Glossy shimmer gradient effect
  - `RollingText` - Slot machine/counter animation

- **Interactive & Advanced** (3 components)
  - `GlitchText` - Digital distortion with RGB split
  - `LinkReveal` - Premium link hover with underline animation
  - `TextMask` - Image/video-clipped text backgrounds

#### Documentation & Organization
- Reorganized `components/animations/` into 6 categorized subdirectories
  - `basic/` (6 components)
  - `reveals/` (9 components)
  - `physics/` (3 components)
  - `dynamic/` (3 components)
  - `advanced/` (3 components)
  - `core/` (2 utility components)
- Created 19 comprehensive text animation tutorials in `docs/tutorials/text/`
- Reorganized entire `docs/` folder (53 files) into logical structure
  - `getting-started/`, `guides/`, `project/`, `tutorials/`
- Created 5 README navigation indexes for better discoverability
- Updated `/docs` documentation site with new navigation
- Added overview pages for Text, Backgrounds, and Buttons sections

#### UI Improvements
- Redesigned main test index (`/test`) with premium category cards
- Created backgrounds consolidation showcase page
- Transformed basics test page from 637-line scroll to modern grid
- All test pages now use consistent premium design system

### Changed
- Updated barrel exports in `components/animations/index.ts` with organized sections
- Renamed `tutorials/components/` → `tutorials/buttons/` for clarity
- Split animation tutorials into `basic/` and `core/` subdirectories
- Updated main README to showcase all 36 available components
- Updated DocsSidebar navigation to include all component categories

### Fixed
- Restored `BlurReveal` component content (was empty after file move)
- Fixed `SparkleReveal` purity violations using deterministic random function
- Integrated `glitchSpeed` prop in `GlitchText` animation
- Updated Tailwind class in `LinkReveal` from `h-[2px]` to `h-0.5`
- Resolved all import paths after component reorganization

### Technical
- All lint checks passing ✅
- Dev server running smoothly ✅
- Zero breaking changes for existing users ✅
- Full TypeScript type safety ✅
- Performance optimized with Framer Motion variants ✅

---

## [0.1.0] - 2025-12-XX

### Added
- Initial release with core animations
- Background effects (Aurora, GridBeams, MeshGradient, ShootingStars, Spotlight)
- Button components (Shimmer, BorderBeam, Ripple, Magnetic, Glow, Interactive3D)
- Basic animations (FadeIn, ScaleIn, RotateIn, BlurIn, FlipIn)
- Stagger utilities (StaggerContainer, StaggerItem)
- Documentation structure
- Test pages for showcasing

---

**Component Count by Version:**
- v1.0.0: 36 components (19 text + 5 backgrounds + 6 buttons + 6 core)
- v0.1.0: 17 components (5 backgrounds + 6 buttons + 6 core)
