import Image from "next/image";
import Link from "next/link";
import { fallbackImages } from "@/lib/microcms";

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden bg-background px-5 pb-16 pt-10 sm:px-8 md:pb-24 md:pt-16">
      <div className="hero-ambient hero-ambient-a" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-b" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="fade-hero max-w-2xl">
          <p className="section-tag mb-5">
            信州の小さな農園
          </p>
          <h1 className="font-display text-[2.6rem] font-black leading-[1.18] tracking-tight text-text sm:text-[3.45rem] lg:text-[4rem] xl:text-[4.55rem]">
            信州の
            <br />
            ご隠居ファーム
          </h1>
          <p className="mt-6 max-w-xl text-xl font-bold leading-[1.75] text-primary sm:text-2xl">
            山あいの田んぼから、季節を少しずつ。
          </p>
          <p className="mt-4 max-w-xl text-[15px] font-medium leading-8 text-text/72 sm:text-base">
            信州の自然のなかで、お米を中心に、季節の野菜やぶどうを育てています。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#diary" className="btn btn-primary">
              農園の日々を見る
            </Link>
            <Link href="#sales" className="btn btn-secondary">
              販売場所を見る
            </Link>
          </div>
        </div>

        <div className="fade-up relative">
          <div className="relative h-[300px] overflow-hidden rounded-[1.75rem] bg-primary/10 shadow-[0_24px_80px_rgba(47,47,47,0.12)] sm:h-[360px] lg:h-[520px]">
            <Image
              src={fallbackImages.hero}
              alt="信州の田んぼと山あいの風景"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="hero-image-motion object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
            <div className="rice-lines absolute inset-x-0 bottom-0 h-28 opacity-70" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="season-card-motion absolute bottom-4 left-4 max-w-[17rem] rounded-2xl bg-white/92 px-5 py-4 text-sm font-bold leading-7 text-text shadow-lg backdrop-blur sm:bottom-6 sm:left-6">
            春は田植え、夏は畑、秋は稲刈り。季節に合わせて手を動かしています。
          </div>
        </div>
      </div>
    </section>
  );
}
