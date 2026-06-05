import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      <div className="reveal rounded-[2.5rem] bg-primary p-8 text-white md:p-14">
        <p className="mb-3 text-sm font-bold tracking-[0.28em] text-accent">CONTACT</p>
        <h2 className="text-3xl font-black leading-tight sm:text-5xl">お問い合わせ</h2>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/78">
          農園についてのご質問や、販売に関するお問い合わせはこちらから。
        </p>
        <Link
          href="/contact"
          className="btn btn-on-dark mt-8"
        >
          お問い合わせへ
        </Link>
      </div>
    </section>
  );
}
