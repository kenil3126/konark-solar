import { Leaf, RadioTower, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
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

const benefits = [
  {
    label: "Safe & Reliable",
    Icon: ShieldCheck,
    hover: { scale: [1, 1.18, 1], rotate: [0, -8, 8, 0] },
  },
  {
    label: "High Efficiency",
    Icon: Zap,
    hover: { scale: [1, 1.28, 1], rotate: [0, 12, -12, 0] },
  },
  {
    label: "Sustainable Energy",
    Icon: Leaf,
    hover: { scale: [1, 1.15, 1], rotate: [0, -16, 10, 0] },
  },
  {
    label: "Stronger Connectivity",
    Icon: RadioTower,
    hover: { scale: [1, 1.2, 1], y: [0, -3, 0] },
  },
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

      <section className="bg-gradient-to-br from-paper via-white to-[#edf4ef] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12 lg:px-8">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-sun" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-light sm:text-[13px]">
                Green Base Station Solutions
              </p>
            </div>
            <h2 className="mb-6 max-w-xl font-display text-2xl font-medium leading-[1.12] tracking-[-0.02em] text-ink sm:text-3xl lg:text-4xl">
              Reliable power for a connected, lower-carbon world
            </h2>
            <p className="max-w-xl border-t border-line pt-6 text-base leading-relaxed text-slate lg:text-lg">
              Konark is proud to partner with <strong className="text-ink">COSPOWERS</strong>, a
              global pioneer in communication energy storage systems, to establish cutting edge
              communication energy storage solutions throughout Asia. Through COSPOWERS, Konark
              provides a full range of safe and efficient{" "}
              <strong className="text-ink">48V</strong> energy storage systems for{" "}
              <strong className="text-ink">green base stations</strong> in the digital era.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["48V Energy Storage", "Telecom Backup", "Lower-Carbon Connectivity"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-forest/15 bg-white/80 px-4 py-2 text-xs font-semibold text-forest shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_60px_rgba(11,74,56,0.16)]">
              <img
                src="/assets/communication-green-base-stations.png"
                alt="Green telecom base stations powered by solar energy and 48V battery storage"
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-2">
            <ul
              aria-label="Green base station benefits"
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/20 text-white shadow-[0_18px_45px_rgba(11,74,56,0.18)] lg:grid-cols-4"
            >
              {benefits.map(({ label, Icon, hover }) => (
                <li
                  key={label}
                  className="relative flex min-h-36 flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#14533d] to-[#07382b] px-4 py-6 text-center transition-colors duration-300 hover:from-[#196448] hover:to-[#0b4635] sm:min-h-40"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/5 text-white shadow-[0_0_22px_rgba(255,255,255,0.08)] transition duration-300 group-hover:bg-white/10">
                    <motion.span
                      whileHover={hover}
                      transition={{ duration: 0.55, ease: "easeInOut" }}
                      className="grid place-items-center"
                    >
                    <Icon size={29} strokeWidth={1.55} aria-hidden="true" />
                    </motion.span>
                  </span>
                  <span className="max-w-36 text-sm font-semibold leading-snug text-white sm:text-base">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
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
        imageShape
        compactTop
        titleClassName="mb-5 max-w-xl font-display text-2xl font-medium leading-[1.12] tracking-[-0.02em] text-ink sm:text-3xl lg:text-4xl"
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
