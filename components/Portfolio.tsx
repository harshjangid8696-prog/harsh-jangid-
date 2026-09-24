"use client";
import { useState } from "react";
import { site } from "@/data/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Portfolio() {
  const cats = ["All", ...Array.from(new Set(site.portfolio.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? site.portfolio : site.portfolio.filter((p) => p.category === active);
  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="section-title">Selected work<span className="text-accent">.</span></h2>
              <p className="section-lead">Creatives, reels, thumbnails and campaigns shipped for real brands.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button key={c} onClick={() => setActive(c)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${active === c ? "bg-ink text-white scale-105" : "border border-line bg-card text-muted hover:border-ink"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <Reveal key={p.title} delay={(i % 3) * 100}><ProjectCard p={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
