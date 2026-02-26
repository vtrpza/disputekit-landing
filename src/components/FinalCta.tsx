type FinalCtaProps = {
  title: string;
  description: string;
  ctaLabels: {
    standard: string;
    rush: string;
    calendly: string;
  };
  ctaLinks: {
    standard: string;
    rush: string;
    calendly: string;
  };
};

export default function FinalCta({ title, description, ctaLabels, ctaLinks }: FinalCtaProps) {
  return (
    <section className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="button-main" href={ctaLinks.standard}>
          {ctaLabels.standard}
        </a>
        <a className="button-ghost" href={ctaLinks.rush}>
          {ctaLabels.rush}
        </a>
        <a className="button-ghost" href={ctaLinks.calendly}>
          {ctaLabels.calendly}
        </a>
      </div>
    </section>
  );
}
