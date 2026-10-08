import { Mail, Phone, MapPin } from "lucide-react";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import WordReveal from "../components/WordReveal";
import { company } from "../lib/siteData";

export default function Contact() {
  return (
    <>
      <Hero
        eyebrow="Get In Touch"
        title="Let's talk about your energy project"
        subtitle="Tell us about your residential, commercial or utility-scale requirement — our team will follow up shortly."
        tone="dark"
      />

      <section className="relative overflow-hidden py-20 lg:py-28 bg-paper-dim">
        
        <div className="mx-auto max-w-5xl px-5 lg:px-8 relative">
          <Reveal>
            <div>
              <p className="text-base lg:text-lg font-semibold tracking-wide text-forest-light mb-5">Contact Details</p>
              <WordReveal text="We'd love to hear from you" className="font-display text-3xl lg:text-6xl font-medium text-ink mb-12 tracking-[-0.02em]" />

              <div className="grid gap-0 md:grid-cols-3 border-t border-line">
                <div className="group flex items-start gap-4 border-b md:border-b-0 md:border-r last:border-r-0 border-line py-8 md:px-6 first:md:pl-0 transition-colors hover:bg-white">
                  <div className="h-11 w-11 rounded-sm bg-sun text-forest flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 ">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate mb-1">Our Base</p>
                    <p className="text-ink leading-relaxed">{company.address}</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 border-b md:border-b-0 md:border-r last:border-r-0 border-line py-8 md:px-6 first:md:pl-0 transition-colors hover:bg-white">
                  <div className="h-11 w-11 rounded-sm bg-sun text-forest flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 ">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate mb-1">Email</p>
                    <a href={`mailto:${company.email}`} className="text-ink hover:text-forest break-all">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 border-b md:border-b-0 md:border-r last:border-r-0 border-line py-8 md:px-6 first:md:pl-0 transition-colors hover:bg-white">
                  <div className="h-11 w-11 rounded-sm bg-sun text-forest flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:rotate-12 ">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-slate mb-1">Phone</p>
                    <a href={company.phoneHref} className="text-ink hover:text-forest">
                      {company.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
