import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
  params?: Promise<{ locale?: string }>; // ✅ params is always a Promise
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const awaitedParams = params ? await params : {};
  const locale = awaitedParams.locale;

  return (
    <html lang={locale ?? "en"}>
      <body>{children}</body>
    </html>
  );
}
