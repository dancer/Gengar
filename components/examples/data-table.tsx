export function ExampleDataTable() {
  return (
    <div className="font-mono text-sm">
      <div className="mb-2 text-white/70">$ list users --format table</div>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="py-2 text-white/70">ID</th>
            <th className="py-2 text-white/70">Name</th>
            <th className="py-2 text-white/70">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-white/10">
            <td className="py-2">001</td>
            <td className="py-2">Josh</td>
            <td className="py-2">Admin</td>
          </tr>
          <tr>
            <td className="py-2">002</td>
            <td className="py-2">Ashu</td>
            <td className="py-2">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

