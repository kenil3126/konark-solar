export const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Energy Storage",
    to: "/energy-storage",
    children: [
      { label: "Electric Energy Storage", to: "/energy-storage/electric-energy-storage" },
      { label: "Industrial & Commercial", to: "/energy-storage/industrial-commercial" },
      { label: "Communication Energy Storage", to: "/energy-storage/communication-energy-storage" },
      { label: "Data Center Energy Storage", to: "/energy-storage/data-center-energy-storage" },
      { label: "Household Energy Storage", to: "/energy-storage/household-energy-storage" },
      { label: "Sodium Battery Energy Storage", to: "/energy-storage/sodium-battery-energy-storage" },
      { label: "Consumer Battery Energy Storage", to: "https://en.cospowers.com/", external: true },
    ],
  },
  {
    label: "Solar Modules",
    to: "/solar-modules",
    children: [
      { label: "N Type Module", to: "/solar-modules/n-type" },
      { label: "P Type Module", to: "/solar-modules/p-type" },
      { label: "Made in USA", to: "/solar-modules/made-in-usa" },
      { label: "Residential Module", to: "/solar-modules/residential" },
    ],
  },
  {
    label: "Battery Cells",
    to: "/battery-cells",
    children: [
      { label: "Prismatic Lithium Ion", to: "/battery-cells/prismatic-lithium-ion" },
      { label: "Prismatic Sodium Ion", to: "/battery-cells/prismatic-sodium-ion" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
];

export const company = {
  name: "Konark Energy",
  address: "1560 E Southlake Blvd Suite 100, Southlake, TX 76092",
  email: "info@konarkinc.com",
  phone: "+1 214-366-1070",
  phoneHref: "tel:+12143661070",
};
