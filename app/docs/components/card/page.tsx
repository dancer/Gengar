"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy, Terminal, FileCode, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function CardPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          Terminal-style window containers with pixel-perfect borders and glowing effects.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Terminal Output Card */}
            <Card className="bg-background border-border shadow-glow flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
                    </div>
                    <CardTitle className="text-sm text-muted-foreground">terminal_output.log</CardTitle>
                  </div>
                  <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="font-mono text-sm space-y-2 pt-4 flex-1">
                <div className="text-[hsl(var(--terminal-green))]">$ npm install gengar-ui</div>
                <div className="text-muted-foreground">Installing dependencies...</div>
                <div className="text-muted-foreground">Added 42 packages</div>
                <div className="text-[hsl(var(--terminal-green))]">Done in 3.21s</div>
              </CardContent>
              <CardFooter className="border-t border-border bg-muted/50 flex justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileCode className="h-4 w-4" />
                  View Full Log
                </Button>
              </CardFooter>
            </Card>

            {/* Error Card */}
            <Card className="bg-background border-destructive/20 shadow-destructive flex flex-col">
              <CardHeader className="border-b border-destructive/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
                      <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
                    </div>
                    <CardTitle className="text-sm text-destructive">error.log</CardTitle>
                  </div>
                  <CardDescription className="font-mono text-xs text-destructive/70">Error Code: 127</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="font-mono text-sm text-destructive/90 space-y-2 pt-4 flex-1">
                <p>Command 'build' not found in path.</p>
                <p>Check your configuration and try again.</p>
              </CardContent>
              <CardFooter className="border-t border-destructive/20 bg-destructive/5 flex justify-end">
                <Button variant="destructive" size="sm">Retry Process</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
                <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
              </div>
              <div className="flex-1 text-sm text-muted-foreground">Code Example</div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">
                {`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Terminal-style Card with Glow
export function TerminalCard() {
  return (
    <Card className="bg-background border-border shadow-glow">
      <CardHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            </div>
            <CardTitle className="text-sm text-muted-foreground">terminal_output.log</CardTitle>
          </div>
          <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="font-mono text-sm space-y-2 pt-4">
        <div className="text-[hsl(var(--terminal-green))]">$ npm install gengar-ui</div>
        <div className="text-muted-foreground">Installing dependencies...</div>
        <div className="text-muted-foreground">Added 42 packages</div>
        <div className="text-[hsl(var(--terminal-green))]">Done in 3.21s</div>
      </CardContent>
      <CardFooter className="border-t border-border bg-muted/50 flex justify-end">
        <Button variant="outline" size="sm" className="gap-2">
          <FileCode className="h-4 w-4" />
          View Full Log
        </Button>
      </CardFooter>
    </Card>
  )
}`}
              </code>
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            </div>
            <div className="flex-1 text-sm text-muted-foreground">Installation</div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              npm install class-variance-authority lucide-react
            </code>
          </pre>
        </Card>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            </div>
            <div className="flex-1 text-sm text-muted-foreground">Basic Usage</div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Basic Card
export function BasicCard() {
  return (
    <Card className="bg-background border-border">
      <CardHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="border-t border-border bg-muted/50 flex justify-end">
        <Button variant="outline" size="sm">Action</Button>
      </CardFooter>
    </Card>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/button" className="text-foreground hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Button
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/dialog" className="text-foreground hover:text-muted-foreground">
            Dialog
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

