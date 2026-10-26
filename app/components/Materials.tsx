
"use client";

import Image from "next/image";
import Link from "next/link";

const materials = [
  { title: "Пісок річковий", image: "/images/materials/pisok-richkovyi.jpg.png", href: "/materialy/pisok" },
  { title: "Пісок яружний", image: "/images/materials/pisok-yaruzhnyi.jpg.png", href: "/materialy/pisok" },
  { title: "Відсів", image: "/images/materials/vidsiv.jpg", href: "/materialy/vidsiv" },
  { title: "Щебінь 5-20", image: "/images/materials/shchebin-5-20.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 10-20", image: "/images/materials/shchebin-10-20.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 20-40", image: "/images/materials/shchebin-20-40.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 40-70", image: "/images/materials/shchebin-40-70.png", href: "/materialy/shchebin" },
  { title: "ЩПС 0-40", image: "/images/materials/shps-0-40.png", href: "/materialy/shps" },
  { title: "ЩПС 0-70", image: "/images/materials/shps-0-70.png", href: "/materialy/shps" },
  { title: "Чорнозем родючий", image: "/images/materials/chornozem.jpg.png", href: "/materialy/chornozem" },
  { title: "Ґрунт на підсипку", image: "/images/materials/grunt-pidsypka.jpg.png", href: "/materialy/grunt" },
];

const organicFertilizers = [
  { title: "Курячий послід", description: "Ефективне органічне добриво, багате на поживні речовини для саду та городу.", image: "/images/materials/kyrka.jpg.png" },
  { title: "Грибний компост", description: "Натуральний субстрат, який покращує структуру ґрунту та збагачує його корисними речовинами.", image: "/images/materials/mushroom-compost.jpg.png" },
  { title: "Коров'ячий гній-перегній", description: "Перепрілий гній для збагачення ґрунту органічними речовинами та покращення родючості.", image: "/images/materials/cow-manure.jpg.png" },
  { title: "Кінський гній-перегній", description: "Натуральне добриво для саду, городу та квітників.", image: "/images/materials/horse-manure.jpg.png" },
];

export default function Materials() {
  return (
    <section id="materials" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Наші матеріали</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">Постачаємо сипучі матеріали для будівництва, благоустрою території та приватних господарств.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
              <Link href={item.href} className="block overflow-hidden" aria-label={`${item.title} — детальніше про матеріал`}>
                <div className="relative h-64 overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /></div>
              </Link>
              <div className="p-6"><h3 className="mb-6 text-2xl font-black text-white"><Link href={item.href} className="hover:text-orange-500">{item.title}</Link></h3><Link href={item.href} className="mb-3 block text-center font-semibold text-orange-400 hover:underline">Детальніше про матеріал</Link><a href="tel:+380737577790" className="block rounded-full bg-orange-500 py-4 text-center text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">Уточнити ціну: 073 757 77 90</a></div>
            </div>
          ))}
        </div>
        <div id="organic-fertilizers" className="mt-24 scroll-mt-24">
          <div className="mb-12 text-center"><h2 className="text-4xl font-black md:text-5xl"><span className="text-orange-500">Органічні</span> Добрива</h2><p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-300 md:text-xl">Натуральні органічні добрива для здорового ґрунту та щедрого врожаю.</p></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {organicFertilizers.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                <div className="relative h-56 overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /></div>
                <div className="p-5"><h3 className="mb-3 text-xl font-black text-white">{item.title}</h3><p className="mb-5 min-h-12 text-sm leading-6 text-zinc-300">{item.description}</p><a href="tel:+380737577790" className="block rounded-full bg-orange-500 px-4 py-3 text-center font-bold text-white transition hover:bg-orange-600">Замовити за тел. 073 757 77 90</a></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
