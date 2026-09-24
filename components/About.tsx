import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><h2 className="section-title">About<span className="text-accent">.</span></h2></Reveal>
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8">
          {site.about.map((p, i) => (
            <Reveal key={i} delay={i * 100}><p className={i === 0 ? "text-ink text-xl sm:text-2xl font-display font-medium leading-snug" : ""}>{p}</p></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
