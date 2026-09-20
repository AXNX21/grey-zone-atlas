import { useEffect, useMemo, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useAtlas } from "@/lib/atlas";
import { useResolvedLocale, useT } from "@/lib/i18n";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const t = useT();
  const locale = useResolvedLocale();
  const { searchAtlas } = useAtlas();
  const [q, setQ] = useState("");
  const hits = useMemo(() => searchAtlas(q, 18), [q, searchAtlas]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-lg">
        <DialogTitle className="sr-only">{t.searchTitle}</DialogTitle>
        <DialogDescription className="sr-only">{t.searchHint}</DialogDescription>
        <Command shouldFilter={false} className="bg-transparent">
          <div className="flex items-center gap-2 border-b border-border px-3">
            <Search className="size-4 text-faint" />
            <Command.Input
              value={q}
              onValueChange={setQ}
              placeholder={t.searchPlaceholder}
              className="h-12 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-faint"
            />
          </div>
          <Command.List className="max-h-[min(24rem,70vh)] overflow-y-auto p-1">
            {hits.length === 0 ? (
              <div className="px-3 py-8 text-center text-sm text-muted-foreground">{t.searchEmpty}</div>
            ) : (
              hits.map((hit) => (
                <Command.Item
                  key={hit.kind + hit.id}
                  value={hit.kind + hit.id}
                  onSelect={() => {
                    onOpenChange(false);
                    const sep = hit.href.includes("?") ? "&" : "?";
                    router.history.push(`${hit.href}${sep}lang=${locale}`);
                  }}
                  className="flex cursor-pointer flex-col gap-0.5 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-accent"
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                    {t.kind[hit.kind]}
                  </span>
                  <span className="text-foreground">{hit.title}</span>
                  <span className="line-clamp-1 text-xs text-muted-foreground">{hit.dek}</span>
                </Command.Item>
              ))
            )}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
