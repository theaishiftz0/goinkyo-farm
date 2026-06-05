import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages } from "@/lib/microcms";

export default function Greeting() {
  return (
    <section id="greeting" className="relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="ghost-word absolute -right-16 top-20 hidden md:block" aria-hidden="true">
        About
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <SectionTitle label="ABOUT FARM" title="ごあいさつ" />
          <div className="reveal max-w-2xl space-y-4 text-base font-medium leading-9 text-text/74 md:text-lg">
            <p>信州の山あいで、米や野菜を育てています。</p>
            <p>春は田植え、夏は野菜、秋は稲刈り、冬は雪景色。</p>
            <p>そんな農園の日々を少しずつお届けしています。</p>
          </div>
        </div>
        <div className="reveal relative">
          <div className="image-blob relative aspect-[5/4] overflow-hidden bg-primary/10">
            <Image src={fallbackImages.field} alt="畑で育つ野菜" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-5 rounded-3xl bg-accent px-7 py-5 text-sm font-bold text-text shadow-xl">
            Shinshu daily farm
          </div>
        </div>
      </div>
    </section>
  );
}
