import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ImageReveal from "../components/ImageReveal";
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

      <section className="overflow-hidden bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-light sm:text-sm">
                COSPOWERS Partnership
              </p>
              <p className="border-t border-line pt-6 text-lg leading-relaxed text-ink-soft lg:text-xl">
                Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
                global pioneer in data center energy storage systems, to establish cutting edge
                data center energy storage solutions throughout Asia. Through COSPOWERS, Konark
                provides a series of <strong className="text-ink">5min–60min+</strong> energy
                storage systems for the construction of "
                <strong className="text-ink">intelligent server room</strong>".
              </p>
            </div>
          </Reveal>
          <ImageReveal className="relative isolate px-3 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-10">
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-7 top-10 rotate-[-3deg] rounded-[2rem] rounded-tr-[5rem] bg-sun/15 sm:inset-x-10 sm:bottom-9 sm:top-12"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-1 bottom-1 top-7 rounded-[2rem] rounded-bl-[5rem] border border-forest/20 sm:inset-x-2 sm:bottom-2 sm:top-8"
            />
            <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-white/70 bg-forest shadow-[0_30px_70px_rgba(11,74,56,0.20)]">
              <img
                src="/assets/data-center-server-room.png"
                alt="Modern data center server room with energy storage equipment"
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                loading="lazy"
              />
            </div>
          </ImageReveal>
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
        imageShape
        compactTop
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
