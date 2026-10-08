import ContentPage from "../components/ContentPage";

export default function EnergyStorage() {
  return (
    <ContentPage
      eyebrow="Battery Energy Storage Systems"
      title="Intelligent energy storage for round-the-clock reliability"
      subtitle="Electric, Industrial & Commercial, Communication, Data Center, Household and Sodium Battery storage solutions."
      sections={[
        {
          heading: "Smart Energy Management",
          copy: "Smart energy storage systems designed to enhance reliability and efficiency, enabling peak shaving, load balancing, backup power and renewable integration for uninterrupted energy supply.",
        },
        {
          heading: "Engineered For Every Sector",
          copy: "Deployed across residential, commercial, industrial, telecom and utility-scale environments, our BESS platforms are built for energy security and seamless renewable integration.",
        },
      ]}
    />
  );
}
