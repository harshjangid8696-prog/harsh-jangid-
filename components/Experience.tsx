import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section bg-ink text-white rounded-[2.5rem] mx-3 sm:mx-6">
      <div className="wrap">
        <Reveal><h2 className="section-title">Experience<span className="text-accent-light">.</span></h2></Reveal>
        <div className="mt-12 divide-y divide-white/15 border-y border-white/15">
          {site.experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 120}>
              <article className="grid gap-4 py-10 lg:grid-cols-12">
                <p className="text-sm text-white/60 lg:col-span-3">{job.period}</p>
                <div className="lg:col-span-9">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl">{job.role}</h3>
                  <p className="mt-1 text-white/70">{job.company} <span className="text-white/40">— {job.brands}</span></p>
                  <ul className="mt-5 space-y-2 text-white/75">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
