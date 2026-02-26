type PricingTier = {
  name: string;
  price: string;
  turnaround: string;
};

type PricingProps = {
  title: string;
  standard: PricingTier;
  rush: PricingTier;
  ctaLinks: {
    standard: string;
    rush: string;
  };
};

export default function Pricing({ title, standard, rush, ctaLinks }: PricingProps) {
  return (
    <section id="pricing" className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{standard.name}</h3>
          <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">{standard.price}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{standard.turnaround}</p>
          <a className="button-main mt-5 inline-flex" href={ctaLinks.standard}>
            Choose Standard
          </a>
        </article>
        <article className="rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <h3 className="text-lg font-semibold text-[var(--ink)]">{rush.name}</h3>
          <p className="mt-2 text-3xl font-semibold text-[var(--ink)]">{rush.price}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">{rush.turnaround}</p>
          <a className="button-main mt-5 inline-flex" href={ctaLinks.rush}>
            Choose Rush
          </a>
        </article>
      </div>
    </section>
  );
}
