import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
