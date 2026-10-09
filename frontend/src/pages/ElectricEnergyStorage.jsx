import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import ProductSpecCard from "../components/ProductSpecCard";
import ButtonRow from "../components/ButtonRow";
import CertBadges from "../components/CertBadges";
import CTABanner from "../components/CTABanner";
import { Activity, ArrowRight, BatteryCharging, Cpu, Gauge, Zap } from "lucide-react";

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

const storageSystems = [
  {
    number: "01",
    title: "PCS",
    subtitle: "Power Conversion System",
    description: "Converts DC and AC power for smooth grid and load connection.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Batteries",
    subtitle: "Energy Storage",
    description: "High-performance battery technology at the heart of every system.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "BMS",
    subtitle: "Battery Management",
    description: "Monitors and protects battery cells for safe, reliable operation.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "EMS",
    subtitle: "Energy Management",
    description: "Intelligently optimises how energy is stored, dispatched and used.",
    icon: Gauge,
  },
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

      <section className="relative overflow-hidden bg-paper py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] items-start gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8 xl:px-10">
          <Reveal className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper-dim px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              <BatteryCharging size={16} aria-hidden="true" />
              COSPOWERS Technology Partner
            </div>
            <h2 className="mb-6 max-w-xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Reliable storage for a cleaner energy future.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">
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

          <Reveal delay={0.1} className="relative w-full lg:mt-14">
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-32 w-32 rounded-full border border-sun/40 sm:-right-7 sm:-top-7 sm:h-44 sm:w-44"
            />
            <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[6rem] border border-forest/10 bg-paper-dim shadow-[0_24px_60px_rgba(11,74,56,0.12)]">
              <img
                src="/assets/energy-storage-banner.png"
                alt="Konark energy storage for a sustainable tomorrow, featuring a utility-scale battery storage system"
                className="aspect-[2/1] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 w-full max-w-[1440px] px-5 lg:mt-20 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-paper-dim px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-sun/20" />
            <div aria-hidden="true" className="absolute -bottom-36 -left-20 h-72 w-72 rounded-full border border-forest/10" />

            <div className="relative mb-8 flex items-center justify-center gap-3 text-center sm:mb-10">
              <Activity size={17} className="text-sun" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest sm:text-sm">
                Integrated Energy Storage System
              </p>
            </div>

            <div className="relative -mx-2 overflow-x-auto px-2 pb-3 sm:mx-0 sm:px-0">
              <div className="grid min-w-[760px] grid-cols-4 gap-4 xl:min-w-0 xl:gap-5">
                {storageSystems.map(({ number, title, subtitle, description, icon: Icon }, index) => (
                  <div
                    key={title}
                    className="group relative rounded-[1.5rem] border border-line bg-white p-5 text-center shadow-[0_12px_36px_rgba(11,74,56,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sun/50 hover:shadow-[0_20px_44px_rgba(11,74,56,0.11)] sm:p-6"
                  >
                    <span className="absolute left-4 top-4 font-mono text-xs font-semibold tracking-widest text-sun sm:left-5 sm:top-5">
                      {number}
                    </span>
                    <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-xl border border-forest/12 bg-[#f7f9f6] text-forest transition-colors duration-300 group-hover:border-sun/35 group-hover:bg-[#fff7ef] group-hover:text-sun">
                      <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
                      {title}
                    </h3>
                    <p className="mt-2 min-h-10 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-sun sm:text-xs">
                      {subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                      {description}
                    </p>
                    {index < storageSystems.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute -right-[1.05rem] top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-white p-1.5 text-forest shadow-sm xl:block"
                      >
                        <ArrowRight size={15} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <ProductSpecCard
        eyebrow="COSPOWERS Partnership"
        title="Containerized Energy Storage Systems"
        copy="Utility-grade energy storage containers engineered for high round-trip efficiency, long cycle life and safe operation — built to promote ecological conservation and share clean energy across Asia's grids."
        tags={["Energy Storage Batteries", "PCS", "BMS", "EMS", "System Integration"]}
        images={[
          "/assets/container-ess-1.png",
          "/assets/container-ess-2.png",
          "/assets/container-ess-3.png",
        ]}
        imageAlt="Electric Energy Storage Container"
        imageShape
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
