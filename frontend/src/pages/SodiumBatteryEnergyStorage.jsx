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

export default function SodiumBatteryEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Sodium Battery Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-sodium-battery-energy-storage-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in sodium battery energy storage systems, to establish cutting edge
              sodium battery energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides a series of{" "}
              <strong className="text-ink">Power-Sodium, Smart Sodium and Industrial &amp; Commercial Sodium</strong>{" "}
              battery energy storage systems for flexible deployment and multiple scenarios.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Power-Sodium & Smart Sodium Storage Systems"
        copy="Next-generation sodium-ion energy storage systems offering a safer, more resource-abundant chemistry — deployed across Power-Sodium, Smart Sodium and Industrial & Commercial Sodium configurations for flexible, multi-scenario projects."
        stat="Na⁺"
        statLabel="Sodium-Ion Chemistry"
        tags={["Power-Sodium", "Smart Sodium", "Industrial & Commercial Sodium", "Flexible Deployment"]}
        images={[
          "/assets/sodium-battery-1.png",
          "/assets/sodium-battery-2.png",
          "/assets/sodium-battery-3.png",
        ]}
        imageAlt="Sodium Battery Energy Storage System"
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
