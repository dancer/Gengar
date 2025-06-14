'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-2.5 border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-muted" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export function TerminalPrompt() {
  const [history, setHistory] = React.useState<string[]>([])
  const [input, setInput] = React.useState('')
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newHistory = [...history, `$ ${input}`, processCommand(input)]
      setHistory(newHistory)
      setInput('')
      setTimeout(() => {
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
      }, 0)
    }
  }

  const processCommand = (cmd: string): string => {
    switch (cmd.toLowerCase()) {
      case 'help':
        return 'Available commands: help, clear, echo, date'
      case 'clear':
        setHistory([])
        return ''
      case 'date':
        return new Date().toLocaleString()
      default:
        if (cmd.startsWith('echo ')) {
          return cmd.slice(5)
        }
        return `Command not found: ${cmd}`
    }
  }

  return (
    <div className="bg-background text-foreground p-4 rounded-md font-mono text-sm">
      <ScrollArea className="h-64" ref={scrollAreaRef}>
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="flex">
            <span className="mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-grow bg-transparent outline-none"
              aria-label="Terminal input"
            />
          </div>
        </form>
      </ScrollArea>
    </div>
  )
}

export { ScrollArea, ScrollBar }
