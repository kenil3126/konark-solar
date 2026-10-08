import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProductShowcase({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <Reveal>
      <div className="relative rounded-sm overflow-hidden border border-line ">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((s, i) => (
              <div key={i} className="min-w-0 shrink-0 basis-full">
                <div className="relative aspect-[16/8] bg-paper-dim">
                  <img src={s.image} alt={s.alt} className="w-full h-full object-cover" />
                  {s.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                      <p className="text-paper font-medium">{s.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-sm bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:bg-forest hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-sm bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:bg-forest hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-sm transition-all ${
                    selected === i ? "w-6 bg-white" : "w-1.5 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Reveal>
  );
}
