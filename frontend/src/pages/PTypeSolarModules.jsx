import { ShieldCheck, TrendingUp, RefreshCw, Grid3x3 } from "lucide-react";
import Hero from "../components/Hero";
import FeatureGridLight from "../components/FeatureGridLight";
import SpecTierCard from "../components/SpecTierCard";
import ApplicationsShowcase from "../components/ApplicationsShowcase";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";

const ptypeFeatures = [
  { icon: ShieldCheck, label: "Economical and reliable" },
  { icon: TrendingUp, label: "Mature and widely used technology" },
  { icon: RefreshCw, label: "Stable Performance" },
  { icon: Grid3x3, label: "Suitable for large deployments" },
];

export default function PTypeSolarModules() {
  return (
    <>
      <Hero
        eyebrow="Solar Modules"
        title="P-type Solar Modules"
        subtitle="P-type modules are a proven and widely adopted solar technology known for cost-effectiveness and reliable performance."
        tone="light"
        backgroundImage="/assets/hero-ptype-solar-modules-bg.png"
      />

      <FeatureGridLight
        title="Step Into Smarter Solar With P-type Solar PV Modules"
        intro="Konark Energy&rsquo;s P-Type Solar PV Modules are based on proven Mono PERC technology, offering a perfect balance of cost-effectiveness, reliability and stable performance. These modules are widely adopted across the industry due to their maturity, affordability and consistent energy generation."
        features={ptypeFeatures}
      />

      <SpecTierCard
        title="Konark 550 Wp"
        copy="High-performance Mono PERC modules designed for commercial and industrial applications."
        points={[
          "Power output around 550Wp",
          "Mature Mono PERC technology",
          "Module efficiency ~20–21%",
          "Strong mechanical load resistance",
          "Stable long-term performance",
          "Cost-effective solution for large projects",
        ]}
        image="/assets/ptype-550wp-module.png"
        imageAlt="Konark 550Wp P-type Solar Module"
        tone="dark"
      />

      <ApplicationsShowcase
        images={[
          "/assets/ptype-applications-1.png",
          "/assets/ptype-applications-2.png",
          "/assets/ptype-applications-3.png",
          "/assets/ptype-applications-4.png",
        ]}
        imageAlt="P-type Solar Modules deployed at a utility-scale solar farm"
      />

      <Certifications />

      <CTABanner title="Reliable solar performance with cost efficiency." />
    </>
  );
}
