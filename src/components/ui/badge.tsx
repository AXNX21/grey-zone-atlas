import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em]",
  {
    variants: {
      tone: {
        default: "bg-secondary text-muted-foreground",
        steel: "bg-primary/15 text-steel",
        confirm: "bg-confirm/15 text-confirm",
        info: "bg-info/15 text-info",
        warn: "bg-warn/15 text-warn",
        danger: "bg-destructive/15 text-destructive",
        faint: "text-faint shadow-border",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}
