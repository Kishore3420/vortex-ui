'use client';

import { useThemeContext } from '@/components/providers/ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeContext();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '💻';
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      <span className="text-xl" suppressHydrationWarning>
        {getIcon()}
      </span>
    </button>
  );
}
