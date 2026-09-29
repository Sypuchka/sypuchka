"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-0 flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Фон */}
      <Image
        src="/images/hero/truck-new.jpg"
        alt="Доставка сипучих матеріалів"
        fill
        priority
        className="pointer-events-none object-cover object-center"
      />

      {/* Затемнення */}
      <div className="pointer-events-none absolute inset-0 bg-black/60" />

      {/* Градієнт */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Світіння */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[160px]" />

      {/* Контент */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Доставка
            <span className="mt-2 block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              сипучих матеріалів
            </span>
          </h1>

          <p className="mt-5 text-lg font-bold text-white sm:text-xl md:text-3xl">
            Пісок • Щебінь • Відсів • ЩПС
          </p>

          <p className="mt-2 text-lg font-bold text-white sm:text-xl md:text-3xl">
            Чорнозем • Ґрунт
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg md:text-xl md:leading-8">
            Доставка піску, щебеню, відсіву, ЩПС, чорнозему та ґрунту у
            Василькові та по Васильківському, Обухівському, Фастівському
            та Білоцерківському районах.
          </p>

          <div className="mt-10">
            <a
              href="tel:+380737577790"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-black text-white shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-110 hover:bg-orange-600 hover:shadow-[0_0_45px_rgba(249,115,22,0.8)] sm:w-auto sm:px-12 sm:py-5 sm:text-xl md:text-2xl"
            >
              📞 Замовити доставку
            </a>
          </div>

        </div>
      </div>

      {/* Стрілка */}
      <a
        href="#materials"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce text-4xl text-white transition hover:text-orange-400 md:text-5xl"
      >
        ↓
      </a>
    </section>
  );
}
