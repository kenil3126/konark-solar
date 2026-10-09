import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ProductSpecCard from "../components/ProductSpecCard";
import ButtonRow from "../components/ButtonRow";
import CertBadges from "../components/CertBadges";
import CTABanner from "../components/CTABanner";
import { BatteryCharging, Boxes, Factory, Globe2, Settings2 } from "lucide-react";

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

const solutionHighlights = [
  { label: "Industrial &\nCommercial Use", icon: Factory },
  { label: "All-Scenario\nProducts", icon: Boxes },
  { label: "One-Stop\nSolutions", icon: Settings2 },
  { label: "Across\nAsia", icon: Globe2 },
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

      <section className="relative overflow-hidden bg-paper pb-10 pt-16 lg:pb-14 lg:pt-24">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8 xl:px-10">
          <Reveal className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper-dim px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              <BatteryCharging size={16} aria-hidden="true" />
              COSPOWERS Industrial Solutions
            </div>
            <h2 className="mb-6 max-w-xl font-display text-[2rem] font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-[2.35rem] lg:text-[2.625rem]">
              <span className="block text-sun">One-stop solutions</span>
              <span className="block">for every energy storage application.</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in industrial and commercial energy storage systems, to establish
              cutting edge industrial and commercial energy storage solutions throughout Asia.
              Through COSPOWERS, Konark provides{" "}
              <strong className="text-ink">all-scenario products</strong> and{" "}
              <strong className="text-ink">one-stop solutions</strong> for diversified Commercial
              and Industrial Energy Storage applications.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative w-full lg:mt-14">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-sun/40 sm:-right-7 sm:-top-7 sm:h-44 sm:w-44"
            />
            <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[6rem] border border-forest/10 bg-paper-dim shadow-[0_24px_60px_rgba(11,74,56,0.14)]">
              <img
                src="/assets/industrial-commercial-solutions-banner-clean.png"
                alt="Konark one-stop industrial and commercial energy storage solutions for manufacturing, commercial buildings, data centers, renewable energy, and grid support"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-12 max-w-6xl px-5 sm:mt-16 lg:px-8">
          <div className="relative rounded-[1.75rem] border border-forest/10 bg-gradient-to-br from-white via-[#fbfcfa] to-[#f1f5f1] px-4 py-6 shadow-[0_20px_55px_rgba(11,74,56,0.09)] sm:rounded-[2rem] sm:px-8 sm:py-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border border-sun/35 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />
            <div className="relative grid grid-cols-2 divide-x divide-y divide-forest/10 sm:grid-cols-4 sm:divide-y-0">
              {solutionHighlights.map(({ label, icon: Icon }) => (
                <div key={label} className="group flex min-h-32 flex-col items-center justify-center px-3 py-5 text-center sm:min-h-36 sm:px-5">
                  <div className="mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-forest/15 bg-white text-forest shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sun/40 group-hover:bg-[#fff7ef] group-hover:text-sun sm:h-14 sm:w-14">
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <p className="whitespace-pre-line text-[0.65rem] font-semibold uppercase leading-snug tracking-[0.12em] text-forest sm:text-xs">
                    {label}
                  </p>
                  <span className="mt-2 h-0.5 w-8 rounded-full bg-gradient-to-r from-sun to-forest" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
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
        imageShape
        compactTop
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
