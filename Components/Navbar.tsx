"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-20 3xl:px-0 shadow-sm ${
          isScrolled
            ? "bg-white/60 backdrop-blur-lg shadow-md py-5"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px]">
          <Link href={`/${locale}`}>
            <Image
              src={"/dinamo-transparent.webp"}
              alt="logo"
              width={74}
              height={29}
              className="w-25 h-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex h-full gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`relative text-[19px] font-[IBMSansArabicSemiBold] !leading-[20px] flex items-center justify-center cursor-pointer pb-1.5 transition-all duration-150 hover:font-bold before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:transition-all before:duration-300 before:ease-out hover:before:left-0 hover:before:w-full ${
                  link.key === "home"
                    ? "text-[#FFB636] before:bg-[#FFB636]"
                    : "text-[#374151] before:bg-[#374151]"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          <LanguageSwitcher />

          <Image
            src={"menu.svg"}
            alt="menu"
            width={32}
            height={32}
            onClick={() => setIsOpen(true)}
            className="inline-block cursor-pointer lg:hidden"
            priority
          />
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-400 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-500 lg:hidden ${
          isOpen ? "-translate-x-0 sm:w-[500px] w-[300px]" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/dinamo-transparent.webp"
            alt="logo"
            width={74}
            height={29}
            className="w-20 h-auto"
            priority
          />
          <button onClick={() => setIsOpen(false)}>
            <Image
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer rounded-full"
              priority
            />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`relative text-[16px] font-[400] text-[#585858] cursor-pointer pb-1.5 transition-all duration-150 hover:font-bold before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 before:ease-out hover:before:w-full ${
                locale === "ar" ? "hover:before:right-0" : "hover:before:left-0"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
