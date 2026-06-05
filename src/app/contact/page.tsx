import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "信州のご隠居ファームへのお問い合わせページです。",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const isReady = Boolean(endpoint);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-text/55">CONTACT</p>
        <h1 className="font-display text-3xl font-bold leading-relaxed text-primary md:text-5xl">お問い合わせ</h1>
        <div className="mx-auto mt-5 h-px w-12 bg-accent" />
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-text/68">
          農園についてのご質問や、販売に関するお問い合わせはこちらから。
        </p>
      </div>

      {!isReady ? (
        <div
          id="form-status"
          className="mb-8 rounded-lg border border-accent/40 bg-white p-5 text-sm leading-7 text-text/72"
          role="status"
        >
          フォームの送信先は準備中です。Formspree のエンドポイントを
          `NEXT_PUBLIC_FORMSPREE_ENDPOINT` に設定すると送信できるようになります。
        </div>
      ) : null}

      <form
        action={endpoint || "#"}
        method="POST"
        aria-describedby={!isReady ? "form-status" : undefined}
        className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-sm sm:p-8"
      >
        <div>
          <label htmlFor="name" className="text-sm text-text/70">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="山田 太郎"
            className="mt-1 w-full rounded border border-text/20 bg-white px-4 py-3 text-base text-text outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-text/70">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="example@mail.com"
            className="mt-1 w-full rounded border border-text/20 bg-white px-4 py-3 text-base text-text outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-text/70">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            placeholder="お気軽にご記入ください"
            className="mt-1 w-full resize-none rounded border border-text/20 bg-white px-4 py-3 text-base text-text outline-none transition focus:border-primary"
          />
        </div>

        <input type="hidden" name="_subject" value="信州のご隠居ファーム お問い合わせ" />
        <div className="text-center">
          <button
            type="submit"
            disabled={!isReady}
            className="btn btn-primary px-8 py-3"
          >
            送信する
          </button>
        </div>
      </form>
    </section>
  );
}
