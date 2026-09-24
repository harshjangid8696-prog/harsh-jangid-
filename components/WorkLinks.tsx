import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function WorkLinks() {
  return (
    <section className="section">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 className="section-title">Live on the internet<span className="text-accent">.</span></h2>
          <p className="section-lead">Pages where my work goes out every week.</p>
        </Reveal>
        <ul className="divide-y divide-line border-y border-line lg:col-span-8">
          {site.workLinks.map((l, i) => (
            <Reveal key={l.href} delay={i * 60}>
              <li>
                <a href={l.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 py-5 transition-all hover:pl-3">
                  <span>
                    <span className="block font-display font-extrabold text-xl group-hover:text-accent">{l.label}</span>
                    <span className="block text-sm text-muted">{l.note}</span>
                  </span>
                  <ArrowUpRight size={20} className="shrink-0 text-faint transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
