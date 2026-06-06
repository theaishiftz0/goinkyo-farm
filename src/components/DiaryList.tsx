import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages, formatDate } from "@/lib/microcms";
import type { Diary } from "@/types/microcms";

type DiaryListProps = {
  entries: Diary[];
  title?: string;
  showMoreLink?: boolean;
};

export default function DiaryList({ entries, title = "農園の日々", showMoreLink = true }: DiaryListProps) {
  const hasEntries = entries.length > 0;

  return (
    <section id="diary" className="section-wash scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          label="DIARY"
          title={title}
          lead="田植え、草刈り、収穫、出荷。信州の季節とともに進む農園の記録です。"
        />

        {hasEntries ? (
          <div className="grid gap-6 md:grid-cols-3">
            {entries.map((entry) => (
              <article
                key={entry.id}
                className="surface-card motion-card fade-up group overflow-hidden rounded-[1.5rem]"
              >
                <Link href={`/diary/${entry.slug}`} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                    <Image
                      src={entry.eyecatch?.url ?? fallbackImages.rice}
                      alt={entry.eyecatch ? `${entry.title}の写真` : "信州の田んぼと農園の風景"}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-xs font-bold text-text/48" dateTime={entry.publishedAt}>
                      {formatDate(entry.publishedAt)}
                    </time>
                    <h3 className="mt-2 font-bold leading-7 text-primary">{entry.title}</h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface-card fade-up grid gap-6 rounded-[1.5rem] p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-primary/10">
              <Image
                src={fallbackImages.rice}
                alt="信州の田んぼと山あいの風景"
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold leading-relaxed text-text">農園の日々は準備中です。</h3>
              <p className="mt-4 text-[15px] leading-8 text-text/70">
                田んぼや畑の様子、収穫のことを少しずつ掲載していきます。
              </p>
            </div>
          </div>
        )}

        {showMoreLink ? (
          <div className="mt-10 text-center">
            <Link href="/diary" className="btn btn-secondary">
              農園の日々を一覧で見る
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
