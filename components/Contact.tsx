import { Mail, Phone, Download } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap rounded-3xl bg-ink px-6 py-16 text-white sm:px-14 sm:py-24">
        <h2 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-7xl max-w-3xl">
          Let’s make something people actually stop scrolling for.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/70">{site.availability}. Based in {site.location}, working with teams anywhere.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn bg-white text-ink hover:bg-accent-light"><Mail size={16} /> {site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn border border-white/30 hover:border-white"><Phone size={16} /> {site.phone}</a>
          <a href={site.cvFile} download className="btn border border-white/30 hover:border-white"><Download size={16} /> Download CV</a>
        </div>
      </div>
    </section>
  );
}
