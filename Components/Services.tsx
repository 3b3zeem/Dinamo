"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Services = () => {
  const t = useTranslations("service");
  const locale = useLocale();

  const services = [
    {
      key: "airport",

      icon: "/services/direc.svg",
    },
    {
      key: "scheduled",
      icon: "/services/car.svg",
    },
    {
      key: "instant",
      icon: "/services/moment.svg",
    },
  ];

  return (
    <section className="mx-auto w-full py-20 relative">
      <div className="flex w-full h-[100%] flex-col justify-between gap-30">
        <div className="flex flex-col items-center gap-8 px-6 lg:px-20 3xl:px-0 md:z-0 z-10">
          <h2 className="font-[IBMSansArabicSemiBold] text-[#202020] text-[45px] md:text-[67px] !leading-[88px]">
            {t("title")} <span className="text-[#FFB636]">{t("title2")}</span>{" "}
            ✨
          </h2>
          <h2 className="font-[IBMSansArabicSemiRegular] text-[#525252] text-[16px] !leading-[24px]">
            {t("description")}
          </h2>
        </div>

        <div className="w-full flex justify-center gap-8 flex-wrap p-4 px-6 lg:px-20 3xl:px-0">
          {services.map((s, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
            >
              <div className="md:w-[388px] w-[300px] h-[220px] md:py-0 py-5 shadow-[4px_11px_35px_rgba(0,0,0,0.07)] rounded-[16px] px-5 flex flex-col items-start justify-center gap-4 bg-white">
                {/* Image */}
                <div className="p-2 rounded-xl bg-[#FFB636] shadow-[4px_11px_35px_rgba(0,0,0,0.01)] ">
                  <Image
                    src={s.icon}
                    alt={t(`${s.key}.title`)}
                    width={45}
                    height={45}
                    draggable={false}
                    priority
                  />
                </div>
                {/* title */}
                <h3 className="text-xl font-semibold">{t(`${s.key}.title`)}</h3>
                {/* description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`${s.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* corn image */}
        <div
          className={`absolute md:top-60 top-90 md:z-10 z-0 ${
            locale === "ar" ? "right-0" : "left-0 scale-x-[-1]"
          }`}
        >
          <Image
            src={"/services/corn.svg"}
            alt="hero"
            width={600}
            height={600}
            className={`w-[55px] h-auto`}
            priority
            draggable={false}
          />
        </div>
        {/* x 2 image */}
        <div
          className={`absolute bottom-30 z-10 ${
            locale === "ar" ? "left-15" : "right-53 scale-x-[-1]"
          }`}
        >
          <Image
            src={"/services/x.svg"}
            alt="hero"
            width={600}
            height={600}
            className={`w-[25px] h-auto`}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
