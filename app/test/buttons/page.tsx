'use client';

import {
  BorderBeamButton,
  GlowButton,
  Interactive3DButton,
  MagneticButton,
  RippleButton,
  ShimmerButton
} from '@/components/ui';

// --- Components for the Showcase Page ---

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{title}</h2>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const ShowcaseCard = ({
  title,
  description,
  children,
  className = ""
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full">
    {/* Preview Area */}
    <div className={`h-48 md:h-64 border-b border-border/50 flex items-center justify-center p-8 bg-muted/20 relative overflow-hidden ${className}`}>
      {/* Grid pattern background for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }}
      />
      <div className="relative z-10 flex gap-4 flex-wrap justify-center items-center">
        {children}
      </div>
    </div>

    {/* Footer content */}
    <div className="p-6">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Page Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-2">
            Component Library
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Button Variants</h1>
          <p className="text-xl text-muted-foreground">
            A collection of modern, high-performance button interactions designed for Vercel-like aesthetics and rich user experiences.
          </p>
        </div>

        {/* 1. Essentials Section */}
        <section>
          <SectionHeader
            title="The Essentials"
            description="Fundamental interaction patterns enhanced with subtle physics and visual feedback."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ShowcaseCard
              title="Ripple Button"
              description="A classic material design effect that creates a wave of ink expanding from the click origin."
            >
              <RippleButton className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:bg-primary/90">
                Click Me
              </RippleButton>
              <RippleButton className="px-6 py-3 bg-white text-black hover:bg-gray-100 font-medium rounded-lg border border-gray-200 shadow-sm">
                Light Mode
              </RippleButton>
            </ShowcaseCard>

            <ShowcaseCard
              title="Magnetic Button"
              description="Uses Framer Motion to attract the cursor, giving elements a 'sticky' physical feel."
            >
              <MagneticButton className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg border border-border/50 hover:bg-secondary/80">
                Hover Me
              </MagneticButton>
              <MagneticButton strength={40} className="rounded-full w-12 h-12 flex items-center justify-center p-0 bg-transparent border border-muted-foreground/20 text-foreground hover:bg-muted/10 transition-colors">
                <span className="sr-only">Icon</span>
                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </MagneticButton>
            </ShowcaseCard>

          </div>
        </section>

        {/* 2. Creative Section */}
        <section>
          <SectionHeader
            title="Creative Patterns"
            description="Visually distinctive styles for calls to action and premium features."
          />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            <ShowcaseCard
              title="Glow Button"
              description="Emits a soft, diffused light behind the button. Perfect for primary actions on dark backgrounds."
              className="bg-black/90"
            >
              <GlowButton className="px-6 py-3 rounded-lg font-bold text-white bg-transparent border border-white/20 hover:bg-white/10 transition-colors">
                Join Waitlist
              </GlowButton>
              <GlowButton variant="secondary" scaleOnHover={false} className="px-6 py-3 rounded-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10">
                 Docs
              </GlowButton>
            </ShowcaseCard>

            <ShowcaseCard
              title="Shimmer Button"
              description="A metallic sheen travels diagonally across the surface. Often used for 'Pro' upgrades or 'AI' actions."
            >
              <ShimmerButton className="shadow-lg">
                 Generate AI
              </ShimmerButton>
              <ShimmerButton
                  shimmerColor="rgba(245, 158, 11, 0.4)"
                  className="bg-amber-950/80 border border-amber-600/30 text-amber-500 shadow-md"
              >
                  Upgrade
              </ShimmerButton>
            </ShowcaseCard>

           </div>
        </section>

        {/* 3. Advanced / Trending Section */}
        <section>
          <SectionHeader
            title="Advanced & Trending"
            description="Complex shader-like effects and 3D interactions for memorable moments."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            <ShowcaseCard
              title="Border Beam"
              description="An animated gradient trail that continually loops around the border. Gives a high-tech 'processing' feel."
              className="bg-slate-950"
            >
               <BorderBeamButton>
                  Deploy Project
               </BorderBeamButton>
               <BorderBeamButton className="rounded-full" duration={2}>
                  Analyzing...
               </BorderBeamButton>
            </ShowcaseCard>

            <ShowcaseCard
              title="Interactive 3D"
              description="A retro-modern style providing satisfying physical depth without skew. Shifts on the Y-axis when pressed."
            >
              <Interactive3DButton color="bg-indigo-500" shadowColor="bg-indigo-700">
                 Play Game
              </Interactive3DButton>
               <Interactive3DButton color="bg-rose-500" shadowColor="bg-rose-700">
                 Delete
              </Interactive3DButton>
            </ShowcaseCard>

          </div>
        </section>

      </div>
    </div>
  );
}
