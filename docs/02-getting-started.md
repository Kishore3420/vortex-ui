# Getting Started

## Installation

### Prerequisites

- Node.js 18+ or Bun
- React 19+
- Next.js 16+

### Install Dependencies

```bash
# Using npm
npm install framer-motion gsap lenis

# Using yarn
yarn add framer-motion gsap lenis

# Using pnpm
pnpm add framer-motion gsap lenis

# Using bun
bun add framer-motion gsap lenis
```

### Optional: Three.js (for 3D animations)

```bash
npm install @react-three/fiber @react-three/drei three
```

## Project Setup

### 1. Clone or Use This Structure

```bash
# If using this project as a template
git clone [your-repo]
cd ai-studio-portfolio
npm install
```

### 2. Configure TypeScript

Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### 3. Set Up Tailwind CSS

The project uses Tailwind CSS 4 with Pantone colors. Your `globals.css` should include:

```css
@import 'tailwindcss';

@theme {
  /* Pantone color variables */
  --color-primary: #0f4c75;
  /* ... more colors */
}
```

## Basic Setup

### 1. Theme Provider

Wrap your app with the theme provider:

```tsx
// app/layout.tsx
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 2. Your First Animation

```tsx
// app/page.tsx
import { FadeIn } from '@/components/animations';

export default function Home() {
  return (
    <main>
      <FadeIn direction="up">
        <h1>Hello, World!</h1>
      </FadeIn>
    </main>
  );
}
```

## Project Structure

```
your-project/
├── components/
│   └── animations/
│       ├── FadeIn.tsx
│       ├── ScaleIn.tsx
│       └── ...
├── app/
│   ├── layout.tsx
│   └── page.tsx
└── lib/
    └── theme.ts
```

## Quick Examples

### Fade In Animation

```tsx
import { FadeIn } from '@/components/animations';

<FadeIn direction="up" delay={0.2}>
  <div>Content fades in from bottom</div>
</FadeIn>;
```

### Scale Animation

```tsx
import { ScaleIn } from '@/components/animations';

<ScaleIn delay={0.3}>
  <button>Button scales in</button>
</ScaleIn>;
```

### Staggered Animation

```tsx
import { StaggerContainer, StaggerItem } from '@/components/animations';

<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <div>{item.content}</div>
    </StaggerItem>
  ))}
</StaggerContainer>;
```

## Configuration

### Theme Configuration

Customize colors in `lib/theme.ts`:

```typescript
export const pantoneColors = {
  classicBlue: '#0F4C75',
  // ... customize colors
};
```

### Smooth Scroll Configuration

Configure smooth scrolling in `components/providers/SmoothScroll.tsx`:

```tsx
<SmoothScroll duration={1.2} wheelMultiplier={1} smoothWheel={true}>
  {children}
</SmoothScroll>
```

## Development

### Run Development Server

```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## Next Steps

1. [Quick Start Guide](./03-quick-start.md) - Create your first animation
2. [Animation Basics](./04-animation-basics.md) - Learn core concepts
3. [Component Library](./components/framer-motion.md) - Explore components

## Troubleshooting

### Common Issues

**Module not found errors:**

- Ensure all dependencies are installed
- Check import paths match your project structure

**TypeScript errors:**

- Verify `tsconfig.json` paths configuration
- Ensure types are installed for all dependencies

**Animation not working:**

- Check browser console for errors
- Verify component is client-side (`'use client'`)
- Check viewport settings for scroll animations

## Support

- Check [FAQ](./faq.md) for common questions
- Review [Troubleshooting Guide](./troubleshooting.md)
- Open an issue on GitHub

---

**Ready to animate?** Check out the [Quick Start Guide](./03-quick-start.md)!
