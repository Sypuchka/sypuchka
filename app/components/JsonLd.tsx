export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Доставка сипучих матеріалів",

    telephone: "+380737577790",

    url: "http://localhost:3000",

    image: "http://localhost:3000/images/logo.png",

    areaServed: [
      "Васильківський район",
      "Обухівський район",
      "Фастівський район",
      "Білоцерківський район",
    ],

    description:
      "Доставка піску, щебеню, відсіву, ЩПС, чорнозему та ґрунту.",

    address: {
      "@type": "PostalAddress",
      addressCountry: "UA",
      addressRegion: "Київська область",
    },

    openingHours: "Mo-Su 07:00-21:00",
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