import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import GetApp from "@/Components/GetApp";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import Reviews from "@/Components/Reviews";
import { generateSEO } from "@/lib/seoConfig";

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}) => {
  const { locale } = params;

  return generateSEO({
    locale,
    title: locale === "ar" ? "الصفحة الرئيسية | Dinamo" : "Home | Dinamo",
    description:
      locale === "ar"
        ? "مرحبًا بك في Dinamo، وجهتك الأولى للحصول على أفضل المنتجات والخدمات بأعلى جودة."
        : "Welcome to Dinamo, your destination for top-quality products and services.",
    keywords:
      locale === "ar"
        ? ["Dinamo", "الصفحة الرئيسية", "منتجات", "خدمات", "أفضل جودة"]
        : ["Dinamo", "home", "products", "services", "top quality"],
    path: "/",
  });
};

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Reviews limit={4} />
      <GetApp />
    </>
  );
}
