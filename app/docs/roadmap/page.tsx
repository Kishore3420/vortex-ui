export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Project Roadmap</h1>
        <p className="text-muted-foreground max-w-2xl">
          High-level plan for how the animation library will grow over time,
          aligned with the documentation in the `docs/00-roadmap.md` file.
        </p>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Phase 1 – Foundation</h2>
          <p className="text-sm text-muted-foreground">
            Core setup, theme system, and first Framer Motion components. This
            phase is effectively complete in the current codebase.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Phase 2 – Framer Motion</h2>
          <p className="text-sm text-muted-foreground">
            Expand the Framer Motion component set with parallax, hover,
            magnetic buttons, text reveal, and page transitions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Phases 3–6</h2>
          <p className="text-sm text-muted-foreground">
            Integrate GSAP and Three.js, add combination patterns, and ship five
            fully animated landing pages targeting different use cases.
          </p>
        </div>
      </section>
    </div>
  );
}


