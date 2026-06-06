import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "信州のご隠居ファームへのお問い合わせページです。",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="mb-10 text-center">
        <p className="section-tag mb-4">CONTACT</p>
        <h1 className="font-display text-3xl font-black leading-relaxed tracking-tight text-primary md:text-5xl">お問い合わせ</h1>
        <div className="mx-auto mt-5 h-px w-12 bg-accent" />
        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-text/70">
          農園についてのご質問や、販売に関するお問い合わせはこちらから。
        </p>
      </div>

      <div className="rounded-[1.75rem] bg-white p-7 text-center shadow-[0_18px_60px_rgba(47,47,47,0.08)] sm:p-10">
        <h2 className="font-display text-2xl font-black leading-relaxed text-text">Googleフォームからお問い合わせください。</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-text/70">
          お名前、メールアドレス、お問い合わせ内容をご記入ください。農作業中などにより、返信までお時間をいただく場合があります。
        </p>
        {googleFormUrl ? (
          <a href={googleFormUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-7">
            Googleフォームを開く
          </a>
        ) : (
          <p className="mx-auto mt-7 max-w-xl rounded-xl bg-primary-soft px-5 py-4 text-sm font-bold leading-7 text-primary">
            お問い合わせフォームは準備中です。公開準備が整い次第、こちらからご連絡いただけます。
          </p>
        )}
        <div className="mt-8">
          <Link href="/#contact" className="text-sm font-bold text-primary underline underline-offset-4">
            トップのお問い合わせ案内へ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
