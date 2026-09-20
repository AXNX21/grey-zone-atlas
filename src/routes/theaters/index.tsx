import { createFileRoute } from "@tanstack/react-router";
import { EuropeMap } from "@/components/europe-map";
import { PageHeader } from "@/components/page-header";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/theaters/")({ component: TheatersPage });

function TheatersPage() {
  const t = useT();
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader kicker={t.kicker.geography} title={t.pages.theatersTitle} dek={t.pages.theatersDek} />
      <EuropeMap />
    </div>
  );
}
