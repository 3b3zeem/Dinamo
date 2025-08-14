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
    title: locale === "ar" ? "اتصل بنا | شركتنا" : "Contact Us | Dinamo",
    description:
      locale === "ar"
        ? "تواصل معنا لأي استفسارات أو دعم، نحن هنا لمساعدتك."
        : "Get in touch with us for inquiries or support, we are here to help.",
    keywords:
      locale === "ar"
        ? ["اتصل", "تواصل معنا", "دعم", "شركة"]
        : ["contact", "get in touch", "support", "company"],
    path: "/contact",
  });
};

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="relative overflow-hidden mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 py-12">
      {locale === "ar" ? "اتصل بنا" : "Contact Us"}
    </main>
  );
}
