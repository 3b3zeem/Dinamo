"use client";

import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "use-intl";

const Guide = () => {
  const t = useTranslations("guide");
  const locale = useLocale();

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="w-12 h-auto"
        />
        <p className="uppercase text-[20px] font-[400] mb-3 text-[#30AF5B]">
          {t("weAreHere")}
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] xl:max-w-[390px]">
            {t("guideTitle")}
          </h2>
          <p className="text-[16px] font-[400] text-[#7B7B7B] xl:max-w-[520px]">
            {t("guideDescription")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] relative w-full max-h-[800px]">
        <Image
          src="/boat.webp"
          alt="boat"
          width={1440}
          height={1050}
          className="w-full object-cover object-center sm:block hidden xl:rounded-[40px]"
        />

        <div
          className={`relative sm:absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md ${
            locale === "ar" ? "md:right-[5%]" : "md:left-[5%]"
          } lg:top-20`}
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex items-center justify-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between w-full">
                <p className="text-[16px] font-[400] text-[#A2A2A2]">
                  {t("destination")}
                </p>
                <p className="text-[16px] font-[700] text-[#585858]">
                  {t("destinationTime")}
                </p>
              </div>
              <p className="text-[20px] font-[700] mt-2">
                {t("aguasCalientes")}
              </p>
            </div>

            <div className="flex w-full flex-col">
              <p className="text-[16px] font-[400] text-[#A2A2A2]">
                {t("startTrack")}
              </p>
              <h4 className="text-[20px] font-[700] mt-2 whitespace-nowrap">
                {t("wonorejoPasuruan")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
