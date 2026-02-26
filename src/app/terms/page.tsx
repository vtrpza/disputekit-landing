import Link from "next/link";
import { footerEmail } from "@/content/landing";

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <section className="panel p-7 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Terms of Service</h1>
        <div className="mt-4 inline-flex items-center rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
          Draft
        </div>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          These draft terms are a placeholder for DisputeKit and should be reviewed before
          production use.
        </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-[var(--muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">1. Service description</h2>
            <p className="mt-2">
              DisputeKit provides help preparing Stripe dispute response packs for SaaS and digital
              product businesses. It is not intended for physical shipping or proof-of-delivery
              heavy disputes.
            </p>
            <p className="mt-2">TODO: Add complete scope and eligibility details.</p>
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
              You are responsible for accuracy of submitted facts, ownership of uploaded materials,
              and final review/submission decisions.
            </p>
            <p className="mt-2">TODO: Add prohibited content and misuse terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">4. Payment</h2>
            <p className="mt-2">
              Pricing and payment terms are coming soon and will be provided before any paid work
              starts.
            </p>
            <p className="mt-2">TODO: Add billing terms, taxes, and refund handling.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">5. Limitation of liability</h2>
            <p className="mt-2">
              To the extent permitted by law, DisputeKit is not liable for indirect, incidental, or
              consequential losses related to use of this service.
            </p>
            <p className="mt-2">TODO: Finalize limitation language with legal review.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">6. Contact</h2>
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
