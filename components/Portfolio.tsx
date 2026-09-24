"use client";
import { useState } from "react";
import { site } from "@/data/site";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const cats = ["All", ...Array.from(new Set(site.portfolio.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const list = active === "All" ? site.portfolio : site.portfolio.filter((p) => p.category === active);
  return (
    <section id="work" className="section border-t border-line">
      <div className="wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">Selected work</h2>
            <p className="section-lead">Creatives, reels, thumbnails and campaigns shipped for real brands.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${active === c ? "bg-ink text-white" : "border border-line bg-card text-muted hover:border-ink"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
