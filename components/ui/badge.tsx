import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-muted",
        secondary:
          "bg-background text-muted-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-muted",
        destructive:
          "bg-background text-destructive border border-destructive/50 shadow-[0_0_10px_rgba(255,0,0,0.1)] hover:bg-destructive/10",
        outline:
          "bg-background text-foreground border border-border shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

