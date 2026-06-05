import Link from "next/link";
import NavIcon from "@/components/NavIcon";

const footerNavigation = [
  { href: "/about", label: "ご隠居について", icon: "about" },
  { href: "/crops", label: "作物紹介", icon: "crops" },
  { href: "/diary", label: "農園の日々", icon: "diary" },
  { href: "/sales", label: "販売情報", icon: "sales" },
  { href: "/contact", label: "お問い合わせ", icon: "contact" }
] as const;

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-[#24392a] py-12 font-sans text-white/86">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mb-2 text-lg font-bold text-white">信州のご隠居ファーム</p>
        <p className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/78">
          信州の山あいで、季節に寄り添いながら米や野菜を育てています。
        </p>
        <div className="mx-auto mb-6 h-px w-10 bg-accent" />
        <nav className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-bold" aria-label="フッターナビゲーション">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link inline-flex items-center gap-1.5">
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          ))}
        </nav>
        <small className="text-white/70">&copy; {new Date().getFullYear()} 信州のご隠居ファーム</small>
      </div>
    </footer>
  );
}
