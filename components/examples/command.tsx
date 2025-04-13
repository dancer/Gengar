"use client"

import { useState } from 'react'
import { Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ExampleCommand() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-[300px] flex flex-col">
      <Button
        variant="outline"
        className="w-full justify-start text-sm text-muted-foreground"
        onClick={() => setIsOpen(true)}
      >
        <Command className="mr-2 h-4 w-4" />
        Press ⌘K to open command palette
      </Button>
      {isOpen && (
        <div className="mt-4 space-y-2">
          <Input placeholder="Type a command..." />
          <div className="text-sm text-white/70">
            <div className="px-2 py-1 hover:bg-white/5 cursor-pointer">Open...</div>
            <div className="px-2 py-1 hover:bg-white/5 cursor-pointer">Save</div>
            <div className="px-2 py-1 hover:bg-white/5 cursor-pointer">Close</div>
          </div>
        </div>
      )}
    </div>
  )
}

