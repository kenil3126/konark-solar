import { Zap, Gauge, CloudSun, BadgeCheck, TrendingDown, Thermometer } from "lucide-react";
import Hero from "../components/Hero";
import FeatureGridLight from "../components/FeatureGridLight";
import VariantsGrid from "../components/VariantsGrid";
import SpecTierCard from "../components/SpecTierCard";
import ApplicationsShowcase from "../components/ApplicationsShowcase";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";

const efficiencyFeatures = [
  { icon: Zap, label: "Maximized energy gains with Bifacial N-Type Module" },
  { icon: Gauge, label: "Higher Module Efficiency from 21% to 23%" },
  { icon: CloudSun, label: "Superior Low-light Performance" },
  { icon: BadgeCheck, label: "Improved Reliability & Durability" },
  { icon: TrendingDown, label: "Lower Annual Degradation from 0.40% to 0.45%" },
  { icon: Thermometer, label: "Best-in-class thermal coefficients" },
];

export default function NTypeSolarModules() {
  return (
    <>
      <Hero
        eyebrow="Solar Modules"
        title="N-type Solar Modules"
        subtitle="N-type Solar Modules represent the next generation of photovoltaic technology, offering superior efficiency, lower degradation and enhanced performance under real-world conditions. Unlike traditional P-type modules, N-type cells are resistant to light-induced degradation (LID), ensuring higher long-term energy yield."
        tone="light"
        backgroundImage="/assets/hero-ntype-solar-modules-bg.png"
      />

      <FeatureGridLight
        title="N-Type Modules: Advancing Efficiency"
        intro='Konark Energy&rsquo;s N-Type Solar Modules are the most advanced generation of photovoltaic technology, engineered using TOPCon cell architecture for superior efficiency, enhanced durability and higher long-term energy yield. These modules are designed to outperform conventional technologies with lower degradation, higher bifacial gain and excellent low-light performance, making them ideal for high-performance solar installations. N-type TOPCon modules today deliver efficiencies beyond 23% and power outputs exceeding 700W in advanced configurations.'
        features={efficiencyFeatures}
      />

      <VariantsGrid
        image="/assets/solar-pv-modules.png"
        items={[
          { label: "580 W - 595 W", image: "/assets/rooftop-series-module.png" },
          { label: "600 W - 635 W", image: "/assets/residential-series-module.png" },
          { label: "645 W - 670 W", image: "/assets/bifacial-glass-series-module.png" },
          { label: "695 W - 720 W", image: "/assets/commercial-series-module.png" },
        ]}
      />

      <SpecTierCard
        title="Konark 580 W - 595 W"
        copy="Compact, high-efficiency modules designed for space-constrained installations such as rooftops and small commercial systems."
        points={[
          "Module efficiency up to ~23.03%",
          "16BB HALF-CELL N-Type TOPCon Bifacial Double Glass Monocrystalline PV Module",
          "Ensured PID resistance through quality control",
          "Up to 25% additional power gain from back side",
          "Better Weak Illumination Response",
          "Adapt To Harsh Outdoor Environment",
        ]}
        image="/assets/rooftop-series-module.png"
        imageAlt="Konark 580W-595W N-type Solar Module"
        tone="dark"
      />

      <SpecTierCard
        title="Konark 600 W - 635 W"
        copy="High-output bifacial modules designed for Commercial and Industrial applications, offering superior energy yield and efficiency."
        points={[
          "Efficiency up to ~23.2%",
          "Bifacial technology with up to 25% rear-side gain",
          "Dual-glass construction for durability",
          "144 half-cell design with 16BB technology",
          "Anti-PID and low degradation performance",
          "High mechanical load resistance (5400Pa snow / 2400Pa wind)",
        ]}
        image="/assets/residential-series-module.png"
        imageAlt="Konark 600W-635W N-type Solar Module"
        tone="sun"
        reverse
      />

      <SpecTierCard
        title="Konark 645 W - 670 W"
        copy="Ultra-high efficiency modules engineered for large-scale installations requiring maximum output per panel."
        points={[
          "Module efficiency exceeding 22%",
          "High power density for reduced BOS costs",
          "Bifacial gain for higher energy yield",
          "Improved temperature coefficient (~ -0.29%/°C)",
          "Enhanced performance in harsh environments",
        ]}
        image="/assets/bifacial-glass-series-module.png"
        imageAlt="Konark 645W-670W N-type Solar Module"
        tone="dark"
      />

      <SpecTierCard
        title="Konark 695 W - 720 W"
        copy="Next-generation Solar Modules delivering industry-leading wattage, designed for utility-scale and high-capacity solar farms."
        points={[
          "Power output up to 720W+",
          "Efficiency up to ~22.7–23%",
          "Advanced large-format wafer design (G12)",
          "Higher Bifaciality (up to 85%)",
          "Lower BOS cost due to fewer modules required",
          "30-year performance warranty",
        ]}
        image="/assets/commercial-series-module.png"
        imageAlt="Konark 695W-720W N-type Solar Module"
        tone="sun"
        reverse
      />

      <ApplicationsShowcase
        images={[
          "/assets/ntype-applications-1.png",
          "/assets/ntype-applications-2.png",
          "/assets/ntype-applications-3.png",
          "/assets/ntype-applications-4.png",
          "/assets/ntype-applications-5.png",
        ]}
        imageAlt="N-type Solar Modules installed on residential rooftop"
      />

      <Certifications />

      <CTABanner title="Upgrade to High-Efficiency Solar Solutions." />
    </>
  );
}
