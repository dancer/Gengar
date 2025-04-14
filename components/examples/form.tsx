import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ExampleForm() {
  return (
    <div className="bg-muted/40 rounded-sm p-4">
      <div className="space-y-4">
        <div>
          <label className="text-sm text-muted-foreground block mb-2">Username</label>
          <Input placeholder="Enter username" className="bg-background" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground block mb-2">Password</label>
          <Input type="password" placeholder="Enter password" className="bg-background" />
        </div>
        <Button className="w-full bg-background hover:bg-muted">Submit</Button>
      </div>
    </div>
  )
}

