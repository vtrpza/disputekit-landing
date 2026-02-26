export type Benefit = {
  title: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type TurnaroundTier = {
  name: string;
  turnaround: string;
};

export const turnaround = {
  standard: {
    name: "Standard",
    turnaround: "24h (business days)",
  },
  rush: {
    name: "Rush",
    turnaround: "Same day (subject to feasibility + deadline)",
  },
} as const;

export const sectionTitles = {
  included: "Included in every pack",
  deliverables: "What you get",
  audience: "Who it's for",
  notFor: "Not for",
  turnaround: "Turnaround",
  faq: "FAQ",
  finalCta: "Ready to submit a stronger response?",
} as const;

export const heroBullets = [
  "Reason-based checklist (fraud / subscription / service dispute)",
  "Paste-ready cover letter (clean, concise, no fluff)",
  "Evidence ZIP + attachment index (nothing gets missed)",
  "Optional: we can stage evidence in Stripe as a draft (submit=false)",
];

export const benefits: Benefit[] = [
  {
    title: "Built for Stripe review flow",
    text: "Structured around how Stripe evidence is evaluated, so every claim is easy to follow.",
  },
  {
    title: "Submission-ready output",
    text: "A complete response pack you can review quickly and submit without cleanup.",
  },
  {
    title: "Clear, complete, and focused",
    text: "No filler. Just a tight narrative, reason-specific checklist, and organized evidence set.",
  },
];

export const deliverables = [
  "Cover letter (paste into Stripe)",
  "Timeline of events",
  "Evidence checklist tailored to the dispute reason",
  "Evidence ZIP + attachment index",
];

export const faq: FaqItem[] = [
  {
    q: "Do you guarantee wins?",
    a: "No guarantees. We optimize for clarity, completeness, and speed.",
  },
  {
    q: "What do you need from me?",
    a: "Dispute ID, due date, policy links, and relevant customer communications/logs.",
  },
  {
    q: "How do you handle privacy?",
    a: "We delete uploads after 7 days under our standard privacy policy.",
  },
  {
    q: "Can you submit on my behalf?",
    a: "We can stage evidence in Stripe as a draft, but final submission stays with the customer.",
  },
];

export const hero = {
  badge: "DisputeKit",
  title: "Stripe dispute response pack for SaaS & digital products.",
  description:
    "A submission-ready pack in 24h (business days): clear narrative + evidence checklist + organized attachments.",
  ctaLabel: "Request a pack",
  ctaHelper: "No guarantees — we optimize for clarity, completeness, and speed.",
} as const;

export const audience = {
  whoItsFor: "SaaS, subscriptions, digital downloads, online services.",
  notFor: "Physical shipping / proof-of-delivery heavy disputes.",
} as const;

export const finalCta = {
  description:
    "We turn your case details into a clean, Stripe-ready pack fast, so you can focus on running the business.",
  ctaLabel: "Request a pack",
} as const;

export const footerEmail = "vhnpouza@gmail.com";
