import { cn } from "@/lib/utils";

export type Segment<T extends string> = {
  id: T;
  label: string;
  aria?: string;
};

export function SegmentedControl<T extends string>({
  value,
  onChange,
  items,
  ariaLabel,
}: {
  value: T;
  onChange: (id: T) => void;
  items: Segment<T>[];
  ariaLabel: string;
}) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex h-11 w-full items-stretch overflow-hidden rounded-md shadow-border"
    >
      {items.map((item) => {
        const on = value === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={on}
            aria-label={item.aria ?? item.label}
            title={item.aria ?? item.label}
            onClick={() => onChange(item.id)}
            className={cn(
              "inline-flex min-w-0 flex-1 items-center justify-center px-1.5 font-mono text-[10px] tracking-[0.14em] uppercase transition-colors",
              on
                ? "bg-accent text-foreground"
                : "text-faint hover:bg-accent/70 hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
