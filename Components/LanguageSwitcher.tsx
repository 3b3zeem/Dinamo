"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    <div>
      <button
        onClick={changeLanguage}
        className="px-5 py-2.5 text-lg bg-transparent text-gray-800 rounded-lg hover:bg-gray-200 focus:outline-none border border-gray-300 transition-colors duration-300 cursor-pointer"
      >
        {currentLocale === "en" ? "Ar" : "En"}
      </button>
    </div>
  );
}
