import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

type SalesInfoProps = {
  compact?: boolean;
};

const salesItems = [
  {
    title: "道の駅・直売所",
    text: "信州地域の道の駅や直売所などで販売しています。"
  },
  {
    title: "季節ごとの販売",
    text: "お米、季節の野菜、ぶどうなど、時期によって並ぶものが変わります。"
  },
  {
    title: "販売に関するお問い合わせ",
    text: "販売時期や取扱状況は、お問い合わせからご確認ください。"
  }
];

export default function SalesInfo({ compact = false }: SalesInfoProps) {
  return (
    <section id="sales" className="section-harvest scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          label="SALES"
          title="お求めいただける場所"
          lead="収穫した作物は、道の駅や直売所に出荷しています。その日の収穫状況により、並ぶ作物は変わります。"
        />

        <div className="surface-card fade-up overflow-hidden rounded-[1.75rem]">
          <div className="grid md:grid-cols-3">
            {salesItems.map((item, index) => (
              <div key={item.title} className="border-b border-accent/20 p-7 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="section-tag mb-4">0{index + 1}</p>
                <h3 className="font-display text-2xl font-black leading-relaxed text-text">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-8 text-text/70">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 bg-primary px-7 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium leading-7 text-white/86">出荷状況は天候や収穫量によって変わります。</p>
            <Link href="#contact" className="btn btn-on-dark shrink-0">
              お問い合わせする
            </Link>
          </div>
        </div>

        {compact ? null : null}
      </div>
    </section>
  );
}
