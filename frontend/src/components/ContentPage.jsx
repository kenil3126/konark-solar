import Hero from "./Hero";
import Reveal from "./Reveal";
import WordReveal from "./WordReveal";
import CTABanner from "./CTABanner";

export default function ContentPage({ eyebrow, title, subtitle, sections }) {
  return (
    <>
      <Hero eyebrow={eyebrow} title={title} subtitle={subtitle} tone="dark" />

      <section className="py-20 lg:py-28 bg-paper">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="border-t border-line">
            {sections.map((s, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-16 py-12 lg:py-16 border-b border-line">
                <WordReveal text={s.heading} className="lg:col-span-5 font-display text-2xl lg:text-4xl font-medium text-ink leading-[1.1] tracking-[-0.02em]" />
                <Reveal className="lg:col-span-7">
                  <p className="text-slate leading-relaxed text-lg">{s.copy}</p>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="rounded-sm border border-dashed border-line bg-paper-dim px-6 py-8 text-center">
              <p className="text-xs font-semibold tracking-wide text-forest-light mb-2">
                Content Placeholder
              </p>
              <p className="text-sm text-slate">
                This page is styled and wired up — final copy, specs and imagery for this
                section will be added here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
