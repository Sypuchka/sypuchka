export default function Contacts() {
  return (
    <section id="contacts" className="bg-[#090909] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-orange-500">
            Контакти
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Зв'яжіться з нами
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Телефонуйте або залишайте заявку — швидко відповімо та допоможемо
            підібрати необхідний матеріал.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Телефон */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500">

            <div className="mb-5 text-5xl">📞</div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              Телефон
            </h3>

            <a
              href="tel:+380737577790"
              className="text-xl font-semibold text-orange-500 hover:text-orange-400"
            >
              073 757 77 90
            </a>

          </div>

          {/* Графік */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500">

            <div className="mb-5 text-5xl">🕒</div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              Працюємо без вихідних
            </h3>

        

            <p className="mt-2 text-lg font-semibold text-orange-500">
              08:00 – 21:00
            </p>

          </div>

          {/* Самоскиди */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500">

            <div className="mb-5 text-5xl">🚚</div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              Самоскиди
            </h3>

            <div className="mt-4 space-y-2 text-zinc-300">
              <p> Від 1 до 23 тонн</p>
              <p>✔ Задня вигрузка</p>
              <p>✔ Бокова вигрузка</p>
            </div>

          </div>

        </div>

        {/* Велика кнопка */}
        <div className="mt-14 text-center">

          <a
            href="tel:+380737577790"
            className="inline-block rounded-full bg-orange-500 px-12 py-5 text-xl font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            📞 Зателефонувати зараз
          </a>

        </div>

      </div>
    </section>
  );
}