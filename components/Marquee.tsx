import { site } from "@/data/site";

export default function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="marquee bg-accent py-4 text-white -rotate-1 scale-105 my-6">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="font-display font-extrabold text-2xl sm:text-3xl px-6 flex items-center gap-6">
            {t} <span className="h-2 w-2 rounded-full bg-white/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
