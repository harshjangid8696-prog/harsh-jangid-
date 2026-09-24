"use client";
import { useImgOk } from "./useImgOk";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  const ok = useImgOk(p.image);
  const Wrapper: any = p.href ? "a" : "div";
  const props = p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <Wrapper {...props} className="pcard group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-accent-light">
        {ok !== false ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-end p-6">
            <span className="font-display font-extrabold text-3xl leading-tight text-accent">{p.title}</span>
          </div>
        )}
        <div className="pcard-overlay absolute inset-0 flex items-end p-6 text-white">
          <div>
            <p className="text-xs text-white/70">{p.client}</p>
            <p className="font-display font-extrabold text-2xl leading-tight">{p.title}</p>
          </div>
          {p.href && <span className="ml-auto rounded-full bg-white p-2 text-ink"><ArrowUpRight size={16} /></span>}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="font-medium">{p.title}</h3>
        <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">{p.category}</span>
      </div>
    </Wrapper>
  );
}
