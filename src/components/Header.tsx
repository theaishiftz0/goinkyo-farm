import Link from "next/link";
import NavIcon from "@/components/NavIcon";

const navigation = [
  { href: "/about", label: "ご隠居について", icon: "about" },
  { href: "/diary", label: "農園の日々", icon: "diary" },
  { href: "/crops", label: "作物紹介", icon: "crops" },
  { href: "/sales", label: "販売情報", icon: "sales" }
] as const;

const mobileNavigation = [
  ...navigation,
  { href: "/contact", label: "お問い合わせ", icon: "contact" }
] as const;

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-24">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="信州のご隠居ファーム TOPへ">
          <span className="text-xl font-black tracking-tight text-text md:text-3xl">
            <span className="text-primary">g</span>oinkyo
          </span>
          <span className="hidden text-xs font-bold leading-tight text-primary sm:inline">
            信州の
            <br />
            ご隠居ファーム
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-bold md:flex" aria-label="メインナビゲーション">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 text-text transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-label="お問い合わせページへ"
            className="btn btn-primary px-5 py-3"
          >
            <NavIcon name="contact" />
            Contact
          </Link>
        </nav>

        <details className="group relative md:hidden">
          <summary className="btn btn-primary min-h-0 list-none px-4 py-2 text-sm marker:hidden">
            メニュー
          </summary>
          <nav
            className="absolute right-0 mt-3 grid w-56 gap-2 rounded-lg border border-primary/10 bg-background p-5 shadow-xl"
            aria-label="モバイルナビゲーション"
          >
            {mobileNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex items-center gap-2 rounded px-3 py-2 text-base font-bold text-text transition hover:bg-primary-soft hover:text-primary-hover">
                <NavIcon name={item.icon} className="size-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
