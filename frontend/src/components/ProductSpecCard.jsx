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
  imageShape = false,
  compactTop = false,
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
    <section
      className={
        imageShape
          ? `relative overflow-hidden bg-gradient-to-br from-[#f7f8f5] via-white to-[#eef3ef] ${
              compactTop ? "pb-20 pt-10 lg:pb-28 lg:pt-14" : "py-20 lg:py-28"
            }`
          : "bg-paper-dim py-20 lg:py-24"
      }
    >
      {imageShape && (
        <div aria-hidden="true" className="absolute -right-32 top-10 h-96 w-96 rounded-full border border-forest/10" />
      )}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div
          className={`grid items-center ${
            imageShape
              ? "gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-20"
              : "gap-14 lg:grid-cols-2"
          } ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <ImageReveal>
            <div className={imageShape ? "relative isolate px-3 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-10" : "relative"}>
              {imageShape && (
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-8 bottom-7 top-10 rotate-[-3deg] rounded-[2rem] rounded-tr-[5rem] bg-sun/15 sm:inset-x-10 sm:bottom-9 sm:top-12"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-1 bottom-1 top-7 rounded-[2rem] rounded-bl-[5rem] border border-forest/20 sm:inset-x-2 sm:bottom-2 sm:top-8"
                  />
                </>
              )}
              <div
                className={`relative ${
                  imageShape
                    ? "overflow-hidden rounded-[2rem] rounded-tr-[5rem] border border-white/70 bg-forest shadow-[0_30px_70px_rgba(11,74,56,0.20)]"
                    : ""
                }`}
              >
                <img
                  src={gallery[activeIndex]}
                  alt={imageAlt}
                  className={`w-full ${imageShape ? "aspect-[4/3] object-cover transition-transform duration-700 hover:scale-[1.025]" : ""}`}
                />
                {isCarousel && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() => goTo(activeIndex - 1)}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-ink shadow-lg backdrop-blur transition-colors hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => goTo(activeIndex + 1)}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-ink shadow-lg backdrop-blur transition-colors hover:bg-white"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-ink/35 px-3 py-2 backdrop-blur-sm">
                      {gallery.map((src, i) => (
                        <button
                          key={src + i}
                          type="button"
                          aria-label={`Show image ${i + 1}`}
                          onClick={() => goTo(i)}
                          className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            i === activeIndex ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </ImageReveal>

          <Reveal delay={0.1}>
            <div className={imageShape ? "mb-6 inline-flex items-center gap-3" : "contents"}>
              {imageShape && <span className="h-px w-8 bg-sun" />}
              <p className={imageShape
                ? "text-xs font-semibold uppercase tracking-[0.2em] text-forest-light sm:text-sm"
                : "mb-5 text-base font-semibold tracking-wide text-forest-light lg:text-lg"}
              >
                {eyebrow}
              </p>
            </div>
            <WordReveal
              text={title}
              className={
                imageShape
                  ? "mb-6 max-w-xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl"
                  : "mb-6 font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-ink lg:text-5xl"
              }
            />
            <p className={imageShape
              ? "mb-8 max-w-xl border-t border-line pt-6 text-base leading-relaxed text-slate lg:text-lg"
              : "mb-8 border-t border-line pt-6 leading-relaxed text-slate"}
            >
              {copy}
            </p>
            {tags && (
              <div className={imageShape ? "flex flex-wrap gap-2.5" : "flex flex-wrap gap-2"}>
                {tags.map((t) => (
                  <span
                    key={t}
                    className={imageShape
                      ? "inline-flex items-center rounded-full border border-forest/15 bg-white px-4 py-2 text-xs font-semibold text-forest shadow-sm transition-colors hover:border-forest hover:bg-forest hover:text-white"
                      : "inline-flex items-center rounded-sm border border-forest/30 px-4 py-1.5 text-xs font-semibold text-forest hover:bg-forest hover:text-white"}
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
