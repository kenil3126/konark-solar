import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import SolarModules from "./pages/SolarModules";
import EnergyStorage from "./pages/EnergyStorage";
import ElectricEnergyStorage from "./pages/ElectricEnergyStorage";
import IndustrialCommercial from "./pages/IndustrialCommercial";
import CommunicationEnergyStorage from "./pages/CommunicationEnergyStorage";
import DataCenterEnergyStorage from "./pages/DataCenterEnergyStorage";
import HouseholdEnergyStorage from "./pages/HouseholdEnergyStorage";
import SodiumBatteryEnergyStorage from "./pages/SodiumBatteryEnergyStorage";
import NTypeSolarModules from "./pages/NTypeSolarModules";
import PTypeSolarModules from "./pages/PTypeSolarModules";
import MadeInUsaSolarModules from "./pages/MadeInUsaSolarModules";
import ResidentialSolarModules from "./pages/ResidentialSolarModules";
import PrismaticLithiumIon from "./pages/PrismaticLithiumIon";
import PrismaticSodiumIon from "./pages/PrismaticSodiumIon";
import BatteryCells from "./pages/BatteryCells";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="relative">
      <ScrollToTop />
      <SmoothScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solar-modules" element={<SolarModules />} />
          <Route path="/energy-storage" element={<EnergyStorage />} />
          <Route path="/energy-storage/electric-energy-storage" element={<ElectricEnergyStorage />} />
          <Route path="/energy-storage/industrial-commercial" element={<IndustrialCommercial />} />
          <Route path="/energy-storage/communication-energy-storage" element={<CommunicationEnergyStorage />} />
          <Route path="/energy-storage/data-center-energy-storage" element={<DataCenterEnergyStorage />} />
          <Route path="/energy-storage/household-energy-storage" element={<HouseholdEnergyStorage />} />
          <Route path="/energy-storage/sodium-battery-energy-storage" element={<SodiumBatteryEnergyStorage />} />
          <Route path="/solar-modules/n-type" element={<NTypeSolarModules />} />
          <Route path="/solar-modules/p-type" element={<PTypeSolarModules />} />
          <Route path="/solar-modules/made-in-usa" element={<MadeInUsaSolarModules />} />
          <Route path="/solar-modules/residential" element={<ResidentialSolarModules />} />
          <Route path="/battery-cells/prismatic-lithium-ion" element={<PrismaticLithiumIon />} />
          <Route path="/battery-cells/prismatic-sodium-ion" element={<PrismaticSodiumIon />} />
          <Route path="/battery-cells" element={<BatteryCells />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
