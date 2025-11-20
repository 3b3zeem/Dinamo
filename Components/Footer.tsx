"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#FFB636] pb-5">
      <div className="mx-auto flex flex-col items-center text-center text-white">
        <div className="py-20 flex flex-col items-center gap-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/footer/logo.png"
              alt="Dinamo Express Logo"
              width={1800}
              height={80}
              className="h-auto w-35"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <nav className="">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-[IBMSansArabicSemiBold] text-[20px] !leading-[20px]">
              <li>
                <Link href="/" className="hover:underline">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/prices" className="hover:underline">
                  {t("prices")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-8">
            <Link href="https://youtube.com/@dinamoexpress" target="_blank">
              <Image
                src="/footer/youtube.svg"
                alt="YouTube"
                width={32}
                height={32}
              />
            </Link>
            <Link href="https://facebook.com/dinamoexpress" target="_blank">
              <Image
                src="/footer/face.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </Link>
            <Link href="https://instagram.com/dinamoexpress" target="_blank">
              <Image
                src="/footer/insta.svg"
                alt="Instagram"
                width={28}
                height={28}
              />
            </Link>
            <Link href="https://twitter.com/dinamoexpress" target="_blank">
              <Image
                src="/footer/twitter.svg"
                alt="Twitter"
                width={28}
                height={28}
              />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between w-full border-t pt-5 px-6 lg:px-20 3xl:px-0 font-[IBMSansArabicMedium] text-[14px] !leading-[16px] text-white">
          <p className="">{t("copyright")}</p>
          <p className="">
            {t("privacy")} | {t("terms")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
