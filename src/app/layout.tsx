import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";
import { LanguageProvider } from "@/context/LanguageContext";

// NOTE: This sandbox's network blocks fonts.googleapis.com, so next/font/google
// cannot fetch Playfair Display, Inter, or Montserrat during this build.
// On your own machine or in real deployment (Vercel, Netlify, etc.) this will work
// normally. To restore it, replace the lines below with:
//
//   import { Playfair_Display, Inter, Montserrat } from "next/font/google";
//   const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["500","600","700","900"], style: ["normal","italic"] });
//   const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700"] });
//   const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["500","600","700","800"] });
//
// and add `${playfair.variable} ${inter.variable} ${montserrat.variable}` back to
// the <html> className below.
//
// Tajawal (the Arabic font) does NOT have this problem, since it is self-hosted
// via the @fontsource/tajawal npm package above rather than fetched from Google
// at build time, so Arabic text renders with the real intended font in this
// sandbox already. Tajawal was chosen because it is repeatedly recommended as a
// modern, minimalist typeface built for clean UI and dashboard-style screens,
// the same reasoning already used for the Lead Tracker tool.

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
