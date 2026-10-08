import ContentPage from "../components/ContentPage";

export default function SolarModules() {
  return (
    <ContentPage
      eyebrow="Solar PV Modules"
      title="High-efficiency PV modules engineered for endurance"
      subtitle="N Type, P Type, Made in USA and Residential modules built for maximum yield across every deployment scale."
      sections={[
        {
          heading: "Advanced Cell Technology",
          copy: "High-efficiency monocrystalline modules engineered using advanced technologies like TOPCon and bifacial cells, designed to achieve superior output exceeding 22-24% efficiency.",
        },
        {
          heading: "Built for Every Scale",
          copy: "From residential rooftop to utility-scale projects, Konark delivers cutting-edge technology tailored for maximum yield and long-term reliability.",
        },
      ]}
    />
  );
}
