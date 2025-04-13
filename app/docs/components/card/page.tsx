import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy, Terminal, FileCode, AlertCircle, ChevronRight } from 'lucide-react'
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
        <TabsList className="bg-background border border-border">
          <TabsTrigger value="preview" className="text-foreground data-[state=active]:bg-muted">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-foreground data-[state=active]:bg-muted">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <div className="flex flex-wrap gap-6">
            {/* Terminal Output Card */}
            <Card className="w-[350px] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-muted-foreground" />
                  <CardTitle className="text-sm">terminal_output.log</CardTitle>
                </div>
                <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm">
                <div className="text-green-400">$ npm install gengar-ui</div>
                <div className="text-muted-foreground">Installing dependencies...</div>
                <div className="text-muted-foreground">Added 42 packages</div>
                <div className="text-green-400">Done in 3.21s</div>
              </CardContent>
              <CardFooter className="border-t border-border bg-muted/50">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileCode className="h-4 w-4" />
                  View Full Log
                </Button>
              </CardFooter>
            </Card>

            {/* Error Card */}
            <Card className="border-destructive/20 w-[350px] shadow-[0_0_15px_rgba(255,0,0,0.1)]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  <CardTitle className="text-sm text-destructive">Process Failed</CardTitle>
                </div>
                <CardDescription className="font-mono text-xs text-destructive/70">Error Code: 127</CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-destructive/90">
                <p>Command 'build' not found in path.</p>
                <p>Check your configuration and try again.</p>
              </CardContent>
              <CardFooter className="border-t border-destructive/20 bg-destructive/5">
                <Button variant="destructive" size="sm">Retry Process</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <div className="flex-1" />
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">
                {`import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-sm border border-border bg-background text-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`}
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
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
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
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { Terminal } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <CardTitle className="text-sm">terminal_output.log</CardTitle>
        </div>
        <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
      </CardHeader>
      <CardContent className="font-mono text-sm text-muted-foreground">
        <p>Process output will appear here...</p>
      </CardContent>
      <CardFooter className="border-t border-border bg-muted/50">
        <Button variant="outline" size="sm">View Details</Button>
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
          <Link href="/docs/components/button" className="hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Button
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/dialog" className="hover:text-muted-foreground">
            Dialog
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

