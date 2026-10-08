import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./AboutGetInTouch.css";

export default function AboutGetInTouch() {
  return (
    <section className="gt" aria-labelledby="gt-t">
      <div className="gt-bg" aria-hidden="true" />
      <div className="gt-ov" aria-hidden="true" />
      <div className="gt-glow" aria-hidden="true" />

      <motion.div
        className="gt-in"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <div className="gt-eye">GET IN TOUCH</div>
          <h2 id="gt-t">
            Partner with us to power <em>a sustainable future.</em>
          </h2>
        </div>

        <Link className="gt-btn" to="/contact">
          Contact Us
          <span className="gt-ar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
