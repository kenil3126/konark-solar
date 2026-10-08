import { useEffect, useState } from "react";
import ImageReveal from "./ImageReveal";
import WordReveal from "./WordReveal";

export default function ApplicationsShowcase({
  title = "Applications and Use Cases",
  image,
  images,
  imageAlt,
  autoPlayInterval = 4000,
}) {
  const gallery = images && images.length > 0 ? images : image ? [image] : [];
  const isCarousel = gallery.length > 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [ratio, setRatio] = useState(3 / 2);

  useEffect(() => {
    if (!isCarousel) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % gallery.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isCarousel, gallery.length, autoPlayInterval]);

  const goTo = (i) => setActiveIndex((i + gallery.length) % gallery.length);

  return (
    <section className="py-20 lg:py-24 bg-paper">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-12"><WordReveal text={title} className="font-display text-3xl lg:text-5xl font-medium text-forest tracking-[-0.02em]" /></div>
        <ImageReveal>
                    <div className="relative rounded-sm overflow-hidden  bg-paper-dim">
            <div className="transition-[aspect-ratio] duration-300" style={{ aspectRatio: ratio }}>
              <img
                src={gallery[activeIndex]}
                alt={imageAlt}
                onLoad={(e) => setRatio(e.target.naturalWidth / e.target.naturalHeight)}
                className="w-full h-full object-cover"
              />
            </div>
            {isCarousel && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => goTo(activeIndex - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-sm bg-white/90 text-ink shadow-md hover:bg-white transition-colors"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => goTo(activeIndex + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-sm bg-white/90 text-ink shadow-md hover:bg-white transition-colors"
                >
                  ›
                </button>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                  {gallery.map((src, i) => (
                    <button
                      key={src + i}
                      type="button"
                      aria-label={`Show image ${i + 1}`}
                      onClick={() => goTo(i)}
                      className={`w-2.5 h-2.5 rounded-sm transition-colors ${
                        i === activeIndex ? "bg-sun" : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </ImageReveal>
      </div>
    </section>
  );
}
