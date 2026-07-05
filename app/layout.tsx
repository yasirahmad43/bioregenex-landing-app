import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: "Regenerative Cellular Therapy — Free Consultation | BioRegenEx",
  description:
    "See if regenerative cellular therapy is right for you. Free, no-pressure consultation with a licensed provider. Physician-grade, cGMP-manufactured exosome therapy.",
  openGraph: {
    title: "Regenerative Cellular Therapy — Free Consultation | BioRegenEx",
    description:
      "See if regenerative cellular therapy is right for you. Free, no-pressure consultation with a licensed provider.",
    url: `https://${site.domain}`,
    siteName: site.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
