import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ProductSpecCard from "../components/ProductSpecCard";
import ButtonRow from "../components/ButtonRow";
import CertBadges from "../components/CertBadges";
import CTABanner from "../components/CTABanner";

const certs = [
  "IEC",
  "IATA",
  "ISO 17025",
  "CE",
  "GB/T",
  "TÜV",
  "KC",
  "UN38.3",
  "PSE",
  "RoHS",
  "cULus",
  "UL",
];

export default function HouseholdEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Household Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-household-energy-storage-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in household energy storage systems, to establish cutting edge
              household energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides products for Residential Energy Storage applications from{" "}
              <strong className="text-ink">5kW–30kW</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Stackable Home Energy Storage Systems"
        copy="Sleek, stackable residential storage units designed to blend into any home — pairing with rooftop solar to deliver backup power, self-consumption and energy independence for homeowners."
        stat="5–30kW"
        statLabel="Residential Range"
        tags={["Residential Storage", "Stackable Modules", "Solar-Ready", "5kW–30kW"]}
        images={[
          "/assets/household-storage-1.png",
          "/assets/household-storage-2.png",
          "/assets/household-storage-3.png",
          "/assets/household-storage-4.png",
          "/assets/household-storage-5.png",
        ]}
        imageAlt="Household Energy Storage System"
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/98.html"
        secondaryLabel="Download Brochure"
        secondaryHref="https://en.cospowers.com/"
        tertiaryLabel="Enquire Now"
        tertiaryTo="/contact"
      />

      <CertBadges items={certs} />

      <CTABanner title="Partner with us to power a sustainable future." />
    </>
  );
}
