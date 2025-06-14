'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  Terminal,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function BadgePage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Terminal-style status indicators and labels with pixel-perfect borders
          and glowing effects.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-background border border-border">
          <TabsTrigger
            value="preview"
            className="text-foreground data-[state=active]:bg-muted"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="text-foreground data-[state=active]:bg-muted"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-background border-border p-6">
            <div className="flex flex-col gap-6">
              {/* Status Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge className="gap-1">
                  <Terminal className="h-3 w-3" />
                  <span>SYSTEM</span>
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <AlertCircle className="h-3 w-3" />
                  <span>WARNING</span>
                </Badge>
                <Badge variant="destructive" className="gap-1">
                  <XCircle className="h-3 w-3" />
                  <span>ERROR</span>
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  <span>SUCCESS</span>
                </Badge>
              </div>

              {/* Process Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge>npm install</Badge>
                <Badge variant="secondary">git status</Badge>
                <Badge variant="outline">yarn dev</Badge>
                <Badge variant="destructive">process killed</Badge>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap gap-4">
                <Badge className="h-5 w-5 p-0 flex items-center justify-center" />
                <Badge
                  variant="secondary"
                  className="h-5 w-5 p-0 flex items-center justify-center"
                />
                <Badge
                  variant="outline"
                  className="h-5 w-5 p-0 flex items-center justify-center"
                />
                <Badge
                  variant="destructive"
                  className="h-5 w-5 p-0 flex items-center justify-center"
                />
              </div>
            </div>
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
                className="h-8 w-8 text-foreground hover:bg-muted"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">
                {`import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-muted",
        secondary:
          "bg-background text-muted-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-muted",
        destructive:
          "bg-background text-destructive border border-destructive/50 shadow-[0_0_10px_rgba(255,0,0,0.1)] hover:bg-destructive/10",
        outline:
          "bg-background text-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }`}
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
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-muted"
            >
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
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-muted"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { Badge } from "@/components/ui/badge"
import { Terminal, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Status Badge */}
      <Badge className="gap-1">
        <Terminal className="h-3 w-3" />
        <span>SYSTEM</span>
      </Badge>

      {/* Process Badge */}
      <Badge variant="secondary">npm install</Badge>

      {/* Status Indicator */}
      <Badge 
        variant="outline" 
        className="h-5 w-5 p-0 flex items-center justify-center" 
      />
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
            href="/docs/components/avatar"
            className="hover:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Avatar
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/button"
            className="hover:text-muted-foreground"
          >
            Button
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
