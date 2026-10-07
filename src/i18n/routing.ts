import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "fr", "es"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
