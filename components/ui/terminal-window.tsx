import { cn } from '@/lib/utils'

interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function TerminalWindow({
  title,
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn('overflow-hidden border-border bg-background', className)}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-red))]" />
        <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-yellow))]" />
        <div className="h-3 w-3 rounded-full bg-[hsl(var(--terminal-green))]" />
        {title && (
          <span className="ml-2 text-sm text-muted-foreground">{title}</span>
        )}
      </div>
      {children}
    </div>
  )
}
