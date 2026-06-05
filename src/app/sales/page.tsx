import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import SalesInfo from "@/components/SalesInfo";

export const metadata: Metadata = {
  title: "販売情報",
  description: "信州のご隠居ファームの販売場所や販売内容についてのご案内です。",
  alternates: {
    canonical: "/sales"
  }
};

export default function SalesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-text/55">SALES</p>
        <h1 className="font-display text-3xl font-bold leading-relaxed text-primary sm:text-5xl">販売情報</h1>
        <div className="mx-auto mt-5 h-px w-12 bg-accent" />
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-text/68">
          収穫したものは、道の駅や直売所を中心に販売しています。
          販売内容は収穫状況により変わります。
        </p>
      </section>
      <SalesInfo />
      <ContactCTA />
    </>
  );
}
