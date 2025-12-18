export default function ExamplesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Examples</h1>
        <p className="text-muted-foreground max-w-2xl">
          A curated set of examples that show how to combine the animation
          components into real sections like heroes, feature grids, and stats
          blocks.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Planned example types</h2>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li>Animated hero sections</li>
          <li>Feature grids with staggered cards</li>
          <li>Stats sections using ScaleIn</li>
          <li>CTA blocks with combined animations</li>
        </ul>
      </section>
    </div>
  );
}


