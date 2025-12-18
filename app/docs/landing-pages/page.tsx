export default function LandingPagesDocsPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Landing Pages</h1>
        <p className="text-muted-foreground max-w-2xl">
          Plan for the five showcase landing pages that will demonstrate the
          best animation practices for different types of products and brands.
        </p>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Minimal</h2>
          <p className="text-sm text-muted-foreground">
            Clean, typography-first layout with subtle motion and a focus on
            clarity.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Creative</h2>
          <p className="text-sm text-muted-foreground">
            Bold animations, interactive elements, and more experimental motion
            for creative studios.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Corporate</h2>
          <p className="text-sm text-muted-foreground">
            Professional, trust-building animations suitable for SaaS and B2B
            brands.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <p className="text-sm text-muted-foreground">
            Project-centric layout that uses animations to highlight case
            studies and work.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">E-commerce</h2>
          <p className="text-sm text-muted-foreground">
            Conversion-focused page with animated product cards, CTAs, and
            transitions.
          </p>
        </div>
      </section>
    </div>
  );
}


