import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. {site.role}.</p>
        <ul className="flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-ink">{s.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
