
"use client";

import Image from "next/image";
import Link from "next/link";

const materials = [
  { title: "Пісок річковий", price: 280, image: "/images/materials/pisok-richkovyi.jpg.png", href: "/materialy/pisok" },
  { title: "Пісок яружний", price: 270, image: "/images/materials/pisok-yaruzhnyi.jpg.png", href: "/materialy/pisok" },
  { title: "Відсів", price: 350, image: "/images/materials/vidsiv.jpg", href: "/materialy/vidsiv" },
  { title: "Щебінь 5-20", price: 570, image: "/images/materials/shchebin-5-20.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 10-20", price: 570, image: "/images/materials/shchebin-10-20.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 20-40", price: 500, image: "/images/materials/shchebin-20-40.jpg", href: "/materialy/shchebin" },
  { title: "Щебінь 40-70", price: 500, image: "/images/materials/shchebin-40-70.png", href: "/materialy/shchebin" },
  { title: "ЩПС 0-40", price: 500, image: "/images/materials/shps-0-40.png", href: "/materialy/shps" },
  { title: "ЩПС 0-70", price: 500, image: "/images/materials/shps-0-70.png", href: "/materialy/shps" },
  { title: "Чорнозем родючий", price: 550, image: "/images/materials/chornozem.jpg.png", href: "/materialy/chornozem" },
  { title: "Ґрунт на підсипку", price: 280, image: "/images/materials/grunt-pidsypka.jpg.png", href: "/materialy/grunt" },
];

const organicFertilizers = [
  { slug: "kuryachyi-poslid", title: "Курячий послід", description: "Ефективне органічне добриво, багате на поживні речовини для саду та городу.", image: "/images/materials/kyrka.jpg.png" },
  { slug: "grybnyi-kompost", title: "Грибний компост", description: "Натуральний субстрат, який покращує структуру ґрунту та збагачує його корисними речовинами.", image: "/images/materials/mushroom-compost.jpg.png" },
  { slug: "korovyachyi-hnii-perehnii", title: "Коров'ячий гній-перегній", description: "Перепрілий гній для збагачення ґрунту органічними речовинами та покращення родючості.", image: "/images/materials/cow-manure.jpg.png" },
  { slug: "kinskyi-hnii-perehnii", title: "Кінський гній-перегній", description: "Натуральне добриво для саду, городу та квітників.", image: "/images/materials/horse-manure.jpg.png" },
];

export default function Materials() {
  return (
    <section id="materials" className="bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black md:text-5xl">Наші матеріали</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-300 md:text-xl">Постачаємо сипучі матеріали для будівництва, благоустрою території та приватних господарств.</p><p className="mx-auto mt-3 max-w-3xl text-sm text-zinc-400">Ціни вказані орієнтовно за тонну без доставки. Вартість доставки залежить від адреси та обсягу замовлення.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((item) => (
            <div key={item.title} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
              <Link href={item.href} className="block overflow-hidden" aria-label={`${item.title} — детальніше про матеріал`}>
                <div className="relative h-64 overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /></div>
              </Link>
              <div className="p-6"><h3 className="mb-3 text-2xl font-black text-white"><Link href={item.href} className="hover:text-orange-500">{item.title}</Link></h3><p className="mb-4 text-center"><span className="block text-sm font-semibold uppercase tracking-wide text-zinc-400">Ціна від</span><span className="text-3xl font-black text-orange-400">{item.price} грн</span><span className="ml-1 text-sm text-zinc-300">/ тонна</span></p><Link href={item.href} className="mb-3 block text-center font-semibold text-orange-400 hover:underline">Детальніше про матеріал</Link><a href="tel:+380737577790" className="block rounded-full bg-orange-500 py-3 text-center text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">Замовити: 073 757 77 90</a></div>
            </div>
          ))}
        </div>
        <div id="organic-fertilizers" className="mt-24 scroll-mt-24">
          <div className="mb-12 text-center"><h2 className="text-4xl font-black md:text-5xl"><span className="text-orange-500">Органічні</span> Добрива</h2><p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-300 md:text-xl">Натуральні органічні добрива для здорового ґрунту та щедрого врожаю.</p></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {organicFertilizers.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500">
                <Link href={`/dobryva/${item.slug}`} aria-label={`${item.title} — детальніше`} className="relative block h-56 overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /></Link>
                <div className="p-5"><h3 className="mb-3 text-xl font-black text-white"><Link href={`/dobryva/${item.slug}`} className="transition hover:text-orange-400">{item.title}</Link></h3><p className="mb-4 min-h-12 text-sm leading-6 text-zinc-300">{item.description}</p><Link href={`/dobryva/${item.slug}`} className="mb-4 block text-center font-semibold text-orange-400 hover:underline">Детальніше про добриво</Link><a href="tel:+380737577790" className="block rounded-full bg-orange-500 px-4 py-3 text-center font-bold text-white transition hover:bg-orange-600">Замовити за тел. 073 757 77 90</a></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
