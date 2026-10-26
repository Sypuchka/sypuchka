
"use client";

import Image from "next/image";

const materials = [
  {
    title: "Торф",
    description: "Натуральний матеріал для покращення структури ґрунту та утримання вологи.",
    image: "/images/materials/peat.jpg",
  },
  {
    title: "Чорнозем",
    description: "Родючий ґрунт для вирощування рослин, овочів та садових культур.",
    image: "/images/materials/chernozem.jpg",
  },
  {
    title: "Ґрунтосуміш",
    description: "Збалансована суміш для посадки та догляду за рослинами.",
    image: "/images/materials/soil-mix.jpg",
  },
  {
    title: "Пісок",
    description: "Матеріал для будівельних робіт, благоустрою та садових потреб.",
    image: "/images/materials/sand.jpg",
  },
];

const organicFertilizers = [
  {
    title: "Курячий послід",
    description:
      "Ефективне органічне добриво, багате на поживні речовини для саду та городу.",
    image: "/images/materials/kyrka.jpg",
  },
  {
    title: "Грибний компост",
    description:
      "Натуральний субстрат, який покращує структуру ґрунту та збагачує його корисними речовинами.",
    image: "/images/materials/mushroom-compost.jpg",
  },
  {
    title: "Коров'ячий гній-перегній",
    description:
      "Перепрілий гній для збагачення ґрунту органічними речовинами та покращення родючості.",
    image: "/images/materials/cow-manure.jpg",
  },
  {
    title: "Кінський гній-перегній",
    description:
      "Натуральне добриво для саду, городу та квітників.",
    image: "/images/materials/horse-manure.jpg",
  },
];

type Material = {
  title: string;
  description: string;
  image: string;
};

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
        <p className="text-sm leading-6 text-gray-600">
          {item.description}
        </p>
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
            Матеріали для саду, городу, будівництва та благоустрою.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((item) => (
            <MaterialCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mb-10 mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Органічні Добрива
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
