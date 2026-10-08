import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { nav, company } from "../lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden lg:block overflow-hidden transition-all duration-300 ${
          scrolled ? "h-0 opacity-0" : "h-9 opacity-100"
        }`}
        style={{ background: "#0b3d31", color: "rgba(255,255,255,0.8)" }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-9 flex items-center justify-between text-xs tracking-normal">
          <p className="text-white/70">Solar PV Modules &amp; Battery Energy Storage Systems</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 text-white/70 hover:text-white">
              <Mail size={12} /> {company.email}
            </a>
            <a href={company.phoneHref} className="flex items-center gap-1.5 text-white/70 hover:text-white">
              <Phone size={12} /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled ? "bg-white border-line" : "bg-transparent border-white/15"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/assets/konark-logo.png" alt="Konark Energy" className={`h-8 md:h-9 w-auto transition-[filter] ${scrolled ? "" : "brightness-0 invert"}`} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative h-20 flex items-center"
                onMouseEnter={() => item.children && setOpenChild(item.label)}
                onMouseLeave={() => item.children && setOpenChild(null)}
              >
                <NavLink
                  to={item.to}
                  onClick={() => setOpenChild(null)}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-1 px-4 h-20 text-[12px] font-semibold tracking-[0.08em] uppercase ${
                      scrolled
                        ? isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                        : isActive ? "text-white" : "text-white/75 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {item.children && (
                        <ChevronDown
                          size={13}
                          strokeWidth={2.5}
                          className={`opacity-60 transition-transform duration-200 ${
                            openChild === item.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span
                        className={`absolute left-4 right-4 bottom-[22px] h-[2px] bg-sun origin-left transition-transform duration-200 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </>
                  )}
                </NavLink>

                <AnimatePresence>
                  {item.children && openChild === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full w-72 pt-3"
                    >
                      <div className="rounded-sm border border-line bg-white shadow-[0_12px_28px_rgba(11,61,49,0.10)] py-2 overflow-hidden">
                        {item.children.map((c) =>
                          c.external ? (
                            <a
                              key={c.label}
                              href={c.to}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => setOpenChild(null)}
                              className="group/item flex items-center gap-3 px-5 py-3 text-[13px] font-medium text-ink-soft hover:bg-paper-dim hover:text-forest"
                            >
                              <span className="h-3 w-[2px] bg-sun/0 group-hover/item:bg-sun" />
                              {c.label}
                            </a>
                          ) : (
                            <Link
                              key={c.label}
                              to={c.to}
                              onClick={() => setOpenChild(null)}
                              className="group/item flex items-center gap-3 px-5 py-3 text-[13px] font-medium text-ink-soft hover:bg-paper-dim hover:text-forest"
                            >
                              <span className="h-3 w-[2px] bg-sun/0 group-hover/item:bg-sun" />
                              {c.label}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <button
            className={`lg:hidden ${scrolled ? "text-ink" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-line"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-line/70 last:border-0">
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-semibold uppercase tracking-wide text-ink"
                    onClick={() =>
                      item.children
                        ? setOpenChild(openChild === item.label ? null : item.label)
                        : setOpen(false)
                    }
                  >
                    {item.children ? (
                      <span>{item.label}</span>
                    ) : (
                      <Link to={item.to} onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    )}
                    {item.children && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${openChild === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                  {item.children && openChild === item.label && (
                    <div className="pl-4 pb-3 flex flex-col gap-1">
                      {item.children.map((c) =>
                        c.external ? (
                          <a
                            key={c.label}
                            href={c.to}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setOpen(false)}
                            className="py-1.5 text-sm text-slate"
                          >
                            {c.label}
                          </a>
                        ) : (
                          <Link
                            key={c.label}
                            to={c.to}
                            onClick={() => setOpen(false)}
                            className="py-1.5 text-sm text-slate"
                          >
                            {c.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex flex-col gap-3 text-xs text-slate">
                <a href={`mailto:${company.email}`} className="flex items-center gap-2">
                  <Mail size={13} /> {company.email}
                </a>
                <a href={company.phoneHref} className="flex items-center gap-2">
                  <Phone size={13} /> {company.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
