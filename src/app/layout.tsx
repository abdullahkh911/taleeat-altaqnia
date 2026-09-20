import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles.css";

const notoSansArabic = localFont({
  variable: "--font-noto-sans-arabic",
  display: "swap",
  src: [
    { path: "./fonts/noto-sans-arabic-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/noto-sans-arabic-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/noto-sans-arabic-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/noto-sans-arabic-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/noto-sans-arabic-800.woff2", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "طليعة التقنية | أتمتة المشتريات بذكاء",
  description:
    "طليعة التقنية تبني أدوات عملية لتسريع دورة المشتريات وربط فرق العمل بالموردين عبر واتساب والذكاء الاصطناعي.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={notoSansArabic.variable}>{children}</body>
    </html>
  );
}
