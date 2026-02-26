type FinalCtaProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
};

export default function FinalCta({ title, description, ctaLabel, ctaLink }: FinalCtaProps) {
  return (
    <section className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6">
        <a className="button-main inline-flex" href={ctaLink}>
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
