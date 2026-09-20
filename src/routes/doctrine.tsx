import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/doctrine")({ component: DoctrinePage });

function DoctrinePage() {
  const t = useT();
  const { doctrine } = useAtlas();
  return (
    <article className="mx-auto max-w-3xl">
      <PageHeader kicker={t.kicker.frame} title={t.pages.doctrineTitle} dek={doctrine.lede} />
      <div className="flex flex-col gap-10">
        {doctrine.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2 className="font-display text-2xl">{s.title}</h2>
            <div className="mt-4 flex flex-col gap-4 text-foreground/90">
              {s.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm text-muted-foreground">
        {t.pages.doctrineMethodLead}{" "}
        <Link to="/method" className="text-steel underline-offset-4 hover:underline">
          {t.pages.doctrineMethodLink}
        </Link>{" "}
        {t.pages.doctrineMethodTail}
      </p>
    </article>
  );
}
