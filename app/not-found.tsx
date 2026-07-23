import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6 text-center">
      <div>
        <h1 className="text-7xl font-black text-orange-500">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Сторінку не знайдено
        </h2>

        <p className="mt-4 text-zinc-400">
          Можливо, вона була видалена або адреса введена неправильно.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
        >
          На головну
        </Link>
      </div>
    </section>
  );
}