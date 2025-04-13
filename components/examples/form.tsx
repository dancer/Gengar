import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ExampleForm() {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-white/70 block mb-2">Username</label>
        <Input placeholder="Enter username" />
      </div>
      <div>
        <label className="text-sm text-white/70 block mb-2">Password</label>
        <Input type="password" placeholder="Enter password" />
      </div>
      <Button className="w-full">Submit</Button>
    </div>
  )
}

