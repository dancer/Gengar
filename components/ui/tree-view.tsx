"use client"

import * as React from "react"
import { ChevronRight, Folder, File } from 'lucide-react'
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

import { cn } from "@/lib/utils"

const TreeItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    isFolder?: boolean; 
    isOpen?: boolean;
    level?: number;
    isLast?: boolean;
  }
>(({ className, children, isFolder, isOpen, level = 0, isLast = false, ...props }, ref) => {
  const indent = "  ".repeat(level)
  const prefix = isLast ? "└─" : "├─"
  const folderPrefix = isOpen ? "▼" : "▶"

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center py-0.5 font-mono text-sm text-white/90 hover:text-white hover:bg-white/5",
        isFolder && "cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="text-white/50 select-none whitespace-pre">{indent}{prefix} </span>
      {isFolder && (
        <span className="text-white/70 mr-1.5 select-none">{folderPrefix}</span>
      )}
      {isFolder ? (
        <Folder className="mr-2 h-3.5 w-3.5 shrink-0 text-white/70" />
      ) : (
        <File className="mr-2 h-3.5 w-3.5 shrink-0 text-white/70" />
      )}
      {children}
    </div>
  )
})
TreeItem.displayName = "TreeItem"

const TreeItemGroup = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    <CollapsiblePrimitive.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up">
      {children}
    </CollapsiblePrimitive.Content>
  </CollapsiblePrimitive.Root>
))
TreeItemGroup.displayName = CollapsiblePrimitive.Root.displayName

export function TreeView() {
  const [openFolders, setOpenFolders] = React.useState<string[]>([])

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    )
  }

  return (
    <div className="text-white font-mono">
      <TreeItem 
        isFolder 
        isOpen={openFolders.includes("src")} 
        onClick={() => toggleFolder("src")}
        level={0}
      >
        src
      </TreeItem>
      <TreeItemGroup open={openFolders.includes("src")}>
        <TreeItem 
          isFolder 
          isOpen={openFolders.includes("components")} 
          onClick={() => toggleFolder("components")}
          level={1}
        >
          components
        </TreeItem>
        <TreeItemGroup open={openFolders.includes("components")}>
          <TreeItem level={2}>Button.tsx</TreeItem>
          <TreeItem level={2}>Card.tsx</TreeItem>
          <TreeItem level={2} isLast>Input.tsx</TreeItem>
        </TreeItemGroup>
        <TreeItem 
          isFolder 
          isOpen={openFolders.includes("pages")} 
          onClick={() => toggleFolder("pages")}
          level={1}
        >
          pages
        </TreeItem>
        <TreeItemGroup open={openFolders.includes("pages")}>
          <TreeItem level={2}>index.tsx</TreeItem>
          <TreeItem level={2}>about.tsx</TreeItem>
          <TreeItem level={2} isLast>contact.tsx</TreeItem>
        </TreeItemGroup>
        <TreeItem 
          isFolder 
          isOpen={openFolders.includes("utils")} 
          onClick={() => toggleFolder("utils")}
          level={1}
          isLast
        >
          utils
        </TreeItem>
        <TreeItemGroup open={openFolders.includes("utils")}>
          <TreeItem level={2}>helpers.ts</TreeItem>
          <TreeItem level={2}>constants.ts</TreeItem>
          <TreeItem level={2} isLast>types.ts</TreeItem>
        </TreeItemGroup>
      </TreeItemGroup>
    </div>
  )
}

export { TreeItem, TreeItemGroup }

