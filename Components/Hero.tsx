"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="mx-auto 2xl:max-w-[1440px] xl:max-w-[1300px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-20 pb-32 mb-10 md:gap-28 lg:flex-row">
      <div
        className={`absolute right-0 top-0 h-screen w-full xl:-top-60 ${
          locale === "ar"
            ? "transform scale-x-[-1] md:-left-[100px] -left-28"
            : "md:-right-28"
        }`}
      >
        <Image
          src="/pattern-bg.webp"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          priority
          className={`absolute  top-[-33px] w-10 lg:w-[50px] ${
            locale === "ar" ? "right-[-5px]" : "left-[-5px]"
          }`}
        />
        <h1 className="font-[700] leading-[120%] lg:text-[88px]">
          {t("title")}
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-[#7B7B7B] xl:max-w-[520px]">
          {t("description")}
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                  priority
                />
              ))}
          </div>

          <p className="text-[16px] font-[700] lg:text-[20px] text-blue-70">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] ml-1">
              {t("reviews")}
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title={t("downloadApp")}
            icon=""
            variant="border-[#FFC107] bg-[#FFC107] text-[#212121] px-8 py-3 hover:bg-[#FFC101] hover:text-white transition-all"
          />
          <Button
            type="button"
            title={t("howWeWork")}
            icon="/play.svg"
            variant="border-white bg-transparent px-8 py-3 text-gray-90 hover:border-[#292C27] transition-all"
          />
        </div>
      </div>

      <div
        className={`relative flex flex-1 ${
          locale === "ar" ? "items-end" : "items-start"
        }`}
      >
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#292C27] px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-[#A2A2A2]">
                {t("location")}
              </p>
              <Image src="/close2.svg" alt="close" width={24} height={24} priority />
            </div>
            <p className="text-[20px] font-[700] text-white">
              {t("aguscabana")}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">
                {t("distance")}
              </p>
              <p className="text-[20px] font-[700] text-white">
                {t("distanceValue")}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">
                {t("elevation")}
              </p>
              <p className="text-[20px] font-[700] text-white">
                {t("elevationValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
