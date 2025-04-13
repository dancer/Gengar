import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'

export default function TabsPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          Terminal-inspired tabs for organizing content into different sections.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-background border-border p-6">
            <Tabs defaultValue="processes" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="processes">Processes</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>
              <TabsContent value="processes" className="space-y-4">
                <div className="text-sm text-muted-foreground mt-4">Active Processes</div>
                <div className="text-foreground text-sm space-y-1">
                  <div>node server.js (PID: 1234)</div>
                  <div>nginx (PID: 5678)</div>
                  <div>postgres (PID: 9012)</div>
                </div>
              </TabsContent>
              <TabsContent value="network" className="space-y-4">
                <div className="text-sm text-muted-foreground mt-4">Network Status</div>
                <div className="text-foreground text-sm space-y-1">
                  <div>Interface: eth0</div>
                  <div>IP: 192.168.1.100</div>
                  <div>Status: Connected</div>
                </div>
              </TabsContent>
              <TabsContent value="system" className="space-y-4">
                <div className="text-sm text-muted-foreground mt-4">System Info</div>
                <div className="text-foreground text-sm space-y-1">
                  <div>CPU Usage: 45%</div>
                  <div>Memory: 8GB/16GB</div>
                  <div>Uptime: 5d 12h 34m</div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
              <div className="flex-1" />
              <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">
                {`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="processes" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="processes">Processes</TabsTrigger>
        <TabsTrigger value="network">Network</TabsTrigger>
        <TabsTrigger value="system">System</TabsTrigger>
      </TabsList>
      <TabsContent value="processes" className="space-y-4">
        <div className="text-sm text-muted-foreground mt-4">Active Processes</div>
        <div className="text-foreground text-sm space-y-1">
          <div>node server.js (PID: 1234)</div>
          <div>nginx (PID: 5678)</div>
          <div>postgres (PID: 9012)</div>
        </div>
      </TabsContent>
      <TabsContent value="network" className="space-y-4">
        <div className="text-sm text-muted-foreground mt-4">Network Status</div>
        <div className="text-foreground text-sm space-y-1">
          <div>Interface: eth0</div>
          <div>IP: 192.168.1.100</div>
          <div>Status: Connected</div>
        </div>
      </TabsContent>
      <TabsContent value="system" className="space-y-4">
        <div className="text-sm text-muted-foreground mt-4">System Info</div>
        <div className="text-foreground text-sm space-y-1">
          <div>CPU Usage: 45%</div>
          <div>Memory: 8GB/16GB</div>
          <div>Uptime: 5d 12h 34m</div>
        </div>
      </TabsContent>
    </Tabs>
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
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              npm install @radix-ui/react-tabs
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
            <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-muted">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              {`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="text-foreground">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2" className="text-foreground">
        Content for Tab 2
      </TabsContent>
    </Tabs>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/select" className="text-foreground hover:text-muted-foreground">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Select
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/tooltip" className="text-foreground hover:text-muted-foreground">
            Tooltip
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

