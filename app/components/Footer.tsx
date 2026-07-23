export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">

          {/* Логотип */}
          <div>

            <h2 className="text-3xl font-black text-white">
              ДОСТАВКА
            </h2>

            <p className="mt-2 uppercase tracking-[4px] text-orange-500">
              сипучих матеріалів
            </p>

          </div>

          {/* Контакти */}
          <div className="text-center">

            <p className="mb-3 text-zinc-500">
              Телефон
            </p>

            <a
              href="tel:+380737577790"
              className="text-3xl font-bold text-orange-500 transition hover:text-orange-400"
            >
            +380737577790
            </a>

          </div>

          {/* Робота */}
          <div className="text-center md:text-right">

            <p className="text-zinc-500">
              Працюємо щодня
            </p>

            <p className="mt-2 text-xl font-semibold text-white">
              08:00 – 21:00
            </p>

          </div>

        </div>

        {/* Лінія */}
        <div className="my-10 border-t border-zinc-800" />

        {/* Нижній блок */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Доставка сипучих матеріалів. Всі права захищені.
          </p>

          <p>
            Васильківський • Обухівський • Фастівський • Білоцерківський райони
          </p>

        </div>

      </div>

    </footer>
  );
}