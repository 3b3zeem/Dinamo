import Reviews from "@/Components/Reviews";
import { generateSEO } from "@/lib/seoConfig";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;

  return generateSEO({
    locale,
    title:
      locale === "ar"
        ? "آراء وتقييمات العملاء | Dinamo"
        : "testimonials | Dinamo",
    description:
      locale === "ar"
        ? "اطلع على تجارب وآراء عملائنا حول خدمات ومنتجات Dinamo."
        : "Read what our customers say about Dinamo’s products and services.",
    keywords:
      locale === "ar"
        ? ["تقييمات", "آراء العملاء", "Dinamo", "مراجعات", "تجارب العملاء"]
        : [
            "reviews",
            "customer feedback",
            "Dinamo",
            "testimonials",
            "customer experience",
          ],
    path: "/reviews",
  });
};

export default function ReviewsPage({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <main className="relative overflow-hidden">
      <Reviews />
    </main>
  );
}
