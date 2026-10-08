import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

export default function WhoWeAre() {
  return (
    <section className="relative py-24 lg:py-32 bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="text-center lg:col-span-6">
          <h2 className="mb-5 text-xl font-extrabold uppercase tracking-[0.16em] text-sun sm:text-2xl">
            Who We Are
          </h2>
          <WordReveal
            as="h3"
            text="Solar and storage technology, sourced globally, engineered for reliability."
            className="mb-10 font-display text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-3xl lg:text-4xl xl:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-xl border-t border-line pt-8 text-lg leading-relaxed text-slate">
              Konark Energy is a leading provider of solar solutions, dedicated to offering
              innovative, sustainable and high-performance energy systems. Leveraging a strong
              global sourcing network and strategic partnerships, Konark supplies advanced Solar
              Photovoltaic (PV) Modules and Battery Energy Storage Systems (BESS) to meet
              residential, commercial, industrial and utility-scale applications.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-6">
          <div className="relative mx-auto max-w-2xl lg:ml-auto">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2.5rem] border-r-2 border-t-2 border-sun sm:-right-4 sm:-top-4 sm:h-32 sm:w-32" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] rounded-tl-[5rem] shadow-[0_24px_60px_rgba(11,61,49,0.16)] sm:rounded-tl-[7rem]">
              <img
                src="/assets/who-we-are-solar-storage.png"
                alt="Utility-scale solar farm paired with battery energy storage"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-paper p-1 shadow-lg ring-2 ring-sun sm:-bottom-10 sm:-left-10 sm:h-28 sm:w-28">
              <svg
                viewBox="0 0 120 120"
                role="img"
                aria-label="Konark"
                className="h-full w-full motion-safe:animate-spin"
                style={{ animationDuration: "18s" }}
              >
                <defs>
                  <path
                    id="konark-badge-circle"
                    d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                  />
                </defs>
                <text
                  fill="var(--color-forest)"
                  fontSize="9"
                  fontWeight="700"
                  letterSpacing="1.5"
                >
                  <textPath
                    href="#konark-badge-circle"
                    textLength="270"
                    lengthAdjust="spacing"
                  >
                    KONARK<tspan fill="var(--color-sun)"> • </tspan>
                    KONARK<tspan fill="var(--color-sun)"> • </tspan>
                    KONARK<tspan fill="var(--color-sun)"> • </tspan>
                    KONARK<tspan fill="var(--color-sun)"> • </tspan>
                  </textPath>
                </text>
              </svg>
              <img
                src="/assets/konark-logo.png"
                alt="Konark"
                className="absolute left-1/2 top-1/2 w-14 max-w-[65%] -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
