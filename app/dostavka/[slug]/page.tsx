
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "../../components/ServiceAreas";

const materials = [
  {
    uk: "Річковий та яружний пісок",
    ru: "Речной и карьерный песок",
  },
  {
    uk: "Щебінь різних фракцій",
    ru: "Щебень разных фракций",
  },
  {
    uk: "Відсів",
    ru: "Отсев",
  },
  {
    uk: "ЩПС",
    ru: "ЩПС — щебенево-піщана суміш",
  },
  {
    uk: "Родючий чорнозем",
    ru: "Плодородный чернозём",
  },
  {
    uk: "Ґрунт для підсипки",
    ru: "Грунт для подсыпки",
  },
];

function slugify(value: string) {
  const map: Record<string, string> = {
    а: "a", б: "b", в: "v", г: "h", ґ: "g",
    д: "d", е: "e", є: "ye", ж: "zh", з: "z",
    и: "y", і: "i", ї: "yi", й: "y", к: "k",
    л: "l", м: "m", н: "n", о: "o", п: "p",
    р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch",
    ю: "yu", я: "ya", ь: "",
  };

  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .split("")
    .map((char) => map[char] ?? char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return areas.map((area) => ({ slug: slugify(area) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((item) => slugify(item) === slug);

  if (!area) return {};

  return {
    title: `Пісок, щебінь і доставка сипучих матеріалів — ${area}`,
    description:
      `Купити пісок, щебінь, відсів, ЩПС, чорнозем і ґрунт з доставкою у ${area}. ` +
      `Песок, щебень и другие сыпучие материалы с доставкой. Телефон 073 757 77 90.`,
    alternates: {
      canonical: `https://www.sypuchka.com.ua/dostavka/${slug}`,
    },
  };
}

export default async function DeliveryAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areas.find((item) => slugify(item) === slug);

  if (!area) notFound();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-orange-500 hover:underline">
          Головна
        </a>

        <h1 className="mt-8 text-3xl font-black md:text-5xl">
          Пісок, щебінь та сипучі матеріали з доставкою у {area}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Доставляємо пісок, щебінь, відсів, ЩПС, чорнозем і ґрунт
          у {area} та навколишні населені пункти. Матеріали для
          будівництва, підсипки, благоустрою території та приватних
          господарств.
        </p>

        <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
          У нас можна замовити речной или карьерный песок,
          щебень разных фракций, отсев, ЩПС, чернозём и грунт
          с доставкой в {area}. Уточняйте доступность материалов,
          необходимый объём и стоимость доставки по телефону.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Наш асортимент матеріалів
        </h2>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <li
              key={material.uk}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              <p className="font-bold">{material.uk}</p>
              <p className="mt-2 text-sm text-zinc-400">
                {material.ru}
              </p>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold">
          Доставка та замовлення
        </h2>

        <p className="mt-4 leading-7 text-zinc-300">
          Вартість замовлення залежить від виду матеріалу,
          обсягу та адреси доставки. Телефонуйте, щоб уточнити
          ціну та погодити доставку у {area}.
        </p>

        <p className="mt-4 leading-7 text-zinc-300">
          Доставка самоскидами від 1 до 23 тонн.
          Працюємо щодня з 08:00 до 21:00.
        </p>

        <a
          href="tel:0737577790"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-4 font-bold text-black"
        >
          Замовити доставку — 073 757 77 90
        </a>

        <p className="mt-8">
          <a href="/" className="text-orange-500 hover:underline">
            Перейти на головну сторінку
          </a>
        </p>
      </div>
    </main>
  );
}
