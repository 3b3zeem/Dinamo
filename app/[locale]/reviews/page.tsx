import React from "react";
import { generateSEO } from "@/lib/seoConfig";
import Reviews from "@/Components/Reviews";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { locale } = await params;

  return generateSEO({
    locale,
    title: locale === "ar" ? "التقييمات | شركتنا" : "Reviews | Dinamo",
    description:
      locale === "ar"
        ? "اقرأ آراء عملائنا عن خدماتنا ومنتجاتنا."
        : "Read what our customers say about our services and products.",
    keywords:
      locale === "ar"
        ? ["التقييمات", "آراء العملاء", "خدماتنا", "منتجاتنا"]
        : ["reviews", "customer feedback", "services", "products"],
    path: "/reviews",
  });
};

export default async function ReviewsPage({ params }: PageProps) {
  return (
    <main className="relative overflow-hidden mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 3xl:px-0 py-12">
      <Reviews />
    </main>
  );
}
