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

export default function SodiumBatteryEnergyStorage() {
  return (
    <>
      <Hero
        eyebrow="Energy Storage"
        title="Sodium Battery Energy Storage"
        tone="light"
        backgroundImage="/assets/hero-sodium-battery-energy-storage-bg.png"
      />

      <section className="overflow-hidden bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-light sm:text-sm">
                COSPOWERS Partnership
              </p>
              <p className="border-t border-line pt-6 text-lg leading-relaxed text-ink-soft lg:text-xl">
                Konark expands its energy storage portfolio through its partnership with{" "}
                <strong className="text-ink">COSPOWERS</strong>, a global innovator in sodium
                battery technology. Serving the North American market, the collaboration brings
                together a versatile range of sodium-based storage solutions, including{" "}
                <strong className="text-ink">
                  Power-Sodium, Smart Sodium, and Industrial &amp; Commercial Sodium
                </strong>{" "}
                systems. Designed to accommodate diverse operating requirements, these
                technologies offer flexible deployment options across a wide variety of
                applications.
              </p>
            </div>
          </Reveal>
          <ImageReveal className="relative">
            <div className="overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_24px_60px_rgba(11,61,49,0.16)]">
              <img
                src="/assets/sodium-partnership-image.png"
                alt="Konark solar and energy storage solutions across residential, commercial, and industrial applications"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-[1.015]"
                loading="lazy"
              />
            </div>
          </ImageReveal>
        </div>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Power-Sodium & Smart Sodium Storage Systems"
        copy="Next-generation sodium-ion energy storage systems offering a safer, more resource-abundant chemistry — deployed across Power-Sodium, Smart Sodium and Industrial & Commercial Sodium configurations for flexible, multi-scenario projects."
        stat="Na⁺"
        statLabel="Sodium-Ion Chemistry"
        images={[
          "/assets/sodium-battery-1.png",
          "/assets/sodium-battery-2.png",
          "/assets/sodium-battery-3.png",
        ]}
        imageAlt="Sodium Battery Energy Storage System"
        imageShape
        compactTop
      />

      <ButtonRow
        primaryLabel="View All Products"
        primaryHref="https://en.cospowers.com/products/cate/97.html"
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
