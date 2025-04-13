import { ArrowRight, Terminal } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ExampleChat } from '@/components/examples/chat'
import { ExampleCommand } from '@/components/examples/command'
import { ExampleCards } from '@/components/examples/cards'
import { ExampleForm } from '@/components/examples/form'
import { ExampleAuthentication } from '@/components/examples/authentication'
import { ExampleDataTable } from '@/components/examples/data-table'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-black text-white">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-2xl mx-auto px-4 mb-16">
        <div className="flex items-center justify-center mb-6">
          <Terminal className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Terminal-inspired components for modern applications
        </h1>
        <p className="text-base text-white/70 sm:text-lg max-w-xl mx-auto">
          Beautiful, responsive components with a terminal aesthetic. Built with Tailwind CSS and open source.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button asChild className="flex items-center">
            <Link href="/docs">
              <ArrowRight className="mr-2 h-4 w-4 inline-block" />
              <span className="inline-block">Get Started</span>
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex items-center">
            <a href="https://github.com/dancer/gengar" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto w-full">
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Chat Interface</h3>
          <ExampleChat />
        </Card>
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Command Palette</h3>
          <ExampleCommand />
        </Card>
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Cards</h3>
          <ExampleCards />
        </Card>
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Form</h3>
          <ExampleForm />
        </Card>
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Authentication</h3>
          <ExampleAuthentication />
        </Card>
        <Card className="p-4 bg-black border-white/10">
          <h3 className="text-sm font-semibold mb-2">Data Table</h3>
          <ExampleDataTable />
        </Card>
      </div>
    </div>
  )
}

