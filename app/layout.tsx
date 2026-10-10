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
    default: "Доставка сипучих матеріалів | Пісок, Щебінь, Відсів, ЩПС",
    template: "%s | Доставка сипучих матеріалів",
  },

  description:
    "Доставка піску, щебеню, відсіву, ЩПС, чорнозему та ґрунту. Самоскиди від 1 до 23 тонн. Працюємо у Васильківському, Обухівському, Фастівському та Білоцерківському районах.",

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
      name: "Доставка сипучих матеріалів",
    },
  ],

  creator: "Доставка сипучих матеріалів",

  category: "Будівництво",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Доставка сипучих матеріалів",

    description:
      "Пісок • Щебінь • Відсів • ЩПС • Чорнозем • Ґрунт",

    url: "https://www.sypuchka.com.ua",

    siteName: "Доставка сипучих матеріалів",

    locale: "uk_UA",

    type: "website",

    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Доставка сипучих матеріалів",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Доставка сипучих матеріалів",

    description:
      "Пісок • Щебінь • Відсів • ЩПС • Чорнозем • Ґрунт",

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
