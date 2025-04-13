import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Gengar UI',
    template: '%s - Gengar UI'
  },
  description: 'A modern, terminal-inspired component library for React applications.',
  keywords: [
    'React',
    'Next.js',
    'UI',
    'Components',
    'Terminal',
    'Design System',
    'Tailwind CSS',
    'TypeScript'
  ],
  authors: [
    {
      name: 'dancer',
      url: 'https://github.com/dancer'
    }
  ],
  creator: 'dancer',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/gengar.png',
    shortcut: '/gengar.png',
    apple: '/gengar.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://geng.ar',
    title: 'Gengar UI',
    description: 'A modern, terminal-inspired component library for React applications.',
    siteName: 'Gengar UI',
    images: [{
      url: '/large.png',
      width: 1200,
      height: 630,
      alt: 'Gengar UI - Terminal-inspired React Components'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gengar UI',
    description: 'A modern, terminal-inspired component library for React applications.',
    creator: '@dancer',
    images: ['/large.png']
  }
} 