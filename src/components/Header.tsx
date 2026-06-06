"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavIcon from "@/components/NavIcon";

const navigation = [
  { href: "#about", label: "ごあいさつ", icon: "about" },
  { href: "#diary", label: "農園の日々", icon: "diary" },
  { href: "#crops", label: "育てているもの", icon: "crops" },
  { href: "#sales", label: "販売場所", icon: "sales" },
  { href: "#contact", label: "お問い合わせ", icon: "contact" }
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 12);

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-primary/10 bg-background/88 shadow-[0_10px_30px_rgba(47,47,47,0.08)] backdrop-blur-md"
          : "border-transparent bg-background/96 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
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

        <nav className="hidden items-center gap-6 text-[13px] font-bold lg:flex" aria-label="ページ内ナビゲーション">
          {navigation.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-2 text-text transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary min-h-11 px-5 py-3" onClick={closeMenu}>
            <NavIcon name="contact" />
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-bold leading-tight text-white transition hover:-translate-y-px hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative block size-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-[5px] h-0.5 w-5 bg-current transition ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[11px] h-0.5 w-5 bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[17px] h-0.5 w-5 bg-current transition ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
          メニュー
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-x-4 top-[4.7rem] z-40 grid overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/94 px-4 shadow-[0_24px_80px_rgba(31,122,69,0.18)] backdrop-blur-md transition-[grid-template-rows,opacity,transform] duration-300 lg:hidden ${
          isOpen ? "mobile-menu-open grid-rows-[1fr] translate-y-0 opacity-100" : "grid-rows-[0fr] -translate-y-3 opacity-0"
        }`}
      >
        <nav className="min-h-0" aria-label="モバイルページ内ナビゲーション">
          <div className="grid gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="stagger-item inline-flex min-h-12 items-center gap-3 rounded-xl px-4 text-base font-bold text-text transition hover:bg-primary-soft hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                onClick={closeMenu}
              >
                <NavIcon name={item.icon} className="size-5" />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
