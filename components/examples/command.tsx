"use client"

import { useState } from 'react'
import { Command } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ExampleCommand() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-[300px] flex flex-col bg-muted/40 rounded-sm p-4">
      <Button
        variant="outline"
        className="w-full justify-start text-sm text-muted-foreground bg-background hover:bg-muted"
        onClick={() => setIsOpen(true)}
      >
        <Command className="mr-2 h-4 w-4" />
        Press ⌘K to open command palette
      </Button>
      {isOpen && (
        <div className="mt-4 space-y-2">
          <Input placeholder="Type a command..." className="bg-background" />
          <div className="text-sm bg-background rounded-sm border border-border">
            <div className="px-3 py-1.5 hover:bg-muted cursor-pointer text-foreground">Open...</div>
            <div className="px-3 py-1.5 hover:bg-muted cursor-pointer text-foreground">Save</div>
            <div className="px-3 py-1.5 hover:bg-muted cursor-pointer text-foreground">Close</div>
          </div>
        </div>
      )}
    </div>
  )
}

