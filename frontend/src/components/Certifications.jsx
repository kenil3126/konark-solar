const certs = [
  { name: "IEC Certified", image: "/assets/cert-iec.jpg" },
  { name: "ISO Standards", image: "/assets/cert-iso.jpg" },
  { name: "Munich Re", image: "/assets/cert-munichre.jpg" },
  { name: "TUV Rheinland Certified", image: "/assets/cert-tuv.jpg" },
  { name: "CE Certified", image: "/assets/cert-ce.jpg" },
  { name: "UL Certified", image: "/assets/cert-ul.jpg" },
];

export default function Certifications() {
  return (
    <section className="py-14 bg-paper-dim overflow-hidden border-y border-line">
      <div className="marquee-track marquee-slow flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={k === 1}>
            {certs.map((c) => (
              <div key={`${k}-${c.name}`} className="w-44 lg:w-56 shrink-0 rounded-sm border border-line bg-white p-4 grayscale hover:grayscale-0 transition duration-500">
                <img src={c.image} alt={k === 0 ? c.name : ""} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
