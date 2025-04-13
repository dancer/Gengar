'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { ProgressBar } from "@/components/ui/progress-bar"
import { useEffect, useState } from 'react'

export default function ProgressBarPage() {
  const [demoProgress, setDemoProgress] = useState(0)
  const [status, setStatus] = useState('Initializing...')

  useEffect(() => {
    const timer = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setStatus('Process complete')
          return 100
        }

        if (prev === 0) setStatus('Loading dependencies...')
        else if (prev === 25) setStatus('Installing packages...')
        else if (prev === 50) setStatus('Building project...')
        else if (prev === 75) setStatus('Running tests...')

        return prev + 1
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8 font-mono">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Progress Bar</h1>
        <p className="text-lg text-muted-foreground">
          A minimal terminal-style progress bar for displaying process status.
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
            <div className="space-y-2">
              <div className="text-sm text-white/70">{status}</div>
              <ProgressBar progress={demoProgress} />
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
                {`import { ProgressBar } from "@/components/ui/progress-bar"
import { useState, useEffect } from "react"

export function ProcessStatus() {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Initializing...')

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setStatus('Process complete')
          return 100
        }
        
        if (prev === 0) setStatus('Loading dependencies...')
        else if (prev === 25) setStatus('Installing packages...')
        else if (prev === 50) setStatus('Building project...')
        else if (prev === 75) setStatus('Running tests...')
        
        return prev + 1
      })
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2">
      <div className="text-sm text-white/70">{status}</div>
      <ProgressBar progress={progress} />
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
              npm install @radix-ui/react-progress
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
              {`import { ProgressBar } from "@/components/ui/progress-bar"

export function MyComponent() {
  return (
    <div className="space-y-2">
      <div className="text-sm text-white/70">Processing...</div>
      <ProgressBar progress={75} />
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
          <Link href="/docs/components/input" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Input
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/select" className="text-white hover:text-white/80">
            Select
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

