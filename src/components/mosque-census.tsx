import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AttributionBadge } from "@/components/attribution-badge";
import { Badge } from "@/components/ui/badge";
import { MosqueMap } from "@/components/mosque-map";
import {
  CENSUS_BOUNDS,
  CENSUS_CONTROL_N,
  CENSUS_CONTROL_YEAR,
  CENSUS_DEFAULTS,
  CENSUS_ETHNIC_2017,
  CENSUS_ETHNIC_TOTAL,
  CENSUS_FLOORS,
  CENSUS_NOW_YEAR,
  CENSUS_PURPOSE_GRADE,
  CENSUS_PURPOSE_IDS,
  CENSUS_SERIES,
  CENSUS_SITES,
  cagr,
  doublingYears,
  inclusiveFromDemo,
  inclusiveFromMapped,
  shareOf,
} from "@/lib/atlas/census";
import type { CensusEthnicBloc, CensusFloorId, CensusLayerId, CensusPurposeId, CensusSiteFloor } from "@/lib/atlas/census";
import { useAtlas } from "@/lib/atlas";
import { interpolate, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function fmt(n: number) {
  return n.toLocaleString("da-DK");
}

function toXY(values: number[], years: number[], maxY: number) {
  const minX = years[0]!;
  const maxX = years[years.length - 1]!;
  return values.map((v, i) => {
    const x = ((years[i]! - minX) / (maxX - minX)) * 100;
    const y = 52 - (v / maxY) * 46;
    return { x, y };
  });
}

export function MosqueCensus() {
  const t = useT();
  const { census: copy } = useAtlas();
  const [pop, setPop] = useState(CENSUS_DEFAULTS.muslimPop);
  const [catchment, setCatchment] = useState(CENSUS_DEFAULTS.catchment);
  const [darkRatio, setDarkRatio] = useState(CENSUS_DEFAULTS.darkRatio);
  const [fieldShare, setFieldShare] = useState(CENSUS_DEFAULTS.fieldShare);
  const [openFloor, setOpenFloor] = useState<CensusFloorId | "">("hostile");
  const [siteFilter, setSiteFilter] = useState<CensusSiteFloor | "all">("all");
  const [purposeFilter, setPurposeFilter] = useState<CensusPurposeId | "all">("all");
  const [openPurpose, setOpenPurpose] = useState<CensusPurposeId | "">("dawa");

  const inclusive = inclusiveFromDemo(pop, catchment);
  const fromMapped = inclusiveFromMapped(CENSUS_DEFAULTS.mapped, darkRatio);
  const identitiesMeet = Math.abs(inclusive - fromMapped) <= 15;
  const hostile = shareOf(inclusive, fieldShare);
  const transnational = shareOf(CENSUS_DEFAULTS.mapped, 0.4);
  const kineticField = shareOf(inclusive, fieldShare);
  const darkGap = Math.max(0, inclusive - CENSUS_DEFAULTS.mapped);
  const yearsSpan = CENSUS_NOW_YEAR - CENSUS_CONTROL_YEAR;
  const rate = cagr(CENSUS_CONTROL_N, Math.max(inclusive, 1), yearsSpan);
  const doubling = doublingYears(rate);

  const series = useMemo(() => {
    const last = CENSUS_SERIES[CENSUS_SERIES.length - 1]!;
    return CENSUS_SERIES.map((p) =>
      p.year === last.year ? { ...p, inclusive } : p,
    );
  }, [inclusive]);

  const years = series.map((p) => p.year);
  const maxY = Math.max(...series.map((p) => Math.max(p.mapped, p.inclusive)), 40);
  const mappedXY = toXY(
    series.map((p) => p.mapped),
    years,
    maxY,
  );
  const inclXY = toXY(
    series.map((p) => p.inclusive),
    years,
    maxY,
  );
  const mappedPts = mappedXY.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  const inclPts = inclXY.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");
  const gapPoly = [
    ...inclXY.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`),
    ...mappedXY
      .slice()
      .reverse()
      .map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`),
  ].join(" ");

  const ethnicMax = Math.max(...CENSUS_ETHNIC_2017.map((e) => e.n));
  const named = CENSUS_SITES.filter(
    (s) =>
      (siteFilter === "all" || s.floor === siteFilter) &&
      (purposeFilter === "all" || s.purposes.includes(purposeFilter)),
  );

  const reset = () => {
    setPop(CENSUS_DEFAULTS.muslimPop);
    setCatchment(CENSUS_DEFAULTS.catchment);
    setDarkRatio(CENSUS_DEFAULTS.darkRatio);
    setFieldShare(CENSUS_DEFAULTS.fieldShare);
  };

  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-px overflow-hidden rounded-xl bg-border shadow-border sm:grid-cols-2 xl:grid-cols-4">
        <Stat
          value={String(CENSUS_DEFAULTS.purposeBuilt)}
          label={copy.purposeLabel}
          hint="1967 →"
        />
        <Stat value={String(CENSUS_DEFAULTS.mapped)} label={copy.mappedLabel} hint="160–200" />
        <Stat value={fmt(inclusive)} label={copy.inclusiveLabel} hint="1974: 1" accent />
        <Stat value={fmt(darkGap)} label={copy.darkGapLabel} hint="inclusive − mapped" />
      </section>

      <section className="rounded-xl bg-card p-4 shadow-border sm:p-6">
        <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{copy.methodTitle}</p>
        <p className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {interpolate(copy.identity, { pop: fmt(pop), catchment: fmt(catchment), n: fmt(inclusive) })}
        </p>
        <p className="mt-2 font-display text-xl tracking-tight text-steel sm:text-2xl">
          {interpolate(copy.identityMapped, {
            mapped: fmt(CENSUS_DEFAULTS.mapped),
            ratio: darkRatio.toFixed(2).replace(".", ","),
            n: fmt(fromMapped),
          })}
        </p>
        <p className={cn("mt-3 text-sm", identitiesMeet ? "text-confirm" : "text-warn")}>
          {identitiesMeet ? copy.meetOk : copy.meetOff}
        </p>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {interpolate(copy.darkGap, { n: fmt(darkGap) })}
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{copy.catchmentHint}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <SliderRow
            label={copy.popLabel}
            value={pop}
            display={fmt(pop)}
            min={CENSUS_BOUNDS.pop.min}
            max={CENSUS_BOUNDS.pop.max}
            step={CENSUS_BOUNDS.pop.step}
            onChange={setPop}
          />
          <SliderRow
            label={copy.catchmentLabel}
            value={catchment}
            display={fmt(catchment)}
            min={CENSUS_BOUNDS.catchment.min}
            max={CENSUS_BOUNDS.catchment.max}
            step={CENSUS_BOUNDS.catchment.step}
            onChange={setCatchment}
          />
          <SliderRow
            label={copy.darkLabel}
            value={Math.round(darkRatio * 100)}
            display={darkRatio.toFixed(2).replace(".", ",")}
            min={Math.round(CENSUS_BOUNDS.ratio.min * 100)}
            max={Math.round(CENSUS_BOUNDS.ratio.max * 100)}
            step={Math.round(CENSUS_BOUNDS.ratio.step * 100)}
            onChange={(v) => setDarkRatio(v / 100)}
          />
          <SliderRow
            label={copy.fieldLabel}
            value={Math.round(fieldShare * 100)}
            display={`${Math.round(fieldShare * 100)}%`}
            min={Math.round(CENSUS_BOUNDS.fieldShare.min * 100)}
            max={Math.round(CENSUS_BOUNDS.fieldShare.max * 100)}
            step={Math.round(CENSUS_BOUNDS.fieldShare.step * 100)}
            onChange={(v) => setFieldShare(v / 100)}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{copy.darkHint}</p>
        <p className="mt-1 text-sm text-muted-foreground">{copy.fieldHint}</p>
        <p className="mt-1 font-mono text-xs tracking-wide text-steel uppercase">
          {interpolate(t.fieldSites, { n: fmt(hostile) })}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-11 items-center rounded-md px-4 text-sm text-muted-foreground shadow-border hover:bg-accent hover:text-foreground"
        >
          {t.resetCensus}
        </button>
      </section>

      <section className="rounded-xl bg-secondary px-4 py-5 shadow-border sm:px-6">
        <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{copy.growthTitle}</p>
        <p className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
          {interpolate(copy.growthLine, {
            start: CENSUS_CONTROL_N,
            end: fmt(inclusive),
            years: yearsSpan,
            d: doubling.toFixed(1).replace(".", ","),
            cagr: (rate * 100).toFixed(1).replace(".", ","),
          })}
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{copy.growthDek}</p>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.curveTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.curveDek}</p>
        <div className="mt-4 overflow-hidden rounded-xl bg-card shadow-border">
          <svg viewBox="0 0 100 62" className="block h-auto w-full text-border" role="img" aria-label={copy.curveTitle}>
            <rect width="100" height="62" className="fill-card" />
            {Array.from({ length: 5 }, (_, i) => (
              <line key={i} x1="0" x2="100" y1={6 + i * 11.5} y2={6 + i * 11.5} stroke="currentColor" strokeWidth="0.2" />
            ))}
            <polygon points={gapPoly} fill="var(--color-destructive)" opacity="0.12" />
            <polyline fill="none" stroke="var(--color-destructive)" strokeWidth="1.1" points={inclPts} />
            <polyline fill="none" stroke="var(--color-steel)" strokeWidth="1.1" points={mappedPts} />
            {years.map((y) => {
              const minX = years[0]!;
              const maxX = years[years.length - 1]!;
              const x = ((y - minX) / (maxX - minX)) * 100;
              const mark = y === CENSUS_CONTROL_YEAR;
              return (
                <g key={y}>
                  {mark ? (
                    <line x1={x} x2={x} y1="6" y2="52" stroke="var(--color-warn)" strokeWidth="0.25" strokeDasharray="1 1" />
                  ) : null}
                  <text
                    x={x}
                    y="60"
                    textAnchor="middle"
                    className={mark ? "fill-warn" : "fill-faint"}
                    fontSize="3"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    {y}
                  </text>
                </g>
              );
            })}
          </svg>
          <div className="flex flex-wrap gap-4 border-t border-border px-4 py-3 font-mono text-[10px] tracking-wider uppercase">
            <span className="flex items-center gap-2 text-steel">
              <span className="size-2 rounded-full bg-steel" />
              {t.mappedSeries}
            </span>
            <span className="flex items-center gap-2 text-destructive">
              <span className="size-2 rounded-full bg-destructive" />
              {t.inclusiveSeries}
            </span>
          </div>
        </div>
      </section>

      <MosqueMap />

      <section>
        <h2 className="font-display text-2xl">{copy.layersTitle}</h2>
        <ul className="mt-4 grid gap-3 lg:grid-cols-2">
          {(Object.keys(copy.layers) as CensusLayerId[]).map((id) => (
            <li key={id} className="rounded-xl bg-card p-4 shadow-border">
              <p className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">{copy.layers[id].name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{copy.layers[id].blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.purposesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.purposesDek}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["all", ...CENSUS_PURPOSE_IDS] as const).map((id) => {
            const label = id === "all" ? copy.purposeFilterAll : copy.purposes[id].name.split(" / ")[0];
            const on = purposeFilter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setPurposeFilter(id);
                  if (id !== "all") setOpenPurpose(id);
                }}
                className={cn(
                  "inline-flex h-9 items-center rounded-md px-3 text-xs",
                  on ? "bg-primary text-primary-foreground" : "text-muted-foreground shadow-border hover:bg-accent hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {CENSUS_PURPOSE_IDS.map((id) => {
            const text = copy.purposes[id];
            const on = openPurpose === id;
            const n = CENSUS_SITES.filter((s) => s.purposes.includes(id)).length;
            return (
              <article key={id} className="rounded-xl bg-card shadow-border">
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpenPurpose(on ? "" : id)}
                  className="flex min-h-12 w-full items-center gap-3 px-4 py-2.5 text-left"
                >
                  <span className="flex-1">
                    <span className="block font-display text-lg leading-snug">{text.name}</span>
                    <span className="mt-1 block font-mono text-[10px] tracking-wider text-faint uppercase">
                      {interpolate(copy.purposeNamed, { n })}
                    </span>
                  </span>
                  <AttributionBadge level={CENSUS_PURPOSE_GRADE[id]} />
                </button>
                {on ? (
                  <div className="border-t border-border px-4 py-4">
                    <p className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">{copy.purposeCover}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{text.cover}</p>
                    <p className="mt-3 font-mono text-[10px] tracking-[0.14em] text-faint uppercase">{copy.purposeNetwork}</p>
                    <p className="mt-1 text-sm text-foreground/90">{text.network}</p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.floorsTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.floorsDek}</p>
        <div className="mt-6 flex flex-col gap-3">
          {CENSUS_FLOORS.map((floor) => {
            const n =
              floor.id === "transnational"
                ? transnational
                : floor.id === "recruitment"
                  ? CENSUS_DEFAULTS.recruitmentNodes
                  : floor.id === "kinetic"
                    ? kineticField
                    : hostile;
            const sub =
              floor.id === "recruitment"
                ? `${fmt(n)}`
                : floor.id === "transnational"
                  ? `${fmt(n)} · 40%`
                  : interpolate(t.fieldSites, { n: fmt(n) });
            const on = openFloor === floor.id;
            const text = copy.floors[floor.id];
            return (
              <article key={floor.id} className="rounded-xl bg-card shadow-border">
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpenFloor(on ? "" : floor.id)}
                  className="flex min-h-14 w-full items-center gap-3 px-4 py-3 text-left"
                >
                  <span className="flex-1">
                    <span className="block font-display text-lg leading-snug">{text.name}</span>
                    <span className="mt-1 block font-mono text-[10px] tracking-wider text-faint uppercase">
                      {sub}
                    </span>
                  </span>
                  <AttributionBadge level={floor.grade} />
                </button>
                {on ? (
                  <div className="border-t border-border px-4 py-4">
                    <p className="text-sm text-foreground/90">{text.reading}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{text.record}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">{t.dossier.counter} · </span>
                      {text.counter}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.sitesTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.sitesDek}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(["all", "parish", "transnational", "hostile", "recruitment", "kinetic"] as const).map((id) => {
            const label = id === "all" ? copy.siteFilterAll : copy.siteFilters[id];
            const on = siteFilter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSiteFilter(id)}
                className={cn(
                  "inline-flex h-11 items-center rounded-md px-3 text-xs",
                  on ? "bg-primary text-primary-foreground" : "text-muted-foreground shadow-border hover:bg-accent hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <ul className="mt-4 grid gap-3 lg:grid-cols-2">
          {named.map((s) => {
            const text = copy.sites[s.id];
            return (
              <li key={s.id} className="flex flex-col gap-2 rounded-xl bg-card p-4 shadow-border">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-faint">{s.year}</span>
                  <Badge tone="faint">{s.city}</Badge>
                  <Badge tone="faint">{copy.layers[s.layer].name}</Badge>
                  <AttributionBadge level={s.grade} />
                </div>
                <p className="font-display text-xl leading-snug">{text?.name ?? s.id}</p>
                <p className="font-mono text-[10px] tracking-wider text-faint uppercase">
                  {copy.siteFilters[s.floor]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.purposes.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setPurposeFilter(p);
                        setOpenPurpose(p);
                      }}
                      className="rounded-sm px-1.5 py-0.5 font-mono text-[10px] tracking-wide text-steel uppercase shadow-border hover:bg-accent"
                    >
                      {copy.purposes[p].name.split(" / ")[0]}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{text?.note}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.ethnicTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.ethnicDek}</p>
        <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-wider text-faint uppercase">
          {(Object.keys(copy.ethnicBlocs) as CensusEthnicBloc[]).map((b) => (
            <span key={b}>{copy.ethnicBlocs[b]}</span>
          ))}
          <span>{interpolate(copy.ethnicTotal, { n: CENSUS_ETHNIC_TOTAL })}</span>
        </div>
        <ul className="mt-4 flex flex-col gap-2">
          {CENSUS_ETHNIC_2017.map((e) => {
            const text = copy.ethnic[e.id];
            return (
              <li key={e.id} className="rounded-xl bg-card px-4 py-3 shadow-border">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm text-foreground">{text?.name ?? e.id}</p>
                  <p className="font-display text-xl">{e.n}</p>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      e.bloc === "sunni" ? "bg-steel" : e.bloc === "shia" ? "bg-info" : "bg-faint",
                    )}
                    style={{ width: `${(e.n / ethnicMax) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{text?.note}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.controlTitle}</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/90">{copy.control}</p>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.whyTitle}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {copy.why.map((w) => (
            <li key={w.slice(0, 40)} className="rounded-xl bg-card p-4 text-sm text-muted-foreground shadow-border">
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.methodTitle}</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
          {copy.method.map((m) => (
            <p key={m.slice(0, 40)}>{m}</p>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">{copy.syriaTitle}</h2>
          <Link to="/campaigns/$campaignId" params={{ campaignId: "syria-pipeline" }} className="text-sm text-steel hover:underline">
            {t.openDossier}
          </Link>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">{copy.syriaDek}</p>
        <ol className="mt-4 flex flex-col gap-3">
          {copy.syria.map((s) => (
            <li key={s.date} className="rounded-xl bg-card p-4 shadow-border">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-faint">{s.date}</span>
                <Badge tone="faint">{s.place}</Badge>
                <AttributionBadge level={s.grade} />
              </div>
              <p className="mt-2 text-sm text-foreground/90">{s.what}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.europeTitle}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.europeDek}</p>
        <ul className="mt-4 grid gap-px overflow-hidden rounded-xl bg-border shadow-border sm:grid-cols-2">
          {copy.europe.map((e) => (
            <li key={e.place} className="bg-card px-4 py-4">
              <p className="font-display text-xl">{e.n}</p>
              <p className="mt-1 text-sm text-foreground">{e.place}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl">{copy.anchorsTitle}</h2>
        <ol className="mt-4 flex flex-col gap-3">
          {copy.anchors.map((a) => (
            <li key={a.year + a.source} className="flex flex-col gap-1 rounded-xl bg-card p-4 shadow-border sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-mono text-xs text-faint">{a.year}</span>
              <span className="font-display text-2xl">{fmt(a.n)}</span>
              <span className="flex-1 text-sm text-muted-foreground">
                <span className="text-foreground">{a.source}. </span>
                {a.note}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="font-display text-2xl">{t.dossier.sources}</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {copy.sources.map((s) => (
            <li key={s.title} className="text-sm text-muted-foreground">
              <span className="text-foreground">{s.title}</span>
              <span> — {s.publisher}, {s.date}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            to="/campaigns/$campaignId"
            params={{ campaignId: "mosque-census" }}
            className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            {t.readDossier}
          </Link>
          <Link
            to="/campaigns/$campaignId"
            params={{ campaignId: "syria-pipeline" }}
            className="inline-flex h-11 items-center rounded-md px-4 text-sm text-foreground shadow-border"
          >
            {copy.syriaTitle}
          </Link>
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  label,
  hint,
  accent,
}: {
  value: string;
  label: string;
  hint: string;
  accent?: boolean;
}) {
  return (
    <article className={cn("bg-card px-4 py-5", accent && "bg-secondary")}>
      <p className="font-display text-3xl tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-foreground">{label}</p>
      <p className="mt-1 font-mono text-[10px] tracking-wide text-faint uppercase">{hint}</p>
    </article>
  );
}

function SliderRow({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-foreground">{label}</span>
        <span className="font-mono text-xs text-steel">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-11 w-full cursor-pointer accent-steel"
      />
    </label>
  );
}
