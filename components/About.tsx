import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="section-title">About</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8">
          {site.about.map((p, i) => (
            <p key={i} className={i === 0 ? "text-ink" : ""}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
