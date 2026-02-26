type HeroProps = {
  badge: string;
  title: string;
  description: string;
  includedTitle: string;
  bullets: string[];
  ctaLabels: {
    standard: string;
    rush: string;
    intake: string;
  };
  ctaLinks: {
    standard: string;
    rush: string;
    intake: string;
  };
};

export default function Hero({
  badge,
  title,
  description,
  includedTitle,
  bullets,
  ctaLabels,
  ctaLinks,
}: HeroProps) {
  return (
    <section className="panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      <div className="space-y-6">
        <p className="inline-flex w-fit items-center rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
          {badge}
        </p>
        <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)]">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="button-main" href={ctaLinks.standard}>
            {ctaLabels.standard}
          </a>
          <a className="button-ghost" href={ctaLinks.rush}>
            {ctaLabels.rush}
          </a>
          <a className="button-ghost" href={ctaLinks.intake}>
            {ctaLabels.intake}
          </a>
        </div>
      </div>
      <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 shadow-[var(--shadow-soft)] sm:p-7">
        <h2 className="text-lg font-semibold text-[var(--ink)]">{includedTitle}</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)] sm:text-base">
          {bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
