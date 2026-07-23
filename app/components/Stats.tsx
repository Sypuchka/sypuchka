export default function Stats() {
  const stats = [
    { number: "10+", text: "років досвіду" },
    { number: "5000+", text: "виконаних доставок" },
    { number: "4", text: "райони доставки" },
    { number: "100%", text: "якісні матеріали" },
  ];

  return (
    <section className="bg-[#090909] py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.text}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
            >
              <h3 className="text-5xl font-black text-orange-500">
                {item.number}
              </h3>

              <p className="mt-3 text-zinc-300">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}