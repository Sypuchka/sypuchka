"use client";

import { FaTelegramPlane, FaViber, FaPhoneAlt } from "react-icons/fa";

export default function QuickOrder() {
  return (
    <section className="bg-black py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl md:p-12">

          <div className="text-center">

            <h2 className="text-4xl font-black text-white md:text-6xl">
              Замовити доставку
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Телефонуйте або пишіть нам у Telegram чи Viber.
              Допоможемо підібрати потрібний матеріал та швидко
              організуємо доставку.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <a
              href="tel:+380737577790"
              className="flex flex-col items-center justify-center rounded-3xl bg-orange-500 p-8 text-white transition duration-300 hover:scale-105 hover:bg-orange-600"
            >
              <FaPhoneAlt className="mb-4 text-5xl" />

              <h3 className="text-2xl font-bold">
                Подзвонити
              </h3>

              <p className="mt-2 text-lg">
                073 757 77 90
              </p>
            </a>

            <a
              href="https://t.me/samo_svall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-3xl bg-sky-500 p-8 text-white transition duration-300 hover:scale-105 hover:bg-sky-600"
            >
              <FaTelegramPlane className="mb-4 text-5xl" />

              <h3 className="text-2xl font-bold">
                Telegram
              </h3>

              <p className="mt-2">
                Написати повідомлення
              </p>
            </a>

            <a
              href="viber://chat?number=%2B380737577790"
              className="flex flex-col items-center justify-center rounded-3xl bg-purple-600 p-8 text-white transition duration-300 hover:scale-105 hover:bg-purple-700"
            >
              <FaViber className="mb-4 text-5xl" />

              <h3 className="text-2xl font-bold">
                Viber
              </h3>

              <p className="mt-2">
                Написати повідомлення
              </p>
            </a>

          </div>

          <div className="mt-12 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">

            <p className="text-xl font-bold text-white">
              🕒 Працюємо щодня з 08:00 до 21:00
            </p>

            <p className="mt-3 text-zinc-300">
              Швидко відповідаємо та допомагаємо оформити замовлення.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}