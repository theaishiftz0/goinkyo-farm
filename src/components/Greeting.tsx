import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages } from "@/lib/microcms";

export default function Greeting() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <SectionTitle label="ABOUT" title="ごあいさつ" />
          <div className="fade-up max-w-2xl space-y-3 text-[15px] font-medium leading-8 text-text/74 sm:text-base">
            <p>信州の山あいで、米や野菜を育てています。</p>
            <p>大きな農園ではありませんが、</p>
            <p>田んぼや畑の様子を見ながら、</p>
            <p>その季節にできるものを少しずつ作っています。</p>
            <p>農園の日々を、ここに少しずつ残していきます。</p>
          </div>
        </div>
        <div className="fade-up relative">
          <div className="surface-card motion-card relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-primary/10">
            <Image
              src={fallbackImages.field}
              alt="信州の畑で育つ夏野菜"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
