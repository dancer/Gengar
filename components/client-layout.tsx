'use client'

import { useState } from 'react'
import { Terminal, Menu } from 'lucide-react'
import { ThemeProvider } from 'next-themes'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Search } from '@/components/search'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function ClientLayout({
  children,
  _fontClass,
}: {
  children: React.ReactNode
  _fontClass: string
}) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          {!isHomePage && (
            <>
              <Navigation
                className={`w-64 shrink-0 md:block ${isMobileSidebarOpen ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-50 bg-white dark:bg-black overflow-y-auto`}
              />
              <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isMobileSidebarOpen ? 'block' : 'hidden'} md:hidden`}
                onClick={() => setIsMobileSidebarOpen(false)}
              ></div>
            </>
          )}
          <div className="flex-1 flex flex-col">
            <div className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95">
              <header className="flex h-14 items-center justify-between px-6 max-w-screen-2xl mx-auto">
                <div className="flex items-center">
                  {!isHomePage && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="mr-2 md:hidden"
                      onClick={() =>
                        setIsMobileSidebarOpen(!isMobileSidebarOpen)
                      }
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle Sidebar</span>
                    </Button>
                  )}
                  <Link
                    href="/"
                    className={cn(
                      'flex items-center hover:opacity-80 transition-opacity',
                      !isHomePage && 'md:absolute md:left-6'
                    )}
                  >
                    <Terminal className="h-5 w-5 text-black dark:text-white" />
                    <span className="ml-2 font-mono text-sm">Gengar UI</span>
                  </Link>
                </div>
                <nav className="flex items-center space-x-4">
                  <Search />
                  <Link
                    href="/docs"
                    className={cn(
                      'text-sm font-medium hover:underline underline-offset-4',
                      pathname.startsWith('/docs') && 'underline'
                    )}
                  >
                    Docs
                  </Link>
                  <Link
                    href="/docs/components/action-bar"
                    className={cn(
                      'text-sm font-medium hover:underline underline-offset-4',
                      pathname.startsWith('/docs/components') && 'underline'
                    )}
                  >
                    Components
                  </Link>
                  <ThemeToggle />
                </nav>
              </header>
            </div>
            <main className="flex-1">
              <div
                className={`container mx-auto p-6 ${!isHomePage ? 'md:pl-72' : ''}`}
              >
                {children}
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
