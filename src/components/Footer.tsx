import Link from "next/link";

type FooterProps = {
  email: string;
};

export default function Footer({ email }: FooterProps) {
  return (
    <footer className="flex flex-col gap-3 border-t border-[var(--line)] py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
      <p>
        Email:{" "}
        <a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <div className="flex gap-5">
        <Link className="underline-offset-4 hover:underline" href="/privacy">
          Privacy
        </Link>
        <Link className="underline-offset-4 hover:underline" href="/terms">
          Terms
        </Link>
      </div>
    </footer>
  );
}
