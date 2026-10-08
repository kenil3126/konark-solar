import ContentPage from "../components/ContentPage";

export default function BatteryCells() {
  return (
    <ContentPage
      eyebrow="Battery Cells"
      title="Prismatic cells engineered for stability and longevity"
      subtitle="Prismatic Lithium Ion and Prismatic Sodium Ion cells built to power our energy storage systems."
      sections={[
        {
          heading: "Prismatic Lithium Ion",
          copy: "High energy-density lithium-ion cells engineered for long cycle life, thermal stability and consistent performance across demanding applications.",
        },
        {
          heading: "Prismatic Sodium Ion",
          copy: "Next-generation sodium-ion cells offering a safer, more resource-abundant alternative for large-scale and cost-sensitive energy storage deployments.",
        },
      ]}
    />
  );
}
