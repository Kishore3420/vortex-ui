export default function StructurePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Library Structure</h1>
        <p className="text-muted-foreground max-w-2xl">
          How the app, components, and docs folders are organized so that this
          project can grow into a full animation library.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">High-level layout</h2>
        <pre className="rounded-lg bg-muted p-4 text-xs overflow-x-auto">
          <code>{`app/         # Routes and pages\ncomponents/  # UI and animation components\nlib/         # Theme, hooks, utilities\ndocs/        # Markdown documentation`}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Docs area</h2>
        <p className="text-sm text-muted-foreground">
          The `/docs` route uses a dedicated layout with a persistent sidebar so
          developers can navigate between guides, examples, and API references
          without losing context.
        </p>
      </section>
    </div>
  );
}


