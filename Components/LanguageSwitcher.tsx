"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname()
  const currentLocale = useLocale();

const changeLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
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
