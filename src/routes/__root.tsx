import { createRootRoute, HeadContent, Outlet, retainSearchParams, Scripts } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeSync } from "@/components/theme-sync";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/auth/provider";
import { LocaleSync, parseLocale, uiFor, type Locale } from "@/lib/i18n";
import { HOUSE } from "@/lib/house";
import { THEME_BOOTSTRAP } from "@/lib/theme";
import { ATLAS_PUBLISHED_AT, ATLAS_VERSION } from "@/lib/version";
import appCss from "../styles.css?url";

type RootSearch = { lang?: Locale };

export const Route = createRootRoute({
  validateSearch: (search: Record<string, unknown>): RootSearch => {
    const lang = parseLocale(search.lang);
    return lang ? { lang } : {};
  },
  search: {
    middlewares: [retainSearchParams(["lang"])],
  },
  head: ({ match }) => {
    const lang = parseLocale((match.search as RootSearch).lang) ?? "en";
    const t = uiFor(lang);
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: t.appName },
        { name: "description", content: t.metaDescription },
        { name: "theme-color", content: "#0c0c0b" },
        { name: "version", content: ATLAS_VERSION },
        { name: "date", content: ATLAS_PUBLISHED_AT },
        { name: "author", content: `${HOUSE.name} (${HOUSE.slug})` },
        { name: "publisher", content: HOUSE.name },
        { httpEquiv: "Cache-Control", content: "no-store, no-cache, must-revalidate" },
      ],
      links: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "stylesheet", href: appCss },
        { rel: "manifest", href: "/__grok/manifest.webmanifest" },
        { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap",
        },
      ],
    };
  },
  component: RootDocument,
});

function RootDocument() {
  const { lang } = Route.useSearch();
  return (
    <html lang={lang ?? "en"} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <TooltipProvider delayDuration={200}>
            <ThemeSync />
            <LocaleSync />
            <AppShell>
              <Outlet />
            </AppShell>
          </TooltipProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
