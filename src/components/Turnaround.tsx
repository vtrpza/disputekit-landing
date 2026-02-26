import type { TurnaroundTier } from "@/content/landing";

type TurnaroundProps = {
  title: string;
  standard: TurnaroundTier;
  rush: TurnaroundTier;
  ctaLabel: string;
  ctaLink: string;
};

export default function Turnaround({ title, standard, rush, ctaLabel, ctaLink }: TurnaroundProps) {
  return (
    <section id="turnaround" className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{standard.name}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{standard.turnaround}</p>
          <a className="button-main mt-5 inline-flex" href={ctaLink}>
            {ctaLabel}
          </a>
        </article>
        <article className="rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{rush.name}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{rush.turnaround}</p>
          <a className="button-main mt-5 inline-flex" href={ctaLink}>
            {ctaLabel}
          </a>
        </article>
      </div>
    </section>
  );
}
