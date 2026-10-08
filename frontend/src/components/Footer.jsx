import { Link } from "react-router-dom";
import { company, nav } from "../lib/siteData";
import Reveal from "./Reveal";

const socialIcons = {
  Facebook: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.9 2H22l-7.2 8.2L23.3 22h-6.7l-5.2-6.8L5.4 22H2.3l7.7-8.8L1 2h6.9l4.7 6.2Zm-1.2 18h1.9L7 3.9H5Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Linkedin: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3ZM10 9h3.8v1.7h.05c.53-.98 1.83-2 3.76-2 4.02 0 4.76 2.55 4.76 5.87V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.44-2.17 2.96V21h-4Z" />
    </svg>
  ),
};

const downloads = [
  { label: "Company Profile", href: "#" },
  { label: "Energy Storage Products Specification Sheets", href: "https://en.cospowers.com/download/index.html" },
  { label: "Energy Storage Products E-brochures", href: "https://en.cospowers.com/download/brochure.html" },
  { label: "Battery Cells Specification Sheets", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#080b0a] text-paper/90">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h5 className="text-base lg:text-lg font-semibold tracking-wide text-sun-light mb-4 pb-3 border-b border-white/15">Our Base</h5>
              <p className="text-sm text-paper/70 leading-relaxed">{company.address}</p>
            </div>
            <div>
              <h5 className="text-base lg:text-lg font-semibold tracking-wide text-sun-light mb-4 pb-3 border-b border-white/15">Links</h5>
              <ul className="space-y-2 text-sm text-paper/70">
                {nav.map((n) => (
                  <li key={n.label}>
                    <Link to={n.to} className="hover:text-white">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-base lg:text-lg font-semibold tracking-wide text-sun-light mb-4 pb-3 border-b border-white/15">Downloads</h5>
              <ul className="space-y-2 text-sm text-paper/70">
                {downloads.map((d) => (
                  <li key={d.label}>
                    <a href={d.href} target="_blank" rel="noreferrer" className="hover:text-white">
                      {d.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <div className="flex items-center gap-4">
              {Object.entries(socialIcons).map(([name, icon]) => (
                <a
                  key={name}
                  href="/"
                  aria-label={name}
                  className="h-9 w-9 rounded-sm border border-white/15 flex items-center justify-center hover:bg-white hover:text-forest"
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-paper/50 text-center">
              © Copyright {new Date().getFullYear()} Konark Energy — All Rights Reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
