"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value }: { value: string }) {
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d,]/g, "");
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (isNaN(num)) return;
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const start = performance.now(), dur = 1400;
      const tick = (t: number) => { const p = Math.min(1, (t - start) / dur); setN(Math.round(num * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el); return () => io.disconnect();
  }, [num]);
  return <span ref={ref}>{isNaN(num) ? value : `${n}${suffix}`}</span>;
}
