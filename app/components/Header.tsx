import Image from "next/image";

export default function Header() {
  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">

      {/* Помаранчеве світіння */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Ліва частина */}
          <div>

            <p className="text-orange-500 font-bold uppercase tracking-[4px] mb-6">
              Доставка сипучих матеріалів
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Пісок,
              <br />
              <span className="text-orange-500">Щебінь,</span>
              <br />
              Відсів,
              <br />
              Чорнозем
            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-9 max-w-xl">
              Доставка сипучих матеріалів самоскидами
              <span className="text-orange-500 font-bold">
                {" "}від 1 до 23 тонн
              </span>.
              <br />
              Працюємо у
              <span className="text-orange-500">
                {" "}Васильківському, Обухівському,
                Фастівському та Білоцерківському районах.
              </span>
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="tel:0737577790"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold text-lg transition shadow-xl"
              >
                📞 073 757 77 90
              </a>

              <a
                href="#materials"
                className="border-2 border-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition"
              >
                Наші матеріали
              </a>

            </div>

          </div>

          {/* Фото */}
          <div className="relative flex justify-center">

            <Image
              src="/images/gallery/truck.png"
              alt="Самоскид"
              width={900}
              height={700}
              priority
              className="drop-shadow-[0_25px_60px_rgba(255,115,0,0.45)] hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}