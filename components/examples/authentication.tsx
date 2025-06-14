export function ExampleAuthentication() {
  return (
    <div className="space-y-2 font-mono text-sm">
      <div className="text-[hsl(var(--terminal-green))]">$ auth status</div>
      <div className="text-muted-foreground">Checking authentication...</div>
      <div className="text-foreground flex items-center gap-2">
        <span className="text-[hsl(var(--terminal-green))]">✓</span>
        <span>Authenticated as admin</span>
      </div>
      <div className="text-muted-foreground">Session expires in 23:59:59</div>
    </div>
  )
}
