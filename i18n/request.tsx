import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const effectiveLocale = locale || 'en';
  if (!['en', 'ar'].includes(effectiveLocale)) {
    throw new Error(`Invalid locale: ${effectiveLocale}`);
  }
  return {
    locale: effectiveLocale,
    messages: (await import(`../locales/${effectiveLocale}.json`)).default
  };
});