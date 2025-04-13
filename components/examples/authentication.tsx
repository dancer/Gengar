export function ExampleAuthentication() {
  return (
    <div className="space-y-2 font-mono text-sm">
      <div className="text-green-500">$ auth status</div>
      <div className="text-white/70">Checking authentication...</div>
      <div className="text-white">✓ Authenticated as admin</div>
      <div className="text-white/70">Session expires in 23:59:59</div>
    </div>
  )
}

