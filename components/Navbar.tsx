"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-tight">
          {site.name}<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">{l.label}</a>
          ))}
          <a href={`mailto:${site.email}`} className="btn btn-primary !py-2">Hire me</a>
        </nav>
        <button
          className="md:hidden rounded-md p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="wrap flex flex-col py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base">{l.label}</a>
            ))}
            <a href={`mailto:${site.email}`} className="btn btn-primary mt-2 self-start">Hire me</a>
          </div>
        </nav>
      )}
    </header>
  );
}
