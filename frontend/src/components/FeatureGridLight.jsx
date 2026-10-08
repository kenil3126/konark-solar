import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FeatureGridLight({ title, intro, features }) {
  return (
    <section className="py-24 lg:py-32 bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-3xl lg:text-5xl font-medium tracking-[-0.02em] text-forest mb-6">{title}</h2>
            {intro && <p className="text-ink-soft leading-relaxed">{intro}</p>}
          </div>
        </div>
        <ul className="lg:col-span-8 border-t border-line">
          {features.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.04}>
              <li className="group flex items-center gap-6 py-6 border-b border-line transition-all duration-300 hover:pl-4">
                <Icon size={24} strokeWidth={1.6} className="text-forest shrink-0" />
                <span className="flex-1 font-display text-xl lg:text-2xl font-medium text-ink">{label}</span>
                <ArrowUpRight size={20} className="text-ink/25 transition-all duration-300 group-hover:text-sun group-hover:rotate-45" />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
