import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectPage() {
  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground">
          A terminal-inspired select component with monospace font and retro styling.
        </p>
      </div>

      {/* Preview/Code Section */}
      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-black border-white/10 p-6 space-y-8">
            {/* Basic Select */}
            <div className="space-y-4">
              <div className="text-sm text-white/70">Basic Select</div>
              <Select>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Environments</SelectLabel>
                    <SelectItem value="development">development</SelectItem>
                    <SelectItem value="staging">staging</SelectItem>
                    <SelectItem value="production">production</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Select with Groups */}
            <div className="space-y-4">
              <div className="text-sm text-white/70">Grouped Options</div>
              <Select>
                <SelectTrigger className="w-[240px]">
                  <SelectValue placeholder="Select command" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>System</SelectLabel>
                    <SelectItem value="status">system:status</SelectItem>
                    <SelectItem value="restart">system:restart</SelectItem>
                    <SelectItem value="shutdown">system:shutdown</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Network</SelectLabel>
                    <SelectItem value="ping">network:ping</SelectItem>
                    <SelectItem value="trace">network:trace</SelectItem>
                    <SelectItem value="scan">network:scan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
{`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select command" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>System</SelectLabel>
          <SelectItem value="status">system:status</SelectItem>
          <SelectItem value="restart">system:restart</SelectItem>
          <SelectItem value="shutdown">system:shutdown</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Network</SelectLabel>
          <SelectItem value="ping">network:ping</SelectItem>
          <SelectItem value="trace">network:trace</SelectItem>
          <SelectItem value="scan">network:scan</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
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
              npm install @radix-ui/react-select
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function MyComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select environment" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Environments</SelectLabel>
          <SelectItem value="development">development</SelectItem>
          <SelectItem value="staging">staging</SelectItem>
          <SelectItem value="production">production</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/progress-bar" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Progress Bar
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/tabs" className="text-white hover:text-white/80">
            Tabs
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

