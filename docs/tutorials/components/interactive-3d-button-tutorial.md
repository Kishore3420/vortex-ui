# Interactive3DButton Component - Complete Tutorial

## 📚 Table of Contents

1. [What is Interactive3DButton?](#what-is-interactive3dbutton)
2. [Visual Behavior](#visual-behavior)
3. [Line-by-Line Code Explanation](#line-by-line-code-explanation)
4. [How to Use](#how-to-use)

---

## What is Interactive3DButton?

**Interactive3DButton** mimics the physical feel of a real button. It has a visible "side" or "depth" that disappears when pressed. It's often used in gamified interfaces, learning platforms (like Duolingo), or retro-styled apps.

### Visual Effect
-   **Depth**: Top layer is offset from the bottom layer.
-   **Press Animation**: On active/click, the top layer moves down to meet the bottom layer.
-   **Satisfying Click**: Provides immediate visual feedback.

---

## Visual Behavior

```
Rest State:
  ┌─────────────┐
  │    TOP      │
  └─────────────┘
  │    SIDE     │ (Darker shade)
  └─────────────┘

Pressed State:
  ┌─────────────┐
  │    TOP      │ (Moves down)
  └─────────────┘
```

---

## Line-by-Line Code Explanation

We use basic CSS transforms and transitions. No complex JS needed.

```tsx
interface Interactive3DButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string; // Main color (e.g. "bg-blue-500")
  shadowColor?: string; // Side color (e.g. "bg-blue-700")
}

export const Interactive3DButton = ({
  children,
  className = "",
  color = "bg-blue-500",
  shadowColor = "bg-blue-700",
  ...props
}: Interactive3DButtonProps) => {
  return (
    <button className="group relative transition-transform active:scale-95" {...props}>
      {/* 1. The 'Shadow' / Side Layer */}
      <span className={`absolute inset-0 translate-y-2 rounded-lg ${shadowColor}`} />

      {/* 2. The Top Layer */}
      <span className={`relative block -translate-y-2 rounded-lg border-2 border-black/10 ${color} px-8 py-4 font-bold text-white transition-transform active:translate-y-0`}>
        {children}
      </span>
    </button>
  );
};
```

---

## How to Use

```tsx
<Interactive3DButton color="bg-red-500" shadowColor="bg-red-700">
  Delete Account
</Interactive3DButton>
```
