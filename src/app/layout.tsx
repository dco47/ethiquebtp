import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETHIQUE BTP | Construction & Rénovation",
  description:
    "ETHIQUE BTP — construction, rénovation et génie civil en Côte d'Ivoire. Bâtir avec intégrité et excellence.",
  keywords: [
    "construction",
    "rénovation",
    "BTP",
    "Abidjan",
    "Côte d'Ivoire",
    "ETHIQUE BTP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
