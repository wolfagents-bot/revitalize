import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const siteUrl = "https://revitalize.health";

export const metadata: Metadata = {
  title: {
    default: "Revitalize | Human Performance Medicine",
    template: "%s | Revitalize",
  },
  description:
    "Physician-led peptide therapy, hormone optimization, and advanced bloodwork. Personalized protocols for peak human performance.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
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
    siteName: "Revitalize Performance Medicine",
    title: "Revitalize | Human Performance Medicine",
    description:
      "Physician-led peptide therapy, hormone optimization, and advanced bloodwork. Personalized protocols for peak human performance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Revitalize Performance Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revitalize | Human Performance Medicine",
    description:
      "Physician-led peptide therapy, hormone optimization, and advanced bloodwork.",
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
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
