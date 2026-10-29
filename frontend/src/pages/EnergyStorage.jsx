import ContentPage from "../components/ContentPage";

export default function EnergyStorage() {
  return (
    <ContentPage
      eyebrow="Battery Energy Storage Systems"
      title="Intelligent Energy Storage for round-the-clock reliability"
      subtitle="LIFP and Na+ energy storage solutions for electric power, industrial and commercial applications, telecommunications, data centers and residential use."
      showPlaceholder={false}
      sections={[
        {
          heading: "Smart Energy Management",
          copy: "Smart energy storage systems engineered to enhance reliability and efficiency through peak shaving, load balancing, backup power, and renewable energy integration – ensuring a stable, uninterrupted power supply.",
        },
        {
          heading: "Engineered For Every Sector",
          copy: "Deployed across residential, commercial, industrial, telecommunications, and utility-scale environments, our BESS platforms deliver reliable energy security and seamless renewable energy integration.",
        },
      ]}
    />
  );
}
