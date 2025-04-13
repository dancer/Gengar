import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy, Terminal, Command, Settings, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          Terminal-style tooltips that provide helpful information on hover.
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
            <div className="flex items-center gap-4">
              <TooltipProvider>
                {/* Command Tooltip */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5">
                      <Command className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open command palette (Ctrl+K)</p>
                  </TooltipContent>
                </Tooltip>

                {/* Terminal Tooltip */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5">
                      <Terminal className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Open terminal (Ctrl+`)</p>
                  </TooltipContent>
                </Tooltip>

                {/* Settings Tooltip */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Settings (Ctrl+,)</p>
                  </TooltipContent>
                </Tooltip>

                {/* Help Tooltip */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="text-white border-white/10 hover:bg-white/5">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View documentation (F1)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
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
{`import { Button } from "@/components/ui/button"
import { Terminal } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            className="text-white border-white/10 hover:bg-white/5"
          >
            <Terminal className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open terminal (Ctrl+\`)</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
              npm install @radix-ui/react-tooltip
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
{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          Hover over me
        </TooltipTrigger>
        <TooltipContent>
          <p>Helpful information here</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/tabs" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Tabs
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/action-bar" className="text-white hover:text-white/80">
            Action Bar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

