import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, Terminal, Power, X, ChevronRight, Play, Square } from 'lucide-react'
import Link from 'next/link'
import { ComponentLayout } from '@/components/docs/component-layout'

const buttonCode = `import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm text-sm font-mono ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border border-border shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-muted hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
        destructive: "bg-background text-destructive border border-destructive/50 shadow-[0_0_15px_rgba(255,0,0,0.1)] hover:bg-destructive/10 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]",
        outline: "border border-border bg-background text-foreground hover:bg-muted hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        secondary: "bg-background text-muted-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-muted hover:text-foreground",
        ghost: "text-foreground hover:bg-muted",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)`

const buttonUsage = `import { Button } from "@/components/ui/button"
import { Terminal, Power } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Command Button with Icon */}
      <Button className="gap-2">
        <Terminal className="h-4 w-4" />
        <span>Open Terminal</span>
      </Button>

      {/* Icon Button */}
      <Button variant="destructive" size="icon">
        <Power className="h-4 w-4" />
      </Button>
    </div>
  )
}`

export default function ButtonPage() {
  return (
    <ComponentLayout
      title="Button"
      description="Terminal-inspired action buttons with pixel-perfect borders and glowing effects."
      code={buttonCode}
      installation="npm install @radix-ui/react-slot class-variance-authority lucide-react"
      usage={buttonUsage}
      preview={
        <div className="flex flex-col gap-8">
          {/* Command Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button className="gap-2">
              <Terminal className="h-4 w-4" />
              <span>Open Terminal</span>
            </Button>
            <Button variant="destructive" className="gap-2">
              <Power className="h-4 w-4" />
              <span>Force Quit</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <Play className="h-4 w-4" />
              <span>Run Script</span>
            </Button>
            <Button variant="secondary" className="gap-2">
              <Square className="h-4 w-4" />
              <span>Stop Process</span>
            </Button>
          </div>

          {/* Icon Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="icon">
              <Terminal className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="icon">
              <X className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Power className="h-4 w-4" />
            </Button>
          </div>

          {/* Size Variants */}
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      }
    >
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/badge" className="text-foreground hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Badge
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/card" className="text-foreground hover:text-muted-foreground">
            Card
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </ComponentLayout>
  )
}

