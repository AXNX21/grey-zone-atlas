import { createFileRoute, Link } from "@tanstack/react-router";
import { MosqueCensus } from "@/components/mosque-census";
import { PageHeader } from "@/components/page-header";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/census")({ component: CensusPage });

function CensusPage() {
  const t = useT();
  const { census } = useAtlas();
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        kicker={t.kicker.census}
        title={census.title}
        dek={census.dek}
        extra={
          <Link
            to="/campaigns/$campaignId"
            params={{ campaignId: "mosque-census" }}
            className="inline-flex h-11 items-center rounded-md px-4 text-sm text-steel shadow-border hover:bg-accent"
          >
            {t.readDossier}
          </Link>
        }
      />
      <MosqueCensus />
    </div>
  );
}
