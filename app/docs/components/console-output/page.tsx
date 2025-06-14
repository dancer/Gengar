import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { ConsoleOutput } from '@/components/ui/console-output'

export default function ConsoleOutputPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Console Output</h1>
        <p className="text-lg text-muted-foreground">
          A component that mimics a terminal console, displaying scrollable text
          output with syntax highlighting.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-background border border-border">
          <TabsTrigger
            value="preview"
            className="text-foreground data-[state=active]:bg-accent"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="text-foreground data-[state=active]:bg-accent"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-background border-border p-6">
            <ConsoleOutput />
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:bg-accent"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">{`"use client"

import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ScrollArea } from "@/components/ui/scroll-area"

export function ConsoleOutput() {
  const [output, setOutput] = React.useState<string[]>([])

  React.useEffect(() => {
    const initialOutput = [
      "Welcome to Gengar UI Console",
      "Type 'help' for a list of commands",
      "",
    ]
    setOutput(initialOutput)
  }, [])

  const handleCommand = (command: string) => {
    let response: string[]

    switch (command.toLowerCase()) {
      case 'help':
        response = [
          "Available commands:",
          "  help    - Show this help message",
          "  clear   - Clear the console",
          "  echo    - Echo a message",
          "  date    - Show current date and time",
        ]
        break
      case 'clear':
        setOutput([])
        return
      case 'date':
        response = [new Date().toLocaleString()]
        break
      default:
        if (command.startsWith('echo ')) {
          response = [command.slice(5)]
        } else {
          response = [\`Unknown command: \${command}\`]
        }
    }

    setOutput((prev) => [...prev, \`> \${command}\`, ...response, ''])
  }

  return (
    <div className="bg-black text-white p-4 rounded-md font-mono text-sm h-64 overflow-auto">
      <ScrollArea className="h-64">
        <SyntaxHighlighter
          language="bash"
          style={tomorrow}
          customStyle={{
            backgroundColor: 'transparent',
            padding: 0,
            margin: 0,
          }}
        >
          {output.join('\\n')}
        </SyntaxHighlighter>
      </ScrollArea>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const input = e.currentTarget.command.value
          handleCommand(input)
          e.currentTarget.reset()
        }}
      >
        <input
          type="text"
          name="command"
          className="bg-transparent border-none outline-none w-full"
          autoComplete="off"
        />
      </form>
    </div>
  )
}`}</code>
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-accent"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              npm install react-syntax-highlighter
            </code>
          </pre>
        </Card>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-accent"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { ConsoleOutput } from "@/components/ui/console-output"

export function MyComponent() {
  return (
    <div>
      <ConsoleOutput />
      {/* Your other components */}
    </div>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/command-palette"
            className="text-foreground hover:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Command Palette
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/dialog"
            className="text-foreground hover:text-muted-foreground"
          >
            Dialog
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
