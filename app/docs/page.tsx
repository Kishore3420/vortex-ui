export default function DocsHomePage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          AI Studio Animation Library
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Modern, production-ready animations for React and Next.js using Framer
          Motion, GSAP, and Three.js. This section is the documentation hub for
          the entire library.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold mb-1">Start Here</h2>
          <p className="text-sm text-muted-foreground mb-3">
            New to this project? Begin with the introduction and getting started
            guides.
          </p>
          <ul className="text-sm space-y-1 text-primary">
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>Quick Start</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold mb-1">Library Overview</h2>
          <p className="text-sm text-muted-foreground mb-3">
            High-level view of the animation components, examples, and landing
            pages.
          </p>
          <ul className="text-sm space-y-1 text-primary">
            <li>Roadmap</li>
            <li>Library Structure</li>
            <li>Components and Examples</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
