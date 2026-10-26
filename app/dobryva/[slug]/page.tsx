import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fertilizers, fertilizersBaseUrl } from "../materials";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return fertilizers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = fertilizers.find((fertilizer) => fertilizer.slug === slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `${fertilizersBaseUrl}/dobryva/${item.slug}` },
    keywords: [
      item.name,
      `${item.name} купити`,
      `${item.name} доставка`,
      `${item.name} Київська область`,
      "органічні добрива з доставкою",
    ],
    openGraph: {
      title: item.title,
      description: item.description,
      url: `${fertilizersBaseUrl}/dobryva/${item.slug}`,
      siteName: "Sypuchka — доставка матеріалів і добрив",
      locale: "uk_UA",
      type: "website",
      images: [{ url: item.image, alt: item.name }],
    },
  };
}

export default async function FertilizerPage({ params }: PageProps) {
  const { slug } = await params;
  const item = fertilizers.find((fertilizer) => fertilizer.slug === slug);
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    description: item.description,
    image: [`${fertilizersBaseUrl}${item.image}`],
    category: "Органічні добрива",
    brand: { "@type": "Brand", name: "Sypuchka" },
    offers: {
      "@type": "Offer",
      url: `${fertilizersBaseUrl}/dobryva/${item.slug}`,
      priceCurrency: "UAH",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Sypuchka" },
    },
  };

  return (
    <main className="min-h-screen bg-black px-6 py-14 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl">
        <Link href="/#organic-fertilizers" className="text-orange-400 hover:underline">← До органічних добрив</Link>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative min-h-72 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 md:min-h-[420px]">
            <Image src={item.image} alt={item.name} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">Органічні добрива</p>
            <h1 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{item.title}</h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">{item.description}</p>
            <h2 className="mt-8 text-2xl font-bold">Про товар</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-zinc-300">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <a href="tel:+380737577790" className="mt-8 inline-block rounded-full bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600">Уточнити ціну: 073 757 77 90</a>
            <p className="mt-4 text-sm leading-6 text-zinc-400">Наявність, обсяг і вартість доставки уточнюйте телефоном.</p>
          </div>
        </div>
        <section className="mt-16 border-t border-zinc-800 pt-8">
          <h2 className="text-2xl font-bold">Інші органічні добрива</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {fertilizers.filter((fertilizer) => fertilizer.slug !== item.slug).map((fertilizer) => (
              <Link key={fertilizer.slug} href={`/dobryva/${fertilizer.slug}`} className="rounded-xl border border-zinc-800 p-4 transition hover:border-orange-500 hover:text-orange-400">
                {fertilizer.name} →
              </Link>
            ))}
          </div>
          <Link href="/" className="mt-8 inline-block text-orange-400 hover:underline">На головну сторінку</Link>
        </section>
      </div>
    </main>
  );
}
