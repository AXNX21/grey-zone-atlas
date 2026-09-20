import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import type { Likelihood } from "@/lib/atlas/types";
import { useT } from "@/lib/i18n";

const TONE: Record<Likelihood, ComponentProps<typeof Badge>["tone"]> = {
  confirmed: "confirm",
  high: "info",
  moderate: "warn",
  contested: "danger",
  unattributed: "faint",
  plausible: "steel",
  speculative: "default",
};

export function AttributionBadge({
  level,
  className,
}: {
  level: Likelihood;
  className?: string;
}) {
  const t = useT();
  return (
    <Badge tone={TONE[level]} className={className}>
      {t.attribution[level]}
    </Badge>
  );
}
