export const areas = [
  "Барахти",
  "Безп'ятне",
  "Березенщина",
  "Бобриця",
  "Борова",
  "Борисів",
  "Боярка",
  "Бугаївка",
  "Васильків",
  "Варовичі",
  "Велика Бугаївка",
  "Велика Вільшанка",
  "Велика Салтанівка",
  "Великі Дмитровичі",
  "Гвоздів",
  "Глеваха",
  "Глушки",
  "Гореничі",
  "Гребінки",
  "Данилівка",
  "Дерев'янки",
  "Дзвінкове",
  "Діброва",
  "Дмитрівка",
  "Жорнівка",
  "Забір'я",
  "Залізне",
  "Застугна",
  "Здорівка",
  "Зелений Бір",
  "Зозулі",
  "Іванковичі",
  "Калинівка",
  "Клехівка",
  "Книжичі",
  "Кобці",
  "Кодаки",
  "Кожухівка",
  "Копачів",
  "Кощіївка",
  "Крушинка",
  "Ксаверівка",
  "Ксаверівка Друга",
  "Кулибаба",
  "Липовий Скиток",
  "Мала Бугаївка",
  "Мала Салтанівка",
  "Малютянка",
  "Малі Дмитровичі",
  "Мархалівка",
  "Митниця",
  "Мотовилівка",
  "Мотовилівська Слобідка",
  "Музичі",
  "Нестерівка",
  "Нове",
  "Нові Безрадичі",
  "Обухів",
  "Оленівка",
  "Ольшанська Новоселиця",
  "Паращина",
  "Певці",
  "Пінчуки",
  "Плесецьке",
  "Погреби",
  "Порадівка",
  "Путрівка",
  "Рославичі",
  "Руликів",
  "Саливонки",
  "Скрипки",
  "Старі Безрадичі",
  "Степанівка",
  "Тарасівка",
  "Тарасенки",
  "Таценки",
  "Тростинка",
  "Тростинська Новоселиця",
  "Українка",
  "Фастів",
  "Фастівець",
  "Хлепча",
  "Червоне",
  "Шпитьки",
  "Шевченківка",
  "Юрівка",
  "Яблунівка",
  "Яцьки",
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

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-center text-4xl font-black text-white">
          Населені пункти, куди ми доставляємо
        </h2>

        <div className="h-[420px] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <a
                key={area}
                href={`/dostavka/${slugify(area)}`}
                className="rounded-xl border border-zinc-800 bg-zinc-800/40 px-4 py-3 text-white transition hover:border-orange-500 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
              >
                Доставка: {area}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-orange-500">
            Та інші населені пункти
          </p>
        </div>
      </div>
    </section>
  );
}
