import { Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white dark:bg-black py-6">
      <div className="container mx-auto flex justify-end items-center pr-6 pl-0 max-w-screen-2xl">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dancer/gengar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <span className="text-sm text-black/70 dark:text-white/70">
            © 2025 Gengar UI
          </span>
        </div>
      </div>
    </footer>
  )
}
