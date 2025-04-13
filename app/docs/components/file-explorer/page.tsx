"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { FileExplorer } from "@/components/ui/file-explorer"

export default function FileExplorerPage() {
  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">File Explorer</h1>
        <p className="text-lg text-muted-foreground">
          A terminal-inspired file explorer with interactive navigation, file operations, and retro styling.
        </p>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-black border-white/10 p-6">
            <FileExplorer />
          </Card>
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
              <code className="text-sm">{`"use client"

import * as React from "react"
import { Folder, File, ArrowLeft, Plus, Trash2, Minus, Square, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface FileSystemItem {
  name: string
  type: 'file' | 'folder'
  content?: string
}

interface FileSystemDirectory {
  [key: string]: FileSystemItem | FileSystemDirectory
}

const initialFileSystem: FileSystemDirectory = {
  "Documents": {
    "report.txt": { name: "report.txt", type: "file", content: "This is a report." },
    "Projects": {
      "project1.txt": { name: "project1.txt", type: "file", content: "Project 1 details." },
      "project2.txt": { name: "project2.txt", type: "file", content: "Project 2 details." }
    }
  },
  "Pictures": {
    "vacation.jpg": { name: "vacation.jpg", type: "file", content: "[Image data]" },
    "family.png": { name: "family.png", type: "file", content: "[Image data]" }
  },
  "notes.txt": { name: "notes.txt", type: "file", content: "Some important notes." }
}

export function FileExplorer() {
  const [currentPath, setCurrentPath] = React.useState<string[]>([])
  const [fileSystem, setFileSystem] = React.useState<FileSystemDirectory>(initialFileSystem)
  const [selectedItem, setSelectedItem] = React.useState<string | null>(null)
  const [newItemName, setNewItemName] = React.useState("")

  const getCurrentDirectory = () => {
    return currentPath.reduce(
      (acc: FileSystemDirectory, curr: string) => acc[curr] as FileSystemDirectory, 
      fileSystem
    )
  }

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName])
    setSelectedItem(null)
  }

  const navigateUp = () => {
    setCurrentPath(currentPath.slice(0, -1))
    setSelectedItem(null)
  }

  const selectItem = (itemName: string) => {
    setSelectedItem(itemName)
  }

  const addItem = (type: 'file' | 'folder') => {
    if (newItemName) {
      const currentDir = getCurrentDirectory()
      const newItem: FileSystemItem = { 
        name: newItemName, 
        type, 
        content: type === 'file' ? '' : undefined 
      }
      setFileSystem({
        ...fileSystem,
        [currentPath.join('.')]: {
          ...currentDir,
          [newItemName]: newItem
        }
      })
      setNewItemName("")
    }
  }

  const deleteSelectedItem = () => {
    if (selectedItem) {
      const currentDir = getCurrentDirectory()
      const { [selectedItem]: deletedItem, ...restItems } = currentDir
      setFileSystem({
        ...fileSystem,
        [currentPath.join('.')]: restItems
      })
      setSelectedItem(null)
    }
  }

  const renderFileSystem = () => {
    const currentDir = getCurrentDirectory()
    return Object.entries(currentDir).map(([name, item]) => (
      <div
        key={name}
        className={\`flex items-center p-2 cursor-pointer \${
          selectedItem === name ? 'bg-white/10' : 'hover:bg-white/5'
        }\`}
        onClick={() => selectItem(name)}
        onDoubleClick={() => item.type === 'folder' && navigateToFolder(name)}
      >
        {item.type === 'folder' ? (
          <Folder className="mr-2 h-4 w-4 text-white/70" />
        ) : (
          <File className="mr-2 h-4 w-4 text-white/70" />
        )}
        <span className="text-white/90">{name}</span>
      </div>
    ))
  }

  return (
    <div className="bg-black text-white rounded-none overflow-hidden font-mono text-sm border border-white/20">
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b border-white/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-center flex-grow text-white/70">File Explorer</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-white/50 hover:text-white/70" />
          <Square className="w-4 h-4 text-white/50 hover:text-white/70" />
          <X className="w-4 h-4 text-white/50 hover:text-white/70" />
        </div>
      </div>
      <div className="bg-black/50 p-2 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={navigateUp}
            disabled={currentPath.length === 0}
            className="mr-2 text-white/70 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="text-white/70">
            {currentPath.length === 0 ? 'Root' : currentPath.join(' / ')}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="New item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="bg-black border-white/10 text-white h-8 text-xs"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => addItem('file')}
            className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
          >
            <File className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => addItem('folder')}
            className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10"
          >
            <Folder className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={deleteSelectedItem} 
            disabled={!selectedItem}
            className="h-8 w-8 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="h-64">
        <div className="p-2">
          {renderFileSystem()}
        </div>
      </ScrollArea>
    </div>
  )
}`}</code>
            </pre>
          </Card>
        </TabsContent>
      </Tabs>

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
            <code className="text-sm">npm install @radix-ui/react-scroll-area lucide-react</code>
          </pre>
        </Card>
      </div>

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
            <code className="text-sm">{`import { FileExplorer } from "@/components/ui/file-explorer"

export default function MyComponent() {
  return (
    <div className="p-4 bg-black text-white">
      <FileExplorer />
    </div>
  )
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/ascii-art-generator" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            ASCII Art Generator
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/network-monitor" className="text-white hover:text-white/80">
            Network Monitor
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

