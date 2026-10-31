import type { MetadataRoute } from "next";
import { materials } from "./materialy/materials";
import { fertilizers } from "./dobryva/materials";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sypuchka.com.ua";

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...materials.map((material) => ({
      url: `${baseUrl}/materialy/${material.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...fertilizers.map((fertilizer) => ({
      url: `${baseUrl}/dobryva/${fertilizer.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
