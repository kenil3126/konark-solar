import Hero from "../components/Hero";
import AboutFlow from "../components/AboutFlow";
import VisionMission from "../components/VisionMission";
import Strengths from "../components/Strengths";
import Certifications from "../components/Certifications";
import AboutGetInTouch from "../components/AboutGetInTouch";

export default function About() {
  return (
    <>
      <Hero
        eyebrow="Konark Energy"
        title="About Us"
        tone="light"
        backgroundImage="/assets/hero-about-us-bg.png"
      />

      <AboutFlow />

      <VisionMission />
      <Strengths />
      <Certifications />
      <AboutGetInTouch />
    </>
  );
}
