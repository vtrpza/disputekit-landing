import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "DisputeKit",
  description:
    "Stripe dispute packs for SaaS and digital products: narrative, evidence checklist, and organized attachments.",
  openGraph: {
    title: "DisputeKit",
    description:
      "Stripe dispute packs for SaaS and digital products: narrative, evidence checklist, and organized attachments.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DisputeKit",
    description:
      "Stripe dispute packs for SaaS and digital products: narrative, evidence checklist, and organized attachments.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
