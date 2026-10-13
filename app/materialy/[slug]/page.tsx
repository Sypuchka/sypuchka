import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { materials, materialsBaseUrl } from "../materials";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return materials.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) return {};

  return {
    title: material.title,
    description: material.description,
    alternates: { canonical: `${materialsBaseUrl}/materialy/${material.slug}` },
    openGraph: {
      title: material.title,
      description: material.description,
      url: `${materialsBaseUrl}/materialy/${material.slug}`,
      locale: "uk_UA",
      type: "website",
    },
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) notFound();

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-orange-500 hover:underline">Головна</Link>
        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-orange-500">
          Сипучі матеріали з доставкою
        </p>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">{material.title}</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">{material.description}</p>

        <h2 className="mt-10 text-2xl font-bold">Про матеріал і доставку</h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-zinc-300">
          {material.details.map((detail) => <li key={detail}>{detail}</li>)}
        </ul>

        <p className="mt-8 leading-7 text-zinc-300">
          Доставку самоскидом, доступний обсяг і вартість узгоджуємо за конкретною адресою.
          Зателефонуйте, щоб уточнити умови замовлення.
        </p>
        <a href="tel:+380737577790" className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-4 font-bold text-black hover:bg-orange-400">
          Уточнити ціну — 073 757 77 90
        </a>

        <h2 className="mt-12 text-2xl font-bold">Інші матеріали</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {materials.filter((item) => item.slug !== material.slug).map((item) => (
            <li key={item.slug}>
              <Link href={`/materialy/${item.slug}`} className="block rounded-xl border border-zinc-800 p-4 text-orange-500 hover:border-orange-500">
                {item.name} з доставкою
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
