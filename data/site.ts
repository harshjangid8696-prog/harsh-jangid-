// Content ab data/site.json mein hai. Live site pe /admin se edit karo.
import data from "./site.json";
export const site = data;
export type SiteData = typeof data;
export type Project = SiteData["portfolio"][number];
