import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import ImageReveal from "./ImageReveal";

const points = [
  "Deliver high-quality Solar and Energy Storage solutions",
  "Build long-term partnerships with clients and stakeholders",
  "Promote Sustainable Energy adoption across industries",
  "Continuously innovate through technology and engineering",
];

export default function MissionChecklist({ image = "/assets/solar-pv-modules.png" }) {
  return (
    <section className="py-20 lg:py-24 bg-paper">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <ImageReveal>
            <div className="relative">
              
              <img
                src={image}
                alt="Our Mission"
                className="w-full"
              />
            </div>
          </ImageReveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl lg:text-5xl font-medium text-forest mb-8 tracking-[-0.02em]">Our Mission</h2>
            <ul className="border-t border-line">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 py-5 border-b border-line transition-all duration-300 hover:pl-3">
                  <CheckCircle2 className="text-forest shrink-0 mt-0.5" size={20} />
                  <span className="text-ink-soft leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
