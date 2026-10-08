import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import MissionBanner from "../components/MissionBanner";
import ProductStack from "../components/ProductStack";
import Marquee from "../components/Marquee";
import SectorsCarousel from "../components/SectorsCarousel";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Battery Energy Storage Systems"
        title="Intelligent energy storage systems"
        subtitle="Engineered to enhance power efficiency, provide energy security and facilitate seamless integration of renewable energy sources."
        ctaLabel="Explore Energy Storage Solutions"
        ctaTo="/energy-storage/electric-energy-storage"
        tone="light"
        backgroundImage="/assets/hero-energy-storage-bg.png"
      />

      <Marquee />

      <section className="relative overflow-hidden border-y border-line bg-paper-dim py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-forest/10 sm:h-96 sm:w-96"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-forest-light sm:text-sm">
              <span className="h-1.5 w-8 bg-sun" />
              Intelligent energy storage
            </p>
            <h2 className="max-w-3xl font-display text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-ink sm:text-3xl lg:text-4xl">
              Powering Solar Modules with intelligent Energy Storage for seamless,
              round-the-clock energy independence.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto flex min-h-52 max-w-md items-center justify-between overflow-hidden rounded-sm bg-forest px-7 py-8 text-paper shadow-[0_20px_50px_rgba(11,74,56,0.16)] sm:px-10">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-1 -top-11 h-44 w-44 rounded-full border border-white/10"
              />
              <div className="relative">
                <p className="font-display text-6xl font-medium leading-none tracking-[-0.05em] text-sun sm:text-7xl">
                  24/7
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 sm:text-sm">
                  Power with confidence
                </p>
              </div>
              <div className="relative mr-2 grid h-14 w-14 place-items-center rounded-full border border-sun/70 sm:h-16 sm:w-16">
                <span className="h-3 w-3 rounded-full bg-sun shadow-[0_0_20px_rgba(238,130,39,0.65)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Hero
        eyebrow="Solar PV Modules"
        title="Powering the future with high-efficiency PV modules engineered for endurance"
        subtitle="From residential rooftop to utility-scale projects, Konark delivers cutting-edge technology tailored for maximum yield."
        ctaLabel="Explore Solar Modules"
        ctaTo="/solar-modules/n-type"
        tone="light"
        backgroundImage="/assets/hero-solar-modules-bg.png"
        titleSize="text-3xl sm:text-4xl lg:text-5xl"
        titleWeight="font-semibold"
      />

      <WhoWeAre />
      <MissionBanner />
      <ProductStack
        items={[
          {
            eyebrow: "Solar PV Modules",
            title: "Solar PV Modules",
            copy: "High-efficiency monocrystalline modules engineered using advanced technologies like TOPCon and bifacial cells, designed to achieve superior output exceeding 22-24% efficiency and providing long-term reliability, making them highly effective for large-scale deployments.",
            ctaLabel: "Know More",
            ctaTo: "/solar-modules/n-type",
            image: "/assets/solar-pv-modules.png",
            imageAlt: "Solar PV Modules",
          },
          {
            eyebrow: "Battery Energy Storage",
            title: "Energy Storage Systems",
            copy: "Smart energy storage systems designed to enhance reliability and efficiency and provide intelligent energy management by enabling peak shaving, load balancing, backup power and renewable integration for uninterrupted energy supply.",
            ctaLabel: "Know More",
            ctaTo: "/energy-storage/electric-energy-storage",
            image: "/assets/energy-storage.png",
            imageAlt: "Energy Storage Systems",
          },
        ]}
      />

      <SectorsCarousel />
      <Certifications />
      <CTABanner />
    </>
  );
}
