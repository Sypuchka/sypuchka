"use client";

import Image from "next/image";

type Material = {
  title: string;
  description: string;
  image: string;
};

const materials: Material[] = [
  {
    title: "Чорнозем",
    description: "Родючий ґрунт для городу, саду та озеленення ділянки.",
    image: "/images/materials/chornozem.jpg.png",
  },
  {
    title: "Ґрунтова підсипка",
    description: "Матеріал для вирівнювання ділянки та підготовки основи.",
    image: "/images/materials/grunt-pidsypka.jpg.png",
  },
  {
    title: "Пісок річковий",
    description: "Річковий пісок для будівельних робіт і благоустрою.",
    image: "/images/materials/pisok-richkovyi.jpg.png",
  },
  {
    title: "Пісок яружний",
    description: "Яружний пісок для будівельних і господарських потреб.",
    image: "/images/materials/pisok-yaruzhnyi.jpg.png",
  },
  {
    title: "Щебінь 5–20",
    description: "Щебінь фракції 5–20 мм для будівництва та благоустрою.",
    image: "/images/materials/shchebin-5-20.jpg",
  },
  {
    title: "Щебінь 10–20",
    description: "Щебінь фракції 10–20 мм для бетонних робіт та основ.",
    image: "/images/materials/shchebin-10-20.jpg",
  },
  {
    title: "Щебінь 20–40",
    description: "Щебінь фракції 20–40 мм для будівельних робіт і під'їздів.",
    image: "/images/materials/shchebin-20-40.jpg",
  },
  {
    title: "Щебінь 40–70",
    description: "Крупна фракція щебеню для основ і дорожніх робіт.",
    image: "/images/materials/shchebin-40-70.png",
  },
  {
    title: "ЩПС 0–40",
    description: "Щебенево-піщана суміш для підготовки основ і доріжок.",
    image: "/images/materials/shps-0-40.png",
  },
  {
    title: "ЩПС 0–70",
    description: "Щебенево-піщана суміш для міцної основи та будівельних робіт.",
    image: "/images/materials/shps-0-70.png",
  },
  {
    title: "Відсів",
    description: "Дрібний кам'яний матеріал для благоустрою та підготовки основ.",
    image: "/images/materials/vidsiv.jpg",
  },
];

const organicFertilizers: Material[] = [
  {
    title: "Курячий послід",
    description:
      "Ефективне органічне добриво, багате на поживні речовини для саду та городу.",
    image: "/images/materials/kyrka.jpg.png",
  },
  {
    title: "Грибний компост",
    description:
      "Натуральний субстрат, який покращує структуру ґрунту та збагачує його корисними речовинами.",
    image: "/images/materials/mushroom-compost.jpg.png",
  },
  {
    title: "Коров'ячий гній-перегній",
    description:
      "Перепрілий гній для збагачення ґрунту органічними речовинами та покращення родючості.",
    image: "/images/materials/cow-manure.jpg.png",
  },
  {
    title: "Кінський гній-перегній",
    description: "Натуральне добриво для саду, городу та квітників.",
    image: "/images/materials/horse-manure.jpg.png",
  },
];

function MaterialCard({ item }: { item: Material }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          {item.title}
        </h3>
        <p className="text-sm leading-6 text-gray-600">{item.description}</p>
      </div>
    </article>
  );
}

export default function Materials() {
  return (
    <section id="materials" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Наші матеріали
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Матеріали для будівництва, благоустрою, саду та городу.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((item) => (
            <MaterialCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mb-10 mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Органічні добрива
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Натуральні добрива для родючого ґрунту та здорового росту рослин.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {organicFertilizers.map((item) => (
            <MaterialCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
