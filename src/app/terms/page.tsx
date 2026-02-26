import Link from "next/link";
import { footerEmail } from "@/content/landing";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <section className="panel p-7 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Terms of Service</h1>
        <p className="mt-4 text-sm font-medium text-[var(--muted)]">Last updated: 2026-02-26</p>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          These terms apply to the DisputeKit service used to prepare dispute response packs.
        </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-[var(--muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">1. Scope</h2>
            <p className="mt-2">
              DisputeKit supports SaaS and digital product disputes. The service is not intended
              for physical shipping or proof-of-delivery-heavy disputes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">2. No guarantees</h2>
            <p className="mt-2">
              We do not guarantee dispute outcomes, reversals, or response acceptance by Stripe or
              card networks.
            </p>
            <p className="mt-2">
              Our service focuses on clarity, completeness, and turnaround of prepared materials.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">3. Customer responsibility</h2>
            <p className="mt-2">
              You are responsible for the accuracy of case facts, rights to uploaded materials, and
              compliance with applicable laws and platform rules.
            </p>
            <p className="mt-2">
              You remain responsible for final review and final submission of any dispute response.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">4. Contact</h2>
            <p className="mt-2">
              For terms questions, contact{" "}
              <a className="underline underline-offset-4" href={`mailto:${footerEmail}`}>
                {footerEmail}
              </a>
              .
            </p>
          </section>
        </div>

        <Link className="button-ghost mt-6 inline-flex" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
