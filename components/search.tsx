"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { SearchIcon } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const searchItems = {
  "Home & Introduction": [
    { name: "Home", href: "/" },
    { name: "Introduction", href: "/docs" },
    { name: "Typography", href: "/docs/typography" },
  ],
  "Components": [
    { name: "Action Bar", href: "/docs/components/action-bar" },
    { name: "Accordion", href: "/docs/components/accordion" },
    { name: "Alert", href: "/docs/components/alert" },
    { name: "Avatar", href: "/docs/components/avatar" },
    { name: "Badge", href: "/docs/components/badge" },
    { name: "Button", href: "/docs/components/button" },
    { name: "Card", href: "/docs/components/card" },
    { name: "Command Palette", href: "/docs/components/command-palette" },
    { name: "Console Output", href: "/docs/components/console-output" },
    { name: "Dialog", href: "/docs/components/dialog" },
    { name: "Input", href: "/docs/components/input" },
    { name: "Progress Bar", href: "/docs/components/progress-bar" },
    { name: "Select", href: "/docs/components/select" },
    { name: "Tabs", href: "/docs/components/tabs" },
    { name: "Terminal Prompt", href: "/docs/components/terminal-prompt" },
    { name: "Tooltip", href: "/docs/components/tooltip" },
    { name: "Tree View", href: "/docs/components/tree-view" },
    { name: "Terminal", href: "/docs/components/terminal" },
    { name: "ASCII Art Generator", href: "/docs/components/ascii-art-generator" },
    { name: "File Explorer", href: "/docs/components/file-explorer" },
    { name: "Network Monitor", href: "/docs/components/network-monitor" },
  ],
  "Installation": [
    { name: "Next.js", href: "/docs/installation/nextjs" },
    { name: "Vite", href: "/docs/installation/vite" },
    { name: "Remix", href: "/docs/installation/remix" },
    { name: "Astro", href: "/docs/installation/astro" },
    { name: "Laravel", href: "/docs/installation/laravel" },
    { name: "Manual", href: "/docs/installation/manual" },
  ],
  "Custom": [
    { name: "GitHub Stats", href: "/github" },
  ],
}

const sectionSymbols = {
  "Home & Introduction": "○",
  "Components": "▲",
  "Installation": "□",
  "Custom": "◇",
} as const

export function Search() {
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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        >
          <SearchIcon className="h-4 w-4 xl:mr-2" aria-hidden="true" />
          <span className="hidden xl:inline-flex">Search...</span>
          <span className="sr-only">Search documentation</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command className="bg-background text-foreground">
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(searchItems).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => (
                  <CommandItem
                    key={item.href}
                    onSelect={() => runCommand(() => router.push(item.href))}
                  >
                    <span className="mr-2">{sectionSymbols[category as keyof typeof sectionSymbols]}</span>
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

