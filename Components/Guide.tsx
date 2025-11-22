"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useLocale, useTranslations } from "next-intl";

interface GuideProps {}

const Guide: React.FC<GuideProps> = () => {
  const t = useTranslations("guide");
  const locale = useLocale();
  const features: string[] = t.raw("features");

  return (
    <section className="w-full h-auto lg:h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-20 py-20 relative overflow-hidden">
      {/* Text */}
      <div
        className={`relative z-20 flex flex-1 flex-col lg:w-1/2 order-2 lg:order-1 ${
          locale === "ar" ? "pr-6 lg:pr-20 3xl:pr-0" : "pl-6 lg:pl-20 3xl:pl-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* title */}
          <div className="font-[IBMSansArabicSemiBold] text-[#202020] text-[20px] md:text-[42px] lg:text-[67px] !leading-[20px] md:!leading-[45px] lg:!leading-[88px] w-full flex max-w-full lg:max-w-[90%]">
            <span
              className={`flex-wrap gap-1.5 ${
                locale === "ar" ? "flex" : "hidden"
              }`}
            >
              {t("title")}{" "}
              <span className="text-[#ffb636] flex gap-2 flex-wrap lg:flex-nowrap">
                {" "}
                <span className="text-[#202020]">{t("span")}</span>{" "}
                {t("minSpan")}
              </span>
            </span>
            <span
              className={`flex-wrap gap-1.5 ${
                locale === "ar" ? "hidden" : "flex"
              }`}
            >
              {t("title")} {t("span")}
              <span className="text-[#ffb636] text-[20px] md:text-[42px] lg:text-[62px]">
                {" "}
                {t("minSpan")}
              </span>
            </span>
          </div>

          {/* description */}
          <p className="text-[16px] sm:text-[18px] font-[IBMSansArabicRegular] !leading-[24px] text-[#525252] max-w-full lg:max-w-[700px]">
            {t("description")}
          </p>

          {/* features */}
          <div className="flex flex-wrap gap-4 font-[IBMSansArabicRegular] text-[16px] text-[#525252] !leading-[24px]">
            {features.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="flex lg:w-1/2 mt-20">
          <Button
            type="button"
            title={t("downloadApp")}
            icon=""
            variant="border-[#FFC107] bg-[#FFB636] text-white px-8 py-3 font-[IBMSansArabicSemiBold] text-[20px] !leading-[24px] hover:text-[#FFB636] hover:bg-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* x 1 image */}
      <div
        className={`absolute bottom-15 z-10 ${
          locale === "ar" ? "right-12" : "left-100 scale-x-[-1]"
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

      {/* Main Images */}
      <div
        className={`relative lg:w-1/2 order-1 lg:order-2 ${
          locale === "ar" ? "items-end pl-4" : "items-start"
        }`}
      >
        {/* Mobile View */}
        <div className={`relative flex justify-center w-full lg:hidden ${
          locale === "ar" ? "pr-20" : "pl-25"
        }`}>
          <Image
            src="/guide/app2.svg"
            alt="app-preview"
            width={200}
            height={450}
            className={`relative z-30 translate-y-10 select-none`}
            priority
            draggable={false}
          />
          <Image
            src="/guide/app1.svg"
            alt="app-preview"
            width={200}
            height={450}
            className={`relative z-40 select-none ${
              locale === "ar" ? "translate-x-22" : "-translate-x-22"
            }`}
            priority
            draggable={false}
          />
        </div>
        {/* Desktop View */}
        <div className="hidden lg:flex relative w-full justify-center items-center">
          <Image
            src="/guide/app1.svg"
            alt="app-preview"
            width={350}
            height={700}
            className={`absolute left-0 w-[35%] lg:w-[35%] z-[30] select-none ${
              locale === "ar" ? "left-[200px] -top-75" : "left-[110px] -top-75"
            }`}
            priority
            draggable={false}
          />

          <Image
            src="/guide/app2.svg"
            alt="app-preview"
            width={350}
            height={700}
            className={`absolute w-[80%] lg:w-[35%] z-[20] select-none ${
              locale === "ar" ? "left-[365px] -top-65" : "left-[275px] -top-65"
            }`}
            priority
            draggable={false}
          />
        </div>
        {/* corn image */}
        <div
          className={`absolute -top-75 z-10 ${
            locale === "ar" ? "left-47.5" : "left-21"
          }`}
        >
          <Image
            src={"/guide/corn.svg"}
            alt="hero"
            width={600}
            height={600}
            className={`w-[50px]`}
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* x 2 image */}
      <div
        className={`absolute top-35 z-40 ${
          locale === "ar" ? "left-170" : "right-45 scale-x-[-1]"
        }`}
      >
        <Image
          src={"/hero/x.svg"}
          alt="hero"
          width={600}
          height={600}
          className={`w-[25px] h-auto`}
          priority
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Guide;
