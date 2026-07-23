import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Доставка сипучих матеріалів",
    short_name: "Доставка",
    description:
      "Доставка піску, щебеню, відсіву, ЩПС, чорнозему та ґрунту.",

    start_url: "/",

    display: "standalone",

    background_color: "#000000",

    theme_color: "#f97316",

    lang: "uk",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/images/logo.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}