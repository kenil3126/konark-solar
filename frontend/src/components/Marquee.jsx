const items = [
  "Residential",
  "Commercial & Industrial",
  "Data Centers",
  "Utility-Scale Solar Farms",
  "Telecom & Infrastructure",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-forest/15 bg-sun py-5 lg:py-6"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center whitespace-nowrap font-display text-2xl font-semibold tracking-[-0.025em] text-forest sm:text-3xl lg:text-4xl"
              >
                {t}
                <span className="mx-7 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-forest/25 sm:mx-9 lg:mx-12">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
