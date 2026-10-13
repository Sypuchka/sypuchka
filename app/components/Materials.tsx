"use client";

import Image from "next/image";
import Link from "next/link";

const materials = [
  {
    title: "Пісок річковий",
    image: "/images/materials/pisok-richkovyi.jpg.png",
    href: "/materialy/pisok",
  },
  {
    title: "Пісок яружний",
    image: "/images/materials/pisok-yaruzhnyi.jpg.png",
    href: "/materialy/pisok",
  },
  {
    title: "Відсів",
    image: "/images/materials/vidsiv.jpg",
    href: "/materialy/vidsiv",
  },
  {
    title: "Щебінь 5-20",
    image: "/images/materials/shchebin-5-20.jpg",
    href: "/materialy/shchebin",
  },
  {
    title: "Щебінь 10-20",
    image: "/images/materials/shchebin-10-20.jpg",
    href: "/materialy/shchebin",
  },
  {
    title: "Щебінь 20-40",
    image: "/images/materials/shchebin-20-40.jpg",
    href: "/materialy/shchebin",
  },
  {
    title: "Щебінь 40-70",
    image: "/images/materials/shchebin-40-70.png",
    href: "/materialy/shchebin",
  },
  {
    title: "ЩПС 0-40",
    image: "/images/materials/shps-0-40.png",
    href: "/materialy/shps",
  },
  {
    title: "ЩПС 0-70",
    image: "/images/materials/shps-0-70.png",
    href: "/materialy/shps",
  },
  {
    title: "Чорнозем родючий",
    image: "/images/materials/chornozem.jpg.png",
    href: "/materialy/chornozem",
  },
  {
    title: "Ґрунт на підсипку",
    image: "/images/materials/grunt-pidsypka.jpg.png",
    href: "/materialy/grunt",
  },
];

export default function Materials() {
  return (
    <section id="materials" className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Наші матеріали
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">
            Постачаємо сипучі матеріали для будівництва, благоустрою території та приватних господарств.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((item) => (
            <div key={item.title}>
              <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} з доставкою по Київській області`}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="mb-6 text-2xl font-black text-white">
                    <Link href={item.href} className="hover:text-orange-500">
                      {item.title}
                    </Link>
                  </h3>

                  <Link
                    href={item.href}
                    className="mb-3 block text-center font-semibold text-orange-400 hover:underline"
                  >
                    Детальніше про матеріал
                  </Link>

                  <a
                    href="tel:+380737577790"
                    className="block rounded-full bg-orange-500 py-4 text-center text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                  >
                    📞 Замовити доставку
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
