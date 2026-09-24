import { Mail, Phone, Download } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section pt-0">
      <Reveal>
        <div className="wrap relative overflow-hidden rounded-[2.5rem] bg-accent px-6 py-16 text-white sm:px-14 sm:py-24">
          <div className="blob bg-[#8F80E6] w-[400px] h-[400px] -top-32 -right-20 opacity-60" />
          <h2 className="relative font-display font-extrabold text-5xl leading-[0.95] tracking-tight sm:text-7xl max-w-3xl">
            Let’s make something people actually stop scrolling for.
          </h2>
          <p className="relative mt-6 max-w-xl text-lg text-white/75">{site.availability}. Based in {site.location}, working with teams anywhere.</p>
          <div className="relative mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn bg-white text-ink hover:-translate-y-0.5 hover:shadow-lifted"><Mail size={16} /> {site.email}</a>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn border border-white/40 hover:bg-white/10"><Phone size={16} /> {site.phone}</a>
            <a href={site.cvFile} download className="btn border border-white/40 hover:bg-white/10"><Download size={16} /> Download CV</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
