"use client";
import { useEffect, useState } from "react";
/** true = image loads, false = missing/broken, null = checking */
export function useImgOk(src: string) {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    if (!src) { setOk(false); return; }
    const im = new Image();
    im.onload = () => setOk(true); im.onerror = () => setOk(false); im.src = src;
  }, [src]);
  return ok;
}
