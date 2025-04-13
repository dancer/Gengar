"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, ArrowRight, Copy } from 'lucide-react'
import Link from 'next/link'
import { AsciiArtGenerator } from "@/components/ui/ascii-art-generator"

export default function AsciiArtGeneratorPage() {
  return (
    <div className="space-y-8 font-mono">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ASCII Art Generator</h1>
        <p className="text-lg text-muted-foreground">
          A retro-style ASCII art generator that converts text into pixel-perfect patterns.
        </p>
      </div>

      <Tabs defaultValue="preview" className="space-y-4">
        <TabsList className="bg-black border border-white/10">
          <TabsTrigger value="preview" className="text-white data-[state=active]:bg-white/10">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-white data-[state=active]:bg-white/10">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="space-y-4">
          <Card className="bg-black border-white/10 p-6">
            <AsciiArtGenerator />
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

const asciiPatterns: { [key: string]: string[] } = {
  A: ['  #  ', ' # # ', '#####', '#   #', '#   #'],
  B: ['#### ', '#   #', '#### ', '#   #', '#### '],
  C: [' ####', '#    ', '#    ', '#    ', ' ####'],
  D: ['#### ', '#   #', '#   #', '#   #', '#### '],
  E: ['#####', '#    ', '#### ', '#    ', '#####'],
  F: ['#####', '#    ', '#### ', '#    ', '#    '],
  G: [' ####', '#    ', '# ###', '#   #', ' ####'],
  H: ['#   #', '#   #', '#####', '#   #', '#   #'],
  I: ['#####', '  #  ', '  #  ', '  #  ', '#####'],
  J: ['#####', '   # ', '   # ', '#  # ', ' ##  '],
  K: ['#   #', '#  # ', '###  ', '#  # ', '#   #'],
  L: ['#    ', '#    ', '#    ', '#    ', '#####'],
  M: ['#   #', '## ##', '# # #', '#   #', '#   #'],
  N: ['#   #', '##  #', '# # #', '#  ##', '#   #'],
  O: [' ### ', '#   #', '#   #', '#   #', ' ### '],
  P: ['#### ', '#   #', '#### ', '#    ', '#    '],
  Q: [' ### ', '#   #', '# # #', '#  # ', ' ## #'],
  R: ['#### ', '#   #', '#### ', '#  # ', '#   #'],
  S: [' ####', '#    ', ' ### ', '    #', '#### '],
  T: ['#####', '  #  ', '  #  ', '  #  ', '  #  '],
  U: ['#   #', '#   #', '#   #', '#   #', ' ### '],
  V: ['#   #', '#   #', '#   #', ' # # ', '  #  '],
  W: ['#   #', '#   #', '# # #', '## ##', '#   #'],
  X: ['#   #', ' # # ', '  #  ', ' # # ', '#   #'],
  Y: ['#   #', ' # # ', '  #  ', '  #  ', '  #  '],
  Z: ['#####', '   # ', '  #  ', ' #   ', '#####'],
  ' ': ['     ', '     ', '     ', '     ', '     ']
}

function textToAscii(text: string): string {
  const lines: string[][] = ['', '', '', '', ''].map(() => [])

  for (const char of text.toUpperCase()) {
    const pattern = asciiPatterns[char] || ['?????', '?????', '?????', '?????', '?????']
    for (let i = 0; i < 5; i++) {
      lines[i].push(pattern[i])
    }
  }

  return lines.map(line => line.join(' ')).join('\\n')
}

export function AsciiArtGenerator() {
  const [text, setText] = React.useState("")
  const [asciiArt, setAsciiArt] = React.useState("")

  const generateAsciiArt = () => {
    setAsciiArt(textToAscii(text))
  }

  return (
    <Card className="bg-black border-white/10 p-6 space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">ASCII Art Generator</h2>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Enter text for ASCII art"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow bg-black text-white border-white/10"
        />
        <Button onClick={generateAsciiArt} className="bg-white text-black hover:bg-white/90">
          Generate
        </Button>
      </div>
      <Textarea
        value={asciiArt}
        readOnly
        className="font-mono text-xs bg-black text-white border-white/10 h-40 w-full"
        placeholder="ASCII art will appear here..."
      />
    </Card>
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
            <code className="text-sm">npm install @radix-ui/react-label</code>
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
            <code className="text-sm">{`import { AsciiArtGenerator } from "@/components/ui/ascii-art-generator"

export default function MyComponent() {
  return (
    <div className="p-4 bg-black text-white">
      <AsciiArtGenerator />
    </div>
  )
}`}</code>
          </pre>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link href="/docs/components/terminal" className="text-white hover:text-white/80">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terminal
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs/components/file-explorer" className="text-white hover:text-white/80">
            File Explorer
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

