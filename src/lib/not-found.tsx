import { Link } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";

export function AppNotFound() {
  const t = useT();
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{t.notFound.kicker}</p>
      <h1 className="mt-3 font-display text-3xl">{t.notFound.title}</h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">{t.notFound.body}</p>
      <Link
        to="/"
        className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
      >
        {t.notFound.back}
      </Link>
    </main>
  );
}
