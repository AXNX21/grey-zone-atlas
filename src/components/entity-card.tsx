import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AttributionBadge } from "@/components/attribution-badge";
import { Badge } from "@/components/ui/badge";
import type { SearchHit } from "@/lib/atlas";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function EntityLink({
  hit,
  className,
  children,
}: {
  hit: SearchHit;
  className?: string;
  children: ReactNode;
}) {
  if (hit.kind === "campaign") {
    return (
      <Link to="/campaigns/$campaignId" params={{ campaignId: hit.id }} className={className}>
        {children}
      </Link>
    );
  }
  if (hit.kind === "actor") {
    return (
      <Link to="/actors/$actorId" params={{ actorId: hit.id }} className={className}>
        {children}
      </Link>
    );
  }
  if (hit.kind === "domain") {
    return (
      <Link to="/domains/$domainId" params={{ domainId: hit.id }} className={className}>
        {children}
      </Link>
    );
  }
  if (hit.kind === "census") {
    return (
      <Link to="/census" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <Link to="/theaters/$theaterId" params={{ theaterId: hit.id }} className={className}>
      {children}
    </Link>
  );
}

export function EntityCard({ hit, className }: { hit: SearchHit; className?: string }) {
  const t = useT();
  return (
    <EntityLink
      hit={hit}
      className={cn(
        "group flex flex-col gap-3 rounded-xl bg-card p-4 shadow-border transition-[box-shadow,transform] duration-150 ease-out",
        "hover:shadow-border-hover active:scale-[0.99]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <Badge tone="faint">{t.kind[hit.kind]}</Badge>
        {hit.attribution ? <AttributionBadge level={hit.attribution} /> : null}
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl leading-snug text-foreground">{hit.title}</h3>
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-faint transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-sm text-muted-foreground">{hit.dek}</p>
    </EntityLink>
  );
}
