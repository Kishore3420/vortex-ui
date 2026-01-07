'use client';

import { DocsSidebar } from '@/components/ui/DocsSidebar';
import { ReactNode, useState } from 'react';

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('docs-sidebar-collapsed') === 'true';
    }
    return false;
  });

  const handleToggleCollapse = () => {
    const nextValue = !isCollapsed;
    setIsCollapsed(nextValue);
    localStorage.setItem('docs-sidebar-collapsed', String(nextValue));
  };

  return (
    <div className="min-h-screen bg-background text-foreground" data-scroll-behavior="smooth">
      <div className="flex min-h-screen">
        <DocsSidebar
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
          isCollapsed={isCollapsed}
          onToggleCollapse={handleToggleCollapse}
        />

        <main className={[
          'flex-1 flex flex-col transition-all duration-300 ease-in-out',
          isCollapsed ? 'md:ml-20' : 'md:ml-64'
        ].join(' ')}>
          <header className="sticky top-0 z-30 flex items-center h-14 px-4 border-b border-border bg-background/80 backdrop-blur-md md:px-8">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-1 md:hidden">
               <span className="text-sm font-bold ml-2">VortexUI Docs</span>
            </div>
            {/* desktop breadcrumbs or actions can go here */}
          </header>

          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto w-full animate-in fade-in duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
