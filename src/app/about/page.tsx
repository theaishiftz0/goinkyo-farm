import type { Metadata } from "next";
import Image from "next/image";
import ContactCTA from "@/components/ContactCTA";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "ご隠居について",
  description: "信州のご隠居ファームで米や野菜を育てる日々と、農園の考え方を紹介します。",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <div>
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-text/55">ABOUT</p>
          <h1 className="font-display text-3xl font-bold leading-relaxed text-primary sm:text-5xl">ご隠居について</h1>
          <p className="mt-6 text-base leading-9 text-text/78 md:text-lg">
            信州の山あいで、田んぼと畑の様子を見ながら、季節に合わせて米や野菜を育てています。
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={fallbackImages.hero} alt="信州の農園風景" fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="bg-primary/5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle label="LIFE" title="農園の日々" />
          <div className="grid gap-8 text-base leading-9 text-text/78 md:grid-cols-2">
            <p>
              春は苗づくりと田植えから始まり、夏は畑の野菜を見回り、秋は稲刈りと収穫に向き合います。
              冬は雪景色のなかで、翌年の準備を少しずつ進めます。
            </p>
            <p>
              たくさんを急いで作るより、畑の状態や天気を見ながら、できることを丁寧に続ける。
              そんな日々の積み重ねを大切にしている農園です。
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
