import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { getGameConfig } from "@/lib/data";
import { buildWebSiteSchema } from "@/lib/seo";
import "./globals.css";

const config = getGameConfig();

export const metadata: Metadata = {
  title: {
    default: config.seo.siteTitle,
    template: `%s | ${config.game.name}`
  },
  description: config.seo.siteDescription,
  keywords: [...config.seo.primaryKeywords, ...config.seo.secondaryKeywords],
  alternates: { canonical: config.seo.baseUrl },
  openGraph: {
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    url: config.seo.baseUrl,
    siteName: config.game.name,
    images: [{ url: `${config.seo.baseUrl}${config.seo.defaultOgImage}`, width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    images: [`${config.seo.baseUrl}${config.seo.defaultOgImage}`]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <JsonLd data={buildWebSiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
