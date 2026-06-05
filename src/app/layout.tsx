import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fallbackImages, getSiteUrl } from "@/lib/microcms";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-zen-old-mincho",
  display: "swap"
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "信州のご隠居ファーム",
    template: "%s | 信州のご隠居ファーム"
  },
  description: "信州の自然のなかで、米や野菜を育てている農園の公式サイトです。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "信州のご隠居ファーム",
    description: "信州の自然のなかで、米や野菜を育てています。",
    url: siteUrl,
    siteName: "信州のご隠居ファーム",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: fallbackImages.hero,
        width: 1200,
        height: 630,
        alt: "信州のご隠居ファーム"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "信州のご隠居ファーム",
    description: "信州の自然のなかで、米や野菜を育てています。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${zenOldMincho.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          本文へ移動
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
