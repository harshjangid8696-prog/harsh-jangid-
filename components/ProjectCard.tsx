"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  const [broken, setBroken] = useState(false);
  const Wrapper: any = p.href ? "a" : "div";
  const props = p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Wrapper {...props} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-accent-light">
        {!broken ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.title} loading="lazy" onError={() => setBroken(true)} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-end p-5">
            <span className="font-display text-3xl leading-tight text-accent">{p.title}</span>
          </div>
        )}
        {p.href && (
          <span className="absolute right-3 top-3 rounded-full bg-card p-2 opacity-0 transition-opacity group-hover:opacity-100">
            <ArrowUpRight size={16} />
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-medium">{p.title}</h3>
        <span className="shrink-0 text-sm text-faint">{p.client}</span>
      </div>
      <p className="text-sm text-muted">{p.category}</p>
    </Wrapper>
  );
}
