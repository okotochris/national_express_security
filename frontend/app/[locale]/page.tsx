import { notFound } from "next/navigation";
import { locales, Locale } from "../../i18n/config";
import HomePage from "./HomeClient";

interface LocalePageProps {
  params: Promise<{ locale: string }>; // ✅ always a Promise
}

export default async function LocalePage({ params }: LocalePageProps) {
  const awaitedParams = await params;
  const { locale } = awaitedParams;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <HomePage />;
}
