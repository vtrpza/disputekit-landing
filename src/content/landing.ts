export type Benefit = {
  title: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export const pricing = {
  standard: {
    name: "Standard",
    price: "$79",
    turnaround: "Delivered in 24h (business days)",
  },
  rush: {
    name: "Rush",
    price: "$149",
    turnaround: "Delivered in 6-12h (business days)",
  },
} as const;

export const sectionTitles = {
  included: "Included in every pack",
  deliverables: "What you get",
  audience: "Who it's for",
  notFor: "Not for",
  pricing: "Pricing",
  faq: "FAQ",
  finalCta: "Ready to submit a stronger response?",
} as const;

export const heroBullets = [
  "Reason-based checklist (fraud / subscription / service dispute)",
  "Paste-ready cover letter (clear, concise, no fluff)",
  "Evidence ZIP + attachment index",
  "Optional: we stage evidence in Stripe as a draft (submit=false)",
];

export const benefits: Benefit[] = [
  {
    title: "Built for Stripe workflows",
    text: "Structured around how Stripe evidence is reviewed so your response is easy to audit quickly.",
  },
  {
    title: "Fast turnaround",
    text: "Get a complete pack in 24h (business days), or pick rush for 6-12h (business days).",
  },
  {
    title: "Clear and complete",
    text: "No legal theater. Just organized narrative, timeline, and attachments you can submit with confidence.",
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
    a: "No. We optimize for clarity, completeness, and speed.",
  },
  {
    q: "What do you need from me?",
    a: "Dispute ID, due date, policy links, and any relevant customer communications or logs.",
  },
  {
    q: "How do you handle privacy?",
    a: "Uploads are deleted after 7 days under our standard policy.",
  },
  {
    q: "Can you submit on my behalf?",
    a: "We can optionally stage your evidence in Stripe as a draft. Final submission stays with you.",
  },
];

export const hero = {
  badge: "DisputeKit",
  title: "Stripe dispute pack for SaaS & digital products.",
  description:
    "A Stripe-ready response in 24h (business days): narrative + evidence checklist + organized attachments.",
  ctaLabels: {
    standard: `Get Standard - ${pricing.standard.price}`,
    rush: `Get Rush - ${pricing.rush.price}`,
    calendly: "Book a quick call",
  },
} as const;

export const audience = {
  whoItsFor: "SaaS, subscriptions, digital downloads, online services.",
  notFor: "Physical shipping / proof-of-delivery heavy disputes.",
} as const;

export const finalCta = {
  description:
    "We turn your case details into a clean, Stripe-ready pack fast, so you can focus on running the business.",
  ctaLabels: {
    standard: `Start Standard - ${pricing.standard.price}`,
    rush: `Start Rush - ${pricing.rush.price}`,
    calendly: "Talk through a case",
  },
} as const;

export const footerEmail = "hello@disputekit.com";
