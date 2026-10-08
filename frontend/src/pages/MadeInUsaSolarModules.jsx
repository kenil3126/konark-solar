import { ShieldCheck, Clock, Globe2, BadgeCheck } from "lucide-react";
import Hero from "../components/Hero";
import FeatureGridLight from "../components/FeatureGridLight";
import SpecTierCard from "../components/SpecTierCard";
import ApplicationsShowcase from "../components/ApplicationsShowcase";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";

const usaFeatures = [
  { icon: ShieldCheck, label: "High manufacturing standards" },
  { icon: Clock, label: "Superior durability" },
  { icon: Globe2, label: "Global certifications" },
  { icon: BadgeCheck, label: "Ideal for compliance-driven projects" },
];

export default function MadeInUsaSolarModules() {
  return (
    <>
      <Hero
        eyebrow="Solar Modules"
        title="Made in USA Solar Modules"
        subtitle="Premium-quality modules manufactured in the USA, ensuring compliance with international quality standards and supply chain reliability as well as high domestic content to comply with ITC Tax Credit requirements."
        tone="light"
        backgroundImage="/assets/hero-made-in-usa-solar-modules-bg.png"
      />

      <FeatureGridLight
        title="Solar Panels Made in the USA"
        intro="Konark Energy offers premium Made in USA Solar Modules, manufactured under stringent quality standards and compliant with global certification requirements. These modules are ideal for projects requiring high reliability, regulatory compliance and supply chain assurance."
        features={usaFeatures}
      />

      <SpecTierCard
        title="Made in USA Solar Modules"
        copy="High-efficiency Mono and N-Type modules manufactured in the United States with advanced automation and quality control."
        points={[
          "Manufactured under strict US quality standards",
          "High module efficiency (>21–23%)",
          "Enhanced durability and long lifecycle",
          "Compliance with global certifications (UL, IEC, CE)",
          "Ideal for export-driven and government projects",
        ]}
        image="/assets/made-in-usa-module.png"
        imageAlt="Made in USA Solar Module"
        tone="dark"
      />

      <ApplicationsShowcase
        images={[
          "/assets/made-in-usa-applications-1.png",
          "/assets/made-in-usa-applications-2.png",
          "/assets/made-in-usa-applications-3.png",
        ]}
        imageAlt="Made in USA Solar Modules deployed at a utility-scale solar farm"
      />

      <Certifications />

      <CTABanner title="Premium solar technology with global compliance." />
    </>
  );
}
