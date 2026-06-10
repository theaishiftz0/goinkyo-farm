import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const profileItems = [
  { label: "お名前", value: "信州のご隠居" },
  { label: "出身・所在地", value: "長野県松本市" },
  { label: "ファーム名", value: "信州のご隠居ファーム" },
  { label: "育てているもの", value: "お米、季節の野菜、ぶどうなど" }
];

export default function Greeting() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,20rem)] md:items-center lg:grid-cols-[minmax(0,40rem)_minmax(19rem,22rem)] lg:justify-center lg:gap-10">
        <div>
          <SectionTitle label="ABOUT" title="ごあいさつ" />
          <div className="fade-up max-w-[42rem]">
            <p className="text-xl font-black leading-relaxed tracking-[0.02em] text-primary sm:text-2xl">
              机の上の書類から、田んぼの土へ。
            </p>
            <div className="mt-5 space-y-4 text-[15px] font-medium leading-8 text-text/76 sm:text-base sm:leading-8">
              <p>
                長年、組織の中で書類と向き合ってきました。
                <br />
                定年を迎えたいま、向き合っているのは、
                <br />
                北アルプスを望む松本の山あいにある、実家の田んぼと畑です。
              </p>
              <p>
                大きな農園ではありません。
                <br />
                毎日の天気を見て、土に触れ、
                <br />
                その季節にできるものを少しずつ育てています。
              </p>
              <p>お米を中心に、季節の野菜やぶどうも少しだけ。</p>
              <p>
                松本の水と土、山あいの空気が育てた恵みを、
                <br />
                日々の食卓へお届けできればうれしく思います。
              </p>
            </div>
          </div>
        </div>
        <div className="fade-up relative mx-auto w-full max-w-[22rem] md:ml-auto md:mr-0 md:max-w-[21rem] lg:max-w-[22rem]">
          <div className="surface-card motion-card relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#f8ead0]">
            <Image
              src="/images/goinkyo-profile.png"
              alt="信州のご隠居ファームのご隠居のアイコン"
              fill
              sizes="(min-width: 1024px) 22rem, (min-width: 768px) 34vw, 100vw"
              className="object-contain object-center p-2 sm:p-3"
            />
          </div>
          <div className="mt-4 rounded-[1.25rem] border border-primary/12 bg-white/82 p-4 shadow-[0_16px_42px_rgba(45,80,22,0.08)] backdrop-blur">
            <p className="section-tag mb-3 scale-90 origin-left">PROFILE</p>
            <h3 className="text-base font-black leading-relaxed text-primary">ご隠居のこと</h3>
            <dl className="mt-2 space-y-1.5">
              {profileItems.map((item) => (
                <div key={item.label} className="grid gap-1 border-t border-line pt-2 sm:grid-cols-[6rem_1fr] sm:items-start">
                  <dt className="text-[11px] font-black tracking-[0.08em] text-primary">{item.label}</dt>
                  <dd className="text-[13px] font-medium leading-5 text-text/76">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
