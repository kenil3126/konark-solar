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

export default function ElectricEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Electric Energy Storage Products"
        tone="light"
        backgroundImage="/assets/hero-electric-energy-storage-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in battery energy storage systems, to establish cutting edge
              electric energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides energy storage core equipments such as{" "}
              <strong className="text-ink">energy storage batteries, PCS, BMS, EMS</strong> as
              well as{" "}
              <strong className="text-ink">
                power energy storage system integration solutions, industrial and commercial
                energy storage system integration solutions
              </strong>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Containerized Energy Storage Systems"
        copy="Utility-grade energy storage containers engineered for high round-trip efficiency, long cycle life and safe operation — built to promote ecological conservation and share clean energy across Asia's grids."
        stat="5.015 MWh"
        statLabel="Container Capacity"
        tags={["Energy Storage Batteries", "PCS", "BMS", "EMS", "System Integration"]}
        images={[
          "/assets/container-ess-1.png",
          "/assets/container-ess-2.png",
          "/assets/container-ess-3.png",
        ]}
        imageAlt="Electric Energy Storage Container"
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/95.html"
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
