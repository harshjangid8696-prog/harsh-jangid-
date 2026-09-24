import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal><h2 className="section-title">What I do<span className="text-accent">.</span></h2></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 100}>
              <div className="h-full rounded-3xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted hover:border-accent/40">
                <h3 className="font-display font-extrabold text-2xl">{g.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full bg-paper px-3 py-1.5 text-sm text-muted">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
