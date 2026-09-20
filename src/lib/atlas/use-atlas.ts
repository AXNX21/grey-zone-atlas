import { useResolvedLocale } from "@/lib/i18n";
import { atlasFor } from "./catalog";

export function useAtlas() {
  return atlasFor(useResolvedLocale());
}
