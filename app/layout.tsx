import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import ClarityProvider from "./clarity";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sypuchka.com.ua"),

  title: {
    default: "Sypuchka — доставка сипучих матеріалів і добрив",
    template: "%s | Сипучка",
  },

  description:
    "Доставка піску, щебеню, відсіву, ЩПС, чорнозему, ґрунту та органічних добрив: курячого посліду, грибного компосту, коров’ячого й кінського перегною. Самоскиди від 1 до 23 тонн. Працюємо у Васильківському, Обухівському, Фастівському та Білоцерківському районах.",

  keywords: [
    "пісок",
    "щебінь",
    "відсів",
    "щпс",
    "чорнозем",
    "ґрунт",
    "доставка піску",
    "доставка щебеню",
    "доставка відсіву",
    "доставка щпс",
    "доставка чорнозему",
    "доставка ґрунту",
    "органічні добрива",
    "купити органічні добрива",
    "курячий послід",
    "курячий послід з доставкою",
    "грибний компост",
    "грибний компост з доставкою",
    "коров'ячий гній-перегній",
    "кінський гній-перегній",
    "перегній з доставкою",
    "пісок Васильків",
    "щебінь Васильків",
    "пісок Обухів",
    "щебінь Обухів",
    "пісок Фастів",
    "щебінь Фастів",
    "пісок Біла Церква",
    "щебінь Біла Церква",
  ],

  authors: [
    {
      name: "Sypuchka — доставка сипучих матеріалів і добрив",
    },
  ],

  creator: "Sypuchka — доставка сипучих матеріалів і добрив",

  category: "Будівництво та органічні добрива",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Sypuchka — доставка сипучих матеріалів і добрив",
    description:
      "Пісок • Щебінь • Чорнозем • Органічні добрива з доставкою",
    url: "https://www.sypuchka.com.ua",
    siteName: "Sypuchka — доставка сипучих матеріалів і добрив",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sypuchka — доставка сипучих матеріалів і добрив",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sypuchka — доставка сипучих матеріалів і добрив",
    description:
      "Пісок • Щебінь • Відсів • ЩПС • Чорнозем • Ґрунт • Органічні добрива",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={geist.className}>
      <body className="bg-black overflow-x-hidden text-white">
        <ClarityProvider />
        {children}
      </body>
    </html>
  );
}
