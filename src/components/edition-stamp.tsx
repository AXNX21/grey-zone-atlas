import { interpolate, useResolvedLocale, useT } from "@/lib/i18n";
import { ATLAS_PUBLISHED_AT, ATLAS_VERSION, formatEditionPublished } from "@/lib/version";
import { cn } from "@/lib/utils";

export function EditionStamp({
  compact,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const t = useT();
  const locale = useResolvedLocale();
  const when = formatEditionPublished(locale);
  const label = compact
    ? `v${ATLAS_VERSION}`
    : interpolate(t.editionStamp, { v: ATLAS_VERSION, when });

  return (
    <time
      dateTime={ATLAS_PUBLISHED_AT}
      title={interpolate(t.lastPublished, { when })}
      className={cn("font-mono tracking-wide text-faint uppercase", className)}
    >
      {label}
    </time>
  );
}
