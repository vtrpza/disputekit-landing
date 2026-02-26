type DeliverablesProps = {
  title: string;
  items: string[];
};

export default function Deliverables({ title, items }: DeliverablesProps) {
  return (
    <section className="panel p-7 sm:p-10">
      <h2 className="text-2xl font-semibold tracking-tight text-[var(--ink)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="rounded-xl border border-[var(--line)] bg-white/75 p-5">
            <p className="font-medium text-[var(--ink)]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
