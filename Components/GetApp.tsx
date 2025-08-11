"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const GetApp = () => {
  const t = useTranslations("getApp");

  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px]">
      <div className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-[url('/pattern.webp')] bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] xl:rounded-[40px]">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-[700] lg:text-[64px] xl:max-w-[320px]">
            {t("getForFree")}
          </h2>
          <p className="text-[16px] font-[400] text-[#EEEEEE]">
            {t("availableOn")}
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title={t("appStore")}
              icon="/apple.svg"
              variant="border-white bg-white px-8 py-3 text-[#30AF5B] hover:opacity-90 transition-all duration-200"
            />
            <Button
              type="button"
              title={t("playStore")}
              icon="/android.svg"
              variant="border-[#A2A2A2] bg-transparent px-8 py-5 text-white hover:bg-[#30AF5B] hover:border-[#30AF5B] transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.webp" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
