# Background Animations Tutorials

## Overview

Immersive full-screen background effects that add depth and motion to your interfaces.

## Tutorials

- [Aurora](aurora-tutorial.md) - Northern Lights gradient effect
- [Grid Beams](grid-beams-tutorial.md) - Tech grid with moving light beams
- [Mesh Gradient](mesh-gradient-tutorial.md) - Dynamic blob-based gradients
- [Shooting Stars](shooting-stars-tutorial.md) - Meteor shower effect
- [Spotlight](spotlight-tutorial.md) - Interactive cursor spotlight

## Quick Start

```tsx
import { Aurora, Spotlight } from '@/components/backgrounds';

// Hero section with aurora
<div className="relative min-h-screen">
  <Aurora className="absolute inset-0" />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>

// Interactive spotlight
<div className="relative">
  <Spotlight />
  {/* Content */}
</div>
```

## Common Use Cases

- **Hero Sections**: Aurora, Spotlight
- **Tech/SaaS**: Grid Beams, Mesh Gradient
- **Creative/Fun**: Shooting Stars
