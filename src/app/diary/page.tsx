import type { Metadata } from "next";
import DiaryList from "@/components/DiaryList";
import { getDiaryList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "農園の日々",
  description: "信州のご隠居ファームの日々の記録です。",
  alternates: {
    canonical: "/diary"
  }
};

export const revalidate = 60;

export default async function DiaryPage() {
  const diary = await getDiaryList({ limit: 20 });

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="section-tag mb-4">DIARY</p>
        <h1 className="font-display text-3xl font-bold leading-relaxed text-primary sm:text-5xl">農園の日々</h1>
        <div className="mx-auto mt-5 h-px w-12 bg-accent" />
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-text/68">
          田畑の様子、収穫のこと、季節の変化を少しずつ記録しています。
        </p>
      </section>
      <DiaryList entries={diary.contents} title="記事一覧" showMoreLink={false} />
    </>
  );
}
