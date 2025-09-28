import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp: any = asChild ? ("a" as any) : "button";
    const base = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variants: Record<string, string> = {
      default: "bg-foreground text-background hover:opacity-90",
      outline: "border border-foreground/20 bg-transparent hover:bg-foreground/5",
      ghost: "hover:bg-foreground/5",
      secondary: "bg-foreground/10 hover:bg-foreground/20",
    };
    const sizes: Record<string, string> = {
      default: "h-10 px-4 py-2",
      lg: "h-11 px-6",
      icon: "h-10 w-10 p-0",
    };
    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

