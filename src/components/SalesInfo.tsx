import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

type SalesInfoProps = {
  compact?: boolean;
};

export default function SalesInfo({ compact = false }: SalesInfoProps) {
  return (
    <section id="sales" className="relative overflow-hidden bg-[#fff6d7] py-24 md:py-32">
      <div className="ghost-word absolute -right-20 top-10 hidden md:block" aria-hidden="true">
        Sales
      </div>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <SectionTitle
        label="SALES"
        title="お求めいただける場所"
        lead="直接お会いできる場所でお届けしています"
      />
      <div className="grid gap-6 text-left md:grid-cols-2">
        <div className="reveal hover-lift rounded-[2rem] bg-white p-7">
          <p className="mb-1 text-xs font-medium tracking-[0.18em] text-accent">PLACE</p>
          <h3 className="text-xl font-black text-text">道の駅・直売所</h3>
          <p className="mt-3 text-sm leading-7 text-text/78">信州地域の道の駅、直売所などで販売しています。</p>
        </div>
        <div className="reveal hover-lift rounded-[2rem] bg-white p-7">
          <p className="mb-1 text-xs font-medium tracking-[0.18em] text-accent">SEASON</p>
          <h3 className="text-xl font-black text-text">季節ごとの販売</h3>
          <p className="mt-3 text-sm leading-7 text-text/78">お米、季節の野菜、ぶどうなど。収穫状況により内容は変わります。</p>
        </div>
        <div className="reveal hover-lift rounded-[2rem] bg-brown p-7 text-white md:col-span-2">
          <p className="mb-1 text-xs font-medium tracking-[0.18em] text-accent">CONTACT</p>
          <h3 className="text-xl font-black">販売に関するお問い合わせ</h3>
          <p className="mt-3 text-sm leading-7 text-white/78">販売時期や取扱状況は、お問い合わせページからご確認ください。</p>
        </div>
      </div>
      {!compact ? null : (
        <Link
          href="/sales"
          className="btn btn-primary mt-10"
        >
          販売情報を見る
        </Link>
      )}
      </div>
    </section>
  );
}
