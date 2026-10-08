import { Eye } from "lucide-react";
import WordReveal from "./WordReveal";

export default function VisionCard() {
  return (
    <section className="relative bg-forest-light text-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-lg lg:text-xl font-semibold tracking-wide text-sun-light flex items-center gap-3">
            <Eye size={24} /> Our Vision
          </h2>
        </div>
        <div className="lg:col-span-8">
          <WordReveal
            as="p"
            text="To be Global Leaders in Clean Energy Solutions by driving Innovation, Enabling Energy Independence and supporting the transition toward a Carbon-Neutral future."
            className="font-display text-2xl sm:text-3xl lg:text-5xl font-medium leading-[1.15] tracking-[-0.015em]"
          />
        </div>
      </div>
    </section>
  );
}
