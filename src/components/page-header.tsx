import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  dek,
  extra,
}: {
  kicker?: string;
  title: string;
  dek?: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      {kicker ? (
        <p className="mb-3 font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{kicker}</p>
      ) : null}
      <h1 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h1>
      {dek ? <div className="mt-4 text-base text-muted-foreground sm:text-lg">{dek}</div> : null}
      {extra ? <div className="mt-5">{extra}</div> : null}
    </header>
  );
}
