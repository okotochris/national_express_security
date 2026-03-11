import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { locales, Locale } from "../../i18n/config";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>; // <-- always a Promise
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const awaitedParams = await params; // await the promise
  const { locale } = awaitedParams;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return <div data-locale={locale}>{children}</div>;
}
