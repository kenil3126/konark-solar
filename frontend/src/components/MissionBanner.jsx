import WordReveal from "./WordReveal";

export default function MissionBanner() {
  return (
    <section className="relative bg-forest pb-8 pt-16 text-paper sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="relative aspect-[4/3] bg-sun/75 p-1 shadow-[0_28px_70px_rgba(0,0,0,0.28)]"
            style={{
              borderRadius: "50% 50% 1.5rem 1.5rem / 34% 34% 1.5rem 1.5rem",
            }}
          />
          <div
            className="absolute inset-1 overflow-hidden"
            style={{
              borderRadius: "50% 50% 1.25rem 1.25rem / 34% 34% 1.25rem 1.25rem",
            }}
          >
            <img
              src="/assets/mission-solar-engineers.png"
              alt="Engineers reviewing a solar farm installation"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-[0.18em] text-sun-light sm:text-xl">
              Our Mission
            </h2>
          </div>
          <WordReveal
            as="p"
            text="To accelerate the transition to clean energy by delivering reliable technology, engineering excellence, and solutions focused on customer needs."
            className="font-display text-xl font-medium leading-[1.35] tracking-[-0.01em] sm:text-2xl lg:text-3xl xl:text-4xl"
          />
        </div>
      </div>
    </section>
  );
}
