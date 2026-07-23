export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Доставка сипучих матеріалів",
    description:
      "Доставка піску, щебеню, відсіву, ЩПС, чорнозему та ґрунту.",
    telephone: "+380737577790",
    areaServed: [
      "Васильків",
      "Обухів",
      "Фастів",
      "Біла Церква",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Київська область",
      addressCountry: "UA",
    },
    openingHours: "Mo-Su 08:00-21:00",
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