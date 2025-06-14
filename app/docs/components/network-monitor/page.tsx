'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { NetworkMonitor } from '@/components/ui/network-monitor'

export default function NetworkMonitorPage() {
  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Network Monitor</h1>
        <p className="text-lg text-muted-foreground">
          A terminal-inspired network traffic monitor that displays real-time
          HTTP requests and responses.
        </p>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-background border-border p-6">
            <NetworkMonitor />
          </Card>
        </TabsContent>
        <TabsContent value="code">
          <Card className="bg-background border-border overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
              <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
              <div className="flex-1" />
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-foreground hover:bg-muted"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="p-4 text-foreground">
              <code className="text-sm">{`"use client"

import * as React from "react"
import { Activity, Minus, Square, X } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"

interface NetworkActivity {
  timestamp: number
  type: 'request' | 'response'
  url: string
  status?: number
  method?: string
  duration?: number
}

export function NetworkMonitor() {
  const [activities, setActivities] = React.useState<NetworkActivity[]>([])

  React.useEffect(() => {
    const interval = setInterval(() => {
      const methods = ['GET', 'POST', 'PUT', 'DELETE']
      const endpoints = ['/users', '/posts', '/comments', '/products', '/orders']
      const newActivity: NetworkActivity = {
        timestamp: Date.now(),
        type: Math.random() > 0.5 ? 'request' : 'response',
        method: methods[Math.floor(Math.random() * methods.length)],
        url: \`https://api.example.com\${endpoints[Math.floor(Math.random() * endpoints.length)]}\`,
        status: Math.random() > 0.8 ? 404 : Math.random() > 0.9 ? 500 : 200,
        duration: Math.floor(Math.random() * 1000)
      }
      setActivities(prev => [newActivity, ...prev].slice(0, 15))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: number) => {
    if (status >= 500) return 'text-[hsl(var(--terminal-red))]'
    if (status >= 400) return 'text-[hsl(var(--terminal-yellow))]'
    return 'text-[hsl(var(--terminal-green))]'
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'text-[hsl(var(--terminal-blue))]'
      case 'POST': return 'text-[hsl(var(--terminal-green))]'
      case 'PUT': return 'text-[hsl(var(--terminal-yellow))]'
      case 'DELETE': return 'text-[hsl(var(--terminal-red))]'
      default: return 'text-foreground'
    }
  }

  return (
    <div className="bg-background text-foreground rounded-none overflow-hidden font-mono text-sm border border-border">
      <div className="flex items-center justify-between bg-background text-foreground px-4 py-2 border-b border-border">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-red))]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
          <div className="w-3 h-3 rounded-full bg-[hsl(var(--terminal-green))]" />
        </div>
        <div className="text-center flex-grow text-muted-foreground">Network Monitor</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <Square className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
        </div>
      </div>
      <div className="bg-background/50 p-2 flex items-center gap-2 border-b border-border">
        <Activity className="w-4 h-4 text-muted-foreground" />
        <span className="text-muted-foreground">Live Network Traffic</span>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-2 space-y-1">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-2 py-1.5 hover:bg-muted/20 group"
            >
              <span className="text-muted-foreground text-xs">
                {new Date(activity.timestamp).toLocaleTimeString()}
              </span>
              {activity.method && (
                <span className={\`\${getMethodColor(activity.method)} font-bold w-16\`}>
                  {activity.method}
                </span>
              )}
              <span className="text-muted-foreground truncate flex-1">
                {activity.url}
              </span>
              {activity.status && (
                <span className={\`\${getStatusColor(activity.status)} font-mono\`}>
                  {activity.status}
                </span>
              )}
              {activity.duration && (
                <span className="text-muted-foreground font-mono w-16 text-right">
                  {activity.duration}ms
                </span>
              )}
            </div>
          ))}
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
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-muted"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">
              npm install @radix-ui/react-scroll-area lucide-react
            </code>
          </pre>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <Card className="bg-background border-border overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-foreground hover:bg-muted"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <pre className="p-4 text-foreground">
            <code className="text-sm">{`import { NetworkMonitor } from "@/components/ui/network-monitor"

export default function MyComponent() {
  return (
    <div className="p-4">
      <NetworkMonitor />
    </div>
  )
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/file-explorer"
            className="text-foreground hover:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            File Explorer
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link
            href="/docs/components/action-bar"
            className="text-foreground hover:text-muted-foreground"
          >
            Action Bar
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
