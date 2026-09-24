"use client";
import { useEffect, useState } from "react";
import { Plus, Trash2, Upload, Save, LogOut, ExternalLink, Check, AlertCircle } from "lucide-react";
import initial from "@/data/site.json";

type Any = any;
const API = "https://api.github.com";
const b64 = (s: string) => btoa(unescape(encodeURIComponent(s)));
const fileToB64 = (f: File) => new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res((r.result as string).split(",")[1]); r.onerror = rej; r.readAsDataURL(f); });

// Sections shown in the editor (key → label). Everything else in JSON is hidden.
const SECTIONS: [string, string][] = [
  ["basics", "Basic info"], ["highlights", "Hero numbers"], ["marquee", "Marquee strip"], ["about", "About paragraphs"],
  ["experience", "Experience"], ["skills", "Skills"], ["portfolio", "Portfolio"], ["workLinks", "Live work links"],
  ["education", "Education"], ["socials", "Social profiles"], ["seo", "SEO"],
];
const BASIC_KEYS = ["name", "role", "tagline", "location", "email", "phone", "availability", "photo", "cvFile"];
const LONG = new Set(["tagline", "description", "note"]);

export default function AdminEditor() {
  const [token, setToken] = useState("");
  const [data, setData] = useState<Any>(initial);
  const [sha, setSha] = useState<string>("");
  const [tab, setTab] = useState("basics");
  const [status, setStatus] = useState<{ t: "ok" | "err" | "busy"; m: string } | null>(null);
  const [pending, setPending] = useState<{ path: string; file: File }[]>([]);
  const { owner, repo, branch } = data.admin;
  const hdr = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" };

  useEffect(() => { const t = localStorage.getItem("gh_token"); if (t) setToken(t); }, []);
  useEffect(() => { if (token) { localStorage.setItem("gh_token", token); load(); } /* eslint-disable-next-line */ }, [token]);

  async function load() {
    setStatus({ t: "busy", m: "Loading latest content from GitHub…" });
    try {
      const r = await fetch(`${API}/repos/${owner}/${repo}/contents/data/site.json?ref=${branch}`, { headers: hdr, cache: "no-store" });
      if (!r.ok) throw new Error(r.status === 401 ? "Token galat hai" : `GitHub error ${r.status}`);
      const j = await r.json();
      setSha(j.sha);
      setData(JSON.parse(decodeURIComponent(escape(atob(j.content.replace(/\n/g, ""))))));
      setStatus({ t: "ok", m: "Latest content loaded." });
    } catch (e: Any) { setStatus({ t: "err", m: e.message }); }
  }

  async function putFile(path: string, contentB64: string, message: string) {
    let existingSha: string | undefined;
    const g = await fetch(`${API}/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, { headers: hdr, cache: "no-store" });
    if (g.ok) existingSha = (await g.json()).sha;
    const r = await fetch(`${API}/repos/${owner}/${repo}/contents/${path}`, {
      method: "PUT", headers: hdr,
      body: JSON.stringify({ message, content: contentB64, branch, ...(existingSha ? { sha: existingSha } : {}) }),
    });
    if (!r.ok) throw new Error(`Upload failed: ${path} (${r.status})`);
    return (await r.json()).content.sha as string;
  }

  async function save() {
    if (!token) return;
    setStatus({ t: "busy", m: "Saving…" });
    try {
      for (const p of pending) {
        setStatus({ t: "busy", m: `Uploading ${p.path}…` });
        await putFile(p.path, await fileToB64(p.file), `Upload ${p.path}`);
      }
      setPending([]);
      const newSha = await putFile("data/site.json", b64(JSON.stringify(data, null, 2)), "Update site content from admin");
      setSha(newSha);
      setStatus({ t: "ok", m: "Saved! Vercel 1–2 minute mein live update kar dega." });
    } catch (e: Any) { setStatus({ t: "err", m: e.message }); }
  }

  const set = (path: (string | number)[], v: Any) => {
    setData((d: Any) => { const c = structuredClone(d); let o = c; for (let i = 0; i < path.length - 1; i++) o = o[path[i]]; o[path[path.length - 1]] = v; return c; });
  };
  const queueImage = (path: (string | number)[], folder: string, file: File) => {
    const clean = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
    const repoPath = `public/${folder}${clean}`;
    setPending((p) => [...p.filter((x) => x.path !== repoPath), { path: repoPath, file }]);
    set(path, `/${folder}${clean}`);
  };

  // ---------- generic field renderers ----------
  const Input = ({ path, label }: { path: (string | number)[]; label: string }) => {
    const val = path.reduce((o: Any, k) => o?.[k], data) ?? "";
    const cls = "mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm focus:border-accent";
    return (
      <label className="block">
        <span className="text-xs font-medium text-muted">{label}</span>
        {LONG.has(String(path[path.length - 1])) || String(val).length > 90
          ? <textarea rows={3} className={cls} value={val} onChange={(e) => set(path, e.target.value)} />
          : <input className={cls} value={val} onChange={(e) => set(path, e.target.value)} />}
      </label>
    );
  };
  const ImageField = ({ path, folder, label }: { path: (string | number)[]; folder: string; label: string }) => {
    const val = path.reduce((o: Any, k) => o?.[k], data) ?? "";
    const pend = pending.find((p) => `/${p.path.replace(/^public\//, "")}` === val);
    return (
      <div className="flex items-center gap-3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-accent-light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {val && <img src={pend ? URL.createObjectURL(pend.file) : val} alt="" className="h-full w-full object-cover" onError={(e) => ((e.target as Any).style.opacity = 0)} />}
        </div>
        <div className="flex-1">
          <span className="text-xs font-medium text-muted">{label} <span className="text-faint">{val}</span></span>
          <label className="btn btn-ghost mt-1 !py-1.5 !px-3 cursor-pointer text-xs"><Upload size={14} /> Choose image
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && queueImage(path, folder, e.target.files[0])} />
          </label>
        </div>
      </div>
    );
  };
  const StringList = ({ path, label }: { path: string[]; label: string }) => {
    const arr: string[] = path.reduce((o: Any, k) => o?.[k], data) ?? [];
    return (
      <label className="block">
        <span className="text-xs font-medium text-muted">{label} — ek line = ek item</span>
        <textarea rows={Math.max(4, arr.length + 1)} className="mt-1 w-full rounded-xl border border-line bg-white px-3 py-2 text-sm"
          value={arr.join("\n")} onChange={(e) => set(path, e.target.value.split("\n"))} />
      </label>
    );
  };
  const ObjectList = ({ path, fields, image, blank }: { path: string[]; fields: string[]; image?: { key: string; folder: string }; blank: Any }) => {
    const arr: Any[] = path.reduce((o: Any, k) => o?.[k], data) ?? [];
    return (
      <div className="space-y-4">
        {arr.map((item, i) => (
          <div key={i} className="rounded-2xl border border-line bg-paper p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-faint">#{i + 1}</span>
              <button onClick={() => set(path, arr.filter((_, j) => j !== i))} className="text-red-600 text-xs inline-flex items-center gap-1"><Trash2 size={13} /> Remove</button>
            </div>
            {image && <ImageField path={[...path, i, image.key]} folder={image.folder} label="Image" />}
            <div className="grid gap-3 sm:grid-cols-2">
              {fields.map((f) => Array.isArray(item[f])
                ? <div key={f} className="sm:col-span-2"><StringList path={[...path, String(i), f] as Any} label={f} /></div>
                : <Input key={f} path={[...path, i, f]} label={f} />)}
            </div>
          </div>
        ))}
        <button onClick={() => set(path, [...arr, structuredClone(blank)])} className="btn btn-ghost !py-2 text-xs"><Plus size={14} /> Add new</button>
      </div>
    );
  };

  // ---------- login screen ----------
  if (!token) return (
    <main className="wrap max-w-lg py-24">
      <h1 className="font-display font-extrabold text-4xl">Site admin</h1>
      <p className="mt-3 text-muted text-sm">Ek baar GitHub token daalo — browser mein save ho jayega. Phir yahin se sab edit + upload hoga.</p>
      <ol className="mt-5 text-sm text-muted list-decimal pl-5 space-y-1">
        <li>Open <a className="ulink text-accent" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">github.com/settings/personal-access-tokens/new</a></li>
        <li>Name: <b>portfolio-admin</b>, Expiration: 1 year</li>
        <li>Repository access → <b>Only select repositories</b> → <b>{repo}</b></li>
        <li>Permissions → Repository → <b>Contents: Read and write</b></li>
        <li>Generate → token copy karke neeche paste karo</li>
      </ol>
      <form onSubmit={(e) => { e.preventDefault(); const v = (e.currentTarget.elements.namedItem("t") as HTMLInputElement).value.trim(); if (v) setToken(v); }} className="mt-6 flex gap-2">
        <input name="t" type="password" placeholder="github_pat_…" className="flex-1 rounded-xl border border-line bg-white px-3 py-2 text-sm" />
        <button className="btn btn-primary">Login</button>
      </form>
    </main>
  );

  // ---------- editor ----------
  return (
    <main className="min-h-screen bg-paper">
      <div className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="wrap flex h-14 items-center justify-between gap-3">
          <span className="font-display font-extrabold text-xl">Edit site</span>
          <div className="flex items-center gap-2">
            {status && (
              <span className={`hidden sm:inline-flex items-center gap-1 text-xs ${status.t === "err" ? "text-red-600" : status.t === "ok" ? "text-green-700" : "text-muted"}`}>
                {status.t === "ok" ? <Check size={13} /> : status.t === "err" ? <AlertCircle size={13} /> : null}{status.m}
              </span>
            )}
            <a href="/" target="_blank" className="btn btn-ghost !py-1.5 !px-3 text-xs"><ExternalLink size={13} /> View site</a>
            <button onClick={save} disabled={status?.t === "busy"} className="btn btn-primary !py-1.5 !px-4 text-xs"><Save size={13} /> Save {pending.length ? `(+${pending.length} img)` : ""}</button>
            <button onClick={() => { localStorage.removeItem("gh_token"); setToken(""); }} className="p-2 text-muted" title="Logout"><LogOut size={15} /></button>
          </div>
        </div>
      </div>
      {status && <p className={`wrap sm:hidden py-2 text-xs ${status.t === "err" ? "text-red-600" : "text-muted"}`}>{status.m}</p>}

      <div className="wrap grid gap-8 py-8 lg:grid-cols-12">
        <nav className="flex gap-2 overflow-x-auto lg:col-span-3 lg:flex-col">
          {SECTIONS.map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} className={`whitespace-nowrap rounded-full px-4 py-2 text-left text-sm ${tab === k ? "bg-ink text-white" : "bg-card border border-line text-muted"}`}>{l}</button>
          ))}
        </nav>

        <div className="lg:col-span-9 rounded-3xl border border-line bg-card p-5 sm:p-8">
          {tab === "basics" && (
            <div className="space-y-5">
              <ImageField path={["photo"]} folder="" label="Your photo (hero)" />
              <div className="grid gap-4 sm:grid-cols-2">
                {BASIC_KEYS.filter((k) => k !== "photo").map((k) => <Input key={k} path={[k]} label={k} />)}
              </div>
              <p className="text-xs text-faint">CV: <b>public/Harsh_Jangid_CV.pdf</b> naam se GitHub pe upload karo (PDF yahan se nahi jaata).</p>
            </div>
          )}
          {tab === "highlights" && <ObjectList path={["highlights"]} fields={["value", "label"]} blank={{ value: "10+", label: "" }} />}
          {tab === "marquee" && <StringList path={["marquee"]} label="Marquee words" />}
          {tab === "about" && <StringList path={["about"]} label="Paragraphs" />}
          {tab === "experience" && <ObjectList path={["experience"]} fields={["role", "company", "brands", "period", "points"]} blank={{ role: "", company: "", brands: "", period: "", points: [""] }} />}
          {tab === "skills" && <ObjectList path={["skills"]} fields={["group", "items"]} blank={{ group: "", items: [""] }} />}
          {tab === "portfolio" && <ObjectList path={["portfolio"]} fields={["title", "category", "client", "href"]} image={{ key: "image", folder: "projects/" }} blank={{ title: "", category: "Social", client: "", image: "", href: "" }} />}
          {tab === "workLinks" && <ObjectList path={["workLinks"]} fields={["label", "href", "note"]} blank={{ label: "", href: "https://", note: "" }} />}
          {tab === "education" && <ObjectList path={["education"]} fields={["degree", "school", "period"]} blank={{ degree: "", school: "", period: "" }} />}
          {tab === "socials" && <ObjectList path={["socials"]} fields={["label", "href"]} blank={{ label: "", href: "https://" }} />}
          {tab === "seo" && <div className="grid gap-4">{["title", "description", "url"].map((k) => <Input key={k} path={["seo", k]} label={k} />)}</div>}
        </div>
      </div>
    </main>
  );
}
