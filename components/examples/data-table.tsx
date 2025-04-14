export function ExampleDataTable() {
  return (
    <div className="font-mono text-sm">
      <div className="mb-4 text-[hsl(var(--terminal-green))]">$ list users --format table</div>
      <div className="rounded-sm border border-border">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-border">
              <th className="px-4 py-2 text-muted-foreground font-medium">ID</th>
              <th className="px-4 py-2 text-muted-foreground font-medium">Name</th>
              <th className="px-4 py-2 text-muted-foreground font-medium">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-2 text-foreground">001</td>
              <td className="px-4 py-2 text-foreground">Josh</td>
              <td className="px-4 py-2 text-foreground">Admin</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-foreground">002</td>
              <td className="px-4 py-2 text-foreground">Ashu</td>
              <td className="px-4 py-2 text-foreground">User</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

