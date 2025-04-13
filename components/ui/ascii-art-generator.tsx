"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
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

  return lines.map(line => line.join(' ')).join('\n')
}

export function AsciiArtGenerator() {
  const [text, setText] = React.useState("")
  const [asciiArt, setAsciiArt] = React.useState("")

  const generateAsciiArt = () => {
    setAsciiArt(textToAscii(text))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateAsciiArt()
    }
  }

  return (
    <div className="bg-black text-white rounded-none overflow-hidden font-mono text-sm border border-white/20">
      <div className="flex items-center justify-between bg-black text-white px-4 py-2 border-b border-white/20">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-center flex-grow text-white/70">ASCII Art Generator</div>
        <div className="flex space-x-2">
          <Minus className="w-4 h-4 text-white/50 hover:text-white/70" />
          <Square className="w-4 h-4 text-white/50 hover:text-white/70" />
          <X className="w-4 h-4 text-white/50 hover:text-white/70" />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter text for ASCII art"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-black text-white border-white/10"
          />
          <Button 
            onClick={generateAsciiArt} 
            className="bg-white text-black hover:bg-white/90"
          >
            Generate
          </Button>
        </div>
        <Textarea
          value={asciiArt}
          readOnly
          className="font-mono text-xs bg-black text-white border-white/10 h-40 w-full"
          placeholder="ASCII art will appear here..."
        />
      </div>
    </div>
  )
}

