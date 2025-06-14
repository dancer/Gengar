import { JetBrains_Mono } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://geng.ar'),
  title: {
    default: 'Gengar UI',
    template: '%s - Gengar UI',
  },
  description:
    'A modern, terminal-inspired component library for React applications.',
  keywords: [
    'React',
    'Next.js',
    'UI',
    'Components',
    'Terminal',
    'Design System',
    'Tailwind CSS',
    'TypeScript',
  ],
  authors: [
    {
      name: 'nishimiya',
      url: 'https://github.com/dancer',
    },
  ],
  creator: 'nishimiya',
  icons: {
    icon: '/gengar.png',
    shortcut: '/gengar.png',
    apple: '/gengar.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://geng.ar/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://geng.ar',
    title: 'Gengar UI',
    description:
      'A modern, terminal-inspired component library for React applications.',
    siteName: 'Gengar UI',
    images: [
      {
        url: 'https://geng.ar/og.png',
        width: 1200,
        height: 630,
        alt: 'Gengar UI - Terminal-inspired React Components',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gengar UI',
    description:
      'A modern, terminal-inspired component library for React applications.',
    creator: '@nishimiya',
    site: '@nishimiya',
    images: {
      url: 'https://geng.ar/og.png',
      alt: 'Gengar UI - Terminal-inspired React Components',
      width: 1200,
      height: 630,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} font-mono bg-white dark:bg-black text-black dark:text-white antialiased`}
      >
        <ClientLayout _fontClass={jetbrainsMono.variable}>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
