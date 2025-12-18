import { DocsSidebar } from '@/components/ui/DocsSidebar';
import { ReactNode } from 'react';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <DocsSidebar />
        <main className="flex-1 flex flex-col md:ml-64">
          <header className="md:hidden border-b border-border px-4 py-3">
            <h1 className="text-base font-semibold">VortexUI Docs</h1>
          </header>
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
