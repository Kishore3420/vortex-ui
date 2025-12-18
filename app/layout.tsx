import { SmoothScroll } from '@/components/animations/SmoothScroll';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Studio Portfolio',
  description: 'Modern portfolio with advanced animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <ThemeToggle />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
