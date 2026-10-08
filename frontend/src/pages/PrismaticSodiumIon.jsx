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

export default function PrismaticSodiumIon() {
  return (
    <>
      <Hero
        eyebrow="Battery Cells"
        title="Prismatic Sodium Ion Cell"
        tone="light"
        backgroundImage="/assets/hero-prismatic-sodium-ion-bg.png"
      />

      <section className="py-16 lg:py-20 bg-paper">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Konark Energy has partnered with <strong className="text-ink">Cospowers</strong> to
              introduce advanced Prismatic Sodium-Ion Battery Cell technology for next-generation
              energy storage applications. This collaboration combines Konark's vision for
              sustainable and affordable energy solutions with Cospowers' global expertise in
              advanced battery innovation and smart lithium-energy systems. Prismatic Sodium-Ion
              cells offer several advantages including enhanced safety, stable thermal
              performance, improved low-temperature operation, long lifecycle and reduced
              dependence on scarce raw materials such as lithium and cobalt. These next-generation
              battery cells are ideal for renewable energy storage, solar power systems,
              industrial backup, telecom infrastructure and large-scale energy storage projects,
              supporting a cleaner, more cost-effective and environmentally sustainable energy
              future.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-5 lg:px-8 pb-6">
        <ProductShowcase
          slides={[
            {
              image: "/assets/prismatic-na-85ah-1.png",
              alt: "Prismatic Sodium Ion Na+ Cell",
            },
            {
              image: "/assets/prismatic-na-85ah-2.png",
              alt: "Prismatic Sodium Ion Na+ Cell",
            },
            {
              image: "/assets/prismatic-na-85ah-3.png",
              alt: "Prismatic Sodium Ion Na+ Cell",
            },
          ]}
        />
      </div>

      <ButtonRow
        primaryLabel="Know More"
        primaryHref="https://en.cospowers.com/solution/cndx/223.html"
        secondaryLabel="Specification Sheet"
        secondaryHref="https://en.cospowers.com/web/upload/2026/04/13/17760648342943b6wsu.pdf"
        tertiaryLabel="Enquire Now"
        tertiaryTo="/contact"
      />

      <CertBadges items={certs} />
    </>
  );
}
