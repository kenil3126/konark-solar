import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Cards pin to the top as you scroll and the next one slides over the last.
export default function ProductStack({ items }) {
  return (
    <section className="relative bg-forest py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {items.map((it, i) => {
          const light = i % 2 === 0;
          return (
            <div key={it.title} className="sticky pb-8" style={{ top: `${88 + i * 20}px` }}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center rounded-sm p-8 lg:p-14 min-h-[70vh] ${
                  light ? "bg-white text-ink" : "bg-forest-light text-white border border-white/10"
                }`}
              >
                <div>
                  <p className={`text-base lg:text-lg font-semibold tracking-wide mb-5 ${light ? "text-forest-light" : "text-sun-light"}`}>
                    {it.eyebrow}
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl font-medium mb-5 leading-tight">{it.title}</h2>
                  <p className={`leading-relaxed mb-8 max-w-lg ${light ? "text-slate" : "text-white/75"}`}>{it.copy}</p>
                  <Link
                    to={it.ctaTo}
                    className={`group inline-flex items-center gap-3 rounded-sm font-semibold pl-6 pr-3 py-3 ${
                      light ? "bg-forest text-white hover:bg-forest-light" : "bg-sun text-forest hover:bg-white"
                    }`}
                  >
                    {it.ctaLabel}
                    <span className={`grid h-9 w-9 place-items-center rounded-sm transition-transform duration-300 group-hover:rotate-45 ${light ? "bg-white text-forest" : "bg-forest text-white"}`}>
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <img src={it.image} alt={it.imageAlt} className="w-full max-h-[420px] object-contain" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
