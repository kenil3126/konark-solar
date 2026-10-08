import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "./WordReveal";

export default function CTABanner({ title = "Empower Your Future with Clean Energy." }) {
  return (
    <section
      className="relative overflow-hidden bg-forest py-20 text-paper sm:py-24 lg:py-28"
      style={{
        backgroundImage: "url('/assets/about-flow-solar-bess.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/85 to-forest/70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full border border-white/[0.08] sm:-right-24 sm:-top-48 sm:h-[38rem] sm:w-[38rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 h-[22rem] w-[22rem] rounded-full border border-sun/20 sm:-right-8 sm:-top-32 sm:h-[28rem] sm:w-[28rem]"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sun-light sm:text-sm">
            <span className="h-px w-9 bg-sun" />
            A brighter energy future
          </p>
          <WordReveal
            text={title}
            className="mb-9 max-w-4xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-5xl xl:text-6xl"
          />
          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 rounded-sm bg-sun py-2.5 pl-6 pr-3 font-semibold text-forest transition-colors hover:bg-white"
          >
            Contact Us
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-forest text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
        <div
          aria-hidden="true"
          className="relative mx-auto hidden aspect-square w-full max-w-56 items-center justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full border border-white/15" />
          <div className="absolute inset-5 rounded-full border border-sun/50" />
          <div className="absolute inset-10 rounded-full border border-white/15" />
          <div className="grid h-16 w-16 place-items-center rounded-full bg-sun shadow-[0_0_50px_rgba(238,130,39,0.28)]">
            <span className="h-3 w-3 rounded-full bg-forest" />
          </div>
        </div>
      </div>
    </section>
  );
}
