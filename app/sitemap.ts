import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ВАШ-ДОМЕН.ua",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}