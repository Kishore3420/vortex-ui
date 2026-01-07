# Component Documentation Template

Use this template when documenting new animation components.

## ComponentName

### Overview

Brief description of what this component does and when to use it.

**Use Cases:**

- Use case 1
- Use case 2
- Use case 3

**When NOT to use:**

- When simpler solution exists
- Performance concerns
- Accessibility issues

### Props

| Prop       | Type        | Default     | Description                   |
| ---------- | ----------- | ----------- | ----------------------------- |
| `children` | `ReactNode` | Required    | Content to animate            |
| `delay`    | `number`    | `0`         | Animation delay in seconds    |
| `duration` | `number`    | `0.6`       | Animation duration in seconds |
| `easing`   | `string`    | `"easeOut"` | Easing function               |
| `once`     | `boolean`   | `true`      | Animate only once             |

### Basic Usage

```tsx
import { ComponentName } from '@/components/animations';

<ComponentName>
  <div>Your content</div>
</ComponentName>;
```

### Examples

#### Example 1: Basic Usage

```tsx
<ComponentName>
  <h1>Hello World</h1>
</ComponentName>
```

#### Example 2: With Custom Props

```tsx
<ComponentName delay={0.5} duration={1.0} easing="bounce">
  <button>Click me</button>
</ComponentName>
```

#### Example 3: Advanced Usage

```tsx
// More complex example
```

### Customization

#### Changing Animation Speed

```tsx
<ComponentName duration={0.3}>  {/* Fast */}
<ComponentName duration={1.5}>  {/* Slow */}
```

#### Custom Easing

```tsx
<ComponentName easing="easeIn">
<ComponentName easing="easeOut">
<ComponentName easing="bounce">
```

### Performance Considerations

- **GPU Acceleration:** Uses `transform` and `opacity` for 60fps
- **Re-renders:** Optimized to prevent unnecessary updates
- **Bundle Size:** ~X KB (gzipped)

### Accessibility

- ✅ Respects `prefers-reduced-motion`
- ✅ Keyboard navigable
- ✅ Screen reader friendly
- ⚠️ Note: [Any accessibility concerns]

### Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile: ✅

### Related Components

- [RelatedComponent1](./related-component1.md)
- [RelatedComponent2](./related-component2.md)

### API Reference

See [API Documentation](../../api/README.md#componentname) for complete API reference.

---

**Last Updated:** [Date]
