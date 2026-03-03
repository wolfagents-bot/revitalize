import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revitalize | Human Performance Medicine",
  description:
    "Physician-led peptide therapy, hormone optimization, and advanced bloodwork. Personalized protocols for peak human performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
