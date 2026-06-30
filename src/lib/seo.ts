import type { Metadata } from "next";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${config.seo.baseUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: config.game.name,
      images: [{ url: `${config.seo.baseUrl}${config.seo.defaultOgImage}`, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${config.seo.baseUrl}${config.seo.defaultOgImage}`],
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.seo.siteTitle,
    url: config.seo.baseUrl,
    description: config.seo.siteDescription,
    inLanguage: "en",
  };
}
