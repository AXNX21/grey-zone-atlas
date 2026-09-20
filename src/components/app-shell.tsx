import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  Compass,
  Fingerprint,
  Globe2,
  Landmark,
  Layers,
  Menu,
  Radar,
  Search,
  Shield,
  Users,
} from "lucide-react";
import { CommandPalette } from "@/components/command-palette";
import { EditionStamp } from "@/components/edition-stamp";
import { LocaleSwitch } from "@/components/locale-switch";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "briefing" as const, icon: Radar },
  { to: "/campaigns", key: "dossiers" as const, icon: Fingerprint },
  { to: "/census", key: "census" as const, icon: Landmark },
  { to: "/domains", key: "domains" as const, icon: Layers },
  { to: "/theaters", key: "theaters" as const, icon: Globe2 },
  { to: "/actors", key: "actors" as const, icon: Users },
  { to: "/timeline", key: "timeline" as const, icon: Compass },
  { to: "/doctrine", key: "doctrine" as const, icon: BookOpen },
  { to: "/method", key: "method" as const, icon: Shield },
] as const;

function pathActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

function Mark() {
  return (
    <span className="flex size-8 items-center justify-center rounded-md bg-secondary shadow-border" aria-hidden>
      <svg viewBox="0 0 24 24" className="size-4 text-steel">
        <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 12h7M14 12h7" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="1.6" className="fill-destructive stroke-none" />
      </svg>
    </span>
  );
}

function NavLinks({ onNavigate, compact }: { onNavigate?: () => void; compact?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useT();
  return (
    <nav className={cn("flex flex-col gap-0.5", compact && "px-2")}>
      {NAV.map((item) => {
        const Icon = item.icon;
        const active = pathActive(pathname, item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors",
              active
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" />
            {t.nav[item.key]}
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const t = useT();

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="atlas-grid min-h-dvh text-foreground">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {t.skipToContent}
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-[88rem] items-center gap-3 px-3 sm:px-5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={t.openMenu}
            onClick={() => setMenu(true)}
          >
            <Menu className="size-4" />
          </Button>
          <Link to="/" className="flex min-h-11 min-w-0 items-center gap-2.5">
            <Mark />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base tracking-tight">{t.appName}</span>
              <span className="hidden font-mono text-[10px] tracking-[0.16em] text-faint uppercase sm:block">
                {t.tagline} · <EditionStamp compact />
              </span>
              <span className="block font-mono text-[10px] tracking-[0.16em] text-faint uppercase sm:hidden">
                <EditionStamp compact />
              </span>
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-1.5">
            <LocaleSwitch />
            <Button
              type="button"
              variant="outline"
              className="hidden h-10 min-w-44 justify-between gap-6 px-3 text-muted-foreground sm:inline-flex"
              onClick={() => setSearch(true)}
            >
              <span className="flex items-center gap-2">
                <Search className="size-3.5" />
                {t.search}
              </span>
              <kbd className="font-mono text-[10px] text-faint">⌘K</kbd>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="sm:hidden"
              aria-label={t.searchAria}
              onClick={() => setSearch(true)}
            >
              <Search className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[88rem] gap-0 lg:gap-6">
        <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto py-5 lg:block">
          <NavLinks />
          <p className="mt-8 px-3 font-mono text-[10px] leading-relaxed tracking-wide text-faint uppercase">
            {t.sidebarNote}
          </p>
          <p className="mt-3 px-3 text-[10px] leading-relaxed">
            <EditionStamp className="text-[10px] normal-case tracking-wide" />
          </p>
        </aside>
        <main id="content" className="min-w-0 flex-1 px-3 pt-6 pb-24 sm:px-5 sm:pt-8 lg:pb-12">
          {children}
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm lg:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {NAV.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const active = pathActive(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] tracking-wide uppercase",
                    active ? "text-foreground" : "text-faint",
                  )}
                >
                  <Icon className="size-4" />
                  {t.nav[item.key]}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>{t.menuTitle}</SheetTitle>
          </SheetHeader>
          <NavLinks onNavigate={() => setMenu(false)} compact />
          <p className="mt-6 px-5 text-[10px] leading-relaxed">
            <EditionStamp className="text-[10px] normal-case tracking-wide" />
          </p>
        </SheetContent>
      </Sheet>
      <CommandPalette open={search} onOpenChange={setSearch} />
    </div>
  );
}
