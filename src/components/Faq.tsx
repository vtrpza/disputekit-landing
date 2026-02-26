import type { FaqItem } from "@/content/landing";

type FaqProps = {
  title: string;
  items: FaqItem[];
};

export default function Faq({ title, items }: FaqProps) {
  return (
    <section className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-[var(--line)] rounded-xl border border-[var(--line)] bg-white/80">
        {items.map((item) => (
          <article key={item.q} className="p-5 sm:p-6">
            <h3 className="text-base font-semibold text-[var(--ink)]">{item.q}</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)] sm:text-base">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
