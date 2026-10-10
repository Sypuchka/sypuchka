
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "../../components/ServiceAreas";

const materials = [
  "Пісок / Песок",
  "Щебінь / Щебень",
  "Відсів / Отсев",
  "ЩПС",
  "Чорнозем / Чернозём",
  "Ґрунт / Грунт",
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
    title: `Доставка піску, щебеню та чорнозему — ${area}`,
    description: `Замовляйте пісок, щебінь, відсів, ЩПС, чорнозем і ґрунт з доставкою в ${area}. Уточнюйте ціну та наявність за телефоном.`,
    alternates: {
      canonical: `/dostavka/${slug}`,
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
          Доставка сипучих матеріалів у {area}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Доставляємо сипучі будівельні матеріали для будівництва,
          благоустрою та земельних робіт у {area}. Зверніться до нас,
          щоб уточнити наявність, вартість матеріалу, обсяг і ціну доставки.
        </p>

        <h2 className="mt-10 text-2xl font-bold">
          Наш асортимент
        </h2>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <li
              key={material}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              {material}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-zinc-300">
          Вартість залежить від виду матеріалу, потрібного обсягу та
          адреси доставки. Зателефонуйте, щоб погодити замовлення.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-4 font-bold text-black"
        >
          Замовити доставку
        </a>
      </div>
    </main>
  );
}
