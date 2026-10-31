"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-0 flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero/truck-new.jpg"
        alt="Доставка сипучих матеріалів самоскидом"
        fill
        priority
        className="pointer-events-none object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28">
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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white sm:gap-5 sm:text-base">
            <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2">
              Самоскиди від 1 до 23 тонн
            </span>
            <span className="rounded-full border border-white/25 bg-black/30 px-4 py-2">
              Щодня з 08:00 до 20:00
            </span>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
            <a
              href="tel:+380737577790"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-black text-white shadow-[0_0_35px_rgba(249,115,22,0.6)] transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-[0_0_45px_rgba(249,115,22,0.8)] sm:w-auto sm:px-12 sm:text-xl"
            >
              📞 Зателефонувати: 073 757 77 90
            </a>
            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <a
                href="https://t.me/samo_svall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-sky-400 bg-sky-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-sky-500/20 transition hover:scale-105 hover:bg-sky-600 sm:min-w-64"
              >
                Написати в Telegram
              </a>
              <a
                href="viber://chat?number=%2B380737577790"
                className="inline-flex min-h-14 w-full items-center justify-center rounded-full border-2 border-purple-400 bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-purple-500/20 transition hover:scale-105 hover:bg-purple-700 sm:min-w-64"
              >
                Написати у Viber
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-300">
            Зателефонуйте — допоможемо підібрати матеріал і транспорт.
          </p>
        </div>
      </div>

      <a
        href="#materials"
        aria-label="Перейти до матеріалів"
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce text-4xl text-white transition hover:text-orange-400 md:text-5xl"
      >
        ↓
      </a>
    </section>
  );
}
