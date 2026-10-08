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

export default function DataCenterEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Data Center Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-data-center-energy-storage-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in data center energy storage systems, to establish cutting edge
              data center energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides a series of <strong className="text-ink">5min–60min+</strong> energy
              storage systems for the construction of "
              <strong className="text-ink">intelligent server room</strong>".
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Outdoor Cabinet Energy Storage for Data Centers"
        copy="Weatherproof outdoor energy storage cabinets deployed alongside server racks — delivering flexible 5 minute to 60 minute+ backup runtimes to support the construction of resilient, intelligent server rooms."
        stat="5–60min+"
        statLabel="Backup Runtime"
        tags={["Intelligent Server Room", "Outdoor Cabinet", "Scalable Runtime", "Data Center"]}
        images={[
          "/assets/data-center-cabinet-1.png",
          "/assets/data-center-cabinet-2.png",
          "/assets/data-center-cabinet-3.png",
        ]}
        imageAlt="Data Center Energy Storage Cabinet"
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/97.html"
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
