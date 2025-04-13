"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    progress: number
  }
>(({ className, value, progress, ...props }, ref) => {
  const filledBlocks = Math.floor((progress / 100) * 30)
  const emptyBlocks = 30 - filledBlocks

  return (
    <div className="font-mono text-sm flex items-center gap-4">
      <div className="flex-1 font-mono text-white/90">
        [{Array(filledBlocks).fill('=').join('')}
        {emptyBlocks > 0 ? '>' : ''}
        {Array(emptyBlocks - (emptyBlocks > 0 ? 1 : 0)).fill(' ').join('')}] {progress}%
      </div>
    </div>
  )
})
ProgressBar.displayName = "ProgressBar"

export { ProgressBar }

