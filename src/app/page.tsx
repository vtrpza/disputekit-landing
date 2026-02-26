import Audience from "@/components/Audience";
import Benefits from "@/components/Benefits";
import Deliverables from "@/components/Deliverables";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Turnaround from "@/components/Turnaround";
import {
  audience,
  benefits,
  deliverables,
  faq,
  finalCta,
  footerEmail,
  hero,
  heroBullets,
  sectionTitles,
  turnaround,
} from "@/content/landing";

export default function Home() {
  const intakeLink = process.env.NEXT_PUBLIC_CALENDLY_LINK ?? "#";

  return (
    <div className="relative overflow-hidden pb-14">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pt-10 sm:px-10 sm:pt-14 lg:px-16">
        <Hero
          badge={hero.badge}
          title={hero.title}
          description={hero.description}
          includedTitle={sectionTitles.included}
          bullets={heroBullets}
          ctaLabel={hero.ctaLabel}
          ctaLink={intakeLink}
          ctaHelper={hero.ctaHelper}
        />
        <Benefits items={benefits} />
        <Deliverables title={sectionTitles.deliverables} items={deliverables} />
        <Audience
          audienceTitle={sectionTitles.audience}
          audienceText={audience.whoItsFor}
          notForTitle={sectionTitles.notFor}
          notForText={audience.notFor}
        />
        <Turnaround
          title={sectionTitles.turnaround}
          standard={turnaround.standard}
          rush={turnaround.rush}
          ctaLabel="Request a pack"
          ctaLink={intakeLink}
        />
        <Faq title={sectionTitles.faq} items={faq} />
        <FinalCta
          title={sectionTitles.finalCta}
          description={finalCta.description}
          ctaLabel={finalCta.ctaLabel}
          ctaLink={intakeLink}
        />
        <Footer email={footerEmail} />
      </main>
    </div>
  );
}
