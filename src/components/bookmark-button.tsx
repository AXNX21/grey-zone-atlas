import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookmarks } from "@/lib/atlas/bookmarks";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function BookmarkButton({ id }: { id: string }) {
  const ids = useBookmarks((s) => s.ids);
  const toggle = useBookmarks((s) => s.toggle);
  const t = useT();
  const on = ids.includes(id);
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-pressed={on}
      aria-label={on ? t.bookmarkRemove : t.bookmarkSave}
      onClick={() => toggle(id)}
    >
      <Bookmark className={cn("size-4", on && "fill-steel text-steel")} />
    </Button>
  );
}
