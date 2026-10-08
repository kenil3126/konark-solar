import { motion } from "framer-motion";

// Quiet fade-in only: no sliding, so sections settle in rather than "fly" in.
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.2), ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
