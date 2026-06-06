import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FarmMotionLayer from "@/components/FarmMotionLayer";
import { fallbackImages, getSiteUrl } from "@/lib/microcms";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "信州のご隠居ファーム｜信州の山あいで米と野菜を育てる小さな農園",
    template: "%s | 信州のご隠居ファーム"
  },
  description: "信州の自然のなかで、お米を中心に季節の野菜やぶどうを育てている小さな農園です。農園の日々や販売場所をお知らせしています。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "信州のご隠居ファーム｜信州の山あいで米と野菜を育てる小さな農園",
    description: "信州の自然のなかで、お米を中心に季節の野菜やぶどうを育てている小さな農園です。",
    url: siteUrl,
    siteName: "信州のご隠居ファーム",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: fallbackImages.hero,
        width: 1200,
        height: 630,
        alt: "信州の田んぼと山あいの風景"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "信州のご隠居ファーム｜信州の山あいで米と野菜を育てる小さな農園",
    description: "信州の自然のなかで、お米を中心に季節の野菜やぶどうを育てている小さな農園です。"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          本文へ移動
        </a>
        <FarmMotionLayer />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
