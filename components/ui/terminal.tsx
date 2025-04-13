"use client"

import * as React from "react"
import { Minus, Square, X } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export function Terminal({ title = "Terminal", className, ...props }: TerminalProps) {
  const [history, setHistory] = React.useState<string[]>([])
  const [input, setInput] = React.useState("")
  const [cursorPosition, setCursorPosition] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (inputRef.current) {
        inputRef.current.style.caretColor = inputRef.current.style.caretColor === 'transparent' ? 'white' : 'transparent'
      }
    }, 500)

    return () => clearInterval(timer)
  }, [])

  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newHistory = [...history, `$ ${input}`, processCommand(input)]
      setHistory(newHistory)
      setInput("")
      setCursorPosition(0)
    }
  }

  const processCommand = (cmd: string): string => {
    switch (cmd.toLowerCase()) {
      case "help":
        return "Available commands: help, clear, echo, date, whoami"
      case "clear":
        setHistory([])
        return ""
      case "date":
        return new Date().toLocaleString()
      case "whoami":
        return "guest@lineal-ui"
      default:
        if (cmd.startsWith("echo ")) {
          return cmd.slice(5)
        }
        return `Command not found: ${cmd}`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowLeft' && cursorPosition > 0) {
      setCursorPosition(cursorPosition - 1)
    } else if (e.key === 'ArrowRight' && cursorPosition < input.length) {
      setCursorPosition(cursorPosition + 1)
    }
  }

  return (
    <div className={cn("bg-black text-white rounded-md overflow-hidden font-mono text-sm border border-white/20", className)} {...props}>
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b border-white/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-800" />
          <div className="w-3 h-3 rounded-full bg-gray-700" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
        </div>
        <div className="text-center flex-grow">{title}</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-gray-500" />
          <Square className="w-4 h-4 text-gray-500" />
          <X className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      <ScrollArea className="h-64 p-4">
        {history.map((line, index) => (
          <div key={index} className="mb-1">{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent outline-none"
            style={{ caretColor: 'transparent' }}
            aria-label="Terminal input"
          />
          <span 
            className="w-2 h-5 bg-white inline-block animate-blink"
            style={{ transform: `translateX(${cursorPosition * 8}px)` }}
          />
        </form>
      </ScrollArea>
    </div>
  )
}

