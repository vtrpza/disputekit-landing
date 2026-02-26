type AudienceProps = {
  audienceTitle: string;
  audienceText: string;
  notForTitle: string;
  notForText: string;
};

export default function Audience({
  audienceTitle,
  audienceText,
  notForTitle,
  notForText,
}: AudienceProps) {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="panel p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
          {audienceTitle}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{audienceText}</p>
      </article>
      <article className="panel p-7 sm:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
          {notForTitle}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{notForText}</p>
      </article>
    </section>
  );
}
