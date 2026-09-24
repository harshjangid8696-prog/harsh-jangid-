/**
 * ============================================================
 *  SITE DATA — YAHI EK FILE EDIT KARO, POORI WEBSITE BADAL JAYEGI
 * ============================================================
 *  - Naam, tagline, about, experience, skills, education,
 *    portfolio cards, links, contact — sab yahin hai.
 *  - "EDIT:" wale comments dhyaan se dekho — wahan apna real data daalo.
 *  - Portfolio images:  /public/projects/  mein daalo (jpg/png).
 *  - CV:                /public/Harsh_Jangid_CV.pdf
 * ============================================================
 */

export const site = {
  name: "Harsh Jangid",
  firstName: "Harsh",
  role: "Graphic Designer & Social Media Executive",
  tagline:
    "I design scroll-stopping creatives and run social media that actually grows — reels, carousels, thumbnails, brand visuals and the content calendar behind them.",
  location: "Jaipur, Rajasthan, India",
  email: "harshjangid8696@gmail.com",        // EDIT: real email
  phone: "+91 00000 00000",                   // EDIT: real phone
  cvFile: "/Harsh_Jangid_CV.pdf",             // put file in /public
  availability: "Open to full-time & freelance work",

  // Social profiles — jo nahi chahiye woh line hata do
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },   // EDIT
    { label: "LinkedIn", href: "https://linkedin.com/in/" },  // EDIT
    { label: "Behance", href: "https://behance.net/" },       // EDIT
    { label: "YouTube", href: "https://youtube.com/" },       // EDIT
  ],

  // Hero ke neeche chhote proof-points
  highlights: [
    { value: "2+", label: "years in design & social" },       // EDIT
    { value: "500+", label: "creatives shipped" },            // EDIT
    { value: "2", label: "brands managed end-to-end" },
  ],

  about: [
    "I'm a graphic designer and social media executive based in Jaipur. I currently handle design and social for two NRI-focused brands — SaveTaxs and Visament — at Hornet Dynamics, where I'm responsible for everything from the first concept to the published post.",
    "My work sits at the intersection of design and growth: I don't just make things look good, I make them perform. Reels that hold attention, carousels people save, thumbnails that get the click, and a content calendar that keeps the brand consistent every single day.",
    "Tools I live in: Photoshop, Illustrator, Premiere Pro, After Effects, Canva, CapCut and Figma.",
  ],

  experience: [
    {
      role: "Social Media Executive",
      company: "Hornet Dynamics Pvt. Ltd.",
      brands: "SaveTaxs · Visament",
      period: "2025 — Present",                 // EDIT
      points: [
        "Own the monthly content calendar for Instagram, YouTube, LinkedIn and Facebook across both brands.",
        "Plan, shoot, edit and publish reels, shorts and carousels on NRI tax, OCI and passport topics.",
        "Track reach, saves, shares and follower growth; iterate hooks and formats based on what performs.",
        "Coordinate with content, SEO and compliance team so every post is accurate and on-brand.",
      ],
    },
    {
      role: "Graphic Designer",
      company: "Hornet Dynamics Pvt. Ltd.",
      brands: "SaveTaxs · Visament",
      period: "2024 — 2025",                    // EDIT
      points: [
        "Designed social creatives, YouTube thumbnails, carousels, ad banners and website graphics.",
        "Built and maintained brand templates so the whole team could publish consistently.",
        "Produced explainer graphics and infographics that simplify complex tax and documentation topics.",
      ],
    },
  ],

  skills: [
    {
      group: "Design",
      items: ["Social media creatives", "Carousels & infographics", "YouTube thumbnails", "Brand identity & templates", "Ad banners & landing graphics", "Print & presentation design"],
    },
    {
      group: "Video & Motion",
      items: ["Reels & Shorts editing", "Motion graphics", "Subtitles & hooks", "Colour & sound polish"],
    },
    {
      group: "Social Media",
      items: ["Content strategy & calendar", "Instagram, YouTube, LinkedIn, Facebook", "Analytics & reporting", "Community management", "Trend & hook research"],
    },
    {
      group: "Tools",
      items: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "Canva", "CapCut", "Meta Business Suite"],
    },
  ],

  education: [
    { degree: "Bachelor's Degree", school: "University name", period: "2021 — 2024" }, // EDIT
    { degree: "Diploma in Graphic Design", school: "Institute name", period: "2023" },   // EDIT
  ],

  /**
   * PORTFOLIO
   * image: "/projects/xyz.jpg"  → file /public/projects/xyz.jpg
   * Agar image file nahi hai to card automatically clean placeholder dikhata hai.
   * href: optional — Instagram post / Behance / Drive link.
   * Categories: filter buttons in se apne aap ban jaate hain.
   */
  portfolio: [
    { title: "NRI Tax Explainer Reels", category: "Reels", client: "SaveTaxs", image: "/projects/project-01.jpg", href: "" },
    { title: "Instagram Carousel Series", category: "Carousels", client: "SaveTaxs", image: "/projects/project-02.jpg", href: "" },
    { title: "YouTube Thumbnail Set", category: "Thumbnails", client: "Visament", image: "/projects/project-03.jpg", href: "" },
    { title: "OCI Card Process Infographics", category: "Infographics", client: "Visament", image: "/projects/project-04.jpg", href: "" },
    { title: "Brand Template System", category: "Branding", client: "SaveTaxs", image: "/projects/project-05.jpg", href: "" },
    { title: "Ad Creatives — Google & Meta", category: "Ads", client: "SaveTaxs", image: "/projects/project-06.jpg", href: "" },
    { title: "Festival & Campaign Posts", category: "Social", client: "Visament", image: "/projects/project-07.jpg", href: "" },
    { title: "App Store Screens — HelpOCI", category: "Branding", client: "HelpOCI", image: "/projects/project-08.jpg", href: "" },
  ],

  // Live pages jahan mera kaam dikhta hai
  workLinks: [
    { label: "SaveTaxs on Instagram", href: "https://instagram.com/savetaxs", note: "Reels, carousels, daily posts" },  // EDIT
    { label: "SaveTaxs on YouTube", href: "https://youtube.com/@savetaxs", note: "Thumbnails & video edits" },          // EDIT
    { label: "Visament on Instagram", href: "https://instagram.com/visament", note: "Creatives & campaigns" },         // EDIT
    { label: "savetaxs.com", href: "https://savetaxs.com", note: "Website graphics" },
    { label: "visament.com", href: "https://visament.com", note: "Website graphics" },
  ],

  seo: {
    title: "Harsh Jangid — Graphic Designer & Social Media Executive",
    description:
      "Portfolio of Harsh Jangid, graphic designer and social media executive from Jaipur. Reels, carousels, thumbnails, branding and social media growth for SaveTaxs and Visament.",
    url: "https://harsh-jangid.vercel.app",
  },
};

export type Project = (typeof site.portfolio)[number];
