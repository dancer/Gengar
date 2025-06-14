'use client'

import * as React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  SiNextdotjs,
  SiVite,
  SiRemix,
  SiAstro,
  SiLaravel,
  SiReact,
} from 'react-icons/si'

interface Framework {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

const frameworks: Framework[] = [
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    href: '/docs/installation/nextjs',
  },
  {
    name: 'Vite',
    icon: SiVite,
    href: '/docs/installation/vite',
  },
  {
    name: 'Remix',
    icon: SiRemix,
    href: '/docs/installation/remix',
  },
  {
    name: 'Astro',
    icon: SiAstro,
    href: '/docs/installation/astro',
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    href: '/docs/installation/laravel',
  },
  {
    name: 'Manual',
    icon: SiReact,
    href: '/docs/installation/manual',
  },
]

export function FrameworkSelector() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {frameworks.map(framework => (
        <Link key={framework.name} href={framework.href}>
          <Card className="relative flex h-32 flex-col items-center justify-center gap-2 overflow-hidden border border-border bg-background p-6 transition-colors hover:bg-accent">
            <framework.icon className="h-10 w-10 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              {framework.name}
            </span>
          </Card>
        </Link>
      ))}
    </div>
  )
}
