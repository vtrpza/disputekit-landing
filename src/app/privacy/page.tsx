import Link from "next/link";
import { footerEmail } from "@/content/landing";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <section className="panel p-7 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Privacy Policy</h1>
        <p className="mt-4 text-sm font-medium text-[var(--muted)]">Last updated: 2026-02-26</p>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          DisputeKit is for SaaS and digital product disputes. This policy explains how we handle
          information you share with us when preparing a dispute response pack.
        </p>

        <div className="mt-8 space-y-6 text-base leading-7 text-[var(--muted)]">
          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">1. What data we collect</h2>
            <p className="mt-2">
              We collect case details you provide, including dispute IDs, order records, customer
              communications, and supporting files.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">2. How we use data</h2>
            <p className="mt-2">
              We use your data only to evaluate feasibility, prepare your response pack, and
              communicate about service status.
            </p>
            <p className="mt-2">
              We do not sell your data or use it for unrelated marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">3. Retention</h2>
            <p className="mt-2">
              Uploaded materials and working files are retained for up to 7 days, then deleted in
              the normal course of operations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">4. Deletion requests</h2>
            <p className="mt-2">
              You can request deletion earlier by emailing{" "}
              <a className="underline underline-offset-4" href={`mailto:${footerEmail}`}>
                {footerEmail}
              </a>
              . We will process reasonable requests as soon as practicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--ink)]">5. Contact</h2>
            <p className="mt-2">
              For privacy questions, contact{" "}
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
