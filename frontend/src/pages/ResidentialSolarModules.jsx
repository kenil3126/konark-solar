import { Minimize2, TrendingUp, Home, BadgeCheck } from "lucide-react";
import Hero from "../components/Hero";
import FeatureGridLight from "../components/FeatureGridLight";
import SpecTierCard from "../components/SpecTierCard";
import ApplicationsShowcase from "../components/ApplicationsShowcase";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";

const residentialFeatures = [
  { icon: Minimize2, label: "Compact design" },
  { icon: TrendingUp, label: "High efficiency for limited roof space" },
  { icon: Home, label: "Sleek all black aesthetics" },
  { icon: BadgeCheck, label: "Reliable long-term performance" },
];

export default function ResidentialSolarModules() {
  return (
    <>
      <Hero
        eyebrow="Solar Modules"
        title="Residential Solar Modules"
        subtitle="Specially designed modules for residential rooftops, combining aesthetics with high performance."
        tone="light"
        backgroundImage="/assets/hero-residential-solar-modules-bg.png"
      />

      <FeatureGridLight
        title="Solar Panels Made for Roof Spaces"
        intro="Konark Energy&rsquo;s Residential Solar Modules are designed to deliver maximum energy output in limited roof space, combining high efficiency with aesthetic appeal. Available in both N-Type and P-Type variants, these modules are optimized for modern homes and residential societies."
        features={residentialFeatures}
      />

      <SpecTierCard
        title="Konark 440 W - 460 W"
        copy="Compact, high-efficiency modules designed for space-constrained installations such as rooftops and small commercial systems."
        points={[
          "Module efficiency up to ~21–22%",
          "Advanced TOPCon cell technology",
          "Excellent low-light performance",
          "Low temperature coefficient for higher yield",
          "Reduced LID (Light Induced Degradation)",
          "Durable tempered glass and IP68 junction box",
        ]}
        image="/assets/residential-440-460w-module.png"
        imageAlt="Konark 440W-460W Residential Solar Module"
        tone="dark"
      />

      <ApplicationsShowcase
        images={[
          "/assets/residential-applications-1.png",
          "/assets/residential-applications-2.png",
          "/assets/residential-applications-3.png",
          "/assets/residential-applications-4.png",
        ]}
        imageAlt="Residential Solar Modules installed on a home rooftop"
      />

      <Certifications />

      <CTABanner title="Empower your home with clean energy." />
    </>
  );
}
