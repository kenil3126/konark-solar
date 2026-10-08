import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ProductShowcase from "../components/ProductShowcase";
import ButtonRow from "../components/ButtonRow";
import CertBadges from "../components/CertBadges";

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

export default function PrismaticLithiumIon() {
  return (
    <>
      <Hero
        eyebrow="Battery Cells"
        title="Prismatic Lithium Ion Cell"
        tone="light"
        backgroundImage="/assets/hero-prismatic-lithium-ion-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark Energy has partnered with <strong className="text-ink">Cospowers</strong> to
              deliver advanced Prismatic Lithium Ion battery cell solutions for next-generation
              energy storage applications. Leveraging Cospowers' expertise in high-performance
              lithium battery technologies and Konark's commitment to reliable clean energy
              solutions, this partnership aims to provide safer, longer-lasting and highly
              efficient battery systems for residential, commercial, industrial and renewable
              energy storage projects. Prismatic LFP battery cells are widely recognized for their
              superior thermal stability, long cycle life, enhanced safety and high energy
              efficiency, making them ideal for modern solar and energy storage systems.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-5 lg:px-8 pb-6">
        <ProductShowcase
          slides={[
            {
              image: "/assets/prismatic-li-100ah-1.png",
              alt: "Prismatic Lithium Ion LFP Cell",
            },
            {
              image: "/assets/prismatic-li-100ah-2.png",
              alt: "Prismatic Lithium Ion LFP Cell",
            },
            {
              image: "/assets/prismatic-li-100ah-3.png",
              alt: "Prismatic Lithium Ion LFP Cell",
            },
          ]}
        />
      </div>

      <ButtonRow
        primaryLabel="Know More"
        primaryHref="https://en.cospowers.com/solution/cndx.html"
        secondaryLabel="Specification Sheet"
        secondaryHref="https://en.cospowers.com/web/upload/2026/04/13/17760648342943b6wsu.pdf"
        tertiaryLabel="Enquire Now"
        tertiaryTo="/contact"
      />

      <CertBadges items={certs} />
    </>
  );
}
