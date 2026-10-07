export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Guns of Eschaton Wiki",
  shortName: "Guns of Eschaton",
  logoText: "G",
  tagline: "Weapons, Builds, Enemies & Guides",
  description: "Explore Guns of Eschaton Wiki for weapon details, gameplay guides, builds, mechanics, strategies, and essential information to help players master the post-apocalyptic shooter.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://guns-of-eschaton.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://guns-of-eschaton.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3734220/Guns_of_Eschaton/",
  heroVideoId: "C58D98I3MyE", // Guns of Eschaton | Soulslike FPS Western | Announcement Trailer
  social: {
    discord: "https://discord.gg/P3JvQPE6gR",
    youtube: "https://www.youtube.com/@4divinitygames",
    twitter: "https://x.com/GunsOfEschaton",
    tiktok: "https://www.tiktok.com/@guns.of.eschaton",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
