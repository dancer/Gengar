import { Terminal, Package, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function DocsPage() {
  return (
    <div className="space-y-8 pb-8">
      <div className="space-y-4">
        <h1 className="font-mono text-4xl font-bold text-foreground">Gengar UI</h1>
        <p className="text-lg text-muted-foreground">
          A modern terminal-inspired component library for React applications.
          Built with performance and developer experience in mind.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border bg-background p-6">
          <Terminal className="h-8 w-8 text-foreground" />
          <h2 className="mt-4 font-mono text-xl font-bold text-foreground">Terminal-Inspired</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Beautiful components that combine terminal aesthetics with modern usability.
          </p>
        </Card>
        <Card className="border-border bg-background p-6">
          <Package className="h-8 w-8 text-foreground" />
          <h2 className="mt-4 font-mono text-xl font-bold text-foreground">Comprehensive</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Everything you need to build modern React applications with a terminal feel.
          </p>
        </Card>
        <Card className="border-border bg-background p-6">
          <Zap className="h-8 w-8 text-foreground" />
          <h2 className="mt-4 font-mono text-xl font-bold text-foreground">Lightning Fast</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Optimized for performance with zero unnecessary overhead.
          </p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Installation</h2>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="flex-1" />
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              npm install @gengar/ui
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Quick Start</h2>
        <Card className="overflow-hidden border-border bg-background">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <span className="ml-2 text-sm text-muted-foreground">App.tsx</span>
          </div>
          <pre className="p-4">
            <code className="text-sm text-foreground">
              {`import { Button } from '@gengar/ui'

export default function App() {
  return (
    <Button variant="terminal">
      Hello, Terminal!
    </Button>
  )
}`}
            </code>
          </pre>
        </Card>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          variant="default"
          asChild
        >
          <Link href="/docs/installation">Get Started</Link>
        </Button>
        <Button
          variant="outline"
          asChild
        >
          <Link href="/components">View Components</Link>
        </Button>
      </div>
    </div>
  )
}

