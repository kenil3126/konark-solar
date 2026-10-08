import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FeatureSplit({
  eyebrow,
  title,
  copy,
  ctaLabel,
  ctaTo,
  image,
  imageAlt,
  reverse = false,
  accent = "sun",
  plainImage = false,
  imageClassName = "",
}) {
  return (
    <section className="relative py-20 lg:py-28 bg-paper overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-14 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal direction={reverse ? "right" : "left"}>
            <p className={`text-xs font-semibold tracking-wide mb-4 text-forest-light`}>
              {eyebrow}
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-ink mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-slate leading-relaxed mb-8 max-w-lg">{copy}</p>
            <Link
              to={ctaTo}
              className={`inline-flex items-center gap-2 rounded-sm font-semibold px-6 py-3 bg-forest text-paper hover:bg-forest-light`}
            >
              {ctaLabel}
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>

          <Reveal direction={reverse ? "left" : "right"} delay={0.1}>
            <div className={plainImage ? "" : "group relative"}>
              
              <img
                src={image}
                alt={imageAlt}
                className={`${plainImage ? "w-full module-tilt" : "w-full rounded-sm float-y module-tilt  transition-transform duration-500 group-hover:scale-[1.015]"} ${imageClassName}`}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
