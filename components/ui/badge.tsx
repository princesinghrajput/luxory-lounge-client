import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
    const variants: Record<string, string> = {
      default: "border-transparent bg-foreground text-background",
      secondary: "border-transparent bg-foreground/10 text-foreground",
      outline: "text-foreground",
    };
    return <span ref={ref} className={cn(base, variants[variant], className)} {...props} />;
  }
);
Badge.displayName = "Badge";
