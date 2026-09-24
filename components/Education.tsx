import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section pt-0">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><h2 className="section-title">Education<span className="text-accent">.</span></h2></Reveal>
        <ul className="space-y-6 lg:col-span-8">
          {site.education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80}>
              <li className="flex flex-col gap-1 rounded-3xl border border-line bg-card p-6 sm:flex-row sm:items-baseline sm:justify-between">
                <span>
                  <span className="block font-display font-extrabold text-2xl">{e.degree}</span>
                  <span className="block text-muted">{e.school}</span>
                </span>
                <span className="text-sm text-muted">{e.period}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
