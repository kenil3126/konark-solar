import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import ImageReveal from "./ImageReveal";
import WordReveal from "./WordReveal";

export default function ProductSpecCard({
  eyebrow,
  title,
  copy,
  tags,
  image,
  images,
  imageAlt,
  reverse = false,
  autoPlayInterval = 4000,
}) {
  const gallery = images && images.length > 0 ? images : image ? [image] : [];
  const isCarousel = gallery.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!isCarousel) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % gallery.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isCarousel, gallery.length, autoPlayInterval]);

  const goTo = (i) => setActiveIndex((i + gallery.length) % gallery.length);

  return (
    <section className="py-20 lg:py-24 bg-paper-dim">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-14 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <ImageReveal>
            <div className="relative">
              
              <img
                src={gallery[activeIndex]}
                alt={imageAlt}
                className="w-full"
              />
              {isCarousel && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => goTo(activeIndex - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-sm bg-white/90 text-ink shadow-md hover:bg-white transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => goTo(activeIndex + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-sm bg-white/90 text-ink shadow-md hover:bg-white transition-colors"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {gallery.map((src, i) => (
                      <button
                        key={src + i}
                        type="button"
                        aria-label={`Show image ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                          i === activeIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </ImageReveal>

          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg font-semibold tracking-wide text-forest-light mb-5">{eyebrow}</p>
            <WordReveal text={title} className="font-display text-3xl lg:text-5xl font-medium text-ink mb-6 leading-[1.1] tracking-[-0.02em]" />
            <p className="text-slate leading-relaxed mb-8 border-t border-line pt-6">{copy}</p>
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-sm border border-forest/30 px-4 py-1.5 text-xs font-semibold text-forest hover:bg-forest hover:text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
