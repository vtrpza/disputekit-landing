import type { Benefit } from "@/content/landing";

type BenefitsProps = {
  items: Benefit[];
};

export default function Benefits({ items }: BenefitsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      {items.map((benefit) => (
        <article
          key={benefit.title}
          className="panel p-6 shadow-[var(--shadow-soft)] sm:p-7"
        >
          <h2 className="text-lg font-semibold text-[var(--ink)]">{benefit.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {benefit.text}
          </p>
        </article>
      ))}
    </section>
  );
}
