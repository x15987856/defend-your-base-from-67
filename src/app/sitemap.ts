import type { MetadataRoute } from "next";
import { getGameConfig, getTierItems } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const now = new Date();

  const staticRoutes = config.routes.map((route) => ({
    url: `${config.seo.baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: (
      route.path === "/codes" || route.path === "/updates" || route.path === "/calculator" ? "daily" : "weekly"
    ) as "daily" | "weekly",
    priority: Number(route.priority)
  }));

  const tierRoutes = getTierItems().map((item) => ({
    url: `${config.seo.baseUrl}/tier-list/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.74
  }));

  return [...staticRoutes, ...tierRoutes];
}
