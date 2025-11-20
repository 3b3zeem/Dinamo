import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Cairo, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Dinamo",
  description:
    "Dinamo is a startup revolutionizing private intercity transportation with its innovative app, offering safe, reliable, and convenient travel solutions between cities.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  const locale = ["ar", "en"].includes(rawLocale) ? rawLocale : "ar";

  let messages;
  try {
    if (!["ar", "en"].includes(locale)) {
      notFound();
    }
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={locale === "ar" ? cairo.className : inter.className}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
