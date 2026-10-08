import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function ButtonRow({
  primaryLabel = "View All Products",
  primaryTo = "/energy-storage",
  primaryHref,
  secondaryLabel = "Download Brochure",
  secondaryHref = "#",
  tertiaryLabel = "Enquire Now",
  tertiaryTo = "/contact",
}) {
  const primaryActionProps = primaryHref
    ? { href: primaryHref, target: "_blank", rel: "noreferrer" }
    : { to: primaryTo };

  const PrimaryAction = primaryHref ? "a" : Link;

  return (
    <section className="pt-4 pb-16 bg-paper">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="flex flex-wrap items-center justify-center gap-4">
          <PrimaryAction
            {...primaryActionProps}
            className="inline-flex items-center justify-center rounded-sm bg-forest text-white font-semibold px-7 py-3.5 hover:bg-forest-light"
          >
            {primaryLabel}
          </PrimaryAction>
          <a
            href={secondaryHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-forest text-paper font-semibold px-7 py-3.5 hover:bg-forest-light"
          >
            {secondaryLabel}
          </a>
          <Link
            to={tertiaryTo}
            className="inline-flex items-center justify-center rounded-sm border border-forest text-forest font-semibold px-7 py-3.5 hover:bg-forest hover:text-white"
          >
            {tertiaryLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
