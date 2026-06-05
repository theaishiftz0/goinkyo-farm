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

const fallbackDiary = [
  {
    title: "農園の日々は準備中です",
    date: "microCMS 設定後に表示",
    text: "田んぼや畑の様子、収穫のことをこちらに掲載していきます。",
    image: fallbackImages.rice,
    label: "田んぼの風景"
  },
  {
    title: "季節の記録をお届けします",
    date: "準備中",
    text: "春夏秋冬の作業や、信州の山あいの景色を少しずつ記録します。",
    image: fallbackImages.grapes,
    label: "ぶどう棚"
  },
  {
    title: "収穫の知らせもこちらから",
    date: "準備中",
    text: "販売時期や収穫の様子も、農園の日々としてお知らせします。",
    image: fallbackImages.vegetables,
    label: "畑の風景"
  }
];

export default function DiaryList({ entries, title = "農園の日々", showMoreLink = true }: DiaryListProps) {
  return (
    <section id="diary" className="relative overflow-hidden bg-[#eef8e8] py-24 md:py-32">
      <div className="ghost-word absolute -left-10 top-12 hidden md:block" aria-hidden="true">
        News
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          label="DIARY"
          title={title}
          lead="畑と田んぼの、なんでもない日常"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {entries.length > 0
            ? entries.map((entry) => (
                <article key={entry.id} className="reveal hover-lift group overflow-hidden rounded-[2rem] bg-white shadow-sm">
                  <Link href={`/diary/${entry.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                    <div className="relative h-56 bg-primary/10">
                      <Image
                        src={entry.eyecatch?.url ?? fallbackImages.hero}
                        alt={entry.eyecatch ? `${entry.title}の写真` : "信州の農園の風景"}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <time className="text-xs text-text/50" dateTime={entry.publishedAt}>
                        {formatDate(entry.publishedAt)}
                      </time>
                      <h3 className="mt-1 mb-2 font-medium leading-7 text-primary">{entry.title}</h3>
                    </div>
                  </Link>
                </article>
              ))
            : fallbackDiary.map((entry) => (
                <article key={entry.title} className="reveal hover-lift overflow-hidden rounded-[2rem] bg-white shadow-sm">
                  <div className="relative flex h-56 items-center justify-center">
                    <Image src={entry.image} alt={entry.label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-text/50">{entry.date}</p>
                    <h3 className="mt-1 mb-2 font-medium leading-7 text-primary">{entry.title}</h3>
                    <p className="text-sm leading-relaxed text-text/70">{entry.text}</p>
                  </div>
                </article>
              ))}
        </div>

        {showMoreLink ? (
          <div className="mt-12 text-center">
            <Link
              href="/diary"
              className="btn btn-secondary"
            >
              一覧を見る
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
