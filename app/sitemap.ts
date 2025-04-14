import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://geng.ar'

  // Core pages
  const routes = [
    '',
    '/docs',
  ]

  // Component documentation pages
  const componentPages = [
    '/docs/components/accordion',
    '/docs/components/action-bar',
    '/docs/components/alert',
    '/docs/components/avatar',
    '/docs/components/badge',
    '/docs/components/button',
    '/docs/components/card',
    '/docs/components/checkbox',
    '/docs/components/command',
    '/docs/components/dialog',
    '/docs/components/dropdown-menu',
    '/docs/components/file-explorer',
    '/docs/components/form',
    '/docs/components/input',
    '/docs/components/label',
    '/docs/components/network-monitor',
    '/docs/components/popover',
    '/docs/components/progress',
    '/docs/components/radio-group',
    '/docs/components/select',
    '/docs/components/separator',
    '/docs/components/sheet',
    '/docs/components/skeleton',
    '/docs/components/slider',
    '/docs/components/switch',
    '/docs/components/table',
    '/docs/components/tabs',
    '/docs/components/textarea',
    '/docs/components/toast',
    '/docs/components/toggle',
    '/docs/components/tooltip',
  ]

  const allRoutes = [...routes, ...componentPages]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route === '/docs' ? 0.9 : 0.8,
  }))
} 