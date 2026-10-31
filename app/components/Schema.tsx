import { areas } from "./ServiceAreas";

export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.sypuchka.com.ua/#website",
        url: "https://www.sypuchka.com.ua/",
        name: "Sypuchka — доставка сипучих матеріалів і добрив",
        alternateName: "Sypuchka",
        inLanguage: "uk-UA",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.sypuchka.com.ua/#business",
        name: "Sypuchka — доставка сипучих матеріалів і добрив",
        url: "https://www.sypuchka.com.ua/",
        description:
          "Доставка піску, щебеню, відсіву, ЩПС, чорнозему, ґрунту та органічних добрив.",
        telephone: "+380737577790",
        areaServed: areas,
        openingHours: "Mo-Su 08:00-20:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
