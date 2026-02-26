import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <section className="panel p-7 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Terms of Service</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          This is a placeholder terms page for DisputeKit. The service is designed for SaaS and
          digital product Stripe disputes and is not intended for physical shipping or
          proof-of-delivery heavy disputes.
        </p>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          DisputeKit does not guarantee outcomes. The service focuses on speed, clarity, and
          completeness of your submission package.
        </p>
        <Link className="button-ghost mt-6 inline-flex" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
