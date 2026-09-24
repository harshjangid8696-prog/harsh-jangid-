import { site } from "@/data/site";

export default function Education() {
  return (
    <section className="section border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4"><h2 className="section-title">Education</h2></div>
        <ul className="space-y-6 lg:col-span-8">
          {site.education.map((e) => (
            <li key={e.degree} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span>
                <span className="block font-display text-2xl">{e.degree}</span>
                <span className="block text-muted">{e.school}</span>
              </span>
              <span className="text-sm text-muted">{e.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
