export function ExampleCards() {
  return (
    <div className="bg-muted/40 rounded-sm p-4">
      <div className="grid gap-4">
        <div className="rounded-sm bg-background border border-border p-4">
          <h4 className="text-sm font-semibold text-foreground">Project Alpha</h4>
          <p className="mt-2 text-xs text-muted-foreground">
            Status: Active
          </p>
        </div>
        <div className="rounded-sm bg-background border border-border p-4">
          <h4 className="text-sm font-semibold text-foreground">Project Beta</h4>
          <p className="mt-2 text-xs text-muted-foreground">
            Status: In Review
          </p>
        </div>
      </div>
    </div>
  )
}

