'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Minus, Square, X } from 'lucide-react'

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
  ' ': ['     ', '     ', '     ', '     ', '     '],
}

function textToAscii(text: string): string {
  const lines: string[][] = ['', '', '', '', ''].map(() => [])

  for (const char of text.toUpperCase()) {
    const pattern = asciiPatterns[char] || [
      '?????',
      '?????',
      '?????',
      '?????',
      '?????',
    ]
    for (let i = 0; i < 5; i++) {
      lines[i].push(pattern[i])
    }
  }

  return lines.map(line => line.join(' ')).join('\n')
}

export function AsciiArtGenerator() {
  const [text, setText] = React.useState('')
  const [asciiArt, setAsciiArt] = React.useState('')

  const generateAsciiArt = () => {
    setAsciiArt(textToAscii(text))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateAsciiArt()
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
        <div className="text-center flex-grow text-muted-foreground">
          ASCII Art Generator
        </div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <Square className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter text for ASCII art"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-background text-foreground border-border"
          />
          <Button onClick={generateAsciiArt} variant="secondary">
            Generate
          </Button>
        </div>
        <Textarea
          value={asciiArt}
          readOnly
          className="font-mono text-xs bg-background text-foreground border-border h-40 w-full"
          placeholder="ASCII art will appear here..."
        />
      </div>
    </div>
  )
}
