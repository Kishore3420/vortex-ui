export type Theme = 'light' | 'dark' | 'system';

export const themeConfig = {
  light: {
    background: '#ffffff',
    foreground: '#0a0a0a',
    card: '#ffffff',
    cardForeground: '#0a0a0a',
    primary: '#9333ea',
    primaryForeground: '#ffffff',
    secondary: '#ec4899',
    secondaryForeground: '#ffffff',
    muted: '#f3f4f6',
    mutedForeground: '#6b7280',
    accent: '#f3f4f6',
    accentForeground: '#0a0a0a',
    border: '#e5e7eb',
    input: '#e5e7eb',
    ring: '#9333ea',
  },
  dark: {
    background: '#0a0a0a',
    foreground: '#fafafa',
    card: '#1a1a1a',
    cardForeground: '#fafafa',
    primary: '#9333ea',
    primaryForeground: '#ffffff',
    secondary: '#ec4899',
    secondaryForeground: '#ffffff',
    muted: '#262626',
    mutedForeground: '#a3a3a3',
    accent: '#262626',
    accentForeground: '#fafafa',
    border: '#404040',
    input: '#404040',
    ring: '#9333ea',
  },
} as const;

export const getThemeColors = (theme: 'light' | 'dark') => themeConfig[theme];
