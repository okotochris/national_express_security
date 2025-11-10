// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";
import ChatWidget from "./chatWidget"; // <-- Client Component

interface RootLayoutProps {
  children: ReactNode;
  params?: { locale?: string };
}

export default function RootLayout({ children }: RootLayoutProps) {
  const defaultLocale = "en";

  return (
    <html lang={defaultLocale}>
      <body>
        {children}
        {/* Chat widget will load on client-side only */}
        <ChatWidget />
      </body>
    </html>
  );
}
