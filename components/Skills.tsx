import { site } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="wrap">
        <h2 className="section-title">Skills</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((g) => (
            <div key={g.group}>
              <h3 className="font-display text-2xl">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-card px-3 py-1.5 text-sm text-muted">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
