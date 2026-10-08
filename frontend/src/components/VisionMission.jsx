import { motion } from "framer-motion";
import "./VisionMission.css";

const EYE = (
  <>
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </>
);

const TARGET = (
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.2" />
  </>
);

const visionPoints = [
  {
    text: "Become a global leader in clean energy and sustainable solutions",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),
  },
  {
    text: "Accelerate the transition toward renewable and clean energy",
    icon: (
      <>
        <path d="M5 19c0-9 5-14 14-14 0 9-5 14-13 14" />
        <path d="M5 19c3-5 6-8 10-10" />
      </>
    ),
  },
  {
    text: "Enable energy independence through advanced Solar & Energy Storage technologies",
    icon: (
      <>
        <rect x="3" y="7" width="16" height="10" rx="2" />
        <path d="M21 11v2M11 9.5l-2 3h4l-2 3" />
      </>
    ),
  },
  {
    text: "Drive innovation to create smarter and more sustainable energy solutions",
    icon: (
      <path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z" />
    ),
  },
  {
    text: "Build a cleaner, greener and carbon-neutral future for generations to come",
    icon: <path d="M12 21v-9M12 12c0-4-3-6-7-6 0 4 3 6 7 6zM12 14c0-3 2-5 6-5 0 3-2 5-6 5z" />,
  },
  {
    text: "Empower businesses and communities with reliable, efficient clean power",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6M16 5a3 3 0 010 6M18 14c2 .7 3 2.6 3 6" />
      </>
    ),
  },
];

const missionPoints = [
  {
    text: "Deliver high-quality Solar and Energy Storage solutions",
    icon: (
      <>
        <path d="M3 16l3-9h12l3 9z" />
        <path d="M4.5 11.5h15M9 7l-1.5 9M15 7l1.5 9M12 16v4M8 20h8" />
      </>
    ),
  },
  {
    text: "Build long-term partnerships with clients and stakeholders",
    icon: (
      <path d="M10 14a4 4 0 005.6 0l3-3a4 4 0 00-5.6-5.6l-1 1M14 10a4 4 0 00-5.6 0l-3 3a4 4 0 005.6 5.6l1-1" />
    ),
  },
  {
    text: "Promote sustainable energy adoption across industries",
    icon: (
      <>
        <rect x="4" y="3" width="10" height="18" rx="1" />
        <path d="M14 9h5a1 1 0 011 1v11H14M8 7h2M8 11h2M8 15h2" />
      </>
    ),
  },
  {
    text: "Continuously innovate through technology and engineering",
    icon: (
      <>
        <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
        <circle cx="15" cy="7" r="2" />
        <circle cx="9" cy="17" r="2" />
      </>
    ),
  },
  {
    text: "Ensure efficiency, reliability and sustainability in every product",
    icon: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    text: "Create lasting value for customers, partners and the planet",
    icon: <path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.5l-5.2 2.7 1-5.9L3.5 9.2l5.9-.8z" />,
  },
];

function Points({ items }) {
  return (
    <ul className="vm-list">
      {items.map((p, i) => (
        <motion.li
          key={p.text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
        >
          <span className="vm-ic">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {p.icon}
            </svg>
          </span>
          {p.text}
        </motion.li>
      ))}
    </ul>
  );
}

export default function VisionMission() {
  return (
    <section className="vm" aria-label="Vision and Mission">
      <div className="vm-wrap">
        <motion.div
          className="vm-card vm-v"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="vm-wm" aria-hidden="true">
            <svg viewBox="0 0 24 24">{EYE}</svg>
          </span>
          <div className="vm-h">
            <span className="vm-hi">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {EYE}
              </svg>
            </span>
            <h2>Our Vision</h2>
          </div>
          <Points items={visionPoints} />
        </motion.div>

        <motion.div
          className="vm-card vm-m"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <span className="vm-wm" aria-hidden="true">
            <svg viewBox="0 0 24 24">{TARGET}</svg>
          </span>
          <div className="vm-h">
            <span className="vm-hi">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {TARGET}
              </svg>
            </span>
            <h2>
              Our <span>Mission</span>
            </h2>
          </div>
          <Points items={missionPoints} />
        </motion.div>
      </div>
    </section>
  );
}
