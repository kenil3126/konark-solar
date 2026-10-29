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

export default function HouseholdEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Household Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-household-energy-storage-bg.png"
      />

      <section className="overflow-hidden bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-light sm:text-sm">
                COSPOWERS Partnership
              </p>
              <h2 className="mb-5 font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
                Reliable Energy Storage for Modern Homes
              </h2>
              <p className="border-t border-line pt-6 text-lg leading-relaxed text-ink-soft lg:text-xl">
                Through its collaboration with{" "}
                <strong className="text-ink">COSPOWERS</strong>, a global specialist in
                residential energy storage, Konark delivers advanced home energy solutions
                designed to meet a variety of household power needs across North America. The
                product range features residential energy storage systems ranging from{" "}
                <strong className="text-ink">5 kW to 30 kW</strong>, giving homeowners flexible
                options for managing energy use.
              </p>
            </div>
          </Reveal>
          <ImageReveal className="relative">
            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_24px_60px_rgba(11,61,49,0.16)]">
              <img
                src="/assets/household-partnership-image.png"
                alt="Solar-powered home with household energy storage at sunset"
                className="aspect-[16/9] w-full object-contain transition-transform duration-700 hover:scale-[1.015]"
                loading="lazy"
              />
            </div>
          </ImageReveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Stackable Home Energy Storage Systems"
        copy="Sleek, stackable residential energy storage units designed to blend into any home — pairing with rooftop solar to deliver backup power, self-consumption and energy independence for homeowners."
        stat="5–30kW"
        statLabel="Residential Range"
        images={[
          "/assets/household-storage-1.png",
          "/assets/household-storage-2.png",
          "/assets/household-storage-3.png",
          "/assets/household-storage-4.png",
          "/assets/household-storage-5.png",
        ]}
        imageAlt="Household Energy Storage System"
        imageShape
        compactTop
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/98.html"
        secondaryLabel="Download Brochure"
        secondaryHref="https://en.cospowers.com/"
        tertiaryLabel="Inquire Now"
        tertiaryTo="/contact"
      />

      <CertBadges items={certs} />

      <CTABanner title="Partner with us to power a sustainable future." />
    </>
  );
}
