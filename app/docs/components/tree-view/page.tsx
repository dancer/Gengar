import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { TreeView, TreeItem, TreeItemGroup } from "@/components/ui/tree-view"

export default function TreeViewPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tree View</h1>
        <p className="text-lg text-muted-foreground">
          A terminal-inspired tree view component for displaying hierarchical file structures.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-black border-white/10 p-6">
            <TreeView />
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
              <code className="text-sm">
{`import { TreeView, TreeItem, TreeItemGroup } from "@/components/ui/tree-view"

export function FileExplorer() {
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
      </TreeItemGroup>
    </div>
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
              npm install @radix-ui/react-collapsible lucide-react
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
{`import { TreeView, TreeItem, TreeItemGroup } from "@/components/ui/tree-view"

export function CustomTreeView() {
  const [openFolders, setOpenFolders] = React.useState<string[]>([])

  return (
    <div className="text-white font-mono">
      <TreeItem 
        isFolder 
        level={0}
        isOpen={openFolders.includes("docs")}
        onClick={() => toggleFolder("docs")}
      >
        docs
      </TreeItem>
      <TreeItemGroup open={openFolders.includes("docs")}>
        <TreeItem level={1}>README.md</TreeItem>
        <TreeItem level={1}>CONTRIBUTING.md</TreeItem>
        <TreeItem level={1} isLast>LICENSE</TreeItem>
      </TreeItemGroup>
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
          <Link href="/docs/components/tooltip" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tooltip
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/terminal" className="text-white hover:text-white/80">
            Terminal
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

