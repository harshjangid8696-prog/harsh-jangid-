import { site } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="wrap">
        <h2 className="section-title">Experience</h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {site.experience.map((job) => (
            <article key={job.role + job.period} className="grid gap-4 py-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-sm text-muted">{job.period}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-display text-3xl">{job.role}</h3>
                <p className="mt-1 text-muted">{job.company} <span className="text-faint">— {job.brands}</span></p>
                <ul className="mt-5 space-y-2 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{pt}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
