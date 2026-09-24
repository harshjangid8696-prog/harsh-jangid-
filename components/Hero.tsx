"use client";
import { useImgOk } from "./useImgOk";
import { Download, ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import Counter from "./Counter";

export default function Hero() {
  const [role1, role2] = site.role.split(" & ");
  const ok = useImgOk(site.photo);
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="blob bg-accent-light w-[520px] h-[520px] -top-40 -left-40" />
      <div className="blob bg-[#FFE2C2] w-[420px] h-[420px] top-40 right-[-120px]" style={{ animationDelay: "-8s" }} />
      <div className="wrap relative grid gap-12 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="hero-enter inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-4 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> {site.availability}
          </p>
          <h1 className="hero-enter d1 mt-7 font-display font-extrabold text-[3.4rem] leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            {role1}<br />
            <span className="text-accent">&amp;</span> {role2}
          </h1>
          <p className="hero-enter d2 mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{site.tagline}</p>
          <div className="hero-enter d3 mt-9 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">See my work <ArrowDown size={16} /></a>
            <a href={site.cvFile} download className="btn btn-ghost"><Download size={16} /> Download CV</a>
          </div>
          <dl className="hero-enter d4 mt-14 grid max-w-xl grid-cols-3 gap-6">
            {site.highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-display font-extrabold text-4xl sm:text-5xl text-accent"><Counter value={h.value} /></dt>
                <dd className="mt-1 text-sm text-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-enter d2 relative lg:col-span-5 mx-auto w-full max-w-sm">
          <div className="photo-card relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-accent shadow-lifted">
            {ok !== false ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.photo} alt={site.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-white/80 text-center p-8">
                <Sparkles size={40} />
                <p className="font-display font-extrabold text-2xl">{site.name}</p>
                <p className="text-sm text-white/60">Upload photo from /admin</p>
              </div>
            )}
          </div>
          <div className="sticker absolute -top-8 -right-6 h-28 w-28">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <circle cx="50" cy="50" r="48" className="fill-ink" />
              <text className="fill-white font-display font-extrabold" fontSize="11.5" letterSpacing="2"><textPath href="#c">DESIGN · SOCIAL · MOTION · </textPath></text>
              <text x="50" y="55" textAnchor="middle" className="fill-white" fontSize="18">✦</text>
            </svg>
          </div>
          <div className="float absolute -bottom-6 -left-8 rounded-2xl bg-card px-5 py-3 shadow-lifted border border-line">
            <p className="text-xs text-muted">Based in</p>
            <p className="font-display font-extrabold text-lg">{site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
