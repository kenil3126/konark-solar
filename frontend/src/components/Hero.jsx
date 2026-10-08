import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  watermark,
  backgroundImage,
  titleSize = "text-4xl sm:text-5xl lg:text-6xl",
  titleWeight = "font-medium",
}) {
  const words = String(title).split(" ");

  return (
    <section
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-forest text-white"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(90deg, rgba(7,56,43,0.92) 0%, rgba(7,56,43,0.64) 46%, rgba(7,56,43,0.1) 100%), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {watermark && (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-[-4%] z-0 w-[62%] pointer-events-none"
          style={{
            backgroundImage: `url(${watermark})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 w-full">
        <div className="max-w-4xl pt-40 pb-20 lg:pb-24">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-base lg:text-lg font-semibold tracking-wide text-sun-light mb-6"
            >
              {eyebrow}
            </motion.p>
          )}

          <h1
            aria-label={title}
            className={`font-display ${titleSize} ${titleWeight} leading-[1.08] mb-7 tracking-[-0.02em]`}
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.25em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg leading-relaxed mb-10 max-w-xl text-white/80"
            >
              {subtitle}
            </motion.p>
          )}

          {ctaLabel && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }}>
              <Link
                to={ctaTo || "/contact"}
                className="group inline-flex items-center gap-3 rounded-sm bg-sun text-forest font-semibold pl-7 pr-3 py-3 hover:bg-white"
              >
                {ctaLabel}
                <span className="grid h-9 w-9 place-items-center rounded-sm bg-forest text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
