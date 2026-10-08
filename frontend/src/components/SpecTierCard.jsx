import Reveal from "./Reveal";

export default function SpecTierCard({ title, copy, points, image, imageAlt, tone = "dark", reverse = false }) {
  const dark = tone === "dark";
  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <div
            className={`grid lg:grid-cols-2 rounded-sm overflow-hidden ${
              dark ? "bg-forest text-paper" : "bg-paper-dim text-ink border border-line"
            }`}
          >
            <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${reverse ? "lg:order-2" : ""}`}>
              <h3 className="font-display text-2xl lg:text-3xl font-medium mb-4 tracking-[-0.01em]">{title}</h3>
              <p className={`leading-relaxed mb-7 ${dark ? "text-paper/80" : "text-ink/80"}`}>{copy}</p>
              <ul className={`border-t ${dark ? "border-white/15" : "border-line"}`}>
                {points.map((p) => (
                  <li key={p} className={`group flex items-center gap-4 py-4 border-b transition-all duration-300 hover:pl-3 ${dark ? "border-white/15" : "border-line"}`}>
                    <span className={`h-2 w-2 shrink-0 ${dark ? "bg-sun-light" : "bg-forest"}`} />
                    <span className={`flex-1 ${dark ? "text-paper/90" : "text-ink/90"}`}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${dark ? "bg-white/5" : "bg-white"} flex items-center justify-center p-8 sm:p-10 ${reverse ? "lg:order-1" : ""}`}>
              <img src={image} alt={imageAlt} className="w-full max-w-xs h-auto object-contain transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
