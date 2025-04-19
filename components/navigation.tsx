"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Terminal } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const components = {
  "Getting Started": [
    { title: "Introduction", href: "/docs" },
    { title: "Installation", href: "/docs/installation" },
    { title: "Typography", href: "/docs/typography" },
  ],
  "Components": [
    { title: "Action Bar", href: "/docs/components/action-bar" },
    { title: "Accordion", href: "/docs/components/accordion" },
    { title: "Alert", href: "/docs/components/alert" },
    { title: "Avatar", href: "/docs/components/avatar" },
    { title: "Badge", href: "/docs/components/badge" },
    { title: "Button", href: "/docs/components/button" },
    { title: "Card", href: "/docs/components/card" },
    { title: "Command Palette", href: "/docs/components/command-palette" },
    { title: "Console Output", href: "/docs/components/console-output" },
    { title: "Dialog", href: "/docs/components/dialog" },
    { title: "Input", href: "/docs/components/input" },
    { title: "Progress Bar", href: "/docs/components/progress-bar" },
    { title: "Select", href: "/docs/components/select" },
    { title: "Tabs", href: "/docs/components/tabs" },
    { title: "Terminal Prompt", href: "/docs/components/terminal-prompt" },
    { title: "Tooltip", href: "/docs/components/tooltip" },
    { title: "Tree View", href: "/docs/components/tree-view" },
    { title: "Terminal", href: "/docs/components/terminal" },
    { title: "ASCII Art Generator", href: "/docs/components/ascii-art-generator" },
    { title: "File Explorer", href: "/docs/components/file-explorer" },
    { title: "Network Monitor", href: "/docs/components/network-monitor" },
  ],
  "Custom": [
    { title: "GitHub Stats", href: "/github" },
  ]
}

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "h-full bg-white dark:bg-black",
      className
    )}>
      <div className="h-14 border-b border-black/10 dark:border-white/10" />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto py-2 px-2">
        <Accordion
          type="multiple"
          defaultValue={["Getting Started", "Components", "Custom"]}
          className="w-full"
        >
          {Object.entries(components).map(([section, items]) => (
            <AccordionItem key={section} value={section}>
              <AccordionTrigger className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white">
                {section}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-sm px-3 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/5",
                        pathname === item.href
                          ? "bg-black/5 text-black dark:bg-white/5 dark:text-white"
                          : "text-black/70 dark:text-white/70"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

