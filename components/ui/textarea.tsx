import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex w-full rounded-md border border-foreground/20 bg-background px-3 py-2 text-sm placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 min-h-[80px]",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
