import { SegmentedControl } from "@/components/segmented";
import { LOCALES, useResolvedLocale, useSetLocale, useT, type Locale } from "@/lib/i18n";

export function LocaleSwitch() {
  const locale = useResolvedLocale();
  const t = useT();
  const setLocale = useSetLocale();
  return (
    <SegmentedControl<Locale>
      value={locale}
      onChange={setLocale}
      ariaLabel={t.language}
      items={LOCALES.map((item) => ({
        id: item.id,
        label: item.id,
        aria: item.native,
      }))}
    />
  );
}
