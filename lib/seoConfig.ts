// lib/seoConfig.ts
import { Metadata } from 'next';

type SEOParams = {
  locale: string;
  title: string;
  description: string;
  keywords?: string[];
  path: string;
};

export function generateSEO({
  locale,
  title,
  description,
  keywords = [],
  path,
}: SEOParams): Metadata {
  const baseUrl = 'https://dinamo-jet.vercel.app';

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${baseUrl}${locale === 'ar' ? `/ar${path}` : `/en${path}`}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${locale === 'ar' ? `/ar${path}` : `/en${path}`}`,
      siteName: 'Dinamo',
      locale,
      type: 'website',
    },
  };
}
