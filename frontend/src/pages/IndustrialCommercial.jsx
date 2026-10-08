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

export default function IndustrialCommercial() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Industrial & Commercial Products"
        tone="light"
        backgroundImage="/assets/hero-industrial-commercial-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in industrial and commercial energy storage systems, to establish
              cutting edge industrial and commercial energy storage solutions throughout Asia.
              Through COSPOWERS, Konark provides{" "}
              <strong className="text-ink">all-scenario products</strong> and{" "}
              <strong className="text-ink">one-stop solutions</strong> for diversified Commercial
              and Industrial Energy Storage applications.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Commercial & Industrial Energy Storage Cabinets"
        copy="Compact, weatherproof storage cabinets engineered for on-site deployment at commercial and industrial facilities — enabling peak shaving, demand charge reduction and backup power with a small footprint."
        stat="250KW / 446KWh"
        statLabel="Power / Capacity"
        tags={["All-Scenario Products", "One-Stop Solutions", "Commercial", "Industrial"]}
        images={[
          "/assets/industrial-commercial-cabinet-1.png",
          "/assets/industrial-commercial-cabinet-2.png",
          "/assets/industrial-commercial-cabinet-3.png",
          "/assets/industrial-commercial-cabinet-4.png",
        ]}
        imageAlt="Industrial & Commercial Energy Storage Cabinet"
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/112.html"
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
