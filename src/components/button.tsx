import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "coral" | "outline";
};

export function Button({ className, variant = "coral", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "coral"
          ? "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-accent"
          : "border border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10",
        className,
      )}
      {...props}
    />
  );
}