import { Leaf, ShieldCheck, Zap } from "lucide-react";
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
            <h2 className="mb-6 max-w-xl font-display text-2xl font-medium leading-[1.12] tracking-[-0.02em] text-ink sm:text-3xl lg:text-4xl">
              Reliable power for a connected, Low-carbon world
            </h2>
            <p className="max-w-xl border-t border-line pt-6 text-base leading-relaxed text-slate lg:text-lg">
              To support the evolving demands of modern telecommunications, Konark collaborates
              with COSPOWERS, a global innovator in communication energy storage technology.
              Together, we deliver a comprehensive range of safe, efficient 48V energy storage
              systems designed for green base stations, helping strengthen network reliability
              while advancing energy efficiency and sustainability across North America.
            </p>
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
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/20 text-white shadow-[0_18px_45px_rgba(11,74,56,0.18)] lg:grid-cols-3"
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
        tertiaryLabel="Inquire Now"
        tertiaryTo="/contact"
      />

      <CertBadges items={certs} />

      <CTABanner title="Partner with us to power a sustainable future." />
    </>
  );
}
