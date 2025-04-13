import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-black border border-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:bg-white/10",
        secondary:
          "bg-black border border-white/10 text-white/70 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-white/10",
        destructive:
          "bg-black border border-red-500/50 text-red-500 shadow-[0_0_10px_rgba(255,0,0,0.1)] hover:bg-red-950/30",
        outline:
          "bg-black border border-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

