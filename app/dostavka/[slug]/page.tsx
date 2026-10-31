import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "../../components/ServiceAreas";

const materials = [
  "Річковий та кар’єрний пісок",
  "Щебінь різних фракцій",
  "Відсів",
  "Щебенево-піщана суміш (ЩПС)",
  "Родючий чорнозем",
  "Ґрунт для підсипки",
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
    title: `Доставка піску, щебеню та сипучих матеріалів — ${area}`,
    description: `Замовте пісок, щебінь, відсів, ЩПС, чорнозем або ґрунт із доставкою. Населений пункт: ${area}. Уточніть вартість за телефоном 073 757 77 90.`,
    alternates: {
      canonical: `https://www.sypuchka.com.ua/dostavka/${slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `Доставка сипучих матеріалів — ${area} | Сипучка`,
      description: `Пісок, щебінь та інші сипучі матеріали з доставкою за адресою в населеному пункті ${area}. Телефон: 073 757 77 90.`,
      url: `https://www.sypuchka.com.ua/dostavka/${slug}`,
      siteName: "Сипучка",
      locale: "uk_UA",
      type: "website",
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
        <nav aria-label="Навігаційний шлях" className="text-sm text-zinc-400">
          <a href="/" className="text-orange-500 hover:underline">Головна</a>
          <span className="mx-2">/</span>
          <span>Доставка: {area}</span>
        </nav>

        <h1 className="mt-8 text-3xl font-black md:text-5xl">
          Доставка піску, щебеню та сипучих матеріалів — {area}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Приймаємо замовлення на пісок, щебінь, відсів, щебенево-піщану
          суміш (ЩПС), чорнозем і ґрунт із доставкою за адресою в населеному
          пункті {area}. Матеріали використовують для будівництва,
          підсипки, благоустрою та господарських робіт.
        </p>

        <h2 className="mt-10 text-2xl font-bold">Які матеріали можна замовити</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material) => (
            <li
              key={material}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 font-semibold"
            >
              {material}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-bold">Доставка за адресою: {area}</h2>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
          Можливість доставки та тип автомобіля погоджуємо за конкретною
          адресою й обсягом замовлення. Для перевезення доступні самоскиди
          вантажопідйомністю від 1 до 23 тонн. Підсумкова вартість залежить
          від виду матеріалу, кількості та відстані до місця розвантаження.
          Перед підтвердженням замовлення узгодимо ціну й час доставки.
        </p>
        <p className="mt-4 leading-7 text-zinc-300">
          Приймаємо замовлення щодня з 08:00 до 21:00.
        </p>

        <a
          href="tel:+380737577790"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-4 font-bold text-black"
        >
          Зателефонувати: 073 757 77 90
        </a>

        <section className="mt-12 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-bold">Як замовити доставку</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-zinc-300">
            <li>Зателефонуйте за номером 073 757 77 90.</li>
            <li>Повідомте, який матеріал і в якому обсязі потрібен.</li>
            <li>Уточніть адресу та погодьте вартість і час доставки.</li>
          </ol>
        </section>

        <p className="mt-10">
          <a href="/#service-areas" className="text-orange-500 hover:underline">
            Переглянути всі населені пункти доставки
          </a>
          <span className="mx-3 text-zinc-500">·</span>
          <a href="/#materials" className="text-orange-500 hover:underline">
            Переглянути матеріали
          </a>
        </p>
      </div>
    </main>
  );
}
