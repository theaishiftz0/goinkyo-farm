export default function ContactCTA() {
  const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
      <div className="fade-up grid gap-8 rounded-[1.75rem] bg-primary p-7 text-white shadow-[0_24px_80px_rgba(31,122,69,0.18)] md:grid-cols-[0.9fr_1.1fr] md:p-10 lg:p-12">
        <div>
          <p className="section-tag section-tag-on-dark mb-4">CONTACT</p>
          <h2 className="font-display text-3xl font-black leading-[1.45] tracking-tight sm:text-5xl">お問い合わせ</h2>
          <p className="mt-6 text-[15px] leading-8 text-white/82">
            農園についてのご質問や、販売に関するお問い合わせはこちらから。
          </p>
          <p className="mt-4 text-sm leading-7 text-white/70">
            農作業中などにより、返信までお時間をいただく場合があります。
          </p>
        </div>

        <div className="rounded-[1.25rem] bg-white p-6 text-text md:p-8">
          <h3 className="font-display text-2xl font-black leading-relaxed">Googleフォームからお問い合わせください。</h3>
          <p className="mt-3 text-[15px] leading-8 text-text/70">
            お名前、メールアドレス、お問い合わせ内容をフォームにご記入ください。
          </p>
          {googleFormUrl ? (
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
              Googleフォームを開く
            </a>
          ) : (
            <p className="mt-6 rounded-xl bg-primary-soft px-5 py-4 text-sm font-bold leading-7 text-primary">
              お問い合わせフォームは準備中です。公開準備が整い次第、こちらからご連絡いただけます。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
