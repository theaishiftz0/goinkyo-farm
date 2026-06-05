import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { fallbackImages } from "@/lib/microcms";

export const crops = [
  {
    name: "お米",
    description: "山あいの水と気温差のなかで、毎日の田んぼを見ながら育てています。",
    icon: "米",
    image: fallbackImages.rice
  },
  {
    name: "ぶどう",
    description: "季節の歩みに合わせて手を入れ、香りと甘みを大切にしています。",
    icon: "葡",
    image: fallbackImages.grapes
  },
  {
    name: "夏野菜",
    description: "太陽を浴びたなす、きゅうり、トマトなどを少量ずつ育てています。",
    icon: "夏",
    image: fallbackImages.vegetables
  },
  {
    name: "冬野菜",
    description: "寒さのなかでゆっくり育つ野菜を、畑の様子に合わせて収穫します。",
    icon: "冬",
    image: fallbackImages.winter
  }
];

type CropCardsProps = {
  showLink?: boolean;
};

export default function CropCards({ showLink = true }: CropCardsProps) {
  return (
    <section id="crops" className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 md:py-32">
      <div className="ghost-word absolute right-0 top-20 hidden md:block" aria-hidden="true">
        Crops
      </div>
      <div>
        <div>
          <SectionTitle
            label="CROPS"
            title="育てているもの"
            lead="信州の気候と水に育まれた作物たち"
          />
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {crops.map((crop) => (
            <article key={crop.name} className="reveal hover-lift overflow-hidden rounded-[2rem] border border-primary/10 bg-white text-center">
              <div className="relative h-52">
                <Image src={crop.image} alt={`${crop.name}の写真`} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                <div className="absolute left-5 top-5 grid size-14 place-items-center rounded-full bg-white/90 text-lg font-black text-primary">
                  {crop.icon}
                </div>
              </div>
              <div className="p-7">
                <h3 className="mb-3 text-xl font-black text-text">{crop.name}</h3>
                <p className="text-sm leading-relaxed text-text/70">{crop.description}</p>
              </div>
            </article>
          ))}
        </div>
        {showLink ? (
          <div className="mt-12 text-center">
            <Link
              href="/crops"
              className="btn btn-secondary"
            >
              作物紹介へ
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
