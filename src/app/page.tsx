import Audience from "@/components/Audience";
import Benefits from "@/components/Benefits";
import Deliverables from "@/components/Deliverables";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import {
  audience,
  benefits,
  deliverables,
  faq,
  finalCta,
  footerEmail,
  hero,
  heroBullets,
  pricing,
  sectionTitles,
} from "@/content/landing";

export default function Home() {
  const ctaLinks = {
    standard: process.env.NEXT_PUBLIC_STRIPE_STANDARD_LINK ?? "#",
    rush: process.env.NEXT_PUBLIC_STRIPE_RUSH_LINK ?? "#",
    intake: process.env.NEXT_PUBLIC_CALENDLY_LINK ?? "#",
  };
  const showPaymentNotice = ctaLinks.standard === "#" && ctaLinks.rush === "#";

  return (
    <div className="relative overflow-hidden pb-14">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-10 sm:px-10 sm:pt-14 lg:px-16">
        <Hero
          badge={hero.badge}
          title={hero.title}
          description={hero.description}
          includedTitle={sectionTitles.included}
          bullets={heroBullets}
          ctaLabels={hero.ctaLabels}
          ctaLinks={ctaLinks}
        />
        <Benefits items={benefits} />
        <Deliverables title={sectionTitles.deliverables} items={deliverables} />
        <Audience
          audienceTitle={sectionTitles.audience}
          audienceText={audience.whoItsFor}
          notForTitle={sectionTitles.notFor}
          notForText={audience.notFor}
        />
        <Pricing
          title={sectionTitles.pricing}
          standard={pricing.standard}
          rush={pricing.rush}
          showPaymentNotice={showPaymentNotice}
          ctaLinks={{ standard: ctaLinks.standard, rush: ctaLinks.rush }}
        />
        <Faq title={sectionTitles.faq} items={faq} />
        <FinalCta
          title={sectionTitles.finalCta}
          description={finalCta.description}
          ctaLabels={finalCta.ctaLabels}
          ctaLinks={ctaLinks}
        />
        <Footer email={footerEmail} />
      </main>
    </div>
  );
}
