import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold transition-all",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#0f172a] text-white shadow-md",
        secondary: "border-transparent bg-[#3b82f6] text-white shadow-md",
        outline: "text-[#0f172a] border-[#0f172a]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
