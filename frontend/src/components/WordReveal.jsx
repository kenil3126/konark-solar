import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Words rise out of a mask one after another when the heading scrolls into view.
// The trigger sits on the heading itself (not on the clipped words), so it always fires.
export default function WordReveal({ text, as = "h2", className = "" }) {
  const Tag = motion[as];
  const words = String(text).split(" ");
  return (
    <Tag
      aria-label={text}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.12em] mr-[0.25em]">
          <motion.span className="inline-block" variants={word}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
