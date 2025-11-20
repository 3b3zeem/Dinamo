"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const GetApp = () => {
  const t = useTranslations("getApp");
  const locale = useLocale();

  return (
    <section className="flex items-center justify-center w-full flex-col py-45">
      <div className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 relative flex w-full flex-col justify-between bg-[url('/pattern.webp')] bg-cover bg-center bg-no-repeat bg-[#FFB636] py-12 text-white sm:flex-row sm:gap-12 sm:py-24 xl:max-h-[598px] rounded-[20px]">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[57px] font-[IBMSansArabicSemiBold] !leading-[88px] xl:max-w-[520px]">
            {t("getForFree")}
          </h2>
          <p className="text-[16px] font-[IBMSansArabicRegular] !leading-[24px] text-[#EEEEEE]">
            {t("availableOn")}
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title={t("playStore")}
              icon=""
              variant="bg-white px-8 border-white py-5 text-[#FFB636] hover:bg-[#ffb636] hover:border-[#FFB636] hover:text-white transition-all duration-200 font-[IBMSansArabicSemiBold] text-[20px] !leading-[24px]"
            />
          </div>
        </div>

        <div
          className={`flex flex-1 items-center justify-end ${
            locale === "ar" ? "pl-10" : "pr-10"
          }`}
        >
          <Image
            src="/getApp/app.png"
            alt="phone"
            width={440}
            height={770}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
