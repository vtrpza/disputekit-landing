import Link from "next/link";
import { footerEmail } from "@/content/landing";

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <section className="panel p-7 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--ink)]">Privacy Policy</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          This is a placeholder privacy page for DisputeKit. We use uploaded materials only to
          prepare dispute response packs and delete uploads after 7 days by policy.
        </p>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          For questions, contact{" "}
          <a className="underline underline-offset-4" href={`mailto:${footerEmail}`}>
            {footerEmail}
          </a>
          .
        </p>
        <Link className="button-ghost mt-6 inline-flex" href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
