import Reveal from "./Reveal";

export default function CertBadges({ items }) {
  return (
    <section className="py-14 bg-paper border-y border-line">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <img
            src="/assets/certifications-strip.png"
            alt={items && items.length ? items.join(", ") : "Certifications"}
            className="mx-auto w-full max-w-4xl h-auto object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
