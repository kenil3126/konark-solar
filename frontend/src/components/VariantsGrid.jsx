import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

const bgColors = ["bg-white"];

export default function VariantsGrid({ title = "Our N-type Variants", image, items }) {
  return (
    <section className="py-20 lg:py-24 bg-paper-dim">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14"><WordReveal text={title} className="font-display text-3xl lg:text-5xl font-medium text-forest tracking-[-0.02em]" /></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {items.map((item, i) => {
            const isObject = typeof item === "object" && item !== null;
            const label = isObject ? item.label : item;
            const itemImage = isObject && item.image ? item.image : image;
            const hideLabel = isObject && item.hideLabel;

            return (
              <Reveal key={label} delay={i * 0.08}>
                <div
                  className={`group ${bgColors[0]} bg-white p-8 flex flex-col items-center gap-5 h-full transition-colors duration-300 hover:bg-paper-dim`}
                >
                  <img
                    src={itemImage}
                    alt={label}
                    className="w-full max-w-[160px] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {!hideLabel && (
                    <p className="text-sm font-semibold text-ink text-center">{label}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
