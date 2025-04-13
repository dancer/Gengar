export function ExampleCards() {
  return (
    <div className="grid gap-4">
      <div className="rounded border border-white/10 p-4">
        <h4 className="text-sm font-semibold">Project Alpha</h4>
        <p className="mt-2 text-xs text-white/70">
          Status: Active
        </p>
      </div>
      <div className="rounded border border-white/10 p-4">
        <h4 className="text-sm font-semibold">Project Beta</h4>
        <p className="mt-2 text-xs text-white/70">
          Status: In Review
        </p>
      </div>
    </div>
  )
}

