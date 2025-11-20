"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="w-full bg-[#F9F9F9] flex flex-col-reverse lg:flex-row items-center justify-between gap-20 py-15 relative overflow-hidden">
      {/* Text */}
      <div
        className={`relative z-20 flex flex-1 flex-col lg:w-1/2 order-2 lg:order-1 ${
          locale === "ar" ? "pr-6 lg:pr-20 3xl:pr-0" : "pl-6 lg:pl-20 3xl:pl-0"
        }`}
      >
        <div className="font-[IBMSansArabicRegular] text-[#202020] text-[40px] md:text-[72px] lg:text-[96px] !leading-[50px] md:!leading-[85px] lg:!leading-[112px] max-w-full lg:max-w-[90%]">
          <span className="flex flex-wrap">
            {t("title")} {t("title2")}
          </span>
          {" "}
          <span className="text-[#ffb636] flex gap-2 flex-wrap lg:flex-nowrap">
            {" "}
            <span className="text-[#202020]">{t("minSpan")}</span> {t("span")}
          </span>
        </div>

        <p className="text-[16px] sm:text-[18px] font-[IBMSansArabicRegular] !leading-[24px] mt-6 text-[#525252] max-w-full lg:max-w-[700px]">
          {t("description")}
        </p>

        <div className="flex lg:w-1/2 mt-10">
          <Button
            type="button"
            title={t("downloadApp")}
            icon=""
            variant="border-[#FFC107] bg-[#FFB636] text-white px-8 py-3 font-[IBMSansArabicSemiBold] text-[20px] !leading-[24px] hover:text-[#FFB636] hover:bg-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* corn1 image */}
      <div
        className={`absolute top-8 z-10 ${
          locale === "ar" ? "right-0 " : "left-0 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/corn1.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[60px] h-auto`}
          priority
          draggable={false}
        />
      </div>
      {/* rec1 image */}
      <div
        className={`absolute top-0 ${locale === "ar" ? "right-0" : "left-0 scale-x-[-1]"}`}
      >
        <Image
          src={"/hero/rec1.png"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[800px] h-auto`}
          priority
          draggable={false}
        />
      </div>
      {/* x 1 image */}
      <div
        className={`absolute bottom-15 z-10 ${
          locale === "ar" ? "right-82" : "left-100 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/x.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[35px] h-auto`}
          priority
          draggable={false}
        />
      </div>

      {/* Main Image */}
      <div
        className={`relative lg:w-1/2 order-1 lg:order-2 ${
          locale === "ar" ? "items-end pl-4" : "items-start"
        }`}
      >
        <Image
          src={"/hero/hero.png"}
          alt="hero"
          width={600}
          height={600}
          className="w-full h-auto"
          priority
          draggable={false}
        />
      </div>

      {/* rec2 image */}
      <div className={`absolute  ${locale === "ar" ? "-left-10" : "right-0 scale-x-[-1]"}`}>
        <Image
          src={"/hero/rec.png"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[900px] h-auto`}
          priority
          draggable={false}
        />
      </div>
      {/* corn2 image */}
      <div
        className={`absolute bottom-40 z-10 ${
          locale === "ar" ? "left-0" : "right-0 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/corn2.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[35px] h-auto`}
          priority
          draggable={false}
        />
      </div>
      {/* x 2 image */}
      <div
        className={`absolute bottom-53 z-10 ${
          locale === "ar" ? "left-132" : "right-53 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/x.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[35px] h-auto`}
          priority
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Hero;
