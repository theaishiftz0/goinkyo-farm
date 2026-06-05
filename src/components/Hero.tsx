import Image from "next/image";
import Link from "next/link";
import { fallbackImages } from "@/lib/microcms";

export default function Hero() {
  return (
    <section className="soft-grid relative overflow-hidden bg-background px-5 pb-14 pt-8 sm:px-8 md:pt-14">
      <div className="ghost-word absolute left-[14%] top-[31%] hidden md:block" aria-hidden="true">
        Plant new seeds
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal max-w-3xl pb-8 pt-6">
          <p className="mb-5 text-base font-bold text-primary">Plant new seeds.</p>
          <h1 className="text-5xl font-black leading-[1.2] tracking-tight text-text md:text-6xl">
            信州の
            <br />
            ご隠居ファーム
          </h1>
          <p className="mt-6 max-w-xl text-base font-medium leading-9 text-text/72">
            信州の自然のなかで、米や野菜を育てています。
            山あいの小さな農園から、食卓へ季節を届けます。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/diary"
              className="btn btn-primary"
            >
              農園の日々を見る
            </Link>
            <Link
              href="/sales"
              className="btn btn-secondary"
            >
              販売情報
            </Link>
          </div>
        </div>
        <div className="reveal relative">
          <div className="image-blob-lg relative h-[360px] overflow-hidden bg-primary/10 md:h-[520px]">
            <Image
              src={fallbackImages.hero}
              alt="信州の農園と収穫の風景"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-transparent" />
          </div>
          <div className="floating-card absolute bottom-5 right-5 max-w-[360px] rounded bg-brown px-6 py-5 text-white md:bottom-10 md:right-10">
            <p className="text-xs font-bold tracking-[0.22em] text-accent">SEASON</p>
            <p className="mt-2 text-sm font-bold">春は田植え、夏は野菜、秋は稲刈り、冬は雪景色。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
