"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { CommandPalette } from "@/components/ui/command-palette"

export default function CommandPalettePage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Command Palette</h1>
        <p className="text-lg text-muted-foreground">
          A searchable overlay that allows users to quickly access actions or navigate the application using keyboard commands.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-background border border-border">
          <TabsTrigger value="preview" className="text-foreground data-[state=active]:bg-muted">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-foreground data-[state=active]:bg-muted">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-background border-border p-6">
            <CommandPalette />
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
              <div className="flex-1" />
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">
                {`"use client"

import * as React from "react"
import { DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <p className="text-xs sm:text-sm text-muted-foreground mb-2">
        Press <kbd className="px-2 py-1.5 text-xs font-semibold bg-muted border border-border rounded-md">⌘K</kbd>
        <span className="hidden sm:inline"> to open the command palette</span>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
              Home
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/installation'))}>
              Installation
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/typography'))}>
              Typography
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/action-bar'))}>
              Action Bar
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/accordion'))}>
              Accordion
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/alert'))}>
              Alert
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/avatar'))}>
              Avatar
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/badge'))}>
              Badge
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/button'))}>
              Button
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/card'))}>
              Card
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/command-palette'))}>
              Command Palette
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/console-output'))}>
              Console Output
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/dialog'))}>
              Dialog
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/input'))}>
              Input
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/progress-bar'))}>
              Progress Bar
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/select'))}>
              Select
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/tabs'))}>
              Tabs
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/terminal-prompt'))}>
              Terminal Prompt
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/tooltip'))}>
              Tooltip
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/tree-view'))}>
              Tree View
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/terminal'))}>
              Terminal
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/ascii-art-generator'))}>
              ASCII Art Generator
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/file-explorer'))}>
              File Explorer
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push('/docs/components/network-monitor'))}>
              Network Monitor
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
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
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              npm install @radix-ui/react-dialog cmdk
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
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { CommandPalette } from "@/components/ui/command-palette"

export default function MyComponent() {
  return (
    <div>
      <CommandPalette />
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
          <Link href="/docs/components/card" className="hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Card
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/console-output" className="hover:text-muted-foreground">
            Console Output
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

