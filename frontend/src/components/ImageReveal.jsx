import { motion } from "framer-motion";

// Image is unveiled with a clip-path wipe and a slow settle-in zoom.
// The scroll trigger lives on the outer (unclipped) wrapper so it always fires.
const wrap = { hidden: {}, show: {} };
const clip = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: { clipPath: "inset(0 0 0% 0)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};
const zoom = {
  hidden: { scale: 1.18 },
  show: { scale: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function ImageReveal({ children, className = "" }) {
  return (
    <motion.div className={className} variants={wrap} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      <motion.div variants={clip} className="overflow-hidden rounded-sm">
        <motion.div variants={zoom}>{children}</motion.div>
      </motion.div>
    </motion.div>
  );
}
