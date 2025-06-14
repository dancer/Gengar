'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { VT323 } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const pixelFont = VT323({
  weight: '400',
  subsets: ['latin'],
})

export default function AvatarPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          A pixel-perfect retro avatar component with 8-bit style fallback.
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
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://api.dicebear.com/7.x/pixel-art/svg?seed=terminal"
                  alt="@terminal"
                  className="[image-rendering:pixelated]"
                />
                <AvatarFallback className={`${pixelFont.className} text-xs`}>
                  PX
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://api.dicebear.com/7.x/pixel-art/svg?seed=lineal"
                  alt="@lineal"
                  className="[image-rendering:pixelated]"
                />
                <AvatarFallback className={`${pixelFont.className} text-xs`}>
                  8B
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://api.dicebear.com/7.x/pixel-art/svg?seed=retro"
                  alt="@retro"
                  className="[image-rendering:pixelated]"
                />
                <AvatarFallback className={`${pixelFont.className} text-xs`}>
                  RT
                </AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className={`${pixelFont.className} text-4xl`}>
                  A
                </AvatarFallback>
              </Avatar>
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
                {`"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { VT323 } from 'next/font/google'
import { cn } from "@/lib/utils"

const pixelFont = VT323({ 
  weight: '400',
  subsets: ['latin'],
})

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(
      "aspect-square h-full w-full [image-rendering:pixelated]",
      className
    )}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      pixelFont.className,
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }`}
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
            <code className="text-sm">npm install @radix-ui/react-avatar</code>
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
              {`import { VT323 } from 'next/font/google'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const pixelFont = VT323({ 
  weight: '400',
  subsets: ['latin'],
})

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      {/* Pixel Art Avatar */}
      <Avatar>
        <AvatarImage 
          src="https://api.dicebear.com/7.x/pixel-art/svg?seed=custom" 
          className="[image-rendering:pixelated]"
        />
        <AvatarFallback className={\`\${pixelFont.className} text-xs\`}>
          PX
        </AvatarFallback>
      </Avatar>

      {/* Letter Avatar */}
      <Avatar>
        <AvatarFallback className={\`\${pixelFont.className} text-4xl\`}>
          A
        </AvatarFallback>
      </Avatar>
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
            href="/docs/components/alert"
            className="hover:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Alert
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/badge"
            className="hover:text-muted-foreground"
          >
            Badge
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
