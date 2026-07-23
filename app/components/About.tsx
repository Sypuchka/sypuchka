import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[6px] text-orange-500 font-bold">
            Про компанію
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Про нас
          </h2>

        </div>

        {/* Контент */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Фото */}

          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

            <Image
              src="/images/gallery/truck.jpg"
              alt="КамАЗ"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          {/* Текст */}

          <div>

            <h3 className="text-4xl font-black text-white leading-tight">
              Доставка сипучих матеріалів
              <span className="block text-orange-500 mt-2">
                швидко та без посередників
              </span>
            </h3>

            <p className="mt-8 text-xl leading-9 text-zinc-300">
              Ми спеціалізуємося на доставці сипучих будівельних матеріалів
              по Васильківському, Обухівському,
              Фастівському та Білоцерківському районах.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 rounded-2xl bg-zinc-800 p-5">
                <span className="text-3xl">🚚</span>
                <p className="text-lg font-medium">
                  Доставка в день замовлення
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-zinc-800 p-5">
                <span className="text-3xl">⛏️</span>
                <p className="text-lg font-medium">
                  Якісні сипучі матеріали
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-zinc-800 p-5">
                <span className="text-3xl">💰</span>
                <p className="text-lg font-medium">
                  Готівковий та безготівковий розрахунок
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-zinc-800 p-5">
                <span className="text-3xl">📅</span>
                <p className="text-lg font-medium">
                  Працюємо без вихідних
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}