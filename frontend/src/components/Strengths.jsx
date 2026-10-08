import { motion } from "framer-motion";
import "./Strengths.css";

const strengths = [
  {
    label: "Customer-first approach",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6M16 5a3 3 0 010 6M18 14c2 .7 3 2.6 3 6" />
      </>
    ),
  },
  {
    label: "Global OEM Partnerships",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
  },
  {
    label: "Advanced Solar Technologies",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
      </>
    ),
  },
  {
    label: "End-to-end Energy Storage Solutions",
    icon: (
      <>
        <rect x="3" y="7" width="16" height="10" rx="2" />
        <path d="M21 11v2M11 9.5l-2 3h4l-2 3" />
      </>
    ),
  },
  {
    label: "Competitive Pricing with highest quality",
    icon: (
      <>
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5L8 21l4-2.5 4 2.5-1-7.5" />
      </>
    ),
  },
  {
    label: "Strong after-sales support",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z" />
      </>
    ),
  },
];

export default function Strengths() {
  return (
    <section className="sp" aria-labelledby="sp-title">
      <div className="sp-in">
        <div className="sp-head">
          <h2 id="sp-title">Our Strengths</h2>
        </div>

        <motion.div
          className="sp-panel"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="sp-grid">
            {strengths.map((s, i) => (
              <motion.div
                className="sp-cell"
                tabIndex={0}
                key={s.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
              >
                <div className="sp-ic">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                </div>
                <p>{s.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="sp-sweep" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
