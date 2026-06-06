import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";
import CropCards from "@/components/CropCards";

export const metadata: Metadata = {
  title: "作物紹介",
  description: "信州のご隠居ファームで育てているお米、ぶどう、夏野菜、冬野菜を紹介します。",
  alternates: {
    canonical: "/crops"
  }
};

export default function CropsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
        <p className="section-tag mb-4">CROPS</p>
        <h1 className="font-display text-3xl font-bold leading-relaxed text-primary sm:text-5xl">作物紹介</h1>
        <div className="mx-auto mt-5 h-px w-12 bg-accent" />
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-text/68">
          田んぼと畑の季節に合わせて、お米、ぶどう、夏野菜、冬野菜を育てています。
        </p>
      </section>
      <CropCards showLink={false} />
      <ContactCTA />
    </>
  );
}
