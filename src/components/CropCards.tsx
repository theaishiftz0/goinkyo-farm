import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages } from "@/lib/microcms";

export const crops = [
  {
    name: "お米",
    description: "山あいの水と気温差のなかで、毎日の田んぼを見ながら育てています。",
    image: fallbackImages.rice,
    alt: "収穫されたお米と信州の田んぼ"
  },
  {
    name: "ぶどう",
    description: "季節の歩みに合わせて手を入れ、香りと甘みを大切にしています。",
    image: fallbackImages.grapes,
    alt: "ぶどう棚で育つぶどう"
  },
  {
    name: "夏野菜",
    description: "太陽を浴びたなす、きゅうり、トマトなどを少量ずつ育てています。",
    image: fallbackImages.vegetables,
    alt: "信州の畑で育つ夏野菜"
  },
  {
    name: "冬野菜",
    description: "寒さのなかでゆっくり育つ野菜を、畑の様子に合わせて収穫します。",
    image: fallbackImages.winter,
    alt: "雪の残る冬の畑"
  }
] as const;

type CropCardsProps = {
  showLink?: boolean;
};

export default function CropCards({ showLink = false }: CropCardsProps) {
  const [rice, ...others] = crops;

  return (
    <section id="crops" className="scroll-mt-24 mx-auto max-w-7xl overflow-hidden px-5 py-20 sm:px-8 md:py-28">
      <SectionTitle
        label="CROPS"
        title="育てているもの"
        lead="お米を中心に、季節の野菜やぶどうを育てています。"
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card motion-card fade-up group overflow-hidden rounded-[1.75rem]">
          <div className="relative aspect-[16/10] overflow-hidden bg-primary/10 lg:aspect-[4/3]">
            <Image
              src={rice.image}
              alt={rice.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-sm font-bold text-primary shadow-sm">
              主役
            </div>
          </div>
          <div className="p-7 md:p-9">
            <h3 className="font-display text-3xl font-black leading-relaxed text-text">お米</h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-text/70">{rice.description}</p>
          </div>
        </article>

        <div className="grid gap-6">
          {others.map((crop) => (
            <article
              key={crop.name}
              className="surface-card motion-card fade-up group grid overflow-hidden rounded-[1.5rem] sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                <Image
                  src={crop.image}
                  alt={crop.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-black leading-relaxed text-text">{crop.name}</h3>
                <p className="mt-2 text-sm leading-7 text-text/70">{crop.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showLink ? <div className="mt-10 text-center" /> : null}
    </section>
  );
}
