import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://revivalize.health";

export const metadata: Metadata = {
  title: {
    default: "Revivalize | Human Performance Medicine",
    template: "%s | Revivalize",
  },
  description:
    "Physician-led peptide therapy, exosome therapy, and advanced bloodwork. Personalized protocols for peak human performance.",
  metadataBase: new URL(siteUrl),
  alternates: {},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Revivalize Performance Medicine",
    title: "Revivalize | Human Performance Medicine",
    description:
      "Physician-led peptide therapy, exosome therapy, and advanced bloodwork. Personalized protocols for peak human performance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1179,
        height: 536,
        alt: "Revivalize Performance Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revivalize | Human Performance Medicine",
    description:
      "Physician-led peptide therapy, exosome therapy, and advanced bloodwork.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
