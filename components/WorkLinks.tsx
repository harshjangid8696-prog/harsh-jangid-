import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function WorkLinks() {
  return (
    <section className="section border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="section-title">Live on the internet</h2>
          <p className="section-lead">Pages where my work is published every week.</p>
        </div>
        <ul className="divide-y divide-line border-y border-line lg:col-span-8">
          {site.workLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 py-5">
                <span>
                  <span className="block font-medium group-hover:text-accent">{l.label}</span>
                  <span className="block text-sm text-muted">{l.note}</span>
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-faint group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
