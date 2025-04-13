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
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <div className="flex flex-wrap gap-6">
            {/* Terminal Output Card */}
            <Card className="bg-black border-white/10 w-[350px] shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-white/70" />
                  <CardTitle className="text-white text-sm">terminal_output.log</CardTitle>
                </div>
                <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm">
                <div className="text-green-400">$ npm install lineal-ui</div>
                <div className="text-white/70">Installing dependencies...</div>
                <div className="text-white/70">Added 42 packages</div>
                <div className="text-green-400">Done in 3.21s</div>
              </CardContent>
              <CardFooter className="border-t border-white/10 bg-white/5">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileCode className="h-4 w-4" />
                  View Full Log
                </Button>
              </CardFooter>
            </Card>

            {/* Error Card */}
            <Card className="bg-black border-red-500/20 w-[350px] shadow-[0_0_15px_rgba(255,0,0,0.1)]">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <CardTitle className="text-red-500 text-sm">Process Failed</CardTitle>
                </div>
                <CardDescription className="font-mono text-xs text-red-500/70">Error Code: 127</CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-red-500/90">
                <p>Command 'build' not found in path.</p>
                <p>Check your configuration and try again.</p>
              </CardContent>
              <CardFooter className="border-t border-red-500/20 bg-red-500/5">
                <Button variant="destructive" size="sm">Retry Process</Button>
              </CardFooter>
            </Card>
          </div>
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
      "rounded-sm border border-white/10 bg-black text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]",
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
      "font-mono text-sm font-medium leading-none tracking-tight",
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
    className={cn("text-sm text-white/70", className)}
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
            <code className="text-sm">
              npm install class-variance-authority lucide-react
            </code>
          </pre>
        </Card>
      </div>

      {/* Usage */}
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
    <Card className="bg-black border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-white/70" />
          <CardTitle className="text-white text-sm">terminal_output.log</CardTitle>
        </div>
        <CardDescription className="font-mono text-xs">Last updated: 2 mins ago</CardDescription>
      </CardHeader>
      <CardContent className="font-mono text-sm text-white/70">
        <p>Process output will appear here...</p>
      </CardContent>
      <CardFooter className="border-t border-white/10 bg-white/5">
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
          <Link href="/docs/components/button" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Button
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/dialog" className="text-white hover:text-white/80">
            Dialog
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

