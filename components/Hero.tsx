import { Download, ArrowDown } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="wrap pt-16 pb-20 sm:pt-24 sm:pb-28">
      <p className="hero-enter text-sm text-muted">{site.location} · {site.availability}</p>
      <h1 className="hero-enter hero-enter-2 mt-6 font-display text-[3.2rem] leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.5rem] max-w-5xl">
        {site.role.split(" & ")[0]} <em className="text-accent">&amp;</em> {site.role.split(" & ")[1]}
      </h1>
      <p className="hero-enter hero-enter-3 mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        {site.tagline}
      </p>
      <div className="hero-enter hero-enter-3 mt-10 flex flex-wrap gap-3">
        <a href="#work" className="btn btn-primary">See my work <ArrowDown size={16} /></a>
        <a href={site.cvFile} download className="btn btn-ghost"><Download size={16} /> Download CV</a>
      </div>
      <dl className="hero-enter hero-enter-3 mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
        {site.highlights.map((h) => (
          <div key={h.label}>
            <dt className="font-display text-4xl">{h.value}</dt>
            <dd className="mt-1 text-sm text-muted">{h.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
