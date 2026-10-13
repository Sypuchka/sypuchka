import type { MetadataRoute } from "next";
import { areas } from "./components/ServiceAreas";
import { materials } from "./materialy/materials";

function slugify(value: string) {
  const map: Record<string, string> = {
    а: "a", б: "b", в: "v", г: "h", ґ: "g",
    д: "d", е: "e", є: "ye", ж: "zh", з: "z",
    и: "y", і: "i", ї: "yi", й: "y", к: "k",
    л: "l", м: "m", н: "n", о: "o", п: "p",
    р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
    ю: "yu", я: "ya", ь: "",
  };

  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .split("")
    .map((char) => map[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sypuchka.com.ua";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...materials.map((material) => ({
      url: `${baseUrl}/materialy/${material.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...areas.map((area) => ({
      url: `${baseUrl}/dostavka/${slugify(area)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
