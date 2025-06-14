'use client'

import React from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ScrollArea } from '@/components/ui/scroll-area'

export function ConsoleOutput() {
  const [output, setOutput] = React.useState<string[]>([])

  React.useEffect(() => {
    const initialOutput = [
      'Welcome to Gengar UI Console',
      "Type 'help' for a list of commands",
      '',
    ]
    setOutput(initialOutput)
  }, [])

  const handleCommand = (command: string) => {
    let response: string[]

    switch (command.toLowerCase()) {
      case 'help':
        response = [
          'Available commands:',
          '  help    - Show this help message',
          '  clear   - Clear the console',
          '  echo    - Echo a message',
          '  date    - Show current date and time',
        ]
        break
      case 'clear':
        setOutput([])
        return
      case 'date':
        response = [new Date().toLocaleString()]
        break
      default:
        if (command.startsWith('echo ')) {
          response = [command.slice(5)]
        } else {
          response = [`Unknown command: ${command}`]
        }
    }

    setOutput(prev => [...prev, `> ${command}`, ...response, ''])
  }

  return (
    <div className="bg-background text-foreground p-4 rounded-md font-mono text-sm h-64 overflow-auto">
      <ScrollArea className="h-64">
        <SyntaxHighlighter
          language="bash"
          style={tomorrow}
          customStyle={{
            backgroundColor: 'transparent',
            padding: 0,
            margin: 0,
          }}
        >
          {output.join('\n')}
        </SyntaxHighlighter>
      </ScrollArea>
      <form
        onSubmit={e => {
          e.preventDefault()
          const input = e.currentTarget.command.value
          handleCommand(input)
          e.currentTarget.reset()
        }}
      >
        <input
          type="text"
          name="command"
          className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
          autoComplete="off"
        />
      </form>
    </div>
  )
}
