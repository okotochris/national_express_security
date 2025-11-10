// app/i18n/config.ts
export const locales = ["en", "de", "fr", "es", "it"] as const;
export type Locale = (typeof locales)[number];
