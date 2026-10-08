import "./AboutFlow.css";

const FLOW = [
  {
    label: ["ENERGY", "GENERATION"],
    icon: (
      <>
        <path d="M24 8v3M12 14l2 2M36 14l-2 2M8 24h3M37 24h3" />
        <path d="M15 24a9 9 0 0118 0" />
        <path d="M8 40l4-12h24l4 12zM13 34h26M20 28l-2 12M28 28l2 12" />
      </>
    ),
  },
  {
    label: ["ENERGY", "STORAGE"],
    icon: (
      <>
        <rect x="12" y="10" width="24" height="32" rx="3" />
        <path d="M19 10V7h10v3M25 18l-6 10h8l-6 10" />
      </>
    ),
  },
  {
    label: ["ENERGY", "CONSUMPTION"],
    icon: (
      <>
        <path d="M6 24L24 8l18 16M10 21v21h28V21" />
        <path d="M17 34c0-7 4-10 12-10 0 7-4 11-11 11M17 34c3-4 6-7 9-8" />
      </>
    ),
  },
];

export default function AboutFlow() {
  return (
    <section className="ae" aria-labelledby="ae-t">
      <div className="ae-wrap">
        <div className="ae-txt">
          <h2 id="ae-t">Konark Energy</h2>
          <p className="ae-p1">
            Konark Energy is a forward-looking renewable energy company committed to reshaping{" "}
            <em>Energy Generation, Energy Storage and Energy Consumption.</em>
          </p>
          <p className="ae-p2">
            Our expertise lies in producing high-performance Solar PV Modules and developing
            advanced Battery Energy Storage Systems (BESS) with focus on providing seamless
            solutions in blending efficiency, reliability and sustainability.
          </p>
          <div className="ae-val">
            EFFICIENCY <i>/</i> RELIABILITY <i>/</i> SUSTAINABILITY
          </div>
        </div>

        <div
          className="ae-vis"
          role="img"
          aria-label="Solar field and battery energy storage containers at sunset"
        >
          <div className="ae-photo" aria-hidden="true" />
          <div className="ae-flow">
            <span className="ae-dot" aria-hidden="true" />
            {FLOW.map((n) => (
              <div className="ae-n" tabIndex={0} key={n.label.join(" ")}>
                <div className="c">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    {n.icon}
                  </svg>
                </div>
                <span>
                  {n.label[0]}
                  <br />
                  {n.label[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
