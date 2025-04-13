"use client"

import * as React from "react"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy, Minus, Square, X, Terminal as TerminalIcon } from 'lucide-react'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export function Terminal({ title = "Terminal", className, ...props }: TerminalProps) {
  const [history, setHistory] = React.useState<string[]>([
    "Welcome to Gengar UI Terminal",
    "Type 'help' for available commands",
    ""
  ])
  const [input, setInput] = React.useState("")
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const scrollArea = scrollAreaRef.current
    if (scrollArea) {
      const scrollContainer = scrollArea.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newHistory = [...history, `$ ${input}`, processCommand(input)]
      setHistory(newHistory)
      setInput("")
    }
  }

  const processCommand = (cmd: string): string => {
    const command = cmd.toLowerCase()
    switch (command) {
      case "help":
        return `Available commands:
  help     Show this help message
  clear    Clear the terminal
  date     Show current date and time
  whoami   Show current user
  version  Show terminal version`
      case "clear":
        setTimeout(() => setHistory([]), 0)
        return ""
      case "date":
        return new Date().toLocaleString()
      case "whoami":
        return "guest@gengar-ui"
      case "version":
        return "Gengar UI Terminal v1.0.0"
      default:
        return `Command not found: ${cmd}. Type 'help' for available commands.`
    }
  }

  return (
    <div className={cn("bg-black text-white rounded-none overflow-hidden font-mono text-sm border border-white/20", className)} {...props}>
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b border-white/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-center flex-grow text-white/70">{title}</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-white/50 hover:text-white/70" />
          <Square className="w-4 h-4 text-white/50 hover:text-white/70" />
          <X className="w-4 h-4 text-white/50 hover:text-white/70" />
        </div>
      </div>
      <ScrollArea
        className="h-64 p-4"
        ref={scrollAreaRef}
        scrollHideDelay={0}
        type="always"
        dir="ltr"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1 whitespace-pre-wrap">{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2 text-green-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none text-white/90"
            aria-label="Terminal input"
          />
        </form>
      </ScrollArea>
    </div>
  )
}

export default function TerminalPage() {
  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Terminal</h1>
        <p className="text-lg text-muted-foreground">
          A fully interactive terminal component with command history, custom commands, and authentic terminal styling.
        </p>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-black border-white/10 p-6">
            <Terminal />
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-black border-white/10 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <div className="flex-1" />
              <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-white">
              <code className="text-sm">{`"use client"

import * as React from "react"
import { Minus, Square, X } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

export function Terminal({ title = "Terminal", className, ...props }: TerminalProps) {
  const [history, setHistory] = React.useState<string[]>([
    "Welcome to Gengar UI Terminal",
    "Type 'help' for available commands",
    ""
  ])
  const [input, setInput] = React.useState("")
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const scrollArea = scrollAreaRef.current
    if (scrollArea) {
      const scrollContainer = scrollArea.querySelector(
        '[data-radix-scroll-area-viewport]'
      )
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      const newHistory = [...history, \`$ \${input}\`, processCommand(input)]
      setHistory(newHistory)
      setInput("")
    }
  }

  const processCommand = (cmd: string): string => {
    const command = cmd.toLowerCase()
    switch (command) {
      case "help":
        return \`Available commands:
  help     Show this help message
  clear    Clear the terminal
  date     Show current date and time
  whoami   Show current user
  version  Show terminal version\`
      case "clear":
        setTimeout(() => setHistory([]), 0)
        return ""
      case "date":
        return new Date().toLocaleString()
      case "whoami":
        return "guest@gengar-ui"
      case "version":
        return "Gengar UI Terminal v1.0.0"
      default:
        return \`Command not found: \${cmd}. Type 'help' for available commands.\`
    }
  }

  return (
    <div className={cn(
      "bg-black text-white rounded-none overflow-hidden font-mono text-sm border border-white/20",
      className
    )} {...props}>
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b border-white/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-center flex-grow text-white/70">{title}</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-white/50 hover:text-white/70" />
          <Square className="w-4 h-4 text-white/50 hover:text-white/70" />
          <X className="w-4 h-4 text-white/50 hover:text-white/70" />
        </div>
      </div>
      <ScrollArea 
        className="h-64 p-4" 
        ref={scrollAreaRef}
        scrollHideDelay={0}
        type="always"
        dir="ltr"
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1 whitespace-pre-wrap">{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="mr-2 text-green-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none text-white/90"
            aria-label="Terminal input"
          />
        </form>
      </ScrollArea>
    </div>
  )
}`}</code>
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <Card className="bg-black border-white/10 overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-white">
            <code className="text-sm">npm install @radix-ui/react-scroll-area lucide-react</code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <Card className="bg-black border-white/10 overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/10">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-white">
            <code className="text-sm">{`import { Terminal } from "@/components/ui/terminal"

export function MyComponent() {
  return (
    <Terminal title="Custom Terminal" className="w-full max-w-2xl" />
  )
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/tree-view" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tree View
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/ascii-art-generator" className="text-white hover:text-white/80">
            ASCII Art Generator
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

