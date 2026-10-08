import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const sectors = [
  {
    title: "Residential",
    image: "/assets/sector-residential.jpg",
    alt: "Solar Panels on Home Roof Tops",
    copy: "Reliable solar and storage solutions designed to reduce electricity bills, provide backup power, and enable long-term energy independence for households.",
  },
  {
    title: "Commercial & Industrial",
    image: "/assets/sector-commercial.jpg",
    alt: "Solar PV Modules Setup for Factories and Industrial Units",
    copy: "Robust solar and BESS solutions engineered for heavy loads, peak demand management, and uninterrupted power for industrial operations.",
  },
  {
    title: "Data Centers",
    image: "/assets/sector-datacenter.jpg",
    alt: "Solar Panels Solutions for Data Centers",
    copy: "Advanced, stable, and scalable energy systems delivering high uptime, clean power, and precise load management for mission-critical infrastructure.",
  },
  {
    title: "Utility-Scale Solar Farms",
    image: "/assets/sector-utility.jpg",
    alt: "Utility-scale Solar & Energy Storage Systems",
    copy: "Utility-scale solar and energy storage systems supporting grid stability, frequency regulation, renewable integration, and large energy supply requirements.",
  },
  {
    title: "Telecom & Infrastructure",
    image: "/assets/sector-telecom.jpg",
    alt: "High-performance solar modules and large-scale storage systems for solar farms",
    copy: "High-performance solar modules and large-scale storage systems ideal for utility solar farms, IPPs, and nationwide renewable energy deployments.",
  },
];

export default function SectorsCarousel() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-paper-dim py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ul className="overflow-hidden rounded-sm border border-line bg-paper shadow-[0_18px_50px_rgba(11,74,56,0.06)]">
          {sectors.map((s, i) => {
            const active = open === i;
            return (
              <li
                key={s.title}
                className={i < sectors.length - 1 ? "border-b border-line" : ""}
                onMouseEnter={() => setOpen(i)}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-expanded={active}
                  className={`flex w-full items-center gap-4 border-l-[3px] px-5 py-5 text-left transition-colors duration-300 sm:gap-6 sm:px-7 sm:py-6 lg:px-9 ${
                    active
                      ? "border-l-sun bg-paper-dim/80"
                      : "border-l-transparent bg-paper hover:bg-paper-dim/50"
                  }`}
                >
                  <span className={`w-8 shrink-0 font-mono text-xs font-semibold tracking-[0.12em] sm:w-10 sm:text-sm ${active ? "text-sun" : "text-slate/60"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 font-display text-xl font-semibold leading-snug tracking-[-0.02em] transition-colors duration-300 sm:text-2xl lg:text-3xl ${active ? "text-forest" : "text-ink/55"}`}>
                    {s.title}
                  </span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${active ? "rotate-45 border-sun bg-sun text-forest" : "border-line text-slate"}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid items-center gap-7 bg-paper-dim/60 px-5 pb-7 pt-2 sm:px-7 sm:pb-9 lg:grid-cols-2 lg:gap-10 lg:px-9">
                        <div className="aspect-[16/10] overflow-hidden rounded-sm">
                          <img src={s.image} alt={s.alt} className="h-full w-full object-cover" />
                        </div>
                        <p className="max-w-lg text-base leading-relaxed text-slate sm:text-lg">{s.copy}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
