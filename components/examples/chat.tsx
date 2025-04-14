"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ExampleChat() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Terminal initialized.' },
    { role: 'user', content: 'Hello!' },
    { role: 'assistant', content: 'Hi! How can I help you today?' },
  ])

  return (
    <div className="h-[300px] flex flex-col bg-muted/40 rounded-sm p-4">
      <div className="flex-1 overflow-auto space-y-2">
        {messages.map((message, i) => (
          <div key={i} className="text-sm">
            <span className={message.role === 'user' ? 'text-[hsl(var(--terminal-green))]' : 'text-[hsl(var(--terminal-blue))]'}>
              {message.role === 'user' ? '>' : '$'}
            </span>
            <span className="ml-2 text-foreground">{message.content}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <Input placeholder="Type a message..." className="flex-1 bg-background" />
        <Button variant="outline" className="bg-background hover:bg-muted">Send</Button>
      </div>
    </div>
  )
}

