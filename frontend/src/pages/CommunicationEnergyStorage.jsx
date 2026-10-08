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

export default function CommunicationEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Communication Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-communication-energy-storage-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in communication energy storage systems, to establish cutting edge
              communication energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides a full range of safe and efficient{" "}
              <strong className="text-ink">48V</strong> energy storage systems for "
              <strong className="text-ink">green base stations</strong>" in the digital era.
            </p>
          </Reveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Rack-Mount 48V Communication Energy Storage"
        copy="Compact rack-mount energy storage units engineered for telecom base stations and data racks — delivering safe, efficient 48V backup power to keep green base stations running through grid outages."
        stat="48V"
        statLabel="System Voltage"
        tags={["48V Systems", "Green Base Stations", "Rack-Mount", "Telecom Backup"]}
        images={[
          "/assets/comm-energy-storage-rack-1.png",
          "/assets/comm-energy-storage-rack-2.png",
          "/assets/comm-energy-storage-rack-3.png",
          "/assets/comm-energy-storage-rack-4.png",
        ]}
        imageAlt="Communication Energy Storage Rack Unit"
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/96.html"
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
