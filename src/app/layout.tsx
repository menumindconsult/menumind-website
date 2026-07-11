import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Per the MENUMIND EPDS (MC-001): Cormorant Garamond is the title/display
// face, Inter is the approved body face. Both are self-hosted via
// @fontsource, same pattern as Tajawal below — this avoids any dependency on
// reaching fonts.googleapis.com at build time, in this sandbox or in
// production, so rendering is identical everywhere instead of quietly
// depending on network conditions.

export const metadata: Metadata = {
  title: "MenuMind Restaurant Consultancy | Restaurant Operations Excellence",
  description:
    "MenuMind helps restaurant owners improve profitability, strengthen teams, optimize operations, and deliver exceptional guest experiences through practical restaurant consulting.",
  openGraph: {
    title: "MenuMind Restaurant Consultancy",
    description:
      "Transforming restaurant operations into profitable growth. Operational excellence, stronger teams, better results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-offwhite text-dark-text">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
