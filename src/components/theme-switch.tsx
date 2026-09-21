import { SegmentedControl } from "@/components/segmented";
import { useT } from "@/lib/i18n";
import { THEMES, useThemeStore, type ThemeMode } from "@/lib/theme";

export function ThemeSwitch() {
  const t = useT();
  const mode = useThemeStore((s) => s.mode);
  const setMode = useThemeStore((s) => s.setMode);
  return (
    <SegmentedControl<ThemeMode>
      value={mode}
      onChange={setMode}
      ariaLabel={t.theme}
      items={THEMES.map((id) => ({
        id,
        label: t.themeShort[id],
        aria: t.themeLong[id],
      }))}
    />
  );
}
