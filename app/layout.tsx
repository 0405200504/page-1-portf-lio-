import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Marina Alves — Nail Designer em São Paulo",
  description:
    "Alongamento em gel, blindagem e nail art com acabamento impecável e durabilidade real. Agende seu horário pelo WhatsApp.",
  openGraph: {
    title: "Marina Alves — Nail Designer em São Paulo",
    description:
      "Alongamento em gel, blindagem e nail art com acabamento impecável e durabilidade real.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script src="http://localhost:3000/embed.js" data-lume-slug="page-1" strategy="lazyOnload" />
      </body>
    </html>
  );
}
