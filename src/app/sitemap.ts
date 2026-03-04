import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://revitalize.health",
      lastModified: new Date("2025-03-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://revitalize.health/privacy",
      lastModified: new Date("2025-03-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://revitalize.health/terms",
      lastModified: new Date("2025-03-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
