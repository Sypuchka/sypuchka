"use client";

export default function Delivery() {
  const areas = [
    "Васильківський район",
    "Обухівський район",
    "Фастівський район",
    "Білоцерківський район",
  ];

  return (
    <section
      id="delivery"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Райони доставки
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            Доставляємо сипучі матеріали швидко, без посередників,
            точно у домовлений час.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-2xl md:p-12">

          <div className="grid gap-5 md:grid-cols-2">

            {areas.map((area) => (
              <div
                key={area}
                className="
                  rounded-2xl
                  border
                  border-zinc-700
                  bg-zinc-800
                  px-6
                  py-5
                  text-xl
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                  hover:border-orange-500
                  hover:bg-zinc-700
                  hover:shadow-xl
                  hover:shadow-orange-500/20
                "
              >
                📍 {area}
              </div>
            ))}

          </div>

          <div className="mt-10 border-t border-zinc-800 pt-8 text-center">

            <p className="text-lg text-zinc-400">
              Потрібна доставка?
            </p>

            <a
              href="tel:+380737577790"
              className="
                mt-5
                inline-block
                rounded-full
                bg-orange-500
                px-10
                py-4
                text-lg
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-110
                hover:bg-orange-600
                hover:shadow-xl
                hover:shadow-orange-500/40
              "
            >
              📞 Замовити доставку
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}