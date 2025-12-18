'use client';

import { useEffect, useMemo, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

// Resolve system theme helper
const resolveTheme = (t: Theme, systemIsDark: boolean): 'light' | 'dark' => {
  if (t === 'system') {
    return systemIsDark ? 'dark' : 'light';
  }
  return t;
};

// Get initial theme from localStorage or system preference
const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as Theme | null;
  return stored || 'system';
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Compute resolved theme from current theme and system preference
  const resolvedTheme = useMemo(
    () => resolveTheme(theme, systemIsDark),
    [theme, systemIsDark]
  );

  useEffect(() => {
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    root.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeValue,
  };
}
