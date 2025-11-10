"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const locales = ["en", "fr", "es"];
const defaultLocale = "en";

export default function LocaleRedirect() {
  const router = useRouter();

  useEffect(() => {
    const browserLocale = navigator.language.slice(0, 2);
    const locale = locales.includes(browserLocale) ? browserLocale : defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null; // nothing rendered
}
