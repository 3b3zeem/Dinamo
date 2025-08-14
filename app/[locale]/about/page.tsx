import React from "react";
import { generateSEO } from "@/lib/seoConfig";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export const generateMetadata = async ({ params }: PageProps) => {
  const { locale } = await params;

  return generateSEO({
    locale,
    title: locale === "ar" ? "نبذة عنا | شركتنا" : "About Us | Dinamo",
    description:
      locale === "ar"
        ? "تعرف على المزيد عن شركتنا وفريقنا ورسالتنا."
        : "Learn more about our company, our team, and our mission.",
    keywords:
      locale === "ar"
        ? ["معلومات عنا", "شركتنا", "فريق العمل", "رسالتنا"]
        : ["about us", "our company", "team", "mission"],
    path: "/about",
  });
};

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="relative overflow-hidden mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 py-12">
      {locale === "ar" ? "معلومات عنا" : "About Us"}
    </main>
  );
}
