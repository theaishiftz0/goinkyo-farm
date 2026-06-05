import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fallbackImages, formatDate, getDiaryBySlug, getDiaryList, getSiteUrl } from "@/lib/microcms";

type DiaryDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const diary = await getDiaryList({ fields: "slug", limit: 100 });

  return diary.contents.map((entry) => ({
    slug: entry.slug
  }));
}

export async function generateMetadata({ params }: DiaryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getDiaryBySlug(slug);

  if (!entry) {
    return {
      title: "記事が見つかりません"
    };
  }

  const url = `${getSiteUrl()}/diary/${entry.slug}`;

  return {
    title: entry.title,
    description: `${entry.title} | 信州のご隠居ファームの日々の記録です。`,
    alternates: {
      canonical: `/diary/${entry.slug}`
    },
    openGraph: {
      title: entry.title,
      description: "信州のご隠居ファームの日々の記録です。",
      url,
      images: [
        {
          url: entry.eyecatch?.url ?? fallbackImages.hero,
          width: entry.eyecatch?.width ?? 1200,
          height: entry.eyecatch?.height ?? 630,
          alt: entry.title
        }
      ],
      type: "article"
    }
  };
}

export default async function DiaryDetailPage({ params }: DiaryDetailPageProps) {
  const { slug } = await params;
  const entry = await getDiaryBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-20 md:py-28">
      <Link href="/diary" className="text-sm text-primary underline underline-offset-4">
        農園の日々へ戻る
      </Link>
      <header className="mt-8">
        <time className="text-sm text-text/55" dateTime={entry.publishedAt}>
          {formatDate(entry.publishedAt)}
        </time>
        <h1 className="font-display mt-3 text-3xl font-bold leading-relaxed text-primary sm:text-5xl">{entry.title}</h1>
      </header>
      <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg bg-primary/10">
        <Image
          src={entry.eyecatch?.url ?? fallbackImages.hero}
          alt={entry.eyecatch ? `${entry.title}の写真` : "信州の農園の風景"}
          fill
          priority
          sizes="(min-width: 768px) 896px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="cms-body mt-10 rounded-lg bg-white p-6 shadow-sm sm:p-10" dangerouslySetInnerHTML={{ __html: entry.body }} />
    </article>
  );
}
